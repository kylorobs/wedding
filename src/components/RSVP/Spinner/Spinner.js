import React from 'react';
import classes from './Spinner.module.css'

const spinner = () => (
    <div className={classes.Container}>
        <div className={classes.loader}>Loading...</div>
    </div>)

export default spinner;