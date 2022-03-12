import React from 'react';
import CocktailCard from '../CocktailCard/CocktailCard';
import styles from './SearchResults.module.css';
import { useSelector } from 'react-redux';
import Container from '@mui/material/Container';

const SearchResults = () => {
  const { results } = useSelector((state) => state.cocktail);

  return (
    <div className={styles.background}>
      <Container maxWidth='xl' className={styles.container}>
        {results.drinks &&
          results.drinks.map((cocktail, i) => {
            return <CocktailCard key={i} cocktail={cocktail} />;
          })}
      </Container>
    </div>
  );
};

export default SearchResults;
