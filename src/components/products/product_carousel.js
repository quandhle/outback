import React, {Component} from 'react'; 

class ProductCarousel extends Component {
    componentDidMount () {
        const config = {
            indicators: true,
            fullWidth: true,
        }

        M.Carousel.init(this.carousel, config);
    }

    render () {
        const items = this.props.images.map((image) => {
            return (
                <a href="#" key={image} className="carousel-item">
                    <img src={image} alt="Product Image"/>
                </a>
            )
        });

        console.log(this.carousel);

        return (
            <div ref={(element) => {this.carousel = element}} className="carousel carousel-slider col s12 m4">
                {items}
            </div>
        )
    }
}

export default ProductCarousel;
