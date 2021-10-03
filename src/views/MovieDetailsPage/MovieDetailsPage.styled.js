import styled from '@emotion/styled';
export const Container = styled.div`
  padding: 15px;
`;
export const Button = styled.button`
  padding: 8px 16px;
  margin-top: 15px;
  margin-bottom: 40px;
  border-radius: 2px;
  background-color: #3f51b5;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  text-align: center;
  display: inline-block;
  align-items: center;
  color: #fff;
  border: 0;
  text-decoration: none;
  cursor: pointer;
  font-family: inherit;
  font-size: 18px;
  line-height: 24px;
  font-style: normal;
  font-weight: 500;
  min-width: 180px;
  box-shadow: 5px 6px 9px rgb(85, 42, 85);
`;
export const MovieCard = styled.div`
  display: flex;

  margin-bottom: 30px;
`;

export const MovieInfo = styled.div`
  padding: 10px 25px;
`;
export const Poster = styled.img`
  display: block;
  max-width: 320px;
  height: auto;
  object-fit: cover;
  margin-right: 5px;
`;
