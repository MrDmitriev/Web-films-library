import React from 'react';
import {Switch, Route} from 'react-router-dom';
import MainPage from '../main-page/main-page.jsx';
import MovieDetail from '../movie-detail/movie-detail.jsx';
import SignIn from '../sign-in/sign-in.jsx';

export const App = () => {
  return (
    <Switch>
      <Route path={`/`} component={MainPage} exact />
      <Route path={`/films/:id`} component={MovieDetail} exact />
      <Route path={`/login`} component={SignIn} exact />
    </Switch>
  );
};
