import React, {Component, Fragment} from 'react'; 

class HomeCarousel extends Component {
    constructor (props) {
        super(props);

        this.state = {
            images: [
                './dist/images/arcteryx.jpg',
                './dist/images/gear.jpg',
                './dist/images/northface.jpg',
                './dist/images/organic.jpg'
            ]
        }

        this.nextSlide = this.nextSlide.bind(this);
        this.prevSlide = this.prevSlide.bind(this);
    }

    componentDidMount () {
        const config = {
            indicators: true,
            fullWidth: true,
            duration: 400,
            noWrap: false
        }

        let instances = M.Carousel.init(this.carousel, config);

        setInterval(this.nextSlide, 7000);

        this.setState({
            element: instances
        })
    }

    nextSlide () {
        this.state.element.next();
    }

    prevSlide () {
        this.state.element.prev();
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
            <Fragment>
                <div ref={(element) => {this.carousel = element}} className="carousel carousel-slider col s12 m4">
                    {items}
                </div>
                <i onClick={this.prevSlide} className="large material-icons prev">chevron_left</i>
                <i onClick={this.nextSlide} className="large material-icons next">chevron_right</i>
            </Fragment>
        )
    }
}

export default HomeCarousel;
