// PSC
class accounts {
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
};

const functions ={
    helloWorld:()=>{
        console.log("Hello World from PSC Accounts")
    }

};

export {functions, accounts}; 