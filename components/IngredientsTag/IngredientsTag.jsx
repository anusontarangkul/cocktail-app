import React from 'react';
import styles from './IngredientsTag.module.css';

const IngredientsTag = ({ name, amount }) => {
  return (
    <div className={styles.container}>
      <p>
        {amount} {name}
      </p>
    </div>
  );
};

export default IngredientsTag;
