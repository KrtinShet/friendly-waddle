import AccountManager from './../AccountManager';
import AssetManager from './../AssetManager';
import NetworkManager from '../NetworkManager';
import TransactionManager from './../TransactionManager';

export default class SessionManager {
  constructor() {
    this.accountManager = new AccountManager();
    this.assetManager = new AssetManager();
    this.networkManager = new NetworkManager();
    this.transactionManager = new TransactionManager();
  }
}
