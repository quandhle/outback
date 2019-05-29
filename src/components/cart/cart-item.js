import React, {Component, Fragment} from 'react';
import {formatMoney} from '../../helpers';
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
        this.decrementQty = this.decrementQty.bind(this);
        this.incrementQty = this.incrementQty.bind(this);
    }

    async handleDelete () {        
        const resp = await axios.put('/api/deletecartitems.php', {
            product_id: this.state.id,
            quantity: this.state.quantity,
            total_price: this.state.price
        });
    }

    decrementQty () {        
        if (this.state.quantity > 1) {
            axios.put('/api/updatecartitem.php', {
                product_id: this.state.id,
                quantity: this.state.quantity,
                price: this.state.price
            }).then((resp) => {
                console.log(resp.data);

                this.setState({
                    quantity: this.state.quantity - 1
                })
            });
            
            const {id, quantity, price} = this.state;

            this.props.getCartData({id, quantity, price });
        }
    }

    incrementQty () {
        this.setState({
            quantity: this.state.quantity + 1
        });

        axios.get(`/api/addcartitem.php?product_id=${this.state.id}&quantity=1`).then(resp => {
            const {cartCount, cartTotal} = resp.data; 
        });
    }

    render () {
        const {image, name, price, quantity, itemTotalPrice, id} = this.props.value;

        return (
            <Fragment>
                <td>
                    <img src={image} alt={`${name} product image`}/>
                </td>
                <td>{name}</td>
                <td>${formatMoney(price)}</td>
                <td>
                    <button onClick={this.decrementQty}>-</button>
                    {this.state.quantity}
                    <button onClick={this.incrementQty}>+</button>
                </td>
                <td>${itemTotalPrice}</td>
            </Fragment>
        )
    }
}

export default CartItem;
