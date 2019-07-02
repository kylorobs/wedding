import React from 'react';
import Styles from './RSVP.module.css'
import Button from '../Button/Button'
import Attendee from './Attendee/Attendee';
import Form from './Form/Form';

class RSVP extends React.Component{

  state = {
    attendees : [],
    idCount : 0,
    message: '',
  }

  componentDidMount(){
    this.addPerson();
  }
  
  updateAttendee = (e, id) => {
    let field = e.target.name;
    let val = e.target.value;
    let attendees = [...this.state.attendees];
    let found;
    if(attendees.length > 0) found = attendees.find( k => k.id === id)
    if(found){
      found[field] = val;
      attendees = attendees.filter(k => k.id !== id);
      attendees.push(found);
    };
    this.setState({attendees : attendees})
  }

  updateMessage = (e) => {
    this.setState({message: e.target.value})
  }

  handleSubmit = (e) => {
    console.log(this.state)
    event.preventDefault();
  }

  addPerson = () => {
    let attendees = [...this.state.attendees];
    let id = this.state.idCount + 1;
      let newPerson = {
        id: id,
        name: '',
        email: '',
        vegetarian: false,
        rsvp: ''
      }

      attendees.push(newPerson)
      this.setState({
        attendees : attendees,
        idCount: id})
  }

  attendeeInputs = (attendee) => {
    let {id, name, email, vegetarian, coming} = attendee;
    return <Attendee update={this.updateAttendee} name={name} id={id} key={id} coming = {coming} vegetarian = {vegetarian} email = {email} />
  }


  render(){
   let attendees = [...this.state.attendees]
   if (attendees.length >= 1) attendees = attendees.map(this.attendeeInputs)
   else attendees = null;

    return (
      <React.Fragment>
      <form className={Styles.form} onSubmit={this.handleSubmit}>
        {attendees}
        <h2 className={Styles.addPerson} onClick={this.addPerson}> Add a person</h2>
        <textarea placeholder="write your message" id="message" value={this.state.message} onChange={this.updateMessage } />
        <Button active={false} clickHandler={this.handleSubmit} text="Send your RSVP" />
      </form>
      <Form />
      </React.Fragment>
    )
  }
}

export default RSVP
