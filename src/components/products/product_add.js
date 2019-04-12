import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';
import axios from 'axios';
import Modal from '../modal';

class ProductAdd extends Component {
    constructor(props){
        super(props);

        this.state = {
            qty: 1
        }

        this.addToCart = this.addToCart.bind(this);
        this.decrementQty = this.decrementQty.bind(this);
        this.incrementQty = this.incrementQty.bind(this);
    }

    addToCart(){
        const {productId, updateCart} = this.props;
        const {quantity} = this.state;

        axios.get(`/api/addcartitem.php?product_id=${productId}&quantity=${quantity}`).then((resp) => {            
            this.props.history.push('/cart');

            updateCart(resp.data.cartCount);
        });

    }

    decrementQty(){
        if(this.state.qty > 1){
            this.setState({
                qty: this.state.qty - 1
            });
        }
    }

    incrementQty(){
        this.setState({
            qty: this.state.qty + 1
        });
    }

    render(){
        return (
            <div className="right-align add-to-cart">
                <span className="qty-container">
                    <button onClick={this.decrementQty} className="btn btn-small btn-floating blue lighten-1">
                        <i className="material-icons">remove</i>
                    </button>
                    <span className="product-qty">{this.state.qty}</span>
                    <button onClick={this.incrementQty} className="btn btn-small btn-floating blue lighten-1">
                        <i className="material-icons">add</i>
                    </button>
                </span>

                <button onClick={this.addToCart} className="btn blue darken-2">
                    <i className="material-icons">add_shopping_cart</i>
                </button>
                <Modal isOpen={true}/>
            </div>
        );
    }
}

export default withRouter(ProductAdd);
