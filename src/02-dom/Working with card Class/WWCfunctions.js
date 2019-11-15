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
},
    createDiv:()=> {
        let newDiv = document.createElement("Div");
        newDiv.textContent ="Hello World"
        newDiv.class = "dave"
},
    
};
functions.createDiv();

export default functions;