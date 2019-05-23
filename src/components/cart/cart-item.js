import React, {Component} from 'react';
import {formatMoney} from '../../helpers';
import {connect} from 'react-redux';
import axios from 'axios';

class CartItem extends Component {
    constructor (props) {
        super(props);

        const {id, quantity, price} = props.value;

        this.state = {
            id: id,
            quantity: quantity,
            price: price
        }

        this.handleDelete = this.handleDelete.bind(this);
    }

    async handleDelete () {        
        const resp = await axios.put('/api/deletecartitems.php', {
            product_id: this.state.id,
            quantity: this.state.quantity,
            total_price: this.state.price
        });

        console.log('resp is: ', resp.data);
    }

    render () {

        const {image, name, price, quantity, itemTotalPrice, id} = this.props.value

        return (
            <tr key={id}>
                <td>
                    <img src={image} alt={`${name} product image`}/>
                </td>
                <td>{name}</td>
                <td>${formatMoney(price)}</td>
                <td>
                    <button onClick={this.decrementQty}>-</button>
                    {quantity}
                    <button onClick={this.incrementQty}>+</button>
                </td>
                <td>${itemTotalPrice}</td>
                <td><i className="material-icons" onClick={this.handleDelete}>delete</i></td>
            </tr>
        )
    }
}

export default CartItem;
