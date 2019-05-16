import React, {Component} from 'react';
import SignInForm from './sign_in_form';
import './sign_in.scss';

class SignIn extends Component {
    handleSignIn(values) {
    }
    
    render() {
        return (
            <div className="center">
                <h1 className="center container">Sign In</h1>
                <SignInForm signIn={this.handleSignIn}/>
            </div>
        )
    }
}

export default SignIn;
