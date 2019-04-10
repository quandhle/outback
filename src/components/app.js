import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize.min';
import '../assets/css/app.scss';
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './home';
import Nav from './nav';
import Test from './test';
import Cart from './cart';
import NotFound from './404';
import ProductRoutes from './products';

const App = () => (
    <div>
        <Nav/>
        <Switch className="container">
            <Route exact path="/" component={Home}/>
            <Route path="/products" component={ProductRoutes} />
            <Route path="/cart" component={Cart}/>
            <Route component={NotFound}/>
        </Switch>
    </div>
)

export default App