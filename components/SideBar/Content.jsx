import React from 'react';
import styles from './Content.module.css';
import GoogleButton from 'react-google-button';
import { CocktailState } from '../../CocktailContext';
import { GoogleAuthProvider, signInWithPopup, signOut } from '@firebase/auth';
import { auth } from '../../firebase';
import { useRouter } from 'next/router';

const Content = ({ state, setState, anchor }) => {
  const router = useRouter();
  const { user } = CocktailState();

  const toggleDrawer = (anchor, open) => {
    console.log('in toggle');
    console.log('anchor', anchor);
    console.log('open', open);
    if (
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }

    setState({ ...state, [anchor]: false });
  };

  const googleProvider = new GoogleAuthProvider();
  const handleSignIn = () => {
    console.log('anchor', anchor);
    console.log('state', state);

    signInWithPopup(auth, googleProvider)
      .then((res) => {
        console.log('auth', auth);
        console.log('signin successful');
        toggleDrawer('right', false);
      })
      .catch((error) => {
        console.log(error);
        toggleDrawer(anchor, false);
      });
  };
  const handleSignOut = () => {
    console.log('anchor', anchor);
    console.log('state', state);
    toggleDrawer('right', false);
    signOut(auth)
      .then(() => {
        console.log('signed out');
        console.log('auth', auth);
        toggleDrawer(anchor, false);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  if (user) {
    return (
      <div className={styles.container}>
        <h3>{user.displayName}</h3>
        <button className={styles.signOutBtn} onClick={handleSignOut}>
          Sign Out
        </button>
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
