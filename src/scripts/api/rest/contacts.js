import AbstractApiCrud from './AbstractApiCrud';

const URI = '/api/contacts';

export default class ApiRestContacts {
  static async create(data) {
    return await AbstractApiCrud.create(URI, data);
  }

  static async readAll() {
    return await AbstractApiCrud.readAll(URI);
  }

  static async readOne(id) {
    return await AbstractApiCrud.readOne(URI, id);
  }

  static async update(id, data) {
    return await AbstractApiCrud.update(URI, id, data);
  }

  static async remove(id) {
    return await AbstractApiCrud.remove(URI, id);
  }
}
