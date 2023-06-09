import React, { useState, useEffect } from 'react';
import Auth from '../../utils/auth';
import { useMutation } from "@apollo/client";
import { ADD_MOVIE } from '../../utils/mutations';

const SearchBar = () => {
    // create state for holding returned api data
    const [searchedMovies, setSearchedMovies] = useState([]);

    // create state for holding our search field data
    const [searchInput, setSearchInput] = useState('');

    // create state to hold saved bookId values
    const [savedMovieIds, setSavedMovieIds] = useState(getSavedMovieIds());

    const [saveMovie] = useMutation(ADD_MOVIE);


    return (
        <form onSubmit={ } className="flex flex-col">
            <input type="text" placeholder="Search" value={searchTerm} onChange={ } className="px-4 py-2 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
            {suggestions.length > 0 && (
                <div className="">
                    {suggestions.map((suggestion) => (
                        <button key={suggestion.id} className="px-4 py-2 text-left hover:bg-gray-100 focus:outline-none" onClick={() => { }}>
                            {suggestion.title}
                        </button>
                    ))}
                </div>
            )}
            <button type="submit" className="mt-2 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500">
                Search
            </button>
        </form>
    );
};

export default SearchBar;
