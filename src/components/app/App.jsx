import React from 'react';
import { 
        Switch,
        Route, 
        BrowserRouter as Router 
      } from 'react-router-dom'
import MovieContainer from '../../containers/MovieContainer';
import MovieList from '../movies/MovieList';
import Movie from '../movies/Movie';

export default function App() {
  return (
  <Router>
    <Switch>
      <Route 
        path="/" 
        exact
        component={MovieContainer}
        />
      <Route 
        path="/:id" 
        exact
        component={Movie}
        />
    </Switch>
  </Router>
  )
}
