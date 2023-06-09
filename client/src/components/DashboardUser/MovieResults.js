import React from 'react';

const SearchResults = ({ searchResults, handleAddMovie }) => {
    
  return (
    <div>
        <h2>Search Results</h2>
            {searchResults.map((result) => (
                <div key={result.id}>
                <img src={result.image} alt={result.title} />
                <h3>{result.title}</h3>
                <p>{result.description}</p>
                <button onClick={handleAddMovie(result.id)}>Add to List</button>
                </div>
            ))}
    </div>
  );
};

export default SearchResults;