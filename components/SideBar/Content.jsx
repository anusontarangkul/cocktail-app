import React from 'react';
import styles from './Content.module.css';
import GoogleButton from 'react-google-button';
import { CocktailState } from '../../CocktailContext';
import { GoogleAuthProvider, signInWithPopup, signOut } from '@firebase/auth';
import { auth } from '../../firebase';
import Button from '@mui/material/Button';
import { useRouter } from 'next/router';

const Content = ({ state, setState, anchor }) => {
  const { user, setAlert } = CocktailState();
  const router = useRouter();

  function delay(time) {
    return new Promise((resolve) => setTimeout(resolve, time));
  }

  const toggleDrawer = (anchor, open) => {
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
    toggleDrawer('right', false);
    signInWithPopup(auth, googleProvider)
      .then((res) => {
        setAlert({
          open: true,
          message: `Login Successful. Welcome ${res.user.displayName}`,
          type: 'success',
        });
      })
      .catch((error) => {
        setAlert({
          open: true,
          message: error.message,
          type: 'error',
        });
      });
  };
  const handleSignOut = async () => {
    toggleDrawer('right', false);
    await delay(100);
    signOut(auth)
      .then(() => {
        setAlert({
          open: true,
          message: `Successfully logged out`,
          type: 'success',
        });
        router.reload(window.location.pathname);
      })
      .catch((error) => {
        setAlert({
          open: true,
          message: error.message,
          type: 'error',
        });
      });
  };

  if (user) {
    return (
      <div className={styles.container}>
        <h4 className={styles.heading}>{user.displayName}</h4>
        <Button
          onClick={handleSignOut}
          variant='contained'
          className={styles.signOutbtn}
        >
          Sign Out
        </Button>
      </div>
    );
  }
  return (
    <div className={styles.container}>
      <h4 className={styles.heading}>Login</h4>
      <GoogleButton className={styles.btn} onClick={handleSignIn} />
    </div>
  );
};

export default Content;
