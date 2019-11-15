import functions from "./WWCfunctions.js"

idaddCards.addEventListener("click", () => {
    functions.addCard();
});

idrightside.addEventListener("click", () => {
    if (event.target.value === "idAddBefore") {
        functions.addCardBefore();
    } else if (event.target.id === "idAddAfter") {
        functions.addCardAfter();
    } else if (event.target.id === "idDelete") {
        functions.deleteCard();
    }
});