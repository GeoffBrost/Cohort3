// PSC


class AccountController {
    constructor() {
        this.accountGroup = [];
    
    }
    getUserName() {
        return this.userName;
    }
    createAccount(accountName, balance) {
        let newAccount = new Accounts(accountName, balance);
        this.accountGroup.push(newAccount);
        return this.accountGroup;
    }
    deleteAccount(accountName) {
        this.accountGroup = this.accountGroup.filter((account) => account.accountName != accountName);
    }
    totalAccountBalance() {
        return this.accountGroup.reduce((acc, accountAmount) => accountAmount.balance + acc, 0);
    }
    highestAccount() {
        this.accountGroup.sort((a, b) => {
            return b.balance - a.balance;
        });
        return this.accountGroup[0];
    }
    lowestAccount(){
        this.accountGroup.sort((a,b) =>{
            return a.balance - b.balance;
        });
        return this.accountGroup[0];
    }
    selectAccount(accountName){
    return this.accountGroup.filter((account) => account.accountName === accountName)[0];

    }
};

class Accounts {
    constructor(accountName, balance, key) {
        this.accountName = accountName;
        this.balance = balance;
        this.key = key;

    }
    getAccount() {
        return this.accountName;
    }
    getBalance() {
        return this.balance;
    }
    deposit(amount) {
        return this.balance = (this.balance + amount);
    }
    withdraw(amount) {
        return this.balance = (this.balance - amount);
    }
};


export {Accounts, AccountController }; 