import { functions, Accounts, AccountController } from "./account.js"
const userAccount = new AccountController();
// idTotalBalance.textContent = `$ ${userAccount.totalAccountBalance()}`;


idAccountHome.addEventListener("click", (event) => {
    if (event.target.value === "idOpenNewAccount") {
        let accountName = document.getElementById("idCreateAccountInput").value;
        let balance = document.getElementById("idStartingBalance").value;
        userAccount.createAccount(accountName,balance);
        let leftpanel = document.getElementById("idRigthSide");
        functions.createCard(leftpanel,accountName);
        console.log(userAccount.accountGroup);
    }
    if (event.target.value === "steve") {
        
    } if (event.target.value === "idHighestBalance") {
        
    } if (event.target.value === "idCloseAccount") {
        let deleteButton = event.target.parentNode.getAttribute("key");
        let deleteButton2 = event.target.parentNode
        userAccount.deleteAccount(deleteButton);
        deleteButton2.remove();
        console.log(userAccount.accountGroup);
    }
});