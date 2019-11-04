//PSC.Test 
import functions from "./functions.js"

function createData() {
    let createDiv = document.createElement("div");
    let listItem = document.createElement("li");
    listItem.setAttribute("steve", true);
    let createListIten = createDiv.appendChild(listItem);
    return listItem.getAttribute("steve");
};

test("hello World", () => {
    console.log("Hello world from functions test");
});
test("add list on click", () => {
    let x = createData();
});