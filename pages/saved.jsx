import React from 'react';
import Nav from '../components/Nav/Nav';
import Alert from '../components/Alert/Alert';
import { CocktailState } from '../CocktailContext';
import SavedResults from '../components/SavedResults/SavedResults';
import styles from './saved.module.css';

const Saved = () => {
  const { user, saved, setSaved, setAlert } = CocktailState();

  return (
    <main>
      <Nav />
      <h1 className={styles.title}>{saved.length} Saved Cocktails</h1>
      <SavedResults />
      <Alert />
    </main>
  );
};

export default Saved;
