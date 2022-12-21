export default class Network {
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
