<<<<<<< HEAD
import React, {Component} from 'react';
=======
import React, { Component } from 'react';
>>>>>>> b247c0d31fee08cc28f6b5362864bd5ae71caf47
import axios from 'axios';
import ProductItem from './product_item';

class ProductList extends Component {
<<<<<<< HEAD
    constructor(props) {
=======
    constructor(props){
>>>>>>> b247c0d31fee08cc28f6b5362864bd5ae71caf47
        super(props);

        this.state = {
            products: []
<<<<<<< HEAD
        }
    }

    componentDidMount() {
        this.getProducts();
    }

    getProducts() {
        axios.get('http://localhost:8888/api/getproducts.php').then((resp) => {
=======
        };
    }

    componentDidMount(){
        this.getProducts();
    }

    getProducts(){
        // change
        axios.get('/api/getproducts.php').then((resp) => {

>>>>>>> b247c0d31fee08cc28f6b5362864bd5ae71caf47
            this.setState({
                products: resp.data.products
            });
        });
    }

<<<<<<< HEAD
    render() {
        console.log(this.state);

        const productList = this.state.products.map((product) => {
            return <ProductItem key={product.id} {...product}/>
        })
=======
    render(){
        const productList = this.state.products.map((product) => {
            return <ProductItem key={product.id} {...product}/>;
        });
>>>>>>> b247c0d31fee08cc28f6b5362864bd5ae71caf47

        return (
            <div className="product-list">
                <h1 className="center">Wicked Product List</h1>
                <ul className="collection">
                    {productList}
                </ul>
            </div>
<<<<<<< HEAD
        )
    }
}

export default ProductList;
=======
        );
    }
}

export default ProductList;
>>>>>>> b247c0d31fee08cc28f6b5362864bd5ae71caf47
