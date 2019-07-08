import React from 'react';
import AttendeeInputs from './AttendeeInputs/AttendeeInputs';
import Button from '../../Button/Button';
import classes from './Form.module.css';
import Input from './Input/Input';
import axios from '../../../axios';
import withErrorHandler from '../../../hoc/withErrorHandler';
import Spinner from '../Spinner/Spinner';
import { navigate } from 'gatsby';

const attendeeData = {
    name : {
        field: 'name',
        elementType: 'input',
        value: '',
        label: '',
        valid: false,
        config: {
            type: 'text',
            placeholder: 'Your name'
        },
        validation: {
            required: true
        }
    },
    vegetarian: {
        field: 'vegetarian',
        elementType: 'radio',
        value: '',
        label: 'Vegetarian?',
        valid: false,
        config: {
            type:'checkbox',
        },
        validation: {}
    },
    attending : {
        field: 'attending',
        elementType: 'select',
        value: false,
        label: '',
        valid: true,
        config: {
            options: [{
                value: true, displayValue: 'See you there!'
            },
            {
                value: false, displayValue: 'I cannot make it'
            }]
        },
        validation: {
            required: true
        }
    }
}

class Form extends React.Component{

    state = {
        form: {
            attendees: {
                attendee1: {
                    name : {
                        field: 'name',
                        elementType: 'input',
                        value: '',
                        label: '',
                        valid: false,
                        config: {
                            type: 'text',
                            placeholder: 'Your name'
                        },
                        validation: {
                            required: true
                        }
                    },
                    vegetarian: {
                        field: 'vegetarian',
                        elementType: 'radio',
                        value: '',
                        label: 'Vegetarian?',
                        valid: false,
                        config: {
                            type:'checkbox',
                        },
                        validation: {}
                    },
                    attending : {
                        field: 'attending',
                        elementType: 'select',
                        value: false,
                        label: '',
                        valid: true,
                        config: {
                            options: [{
                                value: true, displayValue: 'See you there!'
                            },
                            {
                                value: false, displayValue: 'I cannot make it'
                            }]
                        },
                        validation: {
                            required: true
                        }
                    }
                }
            },
            message: {
                field: 'message',
                elementType: 'input',
                value: '',
                label: '',
                valid: false,
                config: {
                    type: 'text',
                    placeholder: 'Write a note...'
                },
                validation: {
                    required: false
                }
            },
            formValid: false
        },
        loading: false
    }

    addAttendee = (e) => {
        e.preventDefault();
        let newAttendee = {...attendeeData};
        newAttendee.name = {...attendeeData.name};
        newAttendee.vegetarian = {...attendeeData.vegetarian};
        newAttendee.attending = {...attendeeData.attending}
        let form = {...this.state.form};
        form.attendees['attendee' + (Object.keys(form.attendees).length + 1)] = newAttendee;
        this.setState({form: form})
    }

    inputHandler = (e, id , fieldValue) => {
        let form = {...this.state.form};
        if (form.attendees[id][fieldValue].field === fieldValue){
            form.attendees[id][fieldValue].value = e.target.value;
            this.setState({form: form })
        }
    }

    messageHandler = (e) => {
        let form = {...this.state.form};
        form.message = {...this.state.message};
        form.message.value = e.target.value;
        this.setState({form: form})

    }

    handleSubmit = () => {
        // e.preventDefault();
        this.setState({loading: true})
        const rsvp = {};
        const attendees = [];
        for (let attendee in this.state.form.attendees){
            attendees.push(this.state.form.attendees[attendee])
        }
        rsvp.attendees = attendees.map(att => {
               return { name: att.name.value,
                        attending: att.attending.value,
                        vegetarian: att.vegetarian.value
                       }
        });
        rsvp.message = this.state.form.message.value;
        console.log(rsvp);
        axios.post('/rsvps.json', rsvp)
            .then(res =>{
                this.setState({loading: false})
                console.log("request sent");
                console.log(res)
                navigate('/thankyou')
            })
            .catch(er => {
                console.log("error: " + er );
                this.setState({loading: false})
            })
        
            

    }


    render(){
        const attendees = this.state.form.attendees; 
        let attendeeArray = [];
        for (let attendee in attendees){
            attendeeArray.push({
                name: attendee,
                values : attendees[attendee]})
        }
        const message = this.state.form.message;
        let form = null;
        if (this.state.loading) form = <Spinner />;
        else form = (
            <React.Fragment>
                <form className={classes.Form}>
                    {attendeeArray.map(el => {
                        return <AttendeeInputs changed={this.inputHandler} key={el.name} id={el.name} inputs={el.values} />
                    })}
                    <div className={classes.Message}>
                        <h2 className={classes.AddPerson} onClick={this.addAttendee}>rsvp for another</h2>
                            <Input
                                key={'message'}
                                id={'message'}
                                value={message.value}
                                changed={(e) => this.messageHandler(e)} 
                                type={message.elementType}
                                valid={message.valid}
                                label={message.label}
                                config={message.config}
                                validation={message.validation} 
                                />
                        </div>
                </form>
                <div style={{display: 'flex', justifyContent: 'center'}}>
                    <Button active={false} clickHandler={this.handleSubmit} text="Send your RSVP" />
                </div>
            </React.Fragment> );

        return (
            <div className={classes.FormContainer}>
               {form}
            </div>
        )
    }
}

export default withErrorHandler(Form, axios);