import ToastController from '../../../ToastController/ToastController';

export default async function ApiRestAuthIsAdminToken(body = {}) {
  try {
    const url = `${process.env.REACT_APP__URL_BACKEND_SERVER}/api/auth/is-admin-token`;
    const token = JSON.parse(localStorage.getItem('token'));
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(body),
    });
    if (response.status !== 200) {
      const json = await response.json();
      localStorage.removeItem('token');
      ToastController.warning(
        `<pre>${JSON.stringify(json, null, 2)}</pre>`,
        '/api/auth/is-admin-token'
      );
      return false;
    }

    ToastController.success(
      'Вы админ и токен не просрочен',
      '/api/auth/is-admin-token'
    );
    return true;
  } catch (error) {
    ToastController.error('' + error, '/api/auth/is-admin-token');
    return false;
  }
}
