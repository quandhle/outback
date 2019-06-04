import React, {Component} from 'react';
import {connect} from 'react-redux';
import {signOut} from '../../../js/actions';
import axios from 'axios';

class SignOut extends Component {
    constructor (props) {
        super(props);

        this.componentDidMount = this.componentDidMount.bind(this);
        this.redirectToHome = this.redirectToHome.bind(this);
    }

    componentDidMount () {
        axios.post('/api/logout.php').then((resp) => {
            this.props.signOut();
            
            this.redirectToHome();
        });
    }
    
    redirectToHome = () => {
        this.props.history.push('/')
    }

    render () {
        return null
    }
}

export default connect(null, {
    signOut
})(SignOut);
