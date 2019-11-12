import functions from "./WWCfunctions.js"

// idaddCards.addEventListener("click", () => {
// //     functions.addCardButtons("idCardCan");
// });
addButton.addEventListener("click", () => {
    let newDiv = functions.addCard();
    idleftside.appendChild(newDiv);
});