import React, {Component} from 'react';
import SignInForm from './sign_in_form';
import {connect} from 'react-redux';
import {signIn} from '../../../js/actions';
import './sign_in.scss';
import axios from 'axios';

class SignIn extends Component {
    constructor(props) {
        super(props);

        this.handleSignIn = this.handleSignIn.bind(this);
    }

    async handleSignIn (values) {
        const {email, password} = values;        
        const {signIn, history} = this.props;

        const resp = await axios.post('/api/login.php', {...values});

        if (resp.data.success) {
            signIn({...values});

            history.push('/');
        }
    }
    
    render () {
        return (
            <div className="center">
                <h1 className="center container">Sign In</h1>
                <SignInForm signIn={this.handleSignIn}/>
            </div>
        )
    }
}

export default connect(null, {signIn})(SignIn);
