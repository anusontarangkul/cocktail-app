import React from 'react';
import styles from './IngredientsTag.module.css';

const IngredientsTag = ({ name, amount }) => {
  return (
    <p className={styles.container}>
      {amount} {name}
    </p>
  );
};

export default IngredientsTag;
