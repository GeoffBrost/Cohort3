import { Accounts, AccountController } from "./account.js"
import { functions } from "./accounts.functions.js"
const userAccount = new AccountController();
let selectAccount;

idAccountHome.addEventListener("click", (event) => {
    if (event.target.value === "idOpenNewAccount") {
        let accountName = document.getElementById("idCreateAccountInput").value;
        let balance = document.getElementById("idStartingBalance").value;
        let rightpanel = document.getElementById("idRigthSide");
        functions.createCard(rightpanel, accountName, userAccount.counterID);
        userAccount.createAccount(accountName, balance);
        
    } if (event.target.value === "idSelect") {
        let accountKey = Number(event.target.parentNode.getAttribute("key"));
        let selectedAccount = userAccount.selectAccount(accountKey);
        let leftpanel = document.getElementById("idLeftSide");
        selectAccount=selectedAccount;
        let accountBalance = document.getElementById("idBalance");
        let accountTitle = document.getElementById("idAccountName");
        accountTitle.textContent = selectedAccount.accountName;
        accountBalance.textContent = selectedAccount.balance;
    

    } if (event.target.value === "idHighestBalance") {
        let highbal = userAccount.highestAccount();
        console.log("high bal" ,highbal);
        let balance = document.getElementById("idTotalBalance");
        balance.textContent = highbal;
        
    } if (event.target.value === "idLowestBalance") {
        let highbal = userAccount.lowestAccount();
        let balance = document.getElementById("idTotalBalance");
        balance.textContent = highbal;
        
    } if (event.target.value === "idDeposit") {
        let userInput = document.getElementById("idAmount").value;
        let amount = Number(userInput);
        userAccount.deposit(selectAccount.key, amount);
        let accountBalance = document.getElementById("idBalance");
        accountBalance.textContent = selectAccount.balance;

        
    }if (event.target.value === "idWithdraw") {
        let userInput = document.getElementById("idAmount").value;
        let amount = Number(userInput);
        userAccount.withdraw(selectAccount.key, amount);
        let accountBalance = document.getElementById("idBalance");
        accountBalance.textContent = selectAccount.balance;
    }
        
    if (event.target.value === "idCloseAccount") {
        let deleteButton = event.target.parentNode.getAttribute("key");
        let deleteButton2 = event.target.parentNode
        userAccount.deleteAccount(deleteButton);
        deleteButton2.remove();
        
    }
    
});