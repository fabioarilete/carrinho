import React, { useState } from 'react';
import {BsSearch}from 'react-icons/bs';
import './SearchBar.css';

function SearchBar() {

  const [searchValue, setSearchValue]=useState('');

  return (  
    <form className="searchBar">
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