import React, {useEffect, useContext} from 'react';

import './Products.css';
import fetchProducts from '../../Api/fetchProducts';
import ProductCard from '../ProductCard/ProductCard';
import Loading from '../Loading/Loading';
import AppContext from '../../context/AppContext';

function Products() {
  
  const {products, setProducts, loading, setLoading}=useContext(AppContext);

  useEffect(()=> {

    fetchProducts().then((res)=>{

      setProducts(res);
      setLoading(false);
    });

  },[]);

  

  return ( 
    (loading && <Loading />) ||(
      <section className="products container">
        {products.map((product)=> <ProductCard key={product} data={product} />)}
      </section>
    )

    
  );
}

export default Products;