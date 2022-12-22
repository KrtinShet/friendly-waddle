export class Asset {
  constructor(opts = {}) {
    this.assetID = opts.AssetID;
    this.value = opts.value;
    this.symbol = opts.symbol;
    this.name = opts.name;
    this.contract = opts.contract;
    this.network = opts.network;
    this.decimals = opts.decimals;
    this.isERC20 = opts.isERC20;
  }
}
