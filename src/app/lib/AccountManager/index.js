import { ethers } from 'ethers';
import TronWeb from 'tronweb';
import { nanoid } from 'nanoid';

export function createNewMnemonic() {
  const mnemonic = ethers.utils.entropyToMnemonic(ethers.utils.randomBytes(16));
  return mnemonic;
}
export function isValidMenmonic(mnemonic) {
  return ethers.utils.isValidMnemonic(mnemonic);
}
export function createNewAccount(mnemonic, accountIndex) {
  const account = {};
  account.id = nanoid();
  account.name = `Account ${accountIndex + 1}`;
  const ethWallet = ethers.Wallet.fromMnemonic(
    mnemonic,
    `m/44'/60'/0'/0/${accountIndex}`,
    'en'
  );
  const tronWallet = TronWeb.fromMnemonic(
    mnemonic,
    `m/44'/195'/0'/0/${accountIndex}`,
    'en'
  );

  account.ethereum_address = ethWallet.address;
  account.ethereum_privateKey = ethWallet.privateKey;

  account.tron_address = tronWallet.address;
  account.tron_privateKey = tronWallet.privateKey;

  account.tron_hdpath = `m/44'/195'/0'/0/${accountIndex}`;
  account.ethereum_hdpath = `m/44'/60'/0'/0/${accountIndex}`;

  return account;
}
