import React from 'react';
import AttendeeInputs from './AttendeeInputs/AttendeeInputs';
import Button from '../../Button/Button';
import classes from './Form.module.css';
import Input from './Input/Input';
import axios from '../../../axios';
import withErrorHandler from '../../../hoc/withErrorHandler';
import Spinner from '../Spinner/Spinner';
import { navigate, Link } from 'gatsby';

const attendeeData = {
    name : {
        field: 'name',
        elementType: 'input',
        value: '',
        label: '',
        valid: false,
        config: {
            type: 'text',
            placeholder: 'Your full name'
        },
        validation: {
            required: true
        }
    },
    dietary: { 
        field: 'dietary',
        elementType: 'input',
        value: '',
        label: '',
        valid: false,
        config: {
            type: 'text',
            placeholder: 'Any dietary requirements'
        },
        validation: {
            required: false
        },
        valid: false
    },
    // vegetarian: {
    //     field: 'vegetarian',
    //     elementType: 'radio',
    //     value: '',
    //     label: 'Vegetarian?',
    //     valid: false,
    //     config: {
    //         type:'checkbox',
    //     },
    //     validation: {}
    // },
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
            required: false
        },
        valid: true
    }
};

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
                            placeholder: 'Your full name'
                        },
                        validation: {
                            required: true
                        },
                        valid: false
                    },
                    dietary: { 
                        field: 'dietary',
                        elementType: 'input',
                        value: '',
                        label: '',
                        valid: false,
                        config: {
                            type: 'text',
                            placeholder: 'Any dietary requirements'
                        },
                        validation: {
                            required: false
                        },
                        valid: true
                    },
                    // vegetarian: {
                    //     field: 'vegetarian',
                    //     elementType: 'radio',
                    //     value: '',
                    //     label: 'Vegetarian?',
                    //     valid: false,
                    //     config: {
                    //         type:'checkbox',
                    //     },
                    //     validation: {}
                    // },
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
                            required: false
                        },
                        valid: true
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
                },
                valid: true
            },
            formValid: false
        },
        loading: false,
        showError: false
    }

    addAttendee = (e) => {
        e.preventDefault();
        let newAttendee = {...attendeeData};
        newAttendee.name = {...attendeeData.name};
        // newAttendee.vegetarian = {...attendeeData.vegetarian};
        newAttendee.attending = {...attendeeData.attending}
        newAttendee.dietary = {...attendeeData.dietary}
        let form = {...this.state.form};
        form.attendees['attendee' + (Object.keys(form.attendees).length + 1)] = newAttendee;
        this.setState({form: form})
    }

    checkValidity = (value, rules) => {
        let isValid = true;
        if (rules.required){
            isValid = value.trim() !== '' && isValid;
        }

        if (rules.minLength){
            isValid = value.length >= rules.minLength && isValid;
        }

        if (rules.maxLength){
            isValid = value.length <= rules.minLength && isValid;
        }

        return isValid;
    }

    inputHandler = (e, id, fieldValue) => {
        let form = {...this.state.form};
        if (form.attendees[id][fieldValue].field === fieldValue){
                let isValid = this.checkValidity(e.target.value, form.attendees[id][fieldValue].validation);
                console.log("Is it valid? " + isValid)
                form.attendees[id][fieldValue].value = e.target.value;
                form.attendees[id][fieldValue].valid = isValid;
                this.setState({form: form, showError:!isValid })
        }
    }

    messageHandler = (e) => {
        let form = {...this.state.form};
        form.message = {...this.state.message};
        form.message.value = e.target.value;
        this.setState({form: form})

    }

    handleSubmit = () => {
        let readyToSubmit = true;
        const attendees = this.state.form.attendees; 
        for (let attendee in attendees){
            console.log(attendees[attendee])
            if (!attendees[attendee].name.valid) readyToSubmit = false;
        }
        if (!readyToSubmit){
            this.setState({showError: true})
        }

        else {
            this.setState({loading: true})
            const rsvp = {};
            const attendees = [];
            for (let attendee in this.state.form.attendees){
                attendees.push(this.state.form.attendees[attendee])
            }
            rsvp.attendees = attendees.map(att => {
                   return { name: att.name.value,
                            attending: att.attending.value,
                            // vegetarian: att.vegetarian.value,
                            dietary: att.dietary.value
                           }
            });
            rsvp.message = this.state.form.message.value;
            console.log(rsvp);
            axios.post('/rsvps.json', rsvp)
                .then(res =>{
                    navigate('/thankyou')
                })
                .catch(er => {
                    console.log("error: " + er );
                    this.setState({loading: false})
                }) 
    
        }
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
        let errorMessage = <p style={{color: 'red'}}>Make sure you have filled in your full name</p>
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
               {this.state.showError? errorMessage : null}
               <p> Find our <Link to='/giftregistry'>gift registry</Link> here.</p>
            </div>
        )
    }
}

export default withErrorHandler(Form, axios);