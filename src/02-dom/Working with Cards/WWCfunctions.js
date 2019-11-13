let cardCounter = 0;
const functions = {
    helloWorld: () => {
        console.log("hello world from PCS");
        return 0;
    },

    addCardButtons: () => {
        cardCounter++;
        let newCard = document.createElement("div");
        newCard.className = "card";
        let cardNumber = "card" + cardCounter;
        newCard.id = cardNumber;
        document.getElementById("idCardCan").appendChild(newCard);
        let addBefore = document.createElement("button");
        addBefore.textContent = "Add Before";
        addBefore.setAttribute("addcheck", "true");
        addBefore.className = "idAddBefore";
        let addAfter = document.createElement("button");
        addAfter.textContent = "Add After";
        addAfter.setAttribute("addcheck", "true");
        let addDelete = document.createElement("button");
        addDelete.textContent = "Delete";
        addDelete.setAttribute("addcheck", "true");
        newCard.textContent = "Card " + cardCounter;
        document.getElementById(cardNumber).appendChild(addBefore);
        document.getElementById(cardNumber).appendChild(addAfter);
        document.getElementById(cardNumber).appendChild(addDelete);
    }
};

export default functions;