class Accounts {
    constructor(accountName, balance, key) {
        this.accountName = accountName;
        this.balance = Number(balance);
        this.key = key;
    }
    getAccount() {
        return this.accountName;
    }
    getBalance() {
        return this.balance;
    }
    deposit(amount) {
        return this.balance = this.balance + amount;
    }
    withdraw(amount) {
        return this.balance = this.balance - amount;
    }
};

export default Accounts;