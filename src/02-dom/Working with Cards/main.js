import functions from "./WWCfunctions.js"

idaddCards.addEventListener("click", () => {
    functions.addCard();
});

idrightside.addEventListener("click", () => {
    if(event.target.id === "idAddBefore") {
        functions.addCardBefore();
    } else if (event.target.id === "idAddAfter"){
        console.log("add after")
    } else if (event.target.id === "idDelete"){
        console.log(event.target.id);
    }
});