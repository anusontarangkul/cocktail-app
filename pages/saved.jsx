import React from 'react';
import Nav from '../components/Nav/Nav';
import Alert from '../components/Alert/Alert';
import { CocktailState } from '../CocktailContext';
import SavedResults from '../components/SavedResults/SavedResults';

const Saved = () => {
  const { user, saved, setSaved, setAlert } = CocktailState();

  return (
    <main>
      <Nav />
      <h2>Saved Cocktails</h2>
      <SavedResults />
      <Alert />
    </main>
  );
};

export default Saved;
