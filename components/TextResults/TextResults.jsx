import React from 'react';
import { useSelector } from 'react-redux';
import styles from './TextResults.module.css';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

const TextResults = () => {
  const { results, display, status } = useSelector((state) => state.cocktail);
  if (!status) {
    return null;
  }
  if (status === 'loading') {
    return (
      <Box
        sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
      >
        <CircularProgress />
      </Box>
    );
  }

  // need status for error
  return (
    <h3 className={styles.text}>
      Showing {results.drinks.length} results for &quot;{display}&quot;
    </h3>
  );
};

export default TextResults;
