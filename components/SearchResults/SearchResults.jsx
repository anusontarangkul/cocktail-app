import React from 'react';
import CocktailCard from '../CocktailCard/CocktailCard';
import styles from './SearchResults.module.css';

const SearchResults = () => {
  return (
    <main>
      <div className={styles.container}>
        <CocktailCard />
        <CocktailCard />
        <CocktailCard />
      </div>
    </main>
  );
};

export default SearchResults;
