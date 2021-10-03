import styled from '@emotion/styled';
export const Container = styled.div`
  padding: 10px;
  align-items: center;
`;

export const Ul = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 25px;
  padding-inline-start: 0px;
`;
export const MovieItems = styled.li`
  list-style: none;
  border: solid 1px;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  border-radius: 5px;
  &:hover {
    transform: scale(1.06);
  }
`;

export const Poster = styled.img`
  display: block;
  max-width: 100%;
  height: auto;
  object-fit: contain;
  margin-bottom: 10px;
`;

export const Title = styled.h2`
  text-align: center;
  color: #3d063d;
`;

export const PageHeading = styled.h1`
  color: #2d012d;
`;
