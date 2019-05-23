import React, {Component, Fragment} from 'react';
import axios from 'axios';
import ProductItem from './product_item';
import Sort from './sorting';

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

    async getProducts () {
        const resp = await axios.get('/api/getproducts.php')

        console.log(resp);
        
        // then((resp) => {
        //     this.setState({
        //         products: resp.data.products
        //     });
        // });
    }

    goToDetails (id) {
        this.props.history.push(`/products/${id}`);
    }

    render () {
        // const productList = this.state.products.map((product) => {
        //     return <ProductItem key={product.id} {...product} goToDetails={this.goToDetails}/>
        // })
        const productList = 'hello';
        
        return (
            <Fragment>
                <Sort/>
                <div className="product-list">
                    {productList}
                </div>
            </Fragment>
        );
    }
}

export default ProductList;
