import { useEffect, useState } from 'react';
import * as MovieApi from '../../services/movie-api';
import defaultImg from '../../defaultImg/PngItem_1503945.png';
import {
  Container,
  ActorCard,
  Img,
  ActorCharachter,
  Span,
  NameHolder,
} from './Cast.styled';

export default function Cast({ movieId }) {
  const [cast, setCast] = useState(null);
  useEffect(() => {
    MovieApi.fetchCastMovie(movieId).then(data => {
      setCast(data.cast);
      window.scrollTo({ top: 690, behavior: 'smooth' });
    });
  }, [movieId]);

  return (
    <>
      {cast && (
        <Container>
          {cast.map(castItem => (
            <ActorCard key={castItem.id}>
              <Img
                src={
                  castItem.profile_path
                    ? `https://image.tmdb.org/t/p/w300/${castItem.profile_path}`
                    : defaultImg
                }
                alt={castItem.name}
                height="100px"
              />
              <NameHolder>
                <h3>{castItem.name}</h3>
                <ActorCharachter>
                  Character: <Span>{castItem.character}</Span>
                </ActorCharachter>
              </NameHolder>
            </ActorCard>
          ))}
        </Container>
      )}
    </>
  );
}
