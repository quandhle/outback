import React from 'react';
import {reduxForm, Field} from 'redux-form';
import Input from '../../general/input';

const SignInForm = props => {
    const {handleSubmit, signIn} = props;

    return (
        <form onSubmit={handleSubmit(signIn)} className="container">
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
        </form>
    )
}

export default reduxForm({
    form: 'sign-in-form',
})(SignInForm);
