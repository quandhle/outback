import React, {Component} from 'react';
import axios from 'axios';

class Test extends Component {
    state = {
        message: 'Checking auth...'
    }

    signIn = async () => {
        const resp = await axios.get('api/test/sign_in.php');

        this.checkAuth();
    }

    async checkAuth() {
        const resp = await axios.get('/api/test/check_auth.php');

        this.setState({
            message: resp.data.auth ? 'You are signed in!': 'Please sign in.'
        });
    }

    signOut = async () => {
        await axios.get('/api/test/sign_out.php');

        this.checkAuth();
    }

    componentDidMount() {
        this.checkAuth();
    }

    render() {
        return (
            <div>
                <h1 className="center">Test stuff</h1>
                <h2 className="center">{this.state.message}</h2>
                <div className="center">
                    <button className="btn btn-large" onClick={this.signIn}>Sign In</button>
                    <button className="btn btn-large red" onClick={this.signOut}>Sign Out</button>
                </div>
            </div>
        )
    }
}

export default Test;
