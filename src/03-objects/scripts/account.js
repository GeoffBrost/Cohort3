// PSC
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


class AccountController {
    constructor() {
        this.accountGroup = [];
        this.counterID =0;
    }
    createAccount(accountName, balance) {
        const newAccount = new Accounts(accountName, balance,this.counterID);
        this.accountGroup.push(newAccount);
        this.counterID++
        return this.accountGroup;
    }
    deleteAccount(accountName) {
        this.accountGroup = this.accountGroup.filter((account) => account.accountName != accountName);
    }
    totalAccountBalance() {
        return this.accountGroup.reduce((acc, accountAmount) => accountAmount.balance + acc, 0);
    }
    deposit(id, amount) {
        this.accountGroup.forEach(item =>{
            if(item.key ===id){
                item.deposit(amount);
                return
            }
        })
    }
    withdraw(id, amount) {
        this.accountGroup.forEach(item =>{
            if(item.key ===id){
                item.withdraw(amount);
                return
            }
        })
    }
    highestAccount() {
        this.accountGroup.sort((a, b) => {
            return b.balance - a.balance;
        });
        return this.accountGroup[0].balance;
    }
    lowestAccount(){
        this.accountGroup.sort((a,b) =>{
            return a.balance - b.balance;
        });
        return this.accountGroup[0].balance;
    }
    selectAccount(key){
    return this.accountGroup.filter((account) => account.key === key)[0];
    }
};



export {Accounts, AccountController }; 