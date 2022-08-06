import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

import Breadcrumbs from '../BreadCrumbs/BreadCrumbs';
import ApiRestAuthIsAdminToken from '../../scripts/api/rest/auth/is-admin-token';
import styles from './AppWrapper.module.css';

const AppWrapper = (props) => {
  let navigate = useNavigate();

  useEffect(() => {
    async function isAdminFetch() {
      const isAdmin = await ApiRestAuthIsAdminToken();
      if (!isAdmin) {
        navigate('/sign-in');
      }
    }
    isAdminFetch();
  }, [navigate]);

  return (
    <div className={styles.AppWrapper}>
      <div className={styles.AppWrapper_not_footer}>
        <Breadcrumbs />
      </div>
      <div className={styles.AppWrapper_footer}>{props.children}</div>
    </div>
  );
};

AppWrapper.propTypes = {
  children: PropTypes.element,
};

export default AppWrapper;
