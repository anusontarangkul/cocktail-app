import React from 'react';
import styles from './Content.module.css';
import GoogleButton from 'react-google-button';
import { CocktailState } from '../../CocktailContext';
import { GoogleAuthProvider, signInWithPopup, signOut } from '@firebase/auth';
import { auth } from '../../firebase';

const Content = () => {
  const { user } = CocktailState();

  const googleProvider = new GoogleAuthProvider();
  const handleSignIn = () => {
    signInWithPopup(auth, googleProvider)
      .then((res) => {
        console.log('auth', auth);
        console.log('signin successful');
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        console.log('signed out');
        console.log('auth', auth);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  if (user) {
    return (
      <div className={styles.container}>
        <h3>Sign Out</h3>
        <button onClick={handleSignOut}>Sign Out</button>
      </div>
    );
  }
  return (
    <div className={styles.container}>
      <h3>Login</h3>
      <GoogleButton className={styles.googleBtn} onClick={handleSignIn} />
    </div>
  );
};

export default Content;
