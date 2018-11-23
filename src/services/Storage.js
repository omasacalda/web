import TokenService from '@around25/jwt-utils'

class StorageService {
  static utils = new TokenService({
    storageSystem: window.localStorage
  });

  static store(token) {
    return this.utils.store(token);
  }

  static get() {
    return this.utils.get();
  }

  static decode(token) {
    return this.utils.decode(token);
  }

  static getExpirationDate(token) {
    return this.utils.getExpirationDate(token);
  }

  static isExpired(token) {
    return this.utils.isExpired(token);
  }

  static remove(token) {
    return this.utils.remove(token);
  }
}

export default StorageService
