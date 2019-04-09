import React, {Component} from 'react'; 

class ProductCarousel extends Component {
    componentDidMount() {
        M.Carousel.init(this.carousel);

        const config = {
            numVisible: 1, 
            indicators: true
        }

        M.Carousel(this.carousel);
    }

    render() {
        const items = this.props.images.map((image) => {
            return (
                <a href="#" key={image} className="carousel-item">
                    <img src={`/dist/${image}`} alt="Product Image/"/>
                </a>
            )
        });

        return (
            <div className="carousel s12 col-8 m4">
                {items}
            </div>
        )
    }
}

export default ProductCarousel;