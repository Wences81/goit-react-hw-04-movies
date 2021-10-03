import { useEffect, useState, lazy, Suspense } from 'react';
import {
  Route,
  useParams,
  useRouteMatch,
  useLocation,
  useHistory,
} from 'react-router';
import { NavLink } from 'react-router-dom';
import toast from 'react-hot-toast';
import * as MovieApi from '../../services/movie-api';
import Loader from '../../components/Loader/Loader';

import {
  Button,
  Container,
  MovieCard,
  MovieInfo,
  Poster,
} from './MovieDetailsPage.styled';

const Cast = lazy(() => import('../Cast/Cast' /* webpackChunkName: "cast" */));

const Reviews = lazy(() =>
  import('../Reviews/Reviews' /* webpackChunkName: "reviews" */),
);

export default function MovieDetailsPage() {
  const { movieId } = useParams();
  const { url, path } = useRouteMatch();

  const [movie, setMovie] = useState(null);
  const location = useLocation();
  const history = useHistory();
  const locationForm = location?.state?.from?.location;

  useEffect(() => {
    MovieApi.fetchMovieById(movieId)
      .then(data => {
        setMovie(data);
      })
      .catch(error => {
        console.log(error);
        history.push(locationForm ?? '/movies');
        toast.error('Sorry this movie not found');
      });
  }, [movieId, history, locationForm]);

  const goBack = () => {
    history.push(locationForm ?? '/');
  };

  return (
    <Container>
      {movie && (
        <>
          <Button type="button" onClick={goBack}>
            Go back
          </Button>
          <MovieCard>
            <Poster
              src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
              alt={movie.original_title}
            />
            <MovieInfo>
              <h1>{movie.title}</h1>

              <p>
                Score: <span>{movie.vote_average}</span>
              </p>
              <h3>Overview: </h3>
              <span>{movie.overview}</span>
              <h3>Genres: </h3>
              <span>
                {movie.genres.map(genre => (
                  <li key={genre.id}>{genre.name}</li>
                ))}
              </span>
              <h3>Additional information: </h3>

              <NavLink
                to={{
                  pathname: `${url}/cast`,
                  state: { from: location?.state?.from ?? '/' },
                }}
                className="Navigation_link Addititonal_info"
                activeClassName="Active_link"
              >
                Cast
              </NavLink>

              <NavLink
                to={{
                  pathname: `${url}/reviews`,
                  state: { from: location?.state?.from ?? '/' },
                }}
                className="Navigation_link Addititonal_info"
                activeClassName="Active_link"
              >
                Reviews
              </NavLink>
            </MovieInfo>
          </MovieCard>
        </>
      )}

      <Suspense fallback={<Loader />}>
        <Route path={`${path}/cast`}>
          <Cast movieId={movieId} />
        </Route>

        <Route path={`${path}/reviews`}>
          <Reviews movieId={movieId} />
        </Route>
      </Suspense>
    </Container>
  );
}
