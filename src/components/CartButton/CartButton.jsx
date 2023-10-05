import React from 'react';
import {BsCart} from 'react-icons/bs';

import './CartButton.css';

function CartButton() {
  return ( 
    <button type="button" className="cartButton">
      <BsCart />
      <span className="cartStatus">2</span>
    </button>
  );
}

export default CartButton;