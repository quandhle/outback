import React from 'react';
import {reduxForm} from 'redux-form';

const SignInForm = props => {
    return (
        <form action="" className="container">
            <h1 className="center">Form Goes Here</h1>
        </form>
    )
}

export default reduxForm({
    form: 'sign-in-form',
})(SignInForm);