import React from 'react';
import CocktailCard from '../CocktailCard/CocktailCard';
import styles from './SearchResults.module.css';

const SearchResults = ({ cocktails }) => {
  console.log('searchresults', cocktails);
  console.log(typeof cocktails);
  // cocktails.map((e) => {
  //   console.log('check');
  // });
  return (
    <main>
      <div className={styles.container}>
        {cocktails.drinks &&
          cocktails.drinks.map((cocktail, i) => {
            return <CocktailCard key={i} cocktail={cocktail} />;
          })}
      </div>
    </main>
  );
};

export default SearchResults;
