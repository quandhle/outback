import React from 'react';
import {formatMoney} from '../../helpers';

const ProductItem = ({company, category, url, name, price, id, goToDetails}) => {
    return (
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
