import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import {formatMoney} from '../../helpers';
import './cart.scss';

class Cart extends Component {
    constructor (props) {
        super(props);

        this.state = {
            items: [],
            data: {}
        }
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

            console.log(this.state);
        } else {
            console.error('Cart data failed to load');
        }
    }

    render () {
        const {items, data} = this.state;
        let totalItems = 0;

        const cartItems = items.map(({name, price, image, quantity, id}) => {
            totalItems += quantity;
            const itemTotalPrice = formatMoney(quantity * price);        

            return (
                <tr key={id}>
                    <td>
                        <img src={image} alt={`${name} product image`}/>
                    </td>
                    <td>{name}</td>
                    <td>${formatMoney(price)}</td>
                    <td>{quantity}</td>
                    <td>${itemTotalPrice}</td>
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
                        </tr>
                    </thead>
                    <tbody>
                        {cartItems}
                        <tr>
                            <td colSpan="5" className="total-price">
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
