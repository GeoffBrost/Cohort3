//PSC.Test 
import functions from "./functions.js"
import { exportAllDeclaration } from "@babel/types";

function createData() {
    let createDiv = document.createElement("div");
    let listItem = document.createElement("li");
    listItem.setAttribute("newList", "true");
    let createListItem = createDiv.appendChild(listItem);
    return listItem.getAttribute("newList");
};
function createShow() {
    let createDiv = document.createElement("div");
    let listItem = document.createElement("li");
    let textinput = document.createTextNode("Hello World");
    listItem.appendChild(textinput);

};
test("hello World", () => {
    console.log("Hello world from functions test");
});
test("add list on click", () => {
    let testdata = createData();
    expect(testdata).toBe("true");
});
test(" Console log list item", () => {
    let testdata = createShow();
    console.log(testdata);

});
