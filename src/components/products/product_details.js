import React, {Component} from 'react';
import axios from 'axios';

class ProductDetails extends Component {
    state = {} ;
    async componentDidMount() {
        const {params} = this.props.match;

        console.log('Params:', params);

        console.log('Fetch prodeuct with id of: ', params.product_id);

        const resp = await axios.get(`/api/getproductdetails.php?productID=${params.product_id}`);

        console.log('Details resp: ', resp);
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