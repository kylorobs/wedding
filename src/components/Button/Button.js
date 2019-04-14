import React from 'react';

const Button = (props) => {

  return (
    <button id={props.id} onClick={props.clickHandler}>{props.text}</button>
  )
}

export default Button
