import { Accounts, AccountController } from "./account.js"
import { functions } from "./accounts.functions.js"
let userAccount = new AccountController;
// idTotalBalance.textContent = `$ ${userAccount.totalAccountBalance()}`;
let cardCounter = 0;

idAccountHome.addEventListener("click", (event,cardCounter) => {
    if (event.target.value === "idOpenNewAccount") {
        let accountName = document.getElementById("idCreateAccountInput").value;
        let balance = document.getElementById("idStartingBalance").value;
        userAccount.createAccount(accountName, balance);
        let leftpanel = document.getElementById("idRigthSide");
        functions.createCard(leftpanel, accountName,cardCounter);
        cardCounter ++;
        console.log("Account Name ", accountName,"card Counter ", cardCounter);

    }
    if (event.target.value === "idSelect") {
        let accountName = event.target.parentNode.getAttribute("key")
        let selectAccount = userAccount.selectAccount(accountName);
        let accountBalance = document.getElementById("idBalance")
        let accountTitle = document.getElementById("idAccountName")
        accountTitle.textContent = selectAccount.accountName;
        accountBalance.textContent = selectAccount.balance;

    } if (event.target.value === "idDeposit") {
        let selectAccount = userAccount.currentAccount;
        // console.log("parent Node", accountName);
        console.log("select Account", selectAccount);

    } if (event.target.value === "idCloseAccount") {
        let deleteButton = event.target.parentNode.getAttribute("key");
        let deleteButton2 = event.target.parentNode
        userAccount.deleteAccount(deleteButton);
        deleteButton2.remove();

    }
});