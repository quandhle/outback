import React, {Component} from 'react';
import SignUpForm from './sign_up_form';

class SignUp extends Component {
    handleSignUp(values) {
        const {name, email, password, confirmPassword} = values;
        if (password !== confirmPassword) {
            console.log('Error: passwords do not match.');
        } else {
            console.log(values);
        }
    }

    render() {
        return (
            <div className="center">
                <h1 className="center container">Sign Up</h1>
                <SignUpForm signUp={this.handleSignUp}/>
            </div>
        )
    }
}

export default SignUp;
