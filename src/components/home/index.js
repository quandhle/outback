import React, {Component, Fragment} from 'react';
import HomeCarousel from './home-carousel';
import './home.scss';

class Home extends Component {
    render () {
        return (
            <div className="home">
                <HomeCarousel/>
                <a href="/products" className="view-products waves-effect waves-light btn">View Products</a>
            </div>
        )
    }
}

export default Home;
