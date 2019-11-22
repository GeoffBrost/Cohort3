import functions from "./10_25_tdd.js"
console.log("hello world from Main sure");

const addButton = () => {
    let p1 = parseFloat(document.getElementById("identerfirst").value);
    let p2 = parseFloat(document.getElementById("identersecond").value);
    console.log(p1);
    console.log(p2);
    idanswer.value = functions.sum(p1, p2);
}

iddoit.addEventListener("click", addButton);
