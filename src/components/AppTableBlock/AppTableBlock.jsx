import React from 'react';
import PropTypes from 'prop-types';

import styles from './AppTableBlock.module.css';

const AppTableBlock = (props) => {
  return (
    <div className={styles.table_block}>
      <span className={styles.title}>{props.title ? props.title : 'Табличная часть'}</span>
      {props.children}
    </div>
  );
};

AppTableBlock.propTypes = {
  children: PropTypes.element,
};

export default AppTableBlock;
