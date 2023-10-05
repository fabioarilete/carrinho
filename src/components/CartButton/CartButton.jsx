import React, { useContext } from 'react';
import {BsCart} from 'react-icons/bs';

import './CartButton.css';
import AppContext from '../../context/AppContext';

function CartButton() {

  const{cartItems, isCartVisible, setIsCartVisible}=useContext(AppContext);


  return ( 
    <button 
      type="button" 
      className="cartButton"
      onClick={()=>setIsCartVisible(!isCartVisible)}
    >
      <BsCart />
      {cartItems.length > 0 && <span className="cartStatus">{cartItems.length}</span>}
      
    </button>
  );
}

export default CartButton;