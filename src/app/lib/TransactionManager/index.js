import BaseTransaction from './BaseTransaction';
import Transaction from './Transaction';

export default class TransactionManager {
  constructor() {}
  async load() {
    this.transaction = new Transaction();
    this.transaction.load();
  }

  createTransaction(opts = {}) {
    const newTransaction = new BaseTransaction(opts);
    this.transaction.addTransaction(newTransaction);
    return newTransaction;
  }

  getPendingTransactions() {
    return this.transaction.pendingTransactions;
  }

  getCompletedTransactions() {
    return this.transaction.completedTransactions;
  }

  getTransaction(hash) {
    return this.transaction.transactionMap.get(hash);
  }

  completedTransactions(hash) {
    this.transaction.completeTransaction(hash);
  }
}
