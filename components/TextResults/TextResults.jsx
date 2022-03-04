import React from 'react';
import { useSelector } from 'react-redux';

const TextResults = () => {
  const { results, display, status } = useSelector((state) => state.cocktail);
  if (!status) {
    return null;
  }
  if (status === 'loading') {
    return <p>loading</p>;
  }

  // need status for error
  return (
    <div>
      <p>
        Showing {results.drinks.length} results for {display}
      </p>
    </div>
  );
};

export default TextResults;
