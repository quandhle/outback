import React from 'react';
import {formatMoney} from '../../helpers';

const ProductItem = ({company, category, url, name, price, id, goToDetails}) => {
    return (
        <li className="collection-item avatar product-item" onClick={() => goToDetails(id)}>
            <img className="circle" src={url} alt=""/>
            <span className="title">{name}</span>
            <p>${formatMoney(price)}</p>
        </li>
    )
}

export default ProductItem;
