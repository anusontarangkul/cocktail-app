import React, { useState } from 'react';
import styles from './SearchBar.module.css';

const SearchBar = ({ setCocktails, setSearch, search }) => {
  const submitHandler = async (e) => {
    e.preventDefault();
    console.log('search', search);
    if (search === '') {
      return;
    }
    try {
      const response = await fetch(
        `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${search}`
      );
      const data = await response.json();
      console.log(data);
      setSearch('');
      setCocktails(data);
    } catch (e) {
      console.log(e);
    }
  };

  const handleChange = (e) => {
    setSearch(e.target.value);
  };
  return (
    <div className={styles.headingContainer}>
      <h1 className={styles.title}>
        Search your <span className={styles.title2}>favorite cocktail</span>{' '}
      </h1>
      <form onSubmit={submitHandler} className={styles.searchForm}>
        <input
          className={styles.input}
          type='text'
          id='fname'
          name='fname'
          autoComplete='off'
          placeholder='Search a cocktail'
          onChange={handleChange}
          value={search}
        ></input>
        <button className={styles.button}>Submit Search</button>
      </form>
    </div>
  );
};

export default SearchBar;
