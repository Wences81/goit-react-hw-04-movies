import { NavLink } from 'react-router-dom';
import { NavigationContainer } from './Navigation.styled';

const Navigation = () => {
  return (
    <NavigationContainer>
      <NavLink
        exact
        to="/"
        className="Navigation_link"
        activeClassName="Active_link"
      >
        {' '}
        Home Page
      </NavLink>

      <NavLink
        to="/movies"
        className="Navigation_link"
        activeClassName="Active_link"
      >
        Movies
      </NavLink>
    </NavigationContainer>
  );
};

export default Navigation;
