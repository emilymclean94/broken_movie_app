import React from 'react';

const SearchResults = ({ searchResults }) => {
  return (
    <div>
        <h2>Search Results</h2>
            {searchResults.map((result) => (
                <div key={result.id}>
                <img src={result.image} alt={result.title} />
                <h3>{result.title}</h3>
                <p>{result.description}</p>
                </div>
            ))}
    </div>
  );
};

export default SearchResults;