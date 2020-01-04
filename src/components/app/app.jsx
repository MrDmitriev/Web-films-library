import React from 'react';
import {Switch, Route} from 'react-router-dom';
import MainPage from '../main-page/main-page.jsx';
import MovieDetail from '../movie-detail/movie-detail.jsx';

export const App = () => {
  return (
    <Switch>
      <Route path={`/`} component={MainPage} exact />
      <Route path={`/films/:id`} component={MovieDetail} exact />
    </Switch>
  );
};
