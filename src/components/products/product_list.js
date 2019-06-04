import React, {Component, Fragment} from 'react';
import axios from 'axios';
import ProductItem from './product_item';
import Sort from './sorting';

class ProductList extends Component {
    constructor (props) {
        super(props);

        this.state = {
            products: [],
        }

        this.goToDetails = this.goToDetails.bind(this);
        this.getFilteredItems = this.getFilteredItems.bind(this);
        this.getProducts = this.getProducts.bind(this);
    }

    componentDidMount () {
        this.getProducts();
    }

    async getProducts () {
        const resp = await axios.get('/api/getproducts.php');

        if (resp.data.success) {
            this.setState({
                products: resp.data.products
            })
        }
    }

    goToDetails (id) {
        this.props.history.push(`/products/${id}`);
    }

    getFilteredItems (filter) {
        const {key, str} = filter;
        
        axios.get(`/api/getfiltereditems.php?type=${str}&key=${key}`).then((resp) => {
            this.setState({
                products: resp.data.products
            })
        })
    }

    render () {
        const productList = this.state.products.map((products) => {
            return <ProductItem key={products.id} {...products} goToDetails={this.goToDetails}/>
        })
        
        return (
            <Fragment>
                <Sort filterItems={this.getFilteredItems} getProducts={this.getProducts}/>
                <div className="product-list">
                    {productList}
                </div>
            </Fragment>
        );
    }
}

export default ProductList;
