import React from 'react'

// const functions = {
//     helloWorld: () => {
//         console.log("Hello World from PSC Accounts");
//     },

    // createCard: (parentDiv, accountName, cardCounter) => {
    //     let newCard = document.createElement("div");
    //     newCard.className = "card";
    //     let cardNumber = cardCounter;
    //     newCard.id = cardNumber;
    //     newCard.setAttribute("key", cardNumber);
    //     parentDiv.appendChild(newCard);

    //     let select = document.createElement("button");
    //     select.textContent = "Select";
    //     select.setAttribute("addcheck", "true");
    //     select.setAttribute("value", "idSelect");

    //     let closeAccount = document.createElement("button");
    //     closeAccount.textContent = "Close Account";
    //     closeAccount.setAttribute("addcheck", "true");
    //     closeAccount.setAttribute("value", "idCloseAccount");

    //     newCard.textContent = `${accountName}`;
    //     newCard.appendChild(select);
    //     newCard.appendChild(closeAccount);
    //     return newCard;
    // },
// },

function CreateCard(props) {
    return (
    <div>
        <button className="accountList">Select</button>
        <button className="accountList">Close Account</button>
    </div>
    )
}

export default CreateCard ; 