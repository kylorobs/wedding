import React from 'react';
import classes from './Input.module.css';

const input = (props) => {

    let input = 'hello';
    let inputClasses= [];
    switch(props.type){
        case 'input' :
            input = <input 
                        className={classes.Input}
                        {...props.config}
                        value={props.value}
                        onChange={props.changed}/>
        break;
        case 'select' :
            input = <select
                        className={classes.Select}
                        {...props.config}
                        value={props.value}
                        onChange={props.changed}>
                        {props.config.options.map(option => {
                            return (<option key={option.value} value={option.value} >
                                        {option.displayValue}
                                    </option>)
                        })}
                    </select>;
            break;
            case 'textarea' :
                    input = <input 
                                className={classes.Input}
                                {...props.config}
                                value={props.value}
                                onChange={props.changed}/>
            break;
            case 'radio' :
                    input = <input 
                                className={classes.Checkpoint}
                                {...props.config}
                                value={props.value}
                                onChange={props.changed}/>
            break;
            default: 
                input = <input 
                    className={classes.Input}
                    {...props.config}
                    value={props.value}
                    onChange={props.changed}/>
    }

    if (props.label){
        input = (
            <div className={classes.CheckboxLabel}>
                <label className={classes.Label}>
                     {props.label}
                </label>
                {input}
            </div>

        )
    }

    return input
};

export default input;