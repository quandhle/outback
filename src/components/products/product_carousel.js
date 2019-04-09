import React, {Component} from 'react'; 

class ProductCarousel extends Component {
    componentDidMount() {
        console.log('Carousel div: ', this.carousel);

        M.Carousel.init(this.carousel);

        // const config = {
        //     numVisible: 1, 
        //     indicators: true
        // }

        // M.Carousel(this.carousel);
    }

    render() {
        console.log('Props: ', this.props)
        const items = this.props.images.map((image) => {
            return (
                <a href="#" key={image} className="carousel-item">
                    <img src={`../../../public/dist/${image}`} alt="Product Image/"/>
                </a>
            )
        });

        return (
            <div ref={(element) => {this.carousel = element}} className="carousel">
                {items}
            </div>
        )
    }
}

export default ProductCarousel;