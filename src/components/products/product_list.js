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
        console.log('filter is:', filter);

        const {key, str} = filter;
        
        axios.get(`/api/getfiltereditems.php?type=${key}&key=${str}`).then((resp) => {
            console.log(resp);

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
                <Sort filterItems={this.getFilteredItems}/>
                <div className="product-list">
                    {productList}
                </div>
            </Fragment>
        );
    }
}

export default ProductList;
