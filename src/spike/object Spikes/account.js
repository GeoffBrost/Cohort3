// PSC
class Bank {
    constructor(accountName,startBalance){
        this.accountName = accountName;
        this.startBalance = startBalance;
    }
    getAccount(){
        return this.accountName;
    }
    getStartBalance(){
        return this.startBalance;
    }
    deposit(amount){
        console.log("start Balance from deposit", this.startBalance);
        console.log("deposit amount" , amount)
        console.log("this math ", this.startBalance, amount);
       this.startBalance = this.startBalance + amount;
       console.log(this.startBalance);
    }
    withdraw(amount){
        console.log("star Balance from withdrw", this.startBalance);
        console.log("Withdraw amount", amount);
        console.log("this Math ", this.startBalance, amount);
        this.startBalance = this.startBalance - amount;
        console.log(this.startBalance);
    }
    balance(){
        console.log(this.startBalance)
        return this.startBalance
    }
};

const functions ={
    helloWorld:()=>{
        console.log("Hello World from PSC Accounts")
    }

};

export {functions, Bank}; 