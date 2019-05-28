import React, {Component, Fragment} from 'react';
import './home.scss';

class Home extends Component {
    constructor (props) {
        super(props);

        this.state = {
            images: [
                '../../../public/dist/images/thailand.jpg',
                '../../../public/dist/images/norway.jpg',
                '../../../public/dist/images/vietnam.jpg',
                '../../../public/dist/images/vietnam2.jpg'
            ]
        }

        const config = {
            indicators: true,
            fullWidth: true
        }

        M.Carousel.init(this.carousel, config);
    }

    // componentDidMount () {

    //     M.Carousel.init(this.carousel, config);
    // }

    render () {
        const {images} = this.state.images.map((item) => {
            return (
                <a href="#" key={item} className="carousel-item">
                    <img src={item} alt="home image"/>
                </a>
            )
        })

        console.log(element);

        return (
            <div ref={(element) => {this.carousel = element}} className="carousel carousel-slider col s12 m4">{images}</div>
        )
    }
}

export default Home;
