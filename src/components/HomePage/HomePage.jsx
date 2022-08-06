import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBook } from '@fortawesome/free-solid-svg-icons';

import AppWrapper from '../AppWrapper/AppWrapper';
import AppContainer from '../AppContainer/AppContainer';
import styles from './HomePage.module.css';

const pages = [
  {
    href: '/contact-types',
    title: 'Справочник "Типы контакта"',
  },
  {
    href: '/contacts',
    title: 'Справочник "Контакты"',
  },
];

const HomePage = () => {
  return (
    <AppWrapper>
      <AppContainer>
        <ul className={styles.ul}>
          {pages.map((element, element_i) => {
            const { href, title } = element || {};
            return (
              <li key={element_i}>
                <Link to={href}>
                  <div>
                    <div className={styles.icon_block}>
                      <FontAwesomeIcon icon={faBook} />
                    </div>
                    <div className={styles.title_block}>{title}</div>
                  </div>
                </Link>
              </li>
            );
          })}
        </ul>
      </AppContainer>
    </AppWrapper>
  );
};

export default HomePage;
