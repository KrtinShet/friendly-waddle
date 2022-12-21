import { nanoid } from 'nanoid';
import { decrypt } from './../../utils/';

class ChaiAccount {
  constructor(opts = {}) {
    if (!opts.accountID) {
      this.accountID = opts.accountID || nanoid();
      this.accountMap = opts.accountMap || new Map();
      this.keyMap = opts.keyMap || new Map();
    } else {
      this.accountID = opts.accountID;
      this.load();
    }
  }

  getPrivateKey(network) {
    return this.keyMap.get(network);
  }

  async load() {
    const result = await chrome.storage.local.get([this.accountID]);
    if (result && result[this.accountID]) {
      result = JSON.parse(result);
      this.accountMap = new Map(Object.entries(JSON.parse(result.accountMap)));
      this.balances = result.balances;
      this.keyMap = new Map();
      for (const [address, account] of this.accountMap) {
        const _password = chrome.storage.session.get(['password']);
        const privateKey = decrypt(account.privateKey, _password.password);
        this.keyMap.set(address, privateKey);
      }
    }
  }

  async save() {
    chrome.storage.local.set({ [this.accountID]: this._serialize() });
  }

  _serialize() {
    var data = {
      accountID: this.accountID,
      accountMap: Object.fromEntries(this.accountMap),
      balances: this.balances,
    };
    return JSON.stringify(data);
  }
}

export default ChaiAccount;
