import { functions, Accounts } from "./account.js"
const userAccount = new Accounts("Bill", 500);
    idBalance.textContent = `$ ${userAccount.balance}`;

idAccountHome.addEventListener("click", (event) => {
    let amount = idAmount.value;
    amount = Number(amount);
    if (event.target.value === "idDeposit") {
        userAccount.deposit(amount)
        idBalance.textContent = userAccount.balance;
    }
    if (event.target.value === "idWithdraw") {
        userAccount.withdraw(amount);
        idBalance.textContent = userAccount.balance;
    };
});