import React from 'react';
import './ProductName.scss'
// import { Container } from './styles';

function ProductName({title}) {
  return(
    <div className='Title'>
        <h1>{title}</h1>
    </div>
  );
}

export default ProductName;