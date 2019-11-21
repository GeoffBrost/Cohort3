
let cardCounter = 0;
const functions = {
    helloWorld: () => {
        // console.log("hello world from PCS");
        return 0;
    },

    createCard: (parentDiv) => {
        cardCounter++;

        let newCard = document.createElement("div");
        newCard.className = "card";
        let cardNumber = cardCounter;
        newCard.id = cardNumber;
        newCard.setAttribute("key", cardNumber);
        parentDiv.appendChild(newCard);

        let addBefore = document.createElement("button");
        addBefore.textContent = "Add Before";
        addBefore.setAttribute("addcheck", "true");
        addBefore.setAttribute("value", "idAddBefore");

        let addAfter = document.createElement("button");
        addAfter.textContent = "Add After";
        addAfter.setAttribute("addcheck", "true");
        addAfter.setAttribute("value", "idAddAfter")

        let addDelete = document.createElement("button");
        addDelete.textContent = "Delete";
        addDelete.setAttribute("addcheck", "true");
        addDelete.setAttribute("value", "idDelete");

        newCard.textContent = `Card ${cardNumber}`;
        newCard.appendChild(addBefore);
        newCard.appendChild(addAfter);
        newCard.appendChild(addDelete);
        return newCard;
    },

    createCardBefore: (addBefore, newCard, parentDiv) => {
        parentDiv.insertBefore(newCard, addBefore);
        return parentDiv;
    },

    createCardAfter: (addAfter, newCard, parentDiv) => {
        parentDiv.insertBefore(newCard, addAfter);
        return parentDiv;
    },

    deleteCard: (deleteButton) => {
        deleteButton.remove();
    },
    resetCounter:()=>{
       cardCounter = 0;
    }
};



export default functions;