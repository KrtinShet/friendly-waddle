class Transaction {
  constructor() {
    this.pendingTransactions = [];
    this.completedTransactions = [];
    this.transactionMap = new Map();
  }

  async load() {
    const result = await chrome.storage.local.get('transactions');
    if (result && result.transactions) {
      result = JSON.parse(result);
      this.pendingTransactions = result.pendingTransactions;
      this.completedTransactions = result.completedTransactions;
      this.transactionMap = new Map(
        Object.entries(JSON.parse(result.transactionMap))
      );
    }
  }

  async save() {
    chrome.storage.local.set({ transactions: this._serialize() });
  }

  async addTransaction(transaction) {
    this.transactionMap.set(transaction.hash, transaction);
    this.pendingTransactions.push(transaction.hash);
    this.save();
  }

  async completeTransaction(hash) {
    this.pendingTransactions = this.pendingTransactions.filter(
      (t) => t !== hash
    );
    this.completedTransactions.push(hash);
    this.save();
  }

  _serialize() {
    return JSON.stringify({
      pendingTransactions: this.pendingTransactions,
      completedTransactions: this.completedTransactions,
      transactionMap: JSON.stringify(Array.from(this.transactionMap.entries())),
    });
  }
}

export default Transaction;
