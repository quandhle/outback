import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';
import axios from 'axios';
import Modal from '../modal';
import {connect} from 'react-redux';
import {cartCount} from '../../js/actions';
import {formatMoney} from '../../helpers';
import {addToCart} from '../../js/actions';

class ProductAdd extends Component {
    constructor (props) {
        super(props);

        this.state = {
            qty: 1,
            modalOpen: false,
            totalPrice: 0,
            cartQty: 0
        }

        this.addToCart = this.addToCart.bind(this);
        this.closeModal = this.closeModal.bind(this);
        this.decrementQty = this.decrementQty.bind(this);
        this.goToCart = this.goToCart.bind(this);
        this.incrementQty = this.incrementQty.bind(this);
    }

    addToCart () {
        const {addToCart} = this.props;
        const {productID, updateCart} = this.props;
        const {qty} = this.state;

        // addToCart({productID, updateCart, qty});

        axios.get(`/api/addcartitem.php?product_id=${productID}&quantity=${qty}`).then(resp => {
            const {cartCount, cartTotal} = resp.data; 

            this.setState({
                modalOpen: false,
                cartQty: cartCount,
                totalPrice: cartTotal
            });
        });
    }

    decrementQty () {
        if (this.state.qty > 1) {
            this.setState({
                qty: this.state.qty - 1
            });
        }
    }

    incrementQty () {
        this.setState({
            qty: this.state.qty + 1
        });
    }

    closeModal () {
        this.setState({
            modalOpen: false,
            qty: 1
        });
    }

    goToCart () {
        this.props.history.push('/cart');
    }

    render () {
        const { modalOpen, totalPrice, cartQty, qty } = this.state;

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
                <Modal 
                    defaultAction={this.closeModal}
                    defaultActionText="Continue Shopping"
                    isOpen={modalOpen}
                    secondaryAction={this.goToCart}
                    secondaryActionText="View Cart"
                >
                    <h1 className="center">{qty} Item{qty > 1 && 's' && 'B'} Added to Cart</h1>

                    <div className="row">
                        <div className="col s6">Cart Total Items:</div>
                        <div className="col s6 left-align">{cartQty}</div>
                    </div>
                    <div className="row">
                        <div className="col s6">Cart Total Price:</div>
                        <div className="col s6 left-align">{formatMoney(totalPrice)}</div>
                    </div>
                </Modal>
            </div>
        );
    }
}

function mapStateToProps (state) {
    return {
        cartCount: state.cart.cartCount
    }
}

export default connect(mapStateToProps, {addToCart})(withRouter(ProductAdd));
