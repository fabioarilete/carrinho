import React, { useState, useContext } from 'react';
import {BsSearch}from 'react-icons/bs';
import './SearchBar.css';
import fetchProducts from '../../Api/fetchProducts';
import AppContext from '../../context/AppContext';

function SearchBar() {

  const {setProducts, setLoading}= useContext(AppContext);
  const [searchValue, setSearchValue]=useState('');


  const handleSearch=async (e)=>{
    e.preventDefault();
    setLoading(true);
    
    const products = await fetchProducts(searchValue);

    setProducts(products);
    setLoading(false);
    setSearchValue('');
  };

  return (  
    <form className="searchBar" onSubmit={handleSearch}>
      <input 
        type="search" 
        value={searchValue}
        placeholder="Buscar produtos" 
        className="searchInput" 
        onChange={({target})=> setSearchValue(target.value)}
        required />
     
      <button type="submit" className="searchButton">
        <BsSearch />
      </button>
    </form>
  );
}

export default SearchBar;