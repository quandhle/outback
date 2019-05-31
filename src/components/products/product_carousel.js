import React, {Component} from 'react'; 

class ProductCarousel extends Component {
    constructor (props) {
        super(props);

        this.nextSlide = this.nextSlide.bind(this);
        this.prevSlide = this.prevSlide.bind(this);
    }

    componentDidMount () {
        const config = {
            indicators: true,
            fullWidth: true,
        }

        const instances = M.Carousel.init(this.carousel, config);

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
        const items = this.props.images.map((image, index) => {
            return (
                <a href="#" key={index} className="carousel-item">
                    <img src={image} className="center" alt="Product Image"/>
                </a>
            )
        });

        return (
            <div ref={(element) => {this.carousel = element}} className="carousel carousel-slider col s12 m4">
                {items}
                <i onClick={this.prevSlide} className="large material-icons prev">chevron_left</i>
                <i onClick={this.nextSlide} className="large material-icons next">chevron_right</i>
            </div>
        )
    }
}

export default ProductCarousel;
