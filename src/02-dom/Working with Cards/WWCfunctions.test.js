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

function createCardDiv(divID) {
    let createDiv = document.createElement("div");
    createDiv.className = "card";
    createDiv.id = divID;
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
    let Div = createCardDiv("card");
    expect(Div.id).toBe("card");
});