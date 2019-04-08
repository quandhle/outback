import React, {Component} from 'react';
import axios from 'axios';

class ProductDetails extends Component {
    state = {
        details: null
    };

    componentDidMount() {
        this.getDetails();
    }

    async getDetails() {
        const {params} = this.props.match;

        const resp = await axios.get(`/api/getproductdetails.php?productID=${params.product_id}`)

        console.log(resp);

        if (resp.data.success) {
            this.setState({
                details: resp.data.productInfo
            })
        } else {
            this.setState({
                details: false
            })
        }
    }

    render() {
        const {details} = this.state;

        if (details === null) {
            return <h1>Loading...</h1>
        } else if (!details) {
            return <h1 className="center">No Product Found</h1>
        }

        const {description = 'No description available.', name} = details;

        return (
            <div className="product-details">
                <h1 className="center">{name}</h1>
                <p className="description">{description}</p>
            </div>
        )
    }
}

export default ProductDetails