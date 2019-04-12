import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize.min';
import '../assets/css/app.scss';
import React, {Component} from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './home';
import Nav from './nav';
import Test from './test';
import Cart from './cart';
import NotFound from './404';
import ProductRoutes from './products';
import axios from 'axios';
import AccountRoutes from './account';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            cartItems: 0
        }

        this.updateCart = this.updateCart.bind(this);
    }

    async getCartItemsCount() {
        const resp = await axios.get('/api/getcartitemcount.php');

        console.log(resp);

        this.updateCart(resp.data.itemCount);
    };

    updateCart(count) {
        this.setState({
            cartItems: count
        })
    }

    render() {
        return (
            <div>
                <Nav cartItems={this.state.cartItems}/>
                <Switch className="container">
                    <Route exact path="/" component={Home}/>
                    <Route path="/products" render={(routingProps) => {
                        return <ProductRoutes {...routingProps} updateCart={this.updateCart}/>
                    }} />
                    <Route path="/cart" component={Cart}/>
                    <Route path="/account" component={AccountRoutes}/>
                    <Route component={NotFound}/>
                </Switch>
            </div>
        )
    }
}

export default App