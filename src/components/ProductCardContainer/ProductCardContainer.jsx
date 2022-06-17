import React from 'react';
import "./cardcontainer.scss"
// import { Container } from './styles';

function ProductCardContainer({children}) {
  return(
    <div className='CardContainer'>
        {children}
    </div>
  );
}

export default ProductCardContainer;