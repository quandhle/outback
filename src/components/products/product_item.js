import React from 'react';
import {formatMoney} from '../../helpers';

const ProductItem = ({company, category, url, name, price, id, goToDetails}) => {
    return (
        <div className="product-card" onClick={() => { goToDetails(id)}}>
            <div className="card">
                <div className="card-image">
                    <img src={url} alt={name}/>
                </div>
                <div className="card-content">
                    <div className="card-title"><strong>{company}</strong></div>
                    <div>{name}</div>
                    <div>${formatMoney(price)}</div>
                </div>
            </div>
        </div>
    )
}

export default ProductItem;
