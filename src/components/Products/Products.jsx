import React, {useState, useEffect} from 'react';

import './Products.css';
import fetchProducts from '../../Api/fetchProducts';
import ProductCard from '../ProductCard/ProductCard';

function Products() {
  const [products, setProducts]=useState([]);

  useEffect(()=> {

    fetchProducts('iphone').then((res)=>{

      setProducts(res);
      console.log(products);
    });

  },[]);

  

  return ( 
    <section className="products container">
      <ProductCard />
    </section>
  );
}

export default Products;