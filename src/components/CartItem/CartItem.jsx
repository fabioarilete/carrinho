import React, { useContext } from 'react';
import propTypes from 'prop-types';
import {BsFillCartDashFill} from 'react-icons/bs';
import './CartItem.css';
import formatCurrency from '../../utils/formatCurrency';
import AppContext from '../../context/AppContext';

function CartItem({data}) {

  const {cartItems, setCartItems} = useContext(AppContext);
  const {id, thumbnail, title, price} = data;

  const handleRemoveItem = () => {
    const updatedItems = cartItems.filter((item)=> item.id !== id);
    setCartItems(updatedItems);
  };
  
  return ( 
    <section className="cartItem">
      <img 
        src={thumbnail} 
        alt="imagem do produto" 
        className="cartItemImage" 
      />
      <div className="cartItemContent">
        <h3 className="cartItemTitle">{title}</h3>
        <h3 className="cartItemPrice">{formatCurrency(price,'BRL')}</h3>

        <button 
          type="button" 
          className="buttonRemoveItem"
          onClick={handleRemoveItem}
        >
          <BsFillCartDashFill />
        </button>        
      </div>

    </section>
  );
}

export default CartItem;

CartItem.propTypes = {
  data: propTypes.object
}.isRequired;