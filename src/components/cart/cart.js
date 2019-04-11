import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import {formatMoney} from '../../helpers';
import './cart.scss';

class Cart extends Component {
    state = {
        items: [],
        meta: {}
    };

    componentDidMount() {
        this.getCartData();
    }
  
    async getCartData() {
        const resp = await axios.get('/api/getcartitems.php');

        console.log(resp)
        
        if (resp.data.success) {
            this.setState({
                items: resp.data.cartItem,
                meta: resp.data.cartMetaData
            });
        } else {
            console.error('Cart data failed to load.')
        }

        console.log(this.state);
    }

    render() {
        const {items, meta} = this.state;

        let totalItems = 0;

        const cartItems = items.map(({name, price, image, quantity, id}) => {
            totalItems += parseInt(quantity);

            const itemTotalPrice = formatMoney(quantity*price);

            return (
                <tr key={id}>
                    <td><img src={`/dist/${image}`} alt={`${name} product image`}/></td>
                    <td>{name}</td>
                    <td>${formatMoney(price)}</td>
                    <td>{quantity}</td>
                    <td>${itemTotalPrice}</td>
                </tr>
            )
        })

        return (
            <div className="cart container">
                <h1 className="center">Shopping Cart</h1>

                <Link to="/products">Continue Shopping</Link>

                <h2 className="right-align">Total Items In Cart: {totalItems}</h2>

                <table>
                    <thead>
                        <tr>
                            <th>Image</th>
                            <th>Product Name</th>
                            <th>Price Each</th>
                            <th>Quantity</th>
                            <th>Item Total</th>
                        </tr>
                    </thead>
                    <tbody>
                        {cartItems}
                        <tr>
                            <td colSpan="5" className="total-price">
                                Total: ${formatMoney(meta.total)}
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}

export default Cart;
