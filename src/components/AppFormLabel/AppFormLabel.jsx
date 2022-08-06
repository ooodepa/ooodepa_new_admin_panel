import React from 'react';
import PropTypes from 'prop-types';

import styles from './AppFormLabel.module.css';

const AppFormLabel = (props) => {
  return (
    <label className={styles.label}>
      <span>{props.label}: </span>
      <input type={props.type} value={props.value} onChange={props.onChange} />
    </label>
  );
};

AppFormLabel.propTypes = {
  label: PropTypes.string,
  type: PropTypes.string,
  value: PropTypes.string,
};

export default AppFormLabel;
