// PSC
let cardCounter = 0;
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
};

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
        return this.balance = (this.balance + amount);
    }
    withdraw(amount) {
        return this.balance = (this.balance - amount);
    }
};
const functions = {
    helloWorld: () => {
        console.log("Hello World from PSC Accounts")
    },
    
    createCard: (parentDiv,accountName,) => {
        cardCounter++;

        let newCard = document.createElement("div");
        newCard.className = "card";
        let cardNumber = cardCounter;
        newCard.id = cardNumber;
        newCard.setAttribute("key", accountName);
        newCard.setAttribute("poop", cardNumber);
        parentDiv.appendChild(newCard);

        let select = document.createElement("button");
        select.textContent = "Select";
        select.setAttribute("addcheck", "true");
        select.setAttribute("value", "idSelect");

        let closeAccount = document.createElement("button");
        closeAccount.textContent = "Close Account";
        closeAccount.setAttribute("addcheck", "true");
        closeAccount.setAttribute("value", "idCloseAccount");

        newCard.textContent = `${accountName}`;
        newCard.appendChild(select);
        newCard.appendChild(closeAccount);
        return newCard;
    },
    resetCounter:()=>{
        cardCounter = 0;
     },
//     selectAccount:(accountGroup,accountName)=>{
//        return accountGroup.findIndex(accountName);
//     }
};



export { functions, Accounts, AccountController }; 