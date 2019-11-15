
let cardCounter = 0;
const functions = {
    helloWorld: () => {
        console.log("hello world from PCS");
        return 0;
    },

    addCard: () => {
        cardCounter++;

        let newCard = document.createElement("div");
        newCard.className = "card";
        let cardNumber = cardCounter;
        newCard.id = cardNumber;
        document.getElementById("idCardCan").appendChild(newCard);

        let addBefore = document.createElement("button");
        addBefore.textContent = "Add Before";
        addBefore.setAttribute("addcheck", "true");
        addBefore.setAttribute("value", "idAddBefore");
        // addBefore.id = "idAddBefore";

        let addAfter = document.createElement("button");
        addAfter.textContent = "Add After";
        addAfter.setAttribute("addcheck", "true");
        addAfter.id = "idAddAfter"

        let addDelete = document.createElement("button");
        addDelete.textContent = "Delete";
        addDelete.setAttribute("addcheck", "true");
        addDelete.id = "idDelete"

        newCard.textContent = cardNumber;
        document.getElementById(cardNumber).appendChild(addBefore);
        document.getElementById(cardNumber).appendChild(addAfter);
        document.getElementById(cardNumber).appendChild(addDelete);
        return newCard;
    },

    addCardBefore: () => {

        let addBefore = event.target.parentNode;
        let newCard = functions.addCard();
        idCardCan.insertBefore(newCard,addBefore);

    },

    addCardAfter:()=>{
        let addAfter = event.target.parentNode.nextSibling;
        console.log(addAfter);
        let newCard = functions.addCard();
        idCardCan.insertBefore(newCard,addAfter);
    },
    deleteCard: () => {
        let deleteButton = event.target.parentNode;
        deleteButton.remove();
    }
};

export default functions;