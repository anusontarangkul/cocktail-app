import React from 'react';
import { useSelector } from 'react-redux';
import styles from './TextResults.module.css';

const TextResults = () => {
  const { results, display, status } = useSelector((state) => state.cocktail);
  if (!status) {
    return null;
  }
  if (status === 'loading') {
    return <p>loading</p>;
  }

  // need status for error
  return (
    <h3 className={styles.text}>
      Showing {results.drinks.length} results for "{display}"
    </h3>
  );
};

export default TextResults;
