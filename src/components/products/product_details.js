import React, {Component} from 'react';
import axios from 'axios';
import ProductCarousel from './product_carousel';
import {formatMoney} from '../../helpers';
import ProductAdd from './product_add';
import MiscDetails from './misc_details';

class ProductDetails extends Component {
    state = {
        details: null
    };

    componentDidMount () {
        this.getDetails();
    }

    async getDetails () {
        const {params} = this.props.match;

        const resp = await axios.get(`/api/getproductdetails.php?productId=${params.product_id}`);
        
        if (resp.data.success) {
            this.setState({
                details: resp.data.productInfo
            })
        } else {
            this.setState({
                details: false
            })
        };
    }

    render () {
        const {details} = this.state;
        const {match: {params}, updateCart} = this.props;

        if (details === null) {
            return <h1>Loading...</h1>
        } else if (!details) {
            return <h1 className="center">No Product Found</h1>
        }

        const {description = 'No description available.', company, images, name, price, miscDetails} = details;

        return (
            <div className="product-details">
                <h1 className="right-align">{company} {name}</h1>
                <ProductCarousel images={images}/>
                <div className="product-info">
                    <div className="right-align product-price">${formatMoney(price)}</div>
                    <ProductAdd productID={params.product_id} updateCart={updateCart}/>
                    <p>{description}</p>
                    <MiscDetails details={miscDetails}/>
                </div>
            </div>
        );
    }
}

export default ProductDetails;
