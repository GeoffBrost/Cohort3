//PCS
let cardCounter = 0;
const functions = {
    helloWorld: () => {
        console.log("hello world from PCS");
        return 0;
    },

    addCardButtons: (parentdiv) => {
        cardCounter++;
        let createDiv = document.createElement("div");
        createDiv.className = "card";
        createDiv.id = "newCard";
        let addBefore = document.createElement("button");
        addBefore.textContent = "Add Before";
        addBefore.setAttribute("addcheck", "true");
        let addAfter = document.createElement("button");
        addAfter.textContent = "Add Afer";
        addAfter.setAttribute("addcheck", "true");
        let addDelete = document.createElement("button");
        addDelete.textContent = "Delete";
        addDelete.setAttribute("addcheck", "true");
        document.getElementById("idCardCan").appendChild(createDiv);
        document.getElementById("newCard").appendChild(addBefore);
        document.getElementById("newCard").appendChild(addAfter);
        document.getElementById("newCard").appendChild(addDelete);
    }
};

export default functions;