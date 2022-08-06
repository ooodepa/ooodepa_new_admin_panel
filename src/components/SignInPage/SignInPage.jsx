import React from 'react';
// import PropTypes from 'prop-types';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

import ApiRestSignIn from './../../scripts/api/rest/auth/sign-in';
import styles from './SignInPage.module.css';

const SignInPage = (props) => {
  let navigate = useNavigate();
  const {
    register,
    handleSubmit,
    // formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const isLogin = await ApiRestSignIn(data);
    if (isLogin) {
      navigate('/');
    }
  };
  return (
    <div className={styles.wrapper}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input {...register('username')} type="text" placeholder="Логин" />
        <input {...register('password')} type="password" placeholder="Пароль" />
        <input type="submit" value="Продолжить" />
      </form>
    </div>
  );
};

SignInPage.propTypes = {};

export default SignInPage;
