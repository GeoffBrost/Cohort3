
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
        addBefore.id = "idAddBefore";

        let addAfter = document.createElement("button");
        addAfter.textContent = "Add After";
        addAfter.setAttribute("addcheck", "true");
        addAfter.id ="idAddAfter"

        let addDelete = document.createElement("button");
        addDelete.textContent = "Delete";
        addDelete.setAttribute("addcheck", "true");
        addDelete.id="idDelete"

        newCard.textContent = cardNumber;
        document.getElementById(cardNumber).appendChild(addBefore);
        document.getElementById(cardNumber).appendChild(addAfter);
        document.getElementById(cardNumber).appendChild(addDelete);
        return
    },
    // addButton: (buttontext, buttonid, cardNumber) => {
    //     let cardsbutton = document.createElement("button");
    //     cardsbutton.textContent = buttontext;
    //     cardsbutton.id = buttonid;
    //     console.log(cardNumber);
        // document.getElementById(cardNumber).appendChild(cardsbutton);
    
        addCardBefore:()=>{
       let steve = event.target.parentNode.id;
       console.log(steve);  
    }
};


export default functions;