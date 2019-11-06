//PCS
let cardCounter = 0;
const functions = {
    helloWorld: () => {
        console.log("hello world from PCS");
    },

    addCard: () => {
        cardCounter++;
        let cardDiv = document.createElement("div");
        cardDiv.className = "Card";
        cardDiv.id ="card"+cardCounter;
        let addBefore = document.createElement("button");
        addBefore.textContent="Add Before";
        addBefore.setAttribute("addcheck","true");
        let addAfter = document.createElement("button");
        addAfter.textContent = "Add After";
        addAfter.setAttribute("addcheck","true");
        document.getElementById("idrightside").appendChild(addBefore);
        document.getElementById("idrightside").appendChild(addAfter);
    }
};

export default functions;