import React from 'react';
import Styles from './ButtonStyles.module.css'

const Button = (props) =>{
    let activeClass;
    let activeState = props.active;
    activeState ? activeClass= Styles.active : activeClass= Styles.unactive;

    return (
      <button className={[Styles.button, activeClass].join(' ')} id={props.id} onClick={ e => props.clickHandler(e)}>{props.text}</button>
    )

}

export default Button
