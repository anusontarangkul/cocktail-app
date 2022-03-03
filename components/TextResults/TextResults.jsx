import React from 'react';

const TextResults = ({ cocktails, search }) => {
  if (!cocktails.drinks) {
    return null;
  }
  return (
    <div>
      <p>Showing {cocktails.drinks.length} results:</p>
    </div>
  );
};

export default TextResults;
