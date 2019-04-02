import React, {Component} from 'react';

class ProductDetails extends Component {
    componentDidMount() {
        const {params} = this.props.match;
    }

    render() {
        return (
            <div className="product-details">
                <h1 className="center">[Product Name] Details</h1>
            </div>
        )
    }
}

export default ProductDetails