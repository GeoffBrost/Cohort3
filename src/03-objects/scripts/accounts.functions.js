
const functions = {
    helloWorld: () => {
        console.log("Hello World from PSC Accounts");
    },

    createCard: (parentDiv, accountName, cardCounter) => {
        let newCard = document.createElement("div");
        newCard.className = "card";
        let cardNumber = cardCounter;
        newCard.id = cardNumber;
        newCard.setAttribute("key", cardNumber);
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
    // AccountCard: (parentDiv, selectedAccount) => {
    //     let accountView = document.createElement("div");
    //     let accountInput = document.createElement("input");
    //     accountInput.setAttribute("id", "inputbox");
    //     accountView.className = "Account";
    //     parentDiv.appendChild(accountView);

    //     let deposit = document.createElement("button");
    //     deposit.textContent = "Deposit";
    //     deposit.setAttribute("addcheck", "true");
    //     deposit.setAttribute("value", "idDeposit");

    //     let withdraw = document.createElement("button");
    //     withdraw.textContent = "With Draw";
    //     withdraw.setAttribute("addcheck", "true");
    //     withdraw.setAttribute("value", "idWithDraw");

    //     accountView.textContent = `Account Name ${selectedAccount.accountName} Account Balance${selectedAccount.balance}`;
    //     accountView.appendChild(accountInput);
    //     accountView.appendChild(deposit);
    //     accountView.appendChild(withdraw);
    //     return accountView;
    // }
    
// resetCounter: () => {
//     let cardCounter = 0;
//     return cardCounter;
// },
};

export { functions }; 