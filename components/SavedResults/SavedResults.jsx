import CocktailCard from '../CocktailCard/CocktailCard';
import styles from './SavedResults.module.css';
import React from 'react';
import { CocktailState } from '../../CocktailContext';

const SavedResults = () => {
  const { saved } = CocktailState();
  return (
    <main>
      <div className={styles.container}>
        {saved.map((cocktail, i) => {
          return <CocktailCard key={i} cocktail={cocktail} />;
        })}
      </div>
    </main>
  );
};

export default SavedResults;
