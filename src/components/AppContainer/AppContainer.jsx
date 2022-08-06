import React from 'react';
import PropTypes from 'prop-types';

import styles from './AppContainer.module.css';

const AppContainer = (props) => {
  return (
    <div className={styles.container} style={props.style}>
      {props.children}
    </div>
  );
};

AppContainer.propTypes = {
  children: PropTypes.element,
};

export default AppContainer;
