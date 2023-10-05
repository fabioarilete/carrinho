import React from 'react';
import './ProductCard.css';

function ProductCard() {
  return ( 
    <section className="ProductCard">
      <img src="" alt="product" className="cardImage" />
      <div className="cardInfos">
        <h2 className="cardPrice">R$ 200,00</h2>
        <h2 className="cardTitle">Manual do Dev</h2>
      </div>
      <button type="button" className="buttonAddCard" >+</button>
    </section>
  );
}

export default ProductCard;