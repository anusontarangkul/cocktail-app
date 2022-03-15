import React from 'react';

import Alert from '@mui/material/Alert';
import Snackbar from '@mui/material/Snackbar';
import styles from './Alert.module.css';
import { CocktailState } from '../../CocktailContext';

export default function BasicAlerts() {
  const { alert, setAlert } = CocktailState();
  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setAlert({ open: false });
  };
  return (
    <Snackbar
      open={alert.open}
      sx={{ width: '100%' }}
      spacing={2}
      autoHideDuration={2000}
      onClose={handleClose}
    >
      <Alert
        severity={alert.success}
        elevation={10}
        variant='filled'
        className={styles.alert}
      >
        {alert.message}
      </Alert>
    </Snackbar>
  );
}
