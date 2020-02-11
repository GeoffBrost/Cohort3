import Account from './Account'

class AccountController {
    constructor() {
        this.accountList = [];
        this.counterID = 0;
    }
    createAccount(accountName, balance) {
        const newAccount = new Account(accountName, balance, this.counterID);
        this.accountList.push(newAccount);
        this.counterID++
        return this.accountList;
    }
    deleteAccount(key) {
        this.accountList = this.accountList.filter((account) => account.key !== key);
    }
    totalAccountBalance() {
        return this.accountList.reduce((acc, accountAmount) => accountAmount.balance + acc, 0);
    }
    deposit(id, amount) {
        this.accountList.forEach(item => {
            if (item.key === id) {
                item.deposit(amount);
                return
            }
        })
    }
    withdraw(id, amount) {
        this.accountList.forEach(item => {
            if (item.key === id) {
                item.withdraw(amount);
                return
            }
        })
    }
    highestAccount() {
        this.accountList.sort((a, b) => {
            return b.balance - a.balance;
        });
        return this.accountList[0];
    }
    lowestAccount() {
        this.accountList.sort((a, b) => {
            return a.balance - b.balance;
        });
        return this.accountList[0];
    }
    selectAccount(key) {
        return this.accountList.filter((account) => account.key === key)[0];
    }
    getAccounts(){
        return this.accountList;
    }
};

export default AccountController;