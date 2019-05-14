import React from 'react';
import {formatMoney} from '../../helpers';

const ProductItem = ({company, category, url, name, price, id, goToDetails}) => {
    return (
        // <li className="collection-item avatar product-item" onClick={() => goToDetails(id)}>
        //     <img className="circle" src={url} alt=""/>
        //     <span className="title">{name}</span>
        //     <p>${formatMoney(price)}</p>
        // </li>
        <div className="product-card" onClick={() => { goToDetails(id)}}>
            <div className="card">
                <div className="card-image">
                    <img src={url}/>
                </div>
                <div className="card-content">
                    <span className="card-title"><strong>{company}</strong></span>
                    <p>{name}</p>
                    <p>${formatMoney(price)}</p>
                </div>
            </div>
        </div>
    )
}

export default ProductItem;
