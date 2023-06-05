import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import SearchBar from './SearchBar';
import SearchResults from './SearchResults';

const MyDash = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/profile" component={SearchBar} />
        <Route exact path="/results" component={SearchResults} />
      </Switch>
    </Router>
  );
};

export default MyDash;