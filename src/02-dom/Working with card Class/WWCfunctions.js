let cardCounter = 0;
const functions = {
    helloWorld: () => {
        console.log("hello world from PCS");
        return 0;
    },
    addCard: () => {
    let createDiv = document.createElement("div");
    createDiv.textContent = "Card";
    createDiv.setAttribute("class", "cardCSS");
    createDiv.id = "divID";
    return createDiv
}
    
};


export default functions;