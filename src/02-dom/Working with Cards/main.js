import functions from "./WWCfunctions.js"

idaddCards.addEventListener("click", () => {
    let bigDiv = document.getElementById("idCardCan");
    functions.createCard(bigDiv);
});

idrightside.addEventListener("click", () => {
    if (event.target.value === "idAddBefore") {
        let addBefore = event.target.parentNode;
        let parentDiv = event.target.parentNode.parentNode;
        let newCard = functions.createCard(addBefore);
        functions.createCardBefore(addBefore,newCard,parentDiv);

    } else if (event.target.value === "idAddAfter") {
        let addAfter = event.target.parentNode.nextSibling;
        let parentDiv = event.target.parentNode.parentNode;
        let newCard = functions.createCard(parentDiv);
        functions.createCardAfter(addAfter, newCard, parentDiv);

    } else if (event.target.value === "idDelete") {
        let deleteButton = event.target.parentNode
        functions.deleteCard(deleteButton);
    }
});