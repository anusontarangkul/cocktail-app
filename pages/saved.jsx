import React from 'react';
import Nav from '../components/Nav/Nav';
import Alert from '../components/Alert/Alert';
import { CocktailState } from '../CocktailContext';

const Saved = () => {
  const { user, saved, setSaved, setAlert } = CocktailState();

  return (
    <main>
      <Nav />
      <h2>Saved Cocktails</h2>
      <Alert />
    </main>
  );
};

export default Saved;
