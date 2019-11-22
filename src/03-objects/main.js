import {functions, Accounts} from "./account.js"
const userAccount = new Accounts("Bill" , 500);
console.table("User account" , userAccount);

idAccountHome.addEventListener("click", (event) => {
    let amount = parseFloat(idAmount.value).toFixed(2);
    if (event.target.value === "idDeposit"){
    userAccount.deposit(amount)
    console.log("user Account console log maybe?",userAccount);
    console.log("amount ", amount);
    console.log(Accounts);
    }
    if (event.target.value === "idWithdraw"){
        console.log("else clicking") 
    }
});