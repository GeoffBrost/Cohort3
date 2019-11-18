//PSC.Test 
import functions from "./WWCfunctions.js"



function createData() {
    let createDiv = document.createElement("div");
    let listItem = document.createElement("li");
    listItem.setAttribute("newList", "true");
    let createListItem = createDiv.appendChild(listItem);
    return listItem.getAttribute("newList");
};

let cardCounter = 0;

function createCardDiv() {
    let createDiv = document.createElement("div");
    cardCounter ++;
    createDiv.className = "card";
    createDiv.setAttribute("steve", "1");
    return createDiv;
};

test("Hello World ", () => {
    expect(functions.helloWorld()).toBe(0);
});

test("hello World", () => {
    const data = createData();
    expect(createData()).toBe("true");
});

test("Create Div assgin class and ID", () => {
    let Div = createCardDiv();
    console.log("new Div value ",Div.steve);
});