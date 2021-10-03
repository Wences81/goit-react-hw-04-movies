import { Route, Switch } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import { Toaster } from 'react-hot-toast';
import Navigation from '../Navigation/Navigation';
import Loader from '../Loader/Loader.jsx';
import { Container } from './App.styled.js';

const AsyncHomePage = lazy(() =>
  import(
    '../../views/HomePage/HomePage.jsx' /* webpackChunkName: "home-page" */
  ),
);

const AsyncMoviesPage = lazy(() =>
  import(
    '../../views/MoviesPage/MoviesPage.jsx' /* webpackChunkName: "movies-page" */
  ),
);

const AsyncMovieDetailsPage = lazy(() =>
  import(
    '../../views/MovieDetailsPage/MovieDetailsPage.jsx' /* webpackChunkName: "movie-details-page" */
  ),
);

function App() {
  return (
    <Container>
      <Navigation />

      <Suspense fallback={<Loader />}>
        <Switch>
          <Route path="/" exact component={AsyncHomePage} />
          <Route path="/movies" exact component={AsyncMoviesPage} />
          <Route path="/movies/:movieId" component={AsyncMovieDetailsPage} />
          <Route component={AsyncHomePage} />
        </Switch>
      </Suspense>
      <Toaster />
    </Container>
  );
}

export default App;
