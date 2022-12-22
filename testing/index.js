const { kvsLocalStorage } = require('@kvs/node-localstorage');
const { v4: nanoid } = require('uuid');
const { ethers } = require('ethers');
const TronWeb = require('tronweb');
const crypto = require('crypto');
const { Buffer } = require('buffer');

const kvs = kvsLocalStorage({
  name: 'my-app',
  version: 0,
  storeName: 'my-store',
  kvsVersionKey: 'kvs-version',
  storeFilePath: './store',
});

let sessionStorage = {};

const chrome = {
  storage: {
    local: {
      get: async (key) => {
        return new Promise((resolve, reject) => {
          kvs.then(async (kvs) => {
            if (await kvs.get(key)) resolve({ [key]: await kvs.get(key) });
            else resolve({});
          });
        });
      },
      set: (opts) => {
        return new Promise((resolve, reject) => {
          kvs.then((kvs) => {
            kvs.set(opts);
            resolve();
          });
        });
      },
    },
    session: {
      get: (key) => {
        return new Promise((resolve, reject) => {
          if (!sessionStorage[key]) resolve({});
          else resolve({ [key]: sessionStorage[key] });
        });
      },
      set: (opts) => {
        return new Promise((resolve, reject) => {
          sessionStorage = { ...sessionStorage, ...opts };
          resolve();
        });
      },
    },
  },
};

function encrypt(string, password) {
  let iv = crypto.randomBytes(16);
  let salt = crypto.randomBytes(16);
  let key = crypto.scryptSync(password, salt, 32);
  let cipher = crypto.createCipheriv('aes-256-ctr', key, iv);
  let encrypted = cipher.update(string);
  encrypted = Buffer.concat([encrypted, cipher.final()]);
  return {
    iv: iv.toString('hex'),
    salt: salt.toString('hex'),
    encryptedData: encrypted.toString('hex'),
  };
}

function decrypt(string, password) {
  let iv = Buffer.from(string.iv, 'hex');
  let salt = Buffer.from(string.salt, 'hex');
  let key = crypto.scryptSync(password, salt, 32);
  let encryptedText = Buffer.from(string.encryptedData, 'hex');
  let decipher = crypto.createDecipheriv('aes-256-ctr', key, iv);
  let decrypted = decipher.update(encryptedText);
  decrypted = Buffer.concat([decrypted, decipher.final()]);
  return decrypted.toString();
}

class Asset {
  constructor(opts = {}) {
    this.value = opts.value;
    this.symbol = opts.symbol;
    this.name = opts.name;
    this.contract = opts.contract;
    this.network = opts.network;
    this.decimals = opts.decimals;
    this.isERC20 = opts.isERC20;
  }
}

class Network {
  constructor(opts = {}) {
    this.name = opts.name;
    this.rpc = opts.rpc;
    this.chainID = opts.chainID;
    this.explorer = opts.explorer;
    this.icon = opts.icon;
    this.network = opts.network;
    this.isTestnet = opts.isTestnet;
  }
}

class BaseTransaction {
  constructor(opts = {}) {
    this.hash = opts.hash;
    this.from = opts.from;
    this.to = opts.to;
    this.value = opts.value;
    this.network = opts.network;
  }
}

class Transaction {
  constructor() {
    this.pendingTransactions = [];
    this.completedTransactions = [];
    this.transactionMap = new Map();
    this._load();
  }

  async _load() {
    const result = await chrome.storage.local.get(['transactions']);
    if (result && result.transactions) {
      result = JSON.parse(result);
      this.pendingTransactions = result.pendingTransactions;
      this.completedTransactions = result.completedTransactions;
      this.transactionMap = new Map(
        Object.entries(JSON.parse(result.transactionMap))
      );
    }
  }

  async save() {
    chrome.storage.local.set({ transactions: this._serialize() });
  }

  async addTransaction(transaction) {
    this.transactionMap.set(transaction.hash, transaction);
    this.pendingTransactions.push(transaction.hash);
    this.save();
  }

  async completeTransaction(hash) {
    this.pendingTransactions = this.pendingTransactions.filter(
      (t) => t !== hash
    );
    this.completedTransactions.push(hash);
    this.save();
  }

  _serialize() {
    return JSON.stringify({
      pendingTransactions: this.pendingTransactions,
      completedTransactions: this.completedTransactions,
      transactionMap: JSON.stringify(Array.from(this.transactionMap.entries())),
    });
  }
}

class TransactionManager {
  constructor() {
    this.transaction = new Transaction();
  }

  createTransaction(opts = {}) {
    const newTransaction = new BaseTransaction(opts);
    this.transaction.addTransaction(newTransaction);
    return newTransaction;
  }

  getPendingTransactions() {
    return this.transaction.pendingTransactions;
  }

  getCompletedTransactions() {
    return this.transaction.completedTransactions;
  }

  getTransaction(hash) {
    return this.transaction.transactionMap.get(hash);
  }

  completedTransactions(hash) {
    this.transaction.completeTransaction(hash);
  }
}

class NetworkManager {
  constructor() {
    this.networks = [];
    this._load();
  }

  addNetwork(network) {
    this.networks.push(network);
    this.save();
  }

  getNetworks() {
    return this.networks;
  }

  async _load() {
    const result = await chrome.storage.local.get('networks');
    if (result && result.networks) {
      result = JSON.parse(result.networks);
      this.networks = result.networks;
    }
  }

  async save() {
    chrome.storage.local.set({ networks: this._serialize() });
  }

  _serialize() {
    return JSON.stringify({
      networks: this.networks,
    });
  }
}

class ChaiAsset {
  constructor() {
    /**
     * @type {Map<accountID, [Asset]>}
     */
    this.assets = new Map();
    this._load();
  }

  async _load() {
    const result = await chrome.storage.local.get('chaiAssets');
    if (result && result.chaiAssets) {
      result = JSON.parse(result);
      this.assets = new Map(Object.entries(JSON.parse(result.assets)));
    }
  }
}

class Account {
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

class ChaiAccount {
  constructor(opts = {}) {
    if (!opts.accountID) {
      this.accountID = opts.accountID || nanoid();
      this.accountMap = opts.accountMap || new Map();
      this.keyMap = opts.keyMap || new Map();
    } else {
      this.accountID = opts.accountID;
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
        const _password = chrome.storage.session.get('password');
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
    };
    return JSON.stringify(data);
  }
}

class AccountManager {
  constructor(opts = {}) {
    this.accounts = opts.accounts || new Map();
    this.currentAccount = null;
    this.accountsLength = 0;
  }

  async load() {
    const result = await chrome.storage.local.get('accounts');
    if (result && result.accounts) {
      result = JSON.parse(result.accounts);

      console.log('parsed result', result);

      this.currentAccount = new ChaiAccount({
        accountID: result.currentAccount,
      });

      await this.currentAccount.load();

      for (const accountID of result.accounts) {
        this.accounts.set(accountID, new ChaiAccount({ accountID }));
      }

      this.accountsLength = this.accounts.size;
    } else {
      console.log('no accounts');
    }
  }

  async save() {
    const accounts = Array.from(this.accounts.keys());
    if (this.currentAccount) {
      const currentAccount = this.currentAccount.accountID;
      chrome.storage.local.set({
        accounts: JSON.stringify({ accounts, currentAccount }),
      });
    }
  }
  async createNewAccount(mnemonic) {
    let _password = await chrome.storage.session.get('password');
    _password = _password.password;

    const ethWallet = ethers.Wallet.fromMnemonic(
      mnemonic,
      `m/44'/60'/0'/0/${this.accountsLength}`,
      'en'
    );
    const tronWallet = TronWeb.fromMnemonic(
      mnemonic,
      `m/44'/195'/0'/0/${this.accountsLength}`,
      'en'
    );

    const chaiAccount = new ChaiAccount();
    await chaiAccount.load();
    const ethAccount = new Account({
      address: ethWallet.address,
      HDPath: `m/44'/60'/0'/0/${this.accountsLength}`,
      privateKey: ethWallet.privateKey,
    });
    const tronAccount = new Account({
      address: tronWallet.address.base58,
      HDPath: `m/44'/195'/0'/0/${this.accountsLength}`,
      privateKey: tronWallet.privateKey,
    });

    ethAccount.encryptPrivateKey(_password);
    tronAccount.encryptPrivateKey(_password);

    chaiAccount.accountMap.set('eth', ethAccount);
    chaiAccount.accountMap.set('tron', tronAccount);

    chaiAccount.keyMap.set(ethAccount.address, ethAccount.privateKey);
    chaiAccount.keyMap.set(tronAccount.address, tronAccount.privateKey);

    this.accounts.set(chaiAccount.accountID, chaiAccount);

    this.accountsLength += 1;

    await chaiAccount.save();
    await this.save();
  }

  createNewMnemonic() {
    const mnemonic = ethers.utils.entropyToMnemonic(
      ethers.utils.randomBytes(16)
    );
    return mnemonic;
  }
}

const main = async () => {
  chrome.storage.session.set({ password: 'password' });

  const accountManager = new AccountManager();
  await accountManager.load();
  const mnemonic = accountManager.createNewMnemonic();
  console.log('Mnemonic Created: ', mnemonic);

  accountManager.createNewAccount(mnemonic);

  console.log('sessionStorage: ', sessionStorage);
  kvs.then((kvs) => {
    kvs.get('accounts').then((accounts) => {
      console.log('password', accounts);
    });
  });
};

main();
