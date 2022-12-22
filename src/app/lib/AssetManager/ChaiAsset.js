class ChaiAsset {
  constructor() {
    /**
     * @type {Map<accountID, [Asset]>}
     */
    this.assets = new Map();
  }

  async load() {
    const result = await chrome.storage.local.get(['chaiAssets']);
    if (result && result.chaiAssets) {
      result = JSON.parse(result);
      this.assets = new Map(Object.entries(JSON.parse(result.assets)));
    }
  }
}
