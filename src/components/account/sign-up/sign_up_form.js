import React from 'react';
import {reduxForm, Field} from 'redux-form';
import Input from '../../general/input';

const SignUpForm = props => {
    const {handleSubmit, signUp} = props;

    return (
        <form onSubmit={handleSubmit(signUp)} className="container">
            <div className="row">
                <Field name="last_name" component={Input} type="text" id="last_name" label="last name" col="s12"/>
            </div>
            <div className="row">
                <Field name="first_name" component={Input} type="text" id="first_name" label="first name" col="s12"/>
            </div>
            <div className="row">
                <Field name="email" component={Input} type="text" id="email" label="email" col="s12"/>
            </div>
            <div className="row">
                <Field name="password" component={Input} type="password" id="password" label="password" col="s12"/>
            </div>
            <div className="row">
                <Field name="confirmPassword" component={Input} type="password" id="confirmPassword" label="confirm password" col="s12"/>
            </div>
            <div className="row">
                <div className="col s12 right-align">
                    <button onSubmit={handleSubmit(signUp)} className="btn blue dark-2">Sign Up</button>
                </div>
            </div>
        </form>
    )
}

function validate (email, password) {
    const errors = {};

    if (!email) {
        errors.email = 'Please enter email.'
    }

    if (!password) {
        errors.password = 'Please enter password.'
    }

    return errors;
}

export default reduxForm({
    form: 'sign-up-form',
    validate: validate
})(SignUpForm);
