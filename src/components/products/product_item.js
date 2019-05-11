import React from 'react';
import {formatMoney} from '../../helpers';

const ProductItem = ({company, category, name, price, id, goToDetails}) => {
    return (
        <li className="collection-item avatar product-item" onClick={() => goToDetails(id)}>
            <span className="title">{name}</span>
            <p>${formatMoney(price)}</p>
        </li>
    )
}

export default ProductItem;
