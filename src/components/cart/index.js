import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import {formatMoney} from '../../helpers';
import CartItem from './cart-item';
import './cart.scss';

class Cart extends Component {
    constructor (props) {
        super(props);

        this.state = {
            items: [],
            data: {}
        }

        this.handleDelete = this.handleDelete.bind(this);
    }

    componentDidMount () {
        this.getCartData();
    }

    async getCartData () {
        const resp = await axios.get('/api/getcartitems.php');

        if (resp.data.success) {
            this.setState({
                items: resp.data.cartItems,
                data: resp.data.cartData
            });
        } else {
            console.error('Cart data failed to load');
        }
    }

    async handleDelete (props) {
        const resp = await axios.put('/api/deletecartitems.php', {
            product_id: props.id,
            quantity: props.quantity,
            total_price: props.price
        });

        this.getCartData();

        // if (resp.data.success) {
        //     this.getCartData();
        // }
    }

    // decrementQty () {
    //     if (this.state.qty > 1) {
    //         this.setState({
    //             items:
    //         });
    //     }
    // }

    // incrementQty () {
    //     this.setState({
    //         qty: this.state.qty + 1
    //     });
    // }

    render () {
        const {items, data} = this.state;
        let totalItems = 0;

        const cartItems = items.map((value = {name, price, image, quantity, id}, index) => {
            totalItems += value.quantity;

            const itemTotalPrice = formatMoney(value.quantity * value.price);

            return (
                <tr key={value.id}>
                    <CartItem key={value.id} value={{totalItems, itemTotalPrice, ...value}}/>
                    <td><i className="material-icons" onClick={() => {this.handleDelete({totalItems, itemTotalPrice, ...value})}}>delete</i></td>
                </tr>
            )
        });

        return (
            <div className="cart container">
                <h1 className="center">Shopping Cart</h1>

                <Link to="/products">Continue Shopping</Link>

                <div className="right-align total-items">Total Items: {totalItems}</div>
                <table>
                    <thead>
                        <tr>
                            <th>Image</th>
                            <th>Product Name</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Item Total</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {cartItems}
                        <tr>
                            <td colSpan="6" className="total-price">
                                Total: ${formatMoney(data.total)}
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        );
    }
}

export default Cart;
