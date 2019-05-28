import React, {Component, Fragment} from 'react';
import HomeCarousel from './home-carousel';
import './home.scss';

class Home extends Component {
    render () {
        return (
            <div className="home">
                <HomeCarousel/>
            </div>
        )
    }
}

export default Home;
