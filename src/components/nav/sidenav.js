<<<<<<< HEAD
import React, {Component} from 'react';
import {Link} from 'react-router-dom';
=======
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
>>>>>>> b247c0d31fee08cc28f6b5362864bd5ae71caf47

class Sidenav extends Component {
    componentDidMount(){
        M.Sidenav.init(this.sidenav);
    }

<<<<<<< HEAD
    render() {
        return (
            <ul ref={(element) => {this.sidenav = element}} id="sidenav" className="sidenav">
                {this.props.links}
            </ul>
        )
    }
}

export default Sidenav
=======
    render(){
        return (
            <ul ref={(e) => { this.sidenav = e }} id="sidenav" className="sidenav">
                {this.props.links}
            </ul>
        );
    }
}

export default Sidenav;
>>>>>>> b247c0d31fee08cc28f6b5362864bd5ae71caf47
