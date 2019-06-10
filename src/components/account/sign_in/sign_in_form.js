import React from 'react';
import {reduxForm, Field} from 'redux-form';
import Input from '../../general/input';

const SignInForm = props => {
    const {handleSubmit, signIn, message} = props;

    return (
        <form onSubmit={handleSubmit(signIn)} className="sign-in-form">
            <div className="row">
                <Field name="email" component={Input} type="text" id="email" label="email" col="s12"/>
            </div>
            <div className="row">
                <Field name="password" component={Input} type="password" id="password" label="password" col="s12"/>
            </div>
            <div className="row"> 
                <div className="col s12 right-align">
                        <button className="btn blue dark-2" onSubmit={handleSubmit(signIn)}>Submit</button>
                </div>
            </div>
            <div className="message">{message? message: <span>&nbsp;</span>}</div>
        </form>
    )
}

function validate(email, password) {
    const errors = {};

    if (!email) {
        errors.email = 'Please enter email.'
    }

    if (!password) {
        errors.password = 'Please enter password';
    }

    return errors;
}

export default reduxForm({
    form: 'sign-in-form',
    validate: validate
})(SignInForm);
