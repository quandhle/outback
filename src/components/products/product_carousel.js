import React, {Component} from 'react'; 

class ProductCarousel extends Component {
    constructor (props) {
        super(props);

        this.nextSlide = this.nextSlide.bind(this);
    }

    componentDidMount () {
        const config = {
            indicators: true,
            fullWidth: true,
        }

        const instances = M.Carousel.init(this.carousel, config);

        setInterval(this.nextSlide, 3000);

        this.setState({
            element: instances
        })
    }

    nextSlide () {
        this.state.element.next();
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
            </div>
        )
    }
}

export default ProductCarousel;
