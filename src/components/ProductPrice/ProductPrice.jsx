import React from 'react';
import './ProductPrice.scss'
// import { Container } from './styles';

function ProductPrice({FullPrice, Price}) {
    return (
        <div className="PriceContainer">
            <p className="FullPrice">{FullPrice}</p>
            <p className="Price">{Price}</p>
            <p className="installments">em até <b>10x de R$ 259,90</b> sem juros</p>
        </div>
    );
}

export default ProductPrice;