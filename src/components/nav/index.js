import React, {Component, Fragment} from 'react';
import {Link} from 'react-router-dom';
import Sidenav from './sidenav';
import CartLink from './cart_link';
import {connect} from 'react-redux';
import './nav.scss';

class Nav extends Component {
    constructor (props) {
        super(props);
    }

    renderLinks () {
        const {signed_in} = this.props;
        // var signedIn = true;
        // if (localstorage.getItem('signed_in') === true) {
        if (signed_in === true) {
            return (
                <Fragment>
                    <li>
                    <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/products">Products</Link>
                    </li>
                    <li>
                        <Link to="/account/sign-out">Sign Out</Link>
                    </li>
                    <li>
                        <CartLink items={this.props.cartItems}/>
                    </li>
                </Fragment>
            )
        } else {
            return (
                <Fragment>
                    <li>
                    <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/products">Products</Link>
                    </li>
                    <li>
                        <Link to="/account/sign-in">Sign In</Link>
                    </li>
                    <li>
                        <Link to="/account/sign-out">Sign Up</Link>
                    </li>
                    <li>
                        <CartLink items={this.props.cartItems}/>
                    </li>
                </Fragment>
            )
        }
    }

    render () {
        const links = this.renderLinks();

        return (
            <Fragment>
                <nav className="blue darken-2">
                    <div className="nav-wrapper">
                        <Link className="brand-logo" to="/">Outback</Link>
                        <a href="#" data-target="sidenav" className="sidenav-trigger">
                            <i className="material-icons">menu</i>
                        </a>
                        <ul className="right med-trigger">
                            {links}
                        </ul>
                    </div>
                </nav>

                <Sidenav links={links}/>
            </Fragment>
        );
    }
}

function mapStateToProps (state) {
    return {
        cart_id: state.user.cart_id,
        signed_in: state.user.signed_in,
        is_guest: state.user.is_guest
    }
}

export default connect(mapStateToProps)(Nav);
