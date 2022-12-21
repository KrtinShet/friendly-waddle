import { encrypt } from './../../utils/';

export class Account {
  constructor(opts = {}) {
    this.address = opts.address;
    this.HDPath = opts.HDPath;
    this.privateKey = opts.privateKey;
  }

  encryptPrivateKey(password) {
    this.privateKey = encrypt(this.privateKey, password);
  }

  encrypt(password) {
    return encrypt(this.privateKey, password);
  }

  decrypt(password) {
    return decrypt(this.privateKey, password);
  }
}
