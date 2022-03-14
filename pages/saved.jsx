import React from 'react';
import Nav from '../components/Nav/Nav';
import Alert from '../components/Alert/Alert';
import { CocktailState } from '../CocktailContext';
import SavedResults from '../components/SavedResults/SavedResults';
import styles from './saved.module.css';
import { auth } from '../firebase';
import Head from 'next/head';

const Saved = () => {
  const { user, saved, setSaved, setAlert } = CocktailState();

  return (
    <main>
      <Head>
        <title>Saved Cocktails</title>
        <meta name='description' content='Viewing saved cocktails' />
        <link
          rel='icon'
          href='data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🍹</text></svg>'
        />
      </Head>
      <Nav />
      {auth.currentUser ? (
        <h1 className={styles.title}>{saved.length} Saved Cocktails</h1>
      ) : (
        <h1 className={styles.title}>Login to Save Cocktails</h1>
      )}
      <SavedResults />
      <Alert />
    </main>
  );
};

export default Saved;
