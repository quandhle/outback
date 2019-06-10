import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import {formatMoney} from '../../helpers';
import CartItem from './cart-item';
import Modal from '../modal';
import './cart.scss';

class Cart extends Component {
    constructor (props) {
        super(props);
        
        this.state = {
            items: this.props.items,
            data: {},
            modalOpen: false
        }

        this.handleDelete = this.handleDelete.bind(this);
        this.getCartData = this.getCartData.bind(this);
        this.closeModal = this.closeModal.bind(this);
        this.handleModalOpen = this.handleModalOpen.bind(this);
    }

    componentDidMount () {
        this.getCartData();
    }

    getCartData () {
        axios.get('/api/getcartitems.php').then((resp) => {            
            if (resp.data.success) {
                this.setState({
                    items: resp.data.cartItems,
                    data: resp.data.cartData
                });
            } else {
                console.error('Cart data failed to load');
            }
        })
    }

    async handleDelete () {
        const {id, quantity, total_price} = this.state.deleteInfo;

        const resp = await axios.put('/api/deletecartitems.php', {
            product_id: id,
            quantity: quantity,
            total_price: total_price
        }).then((resp) => {
            this.getCartData();
            this.props.cartCount();
        });

        this.closeModal();
    }

    handleModalOpen (info) {
        this.setState({
            modalOpen: true,
            deleteInfo: {
                id: info.id,
                quantity: info.quantity,
                total_price: info.price * info.quantity
            }
        })
    }

    closeModal () {
        this.setState({
            modalOpen: false
        })
    }

    render () {
        const {items, data, modalOpen} = this.state;
        let totalItems = 0;

        let cartItems = null;

        if (items.length === 0) {
            cartItems = <tr><td>No cart items.</td></tr>;
        } else {
            cartItems = items.map((value = {name, price, image, quantity, id}, index) => {
                totalItems += value.quantity;
    
                const itemTotalPrice = formatMoney(value.quantity * value.price);
    
                return (
                    <tr key={value.id}>
                        <CartItem cartCount={this.props.cartCount} key={value.id} value={{totalItems, itemTotalPrice, ...value}} getCartData={this.getCartData}/>
                        <td><i className="material-icons" onClick={() => {this.handleModalOpen({totalItems, itemTotalPrice, ...value})}}>delete</i></td>
                    </tr>
                )
            });
        }

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
                            <th className="mobile">Price</th>
                            <th>Quantity</th>
                            <th className="mobile">Item Total</th>
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
                <Modal
                    defaultAction = {(info) => {this.handleDelete(info)}}
                    defaultActionText = "Delete"
                    isOpen = {modalOpen}
                    secondaryAction = {this.closeModal}
                    secondaryActionText = "Cancel"
                >
                    <div className="center"><i className="material-icons warning-btn">close</i></div>
                    <h4 className="center">Are you sure?</h4>
                    <p className="center">Do you really want to delete this product from your cart?</p>
                </Modal>
            </div>
        );
    }
}

export default Cart;
