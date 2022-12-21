export default class BaseTransaction {
  constructor(opts = {}) {
    this.hash = opts.hash;
    this.from = opts.from;
    this.to = opts.to;
    this.value = opts.value;
    this.network = opts.network;
  }
}
