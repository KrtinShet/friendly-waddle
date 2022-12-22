import { ethers } from 'ethers';
import TronWeb from 'tronweb';
import ChaiAccount from './ChaiAccount';
import { Account } from './Account';

class AccountManager {
  constructor(opts = {}) {
    this.accounts = opts.accounts || new Map();
    this.currentAccount = null;
    this.accountsLength = 0;
  }

  async load() {
    const result = await chrome.storage.local.get(['accounts']);
    if (result && result.accounts) {
      result = JSON.parse(result.accounts);
      this.currentAccount = new ChaiAccount({
        accountID: result.currentAccount,
      });
      await this.currentAccount.load();

      for (const accountID of result.accounts) {
        let newAccount = new ChaiAccount({ accountID });
        await newAccount.load();
        this.accounts.set(accountID, newAccount);
      }

      this.accountsLength = this.accounts.size;
    }
  }

  async save() {
    await chrome.storage.local.set({
      accounts: JSON.stringify({
        currentAccount: this.currentAccount.accountID,
        accounts: Array.from(this.accounts.keys()),
      }),
    });
  }

  async createNewAccount(mnemonic) {
    let _password = await chrome.storage.session.get(['password']);
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

    chaiAccount.save();
    this.save();
  }

  createNewMnemonic() {
    const mnemonic = ethers.utils.entropyToMnemonic(
      ethers.utils.randomBytes(16)
    );
    return mnemonic;
  }

  isValidMenmonic(mnemonic) {
    return ethers.utils.isValidMnemonic(mnemonic);
  }
}

export default AccountManager;
