import ToastController from '../../ToastController/ToastController';

export default class AbstractApiCrud {
  static async create(URI, data) {
    try {
      const url = `${process.env.REACT_APP__URL_BACKEND_SERVER}${URI}`;
      const token = JSON.parse(localStorage.getItem('token'));
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(data),
      });
      if (response.status !== 201) {
        const json = await response.json();
        ToastController.warning(
          `<pre>${JSON.stringify(json, null, 2)}</pre>`,
          `POST ${URI}`
        );
        return false;
      }

      ToastController.success('Создан', `POST ${URI}`);
      return true;
    } catch (error) {
      ToastController.error('' + error, `POST ${URI}`);
      return false;
    }
  }

  static async readAll(URI) {
    try {
      const url = `${process.env.REACT_APP__URL_BACKEND_SERVER}${URI}`;
      const response = await fetch(url);
      const json = await response.json();
      ToastController.success('Получили массив', `GET ${URI}`);
      return json;
    } catch (error) {
      ToastController.error('' + error, `GET ${URI}`);
      return [];
    }
  }

  static async readOne(URI, id) {
    try {
      const url = `${process.env.REACT_APP__URL_BACKEND_SERVER}${URI}/${id}`;
      const response = await fetch(url);
      const json = await response.json();
      ToastController.success('Получили данные', `GET ${URI}/{id}`);
      return json;
    } catch (error) {
      ToastController.error('' + error, `GET ${URI}/{id}`);
      return {};
    }
  }

  static async update(URI, id, data) {
    try {
      const url = `${process.env.REACT_APP__URL_BACKEND_SERVER}${URI}/${id}/`;
      const token = JSON.parse(localStorage.getItem('token'));
      const response = await fetch(url, {
        method: 'PUT',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(data),
      });
      if (response.status !== 200) {
        const json = await response.json();
        ToastController.warning(
          `<pre>${JSON.stringify(json, null, 2)}</pre>`,
          `PUT ${URI}/{id}`
        );
        return false;
      }

      ToastController.success('Обновлен успешно', `PUT ${URI}/{id}`);
      return true;
    } catch (error) {
      ToastController.error('' + error, `PUT ${URI}/{id}`);
      return false;
    }
  }

  static async remove(URI, id) {
    try {
      const url = `${process.env.REACT_APP__URL_BACKEND_SERVER}${URI}/${id}/`;
      const token = JSON.parse(localStorage.getItem('token'));
      const response = await fetch(url, {
        method: 'DELETE',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          authorization: `Bearer ${token}`,
        },
      });
      if (response.status !== 200) {
        const json = await response.json();
        ToastController.warning(
          `<pre>${JSON.stringify(json, null, 2)}</pre>`,
          `DELETE ${URI}/{id}`
        );
        return false;
      }

      ToastController.success('Удален', `DELETE ${URI}/{id}`);
      return true;
    } catch (error) {
      ToastController.error('' + error, `DELETE ${URI}/:id/`);
      return false;
    }
  }
}
