import React, {Component} from 'react';
import SignInForm from './sign_in_form';

class SignIn extends Component {
    render() {
        return (
            <div className="container center">
                <h1 className="center container">Sign In</h1>
                <SignInForm/>
            </div>
        )
    }
}

export default SignIn;