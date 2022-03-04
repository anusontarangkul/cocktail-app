import React from 'react';
import CocktailCard from '../CocktailCard/CocktailCard';
import styles from './SearchResults.module.css';
import { useSelector } from 'react-redux';

const SearchResults = () => {
  const { results } = useSelector((state) => state.cocktail);

  return (
    <main>
      <div className={styles.container}>
        {results.drinks &&
          results.drinks.map((cocktail, i) => {
            return <CocktailCard key={i} cocktail={cocktail} />;
          })}
      </div>
    </main>
  );
};

export default SearchResults;
