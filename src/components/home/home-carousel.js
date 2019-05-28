import React, {Component} from 'react'; 

class HomeCarousel extends Component {
    constructor (props) {
        super(props);

        this.state = {
            images: [
                './dist/images/thailand.jpg',
                './dist/images/norway.jpg',
                './dist/images/vietnam.jpg',
                './dist/images/vietnam2.jpg'
            ]
        }
    }

    componentDidMount () {
        const config = {
            indicators: true,
            fullWidth: true,
            duration: 200,
            noWrap: false
        }

        M.Carousel.init(this.carousel, config);
    }

    render () {
        const items = this.state.images.map((image, index) => {
            return (
                <a href="#" key={index} className="carousel-item">
                    <img src={image} alt="Product Image"/>
                </a>
            )
        });

        return (
            <div ref={(element) => {this.carousel = element}} className="carousel carousel-slider col s12 m4">
                {items}
            </div>
        )
    }
}

export default HomeCarousel;
