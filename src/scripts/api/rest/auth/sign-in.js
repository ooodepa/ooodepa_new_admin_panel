import ToastController from '../../../ToastController/ToastController';

export default async function ApiRestSignIn(body = {}) {
  try {
    const url = `${process.env.REACT_APP__URL_BACKEND_SERVER}/api/auth/sign-in`;
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    });

    if (response.status !== 200) {
      const json = await response.json();
      ToastController.warning(
        `<pre>${JSON.stringify(json, null, 2)}</pre>`,
        '/api/auth/sign-in'
      );
      return false;
    }

    const json = await response.json();

    const { token } = json;
    localStorage.setItem('token', JSON.stringify(token));

    ToastController.success('Авторизовались', '/api/auth/sign-in');

    return true;
  } catch (error) {
    ToastController.error('' + error, '/api/auth/sign-in');
    return false;
  }
}
