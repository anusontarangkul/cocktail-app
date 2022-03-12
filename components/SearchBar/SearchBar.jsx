import React, { useState } from 'react';
import styles from './SearchBar.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { getCocktails } from '../../redux/cocktail';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';

const SearchBar = ({ setCocktails }) => {
  const [search, setSearch] = useState('');
  const dispatch = useDispatch();

  const submitHandler = async (e) => {
    e.preventDefault();
    if (search === '') {
      return;
    }
    try {
      dispatch(getCocktails(search));
      setSearch('');
    } catch (e) {
      console.log(e);
    }
  };

  const handleChange = (e) => {
    setSearch(e.target.value);
  };
  return (
    <div className={styles.headingContainer}>
      <Container maxWidth='xl'>
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
          <Button
            className={styles.button}
            variant='contained'
            onClick={submitHandler}
          >
            Search
          </Button>
        </form>
      </Container>
    </div>
  );
};

export default SearchBar;
