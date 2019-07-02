import React from 'react';
import Styles from '../RSVP.module.css';

const attendee = (props) => {

    let handleChange = (e) => {
        props.update(e, props.id)
    }

    return (<div className={Styles.person}>
        <input name="name" placeholder="Your name" value={props.name} onChange={handleChange} />
        <label>
          vegetarian?
          <input className={Styles.veg} name="vegetarian" placeholder="Your name" type="checkbox" checked={props.vegetarian} onChange={handleChange} />          
        </label>
        <select name="rsvp" className={Styles.select} value={props.coming} onChange={handleChange}>
          <option value="I can come">I can come</option>
          <option value="I can't come">I can't come</option>
        </select>
        </div>)
}

export default attendee