import React, {Component} from 'react';
import axios from 'axios';
import ProductItem from './product_item';

class ProductList extends Component {
    constructor (props) {
        super(props);

        this.state = {
            products: []
        }

        this.goToDetails = this.goToDetails.bind(this);
    }

    componentDidMount () {
        this.getProducts();
    }

    getProducts () {
        axios.get('/api/getproducts.php').then((resp) => {
            this.setState({
                products: resp.data.products
            });

            console.log(this.state);
        });
    }

    goToDetails (id) {
        this.props.history.push(`/products/${id}`);
    }

    render () {
        const productList = this.state.products.map((product) => {
            return <ProductItem key={product.id} {...product} goToDetails={this.goToDetails}/>
        })
        
        return (
            <div className="product-list">
                <h1 className="center">Product List</h1>
                <ul className="collection">
                    {productList}
                </ul>
            </div>
        );
    }
}

export default ProductList;
