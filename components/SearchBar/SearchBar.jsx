import React from 'react';
import styles from './SearchBar.module.css';
import TextField from '@mui/material/TextField';
const SearchBar = () => {
  return (
    <div className={styles.headingContainer}>
      <h1 className={styles.title}>
        Search your <span className={styles.title2}>favorite cocktail</span>{' '}
      </h1>
      <form action='/action_page.php' className={styles.searchForm}>
        <input
          className={styles.input}
          type='text'
          id='fname'
          name='fname'
          autocomplete='off'
          placeholder='Search a cocktail'
        ></input>
        <button className={styles.button}>Submit Search</button>
      </form>
    </div>
  );
};

export default SearchBar;
