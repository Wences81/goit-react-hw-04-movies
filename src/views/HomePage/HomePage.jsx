import { useEffect, useState } from 'react';
import { Link, useLocation, useRouteMatch } from 'react-router-dom';
import * as MovieApi from '../../services/movie-api';
import {
  Container,
  MovieItems,
  Poster,
  Ul,
  Title,
  PageHeading,
} from './HomePage.styled';

export default function HomePage() {
  const { url } = useRouteMatch();
  const location = useLocation();
  const [movies, setMovies] = useState(null);

  useEffect(() => {
    MovieApi.fetchPopularMovie()
      .then(data => {
        setMovies(data.results);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  return (
    <Container>
      <PageHeading>Popular Movies</PageHeading>
      {movies && (
        <Ul>
          {movies.map(movie => (
            <MovieItems key={movie.id}>
              <Link
                to={{
                  pathname: `${url}movies/${movie.id}`,
                  state: { from: { location } },
                }}
              >
                <Poster
                  src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                  alt={movie.original_title ?? movie.name}
                />
              </Link>
              <Title>
                {movie.name && movie.name}
                {movie.original_title}
              </Title>
            </MovieItems>
          ))}
        </Ul>
      )}
    </Container>
  );
}
