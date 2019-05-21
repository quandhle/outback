import React, {Component} from 'react';
import {connect} from 'react-redux';
import {signOut} from '../../../js/actions';
import axios from 'axios';

class SignOut extends Component {
    async componentDidMount () {
        const resp = await axios.post('/api/logout.php');

        this.props.signOut();
    }

    render () {
        return (
            <div className="sign-out">
                Good-bye!
            </div>
        )
    }
}

export default connect(null, {
    signOut
})(SignOut);
