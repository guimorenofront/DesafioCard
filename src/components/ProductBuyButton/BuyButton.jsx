import React, { useEffect} from 'react';
import './BuyButton.scss'

function ProductBuyButton({ id }) {
  const ButtonId = `ButtonId-${id}`;

  function ButtonClick(id) {
    const button = document.getElementById(ButtonId);


    if (localStorage.getItem(ButtonId) != null) {
      localStorage.removeItem(ButtonId)
      button.classList.remove('Clicked')
    } else {
      button.classList.add('Clicked')
      localStorage.setItem(ButtonId, 'Clicked')
    }
  }

  useEffect(() => {
    const button = document.getElementById(ButtonId);
    if (localStorage.getItem(ButtonId) != null) {
      button.classList.add('Clicked')
    }
  })

  return (
    <div className="BuyButtonContainer" id={`ButtonId-${id}`}>
      <button className='BuyButton' onClick={() => ButtonClick(id)}>ADICIONAR</button>
      <button className='BuyButton' onClick={() => ButtonClick(id)}>
        <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M20.5 6L9.5 17L4.5 12" stroke="#1C1C1C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
        <p>
          ADICIONADO
        </p>
      </button>
    </div>
  );
}

export default ProductBuyButton;