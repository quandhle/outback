<<<<<<< HEAD
import React, {Component, Fragment} from 'react';
import {Link} from 'react-router-dom';
import Sidenav from './sidenav';

class Nav extends Component {
    renderLinks() {
=======
import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import Sidenav from './sidenav';

class Nav extends Component {
    renderLinks(){
>>>>>>> b247c0d31fee08cc28f6b5362864bd5ae71caf47
        return (
            <Fragment>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/products">Products</Link>
                </li>
<<<<<<< HEAD
                <li>
                    <Link to="/">Contact</Link>
                </li>
            </Fragment>
        )
    }
    
    render() {
=======
            </Fragment>
        )
    }

    render(){
>>>>>>> b247c0d31fee08cc28f6b5362864bd5ae71caf47
        const links = this.renderLinks();

        return (
            <Fragment>
<<<<<<< HEAD
                <nav className="light-blue darken-4">
=======
                <nav className="purple darken-2">
>>>>>>> b247c0d31fee08cc28f6b5362864bd5ae71caf47
                    <div className="nav-wrapper">
                        <Link className="brand-logo" to="/">Wicked Sales</Link>
                        <a href="#" data-target="sidenav" className="sidenav-trigger">
                            <i className="material-icons">menu</i>
                        </a>
<<<<<<< HEAD
=======

>>>>>>> b247c0d31fee08cc28f6b5362864bd5ae71caf47
                        <ul className="right hide-on-med-and-down">
                            {links}
                        </ul>
                    </div>
                </nav>

                <Sidenav links={links}/>
            </Fragment>
<<<<<<< HEAD
        )
    }
}

export default Nav
=======
        );
    }
}

export default Nav;
>>>>>>> b247c0d31fee08cc28f6b5362864bd5ae71caf47
