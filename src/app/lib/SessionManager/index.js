import crypto from 'crypto';

import AccountManager from './../AccountManager';
import AssetManager from './../AssetManager';
import NetworkManager from '../NetworkManager';
import TransactionManager from './../TransactionManager';

class SessionManager {
  constructor() {
    this.accountManager = new AccountManager();
    this.assetManager = new AssetManager();
    this.networkManager = new NetworkManager();
    this.transactionManager = new TransactionManager();
    this.unlocked = false;
  }

  async setup(password) {
    const passwordHash = await chrome.storage.local.get('passwordHash');
    if (passwordHash && passwordHash.passwordHash) {
      const _passwordHash = crypto.createHash('sha256', password).digest('hex');
      if (passwordHash.passwordHash === _passwordHash) {
        this.unlocked = true;
        await chrome.storage.session.set({ password });
      }
    } else {
      const _passwordHash = crypto.createHash('sha256', password).digest('hex');
      await chrome.storage.local.set({ passwordHash: _passwordHash });
      await chrome.storage.session.set({ password });
      this.unlocked = true;
    }
  }

  async load() {
    await this.accountManager.load();
    await this.assetManager.load();
    await this.networkManager.load();
    await this.transactionManager.load();
  }

  async getSession() {
    const session = await chrome.storage.session.get();
    return session;
  }
}

export { SessionManager };
export default new SessionManager();
