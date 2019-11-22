//PSC.Test 
import functions from "./WWCfunctions.js"
import { exportAllDeclaration } from "@babel/types";

test("Hello World ", () => {
    console.log("Hello world from test functions");
});

test("createCard Function", () => {
    let mainDiv = document.createElement("div");
    functions.addCard(mainDiv);
});