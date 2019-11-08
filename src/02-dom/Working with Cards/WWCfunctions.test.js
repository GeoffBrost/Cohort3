//PSC.Test 
import functions from "./WWCfunctions.js"
import { exportAllDeclaration } from "@babel/types";
import { create } from "istanbul-reports";


function createData() {
    let createDiv = document.createElement("div");
    let listItem = document.createElement("li");
    listItem.setAttribute("newList", "true");
    let createListItem = createDiv.appendChild(listItem);
    return listItem.getAttribute("newList");
};

let cardCounter = 0;

function createCardDiv(parentdiv) {
    let createDiv = document.createElement("div");
    createDiv.className = "TestDiv";
    createDiv.id = parentdiv;
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
    let Div = createCardDiv("TestDiv");
    expect(Div.id).toBe("TestDiv");  
});


