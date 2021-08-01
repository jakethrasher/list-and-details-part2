import React from 'react';
import { 
        Switch,
        Route, 
        BrowserRouter as Router 
      } from 'react-router-dom';
import MovieContainer from '../../containers/MovieContainer';
import MovieDetail from '../movies/MovieDetail';

export default function App() {
  return (
  <Router>
    <Switch>
      <Route exact path='/:id'>
        <MovieDetail/>
      </Route>
      <Route exact path='/'>
        <MovieContainer/>
      </Route>
    </Switch>
  </Router>
  )
}
