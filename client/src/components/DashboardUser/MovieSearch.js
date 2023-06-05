import React, { useState } from 'react';

const SearchBar = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [suggestions, setSuggestions] = useState([]);


  return (
    <form onSubmit={} className="flex flex-col">
      <input
        type="text"
        placeholder="Search"
        value={searchTerm}
        onChange={}
        className="px-4 py-2 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      {suggestions.length > 0 && (
        <div className="mt-2 rounded-md shadow-lg bg-white divide-y divide-gray-200">
          {suggestions.map((suggestion) => (
            <button
              key={suggestion.id}
              className="px-4 py-2 text-left hover:bg-gray-100 focus:outline-none"
              onClick={() => {
                setSearchTerm(suggestion.title);
                setSuggestions([]);
              }}
            >
              {suggestion.title}
            </button>
          ))}
        </div>
      )}
      <button
        type="submit"
        className="mt-2 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        Search
      </button>
    </form>
  );
};

export default SearchBar;
