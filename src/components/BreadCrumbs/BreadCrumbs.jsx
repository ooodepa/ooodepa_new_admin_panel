import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';

import Container from '../AppContainer/AppContainer';
import styles from './BreadCrumbs.module.css';

export default function Breadcrumbs() {
  let navigate = useNavigate();
  const [arr, setArr] = useState([]);

  useEffect(() => {
    const array =
      process.env.REACT_APP__USE_HASH_ROUTER === 'true'
        ? getHashRouterBreadcrumbs()
        : getBrowserRouterBreadcrumbs();
    setArr(array);
  }, [navigate]);

  function getBrowserRouterBreadcrumbs() {
    try {
      let folders = window.location.pathname.split('/');

      if (folders.length === 2 && folders[1] === '') {
        const array = [{ folder: 'home', href: '/' }];
        setArr(array);
        return array;
      }

      let array = [];
      folders.forEach((folder) => {
        const subHref = array?.[array.length - 1]?.href;
        const href = subHref
          ? `${array[array.length - 1].href}${folder}/`
          : `${folder}/`;
        array.push({ href, folder });
      });

      array[0].folder = 'home';
      return array;
    } catch (error) {
      return [];
    }
  }

  function getHashRouterBreadcrumbs() {
    try {
      let folders = window.location.hash.replace('#', '').split('/');

      if (folders.length === 2 && folders[1] === '') {
        const array = [{ folder: 'home', href: '/' }];
        setArr(array);
        return array;
      }

      let array = [];
      folders.forEach((folder) => {
        const subHref = array?.[array.length - 1]?.href;
        const href = subHref
          ? `${array[array.length - 1].href}${folder}/`
          : `${folder}/`;
        array.push({ href, folder });
      });

      array[0].folder = 'home';
      return array;
    } catch (error) {
      return [];
    }
  }

  return (
    <nav className={styles.breadcrumbs_block}>
      <Container>
        <ol>
          {arr.map((element) => {
            return (
              <li key={element.href}>
                <Link to={element.href}>{element.folder}</Link>
              </li>
            );
          })}
        </ol>
      </Container>
    </nav>
  );
}
