import React, {Component, Fragment} from 'react';
import {formatMoney} from '../../helpers';
import axios from 'axios';

class CartItem extends Component {
    constructor (props) {
        super(props);

        this.decrementQty = this.decrementQty.bind(this);
        this.incrementQty = this.incrementQty.bind(this);
    }

    async decrementQty () {
        const {id, quantity, price} = this.props.value;

        if (this.props.value.quantity > 1) {
            const resp = await axios.put('/api/updatecartitem.php', {
                product_id: id,
                quantity: quantity,
                price: price
            }).then(() => {
                this.props.cartCount();
                this.props.getCartData();
            });
        }
    }

    async incrementQty () {
        const resp = await axios.get(`/api/addcartitem.php?product_id=${this.props.value.id}&quantity=1`).then(() => {
            this.props.getCartData();
            this.props.cartCount();
        });
    }

    render () {
        const {image, name, price, itemTotalPrice, company, quantity} = this.props.value;

        return (
            <Fragment>
                <td>
                    <img src={image} alt={`${name} product image`}/>
                </td>
                <td>{company} {name}</td>
                <td className="mobile">${formatMoney(price)}</td>
                <td>
                    <button onClick={this.decrementQty}>-</button>
                    {quantity}
                    <button onClick={this.incrementQty}>+</button>
                </td>
                <td className="mobile">${itemTotalPrice}</td>
            </Fragment>
        )
    }
}

export default CartItem;
