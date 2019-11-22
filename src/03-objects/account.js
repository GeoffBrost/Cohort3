// PSC
class Accounts {
    constructor(accountName, balance) {
        this.accountName = accountName;
        this.balance = balance;
    }
    getAccount() {
        return this.accountName;
    }
    getBalance() {
        return this.balance;
    }
    deposit(amount) {
        this.balance = (this.balance + amount);
    }
    withdraw(amount) {
        this.balance = (this.balance - amount);
    }
};

const functions = {
    helloWorld: () => {
        console.log("Hello World from PSC Accounts")
    }

};



export { functions, Accounts }; 