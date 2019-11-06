//PSC.Test 
import functions from "./functions.js"
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

function createCardDiv() {
    cardCounter++;
    console.log(cardCounter);
    let createDiv = document.createElement("div");
    createDiv.className = "card";
    createDiv.id = "card" + cardCounter;
    return createDiv;
};

test("hello World", () => {
    const data = createData();
    expect(createData()).toBe("true");
});
test("Create Div assgin class and ID", () => {
    expect(createCardDiv().id).toBe("card1");
    expect(createCardDiv().id).toBe("card2");
    expect(createCardDiv().id).toBe("card3");
    expect(createCardDiv().className).toBe("card");
});
test ("")

