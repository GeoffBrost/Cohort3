let cardCounter = 0;
const functions = {
    helloWorld: () => {
        console.log("hello world from PCS");
        return 0;
    },
    
     addCardButtons: (parentDiv) => {
        cardCounter++;
        let addBefore = document.createElement("button");
        addBefore.textContent = "Add Before";
        addBefore.setAttribute("addcheck", "true");
        addBefore.id="addBefore";
        let addAfter = document.createElement("button");
        addAfter.textContent = "Add Afer";
        addAfter.setAttribute("addcheck", "true");
        let addDelete = document.createElement("button");
        addDelete.textContent = "Delete";
        addDelete.setAttribute("addcheck", "true");
        // document.getElementById(parentDiv).appendChild(addBefore);
        // document.getElementById(parentDiv).appendChild(addAfter);
        // document.getElementById(parentDiv).appendChild(addDelete);
    }
};

export default functions;