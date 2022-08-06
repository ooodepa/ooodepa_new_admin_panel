import React from 'react';
// import PropTypes from 'prop-types';

import styles from './AppForm.module.css';

const AppForm = (props) => {
  return (
    <div className={styles.wrapper}>
      <span className={styles.title_block}>{props.title}</span>
      <div className={styles.not_footer}>{props.children}</div>
      <footer className={styles.footer}>{props.footer}</footer>
    </div>
  );
};

AppForm.propTypes = {};

export default AppForm;
