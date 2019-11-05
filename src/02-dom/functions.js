//PCS
const functions = {
    helloWorld: () => {
        console.log("hello world from PCS");
    },
    addItemToList: () => {
        let createDiv = document.createElement("div");
        let listItem = document.createElement("li");
        let userinput = document.getElementById("idinputbox").value;
        let textinput = document.createTextNode(userinput);
        listItem.setAttribute("newList", true);
        listItem.appendChild(textinput);
        document.getElementById("idmylist").appendChild(listItem);
        document.getElementById("idinputbox").value = "";
    },
    showList: () => {
        let show = document.getElementById("idmylist").childNodes
        // want to use nodelist to get "li item"
        console.log(show);
    }
    };

    export default functions;