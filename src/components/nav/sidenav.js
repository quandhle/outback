import React, {Component, Fragment} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';

class Sidenav extends Component {
    constructor (props) {
        super(props);
    }

    componentDidMount(){
        M.Sidenav.init(this.sidenav);
    }

    render () {
        return (
            <Fragment>
                <ul ref={(e) => { this.sidenav = e }} id="sidenav" className="sidenav">
                    {this.props.links}
                </ul>
            </Fragment>
        );
    }
}

export default Sidenav;
