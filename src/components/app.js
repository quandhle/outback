import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize.min';
import '../assets/css/app.scss';
import React, {Component, Fragment} from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './home/';
import Nav from './nav';
import Cart from './cart';
import NotFound from './404';
import ProductRoutes from './products';
import axios from 'axios';
import {cartCount} from '../js/actions';
import {connect} from 'react-redux';
import AccountRoutes from './account';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            cartItems: 0
        }

        this.getCartItemsCount = this.getCartItemsCount.bind(this);
    }

    async getCartItemsCount () {
        const {cartCount} = this.props;

        cartCount();
    };

    componentDidMount () {
        this.getCartItemsCount();
    }

    render () {        
        return (
            <Fragment>
                <Nav cartItems={this.state.cartItems}/>
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route path="/products" render={(routingProps) => {
                        return <ProductRoutes {...routingProps} updateCart={this.updateCart}/>
                    }}/>
                    <Route path="/cart" component={Cart}/>
                    <Route path="/account" component={AccountRoutes}/>
                    <Route component={NotFound}/>
                </Switch>
            </Fragment>
        )
    }
}

function mapStateToProps (state) {
    return {
        cart: state.cart.cartCount
    }
}

export default connect(mapStateToProps, {cartCount})(App);
