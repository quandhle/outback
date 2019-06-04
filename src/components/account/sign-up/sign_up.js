import React, {Component} from 'react';
import SignUpForm from './sign_up_form';
import axios from 'axios';
import {connect} from 'react-redux';
import {signIn} from '../../../js/actions';

class SignUp extends Component {
    constructor (props) {
        super(props);

        this.state = {
            message: ''
        };

        this.handleSignUp = this.handleSignUp.bind(this);
    }

    async handleSignUp(values) {
        const {last_name, first_name, email, password, confirmPassword} = values;

        if (password !== confirmPassword) {
            console.log('Error: passwords do not match.');
        }

        const resp = await axios.post('/api/signup.php', {...values});

        if (resp.data.success) {
            this.props.signIn(resp.data.data);

            signIn(resp.data.data);

            this.props.history.push('/');
        } else {
            this.setState({
                message: resp.data.error
            })
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

export default connect(null, {signIn})(SignUp);
