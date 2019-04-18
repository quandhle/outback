import React, {Component} from 'react';
import {connect} from 'react-redux';
import {signIn} from '../../../actions';
import SignInForm from './sign_in_form';

class SignIn extends Component {
    handleSignIn = (values) => {
        console.log('Form Values: ', values);

        this.props.signIn(values);
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

export default connect(null, {
    signIn: signIn
})(SignIn);