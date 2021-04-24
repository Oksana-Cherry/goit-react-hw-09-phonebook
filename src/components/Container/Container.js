import React from 'react';
import PropTypes from 'prop-types';
import styles from './Container.module.css';

/*const Container = ({ children }) => (
  <div className={styles.Container}>{children}</div>
);

export default Container;*/
export default function Container({ children }) {
  return <div className={styles.Container}>{children}</div>;
}

Container.defaultProps = {
  children: 'Here must be some text...',
};

Container.propTypes = {
  children: PropTypes.node,
};
