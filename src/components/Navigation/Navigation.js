import React from 'react';
//import { connect } from 'react-redux';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { authSelectors } from '../../redux/auth';
import routes from '../../routes';
import styles from './Navigation.module.css';

/*const styles = {
  link: {
    display: 'inline-block',
    textDecoration: 'none',
    padding: 12,
    fontWeight: 700,
    color: '#2A363B',
  },
  activeLink: {
    color: '#2b32b2',
  },
};*/

const { home, contacts } = routes;

//const Navigation = ({ isAuthenticated }) => (
export default function Navigation() {
  const isAuthenticated = useSelector(authSelectors.getIsAuthenticated);

  return (
    <nav>
      <NavLink
        to={home}
        exact
        className={styles.link}
        activeClassName={styles.activeLink}
      >
        Home
      </NavLink>

      {isAuthenticated && (
        <NavLink
          to={contacts}
          exact
          className={styles.link}
          activeClassName={styles.activeLink}
        >
          Phonebook
        </NavLink>
      )}
    </nav>
  );
}
/*const mapStateToProps = state => ({
  isAuthenticated: authSelectors.getIsAuthenticated(state),
});

export default connect(mapStateToProps)(Navigation);*/
