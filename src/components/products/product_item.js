import React from 'react';
import {formatMoney} from '../../helpers';

console.log('Format monies: ', formatMoney(1113212));

export default ({name, price, images: [productImg = '']}) => {
    return (
        <li className="collection-item avatar">
            <img className="circle" src={`/dist/${productImg}`} alt={`${name} product image`}/>
            <span className="title">{name}</span>
            <p>${formatMoney(price)}</p>
        </li>
    )
}