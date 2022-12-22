export default class AssetManager {
  constructor(opts = {}) {
    this.accountAssets = opts.accountAssets || new Map();
    this.assetsMap = opts.assetsMap || new Map();
  }

  async load() {
    const result = await chrome.storage.local.get('chaiAssets');
    if (result && result.chaiAssets) {
      result = JSON.parse(result.chaiAssets);
      this.assetsMap = new Map(Object.entries(result.chaiAssets));
    }
  }

  async getAssetById(assetID) {
    let asset = await chrome.storage.local.get(assetID);
    asset = asset.assetID;
    if (typeof asset === string) asset = JSON.parse(asset);
    return asset;
  }

  addAsset(accountID, asset) {
    this.assetsMap.set(accountID, [...this.assetsMap.get(accountID), asset]);
    chrome.storage.local.set({ [asset.assetID]: asset });
  }

  removeAsset(assetID) {
    this.assetsMap.delete(assetID);
    chrome.storage.local.remove(assetID);
  }

  async save() {
    chrome.storage.local.set({ chaiAssets: this._serialize() });
  }

  _serialize() {
    var data = {
      chaiAssets: Object.fromEntries(this.assetsMap),
    };
    return JSON.stringify(data);
  }
}
