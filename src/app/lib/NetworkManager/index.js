import Network from './Network';

export default class NetworkManager {
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
    const result = await chrome.storage.local.get(['networks']);
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
