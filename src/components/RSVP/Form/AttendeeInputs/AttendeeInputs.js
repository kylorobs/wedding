import React from 'react';
import Styles from './AttendeeInputs.module.css';
import Input from '../Input/Input';

const attendeeInputs = (props) => {

    let inputs = [];
    for (let input in props.inputs){
        inputs.push(props.inputs[input])
    }

    return (
        <div className={Styles.Person} id={props.id}>
            {inputs.map((el, i) =>{ 
                return (<Input
                            key={i}
                            id={props.id}
                            value={el.value}
                            changed={(e) => props.changed(e, props.id, el.field)} 
                            type={el.elementType}
                            valid={el.valid}
                            label={el.label}
                            config={el.config}
                            validation={el.validation} 
                            />
                        )
                }
                )}
             </div>)
}

export default attendeeInputs;