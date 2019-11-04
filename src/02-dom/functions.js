//PCS
const functions = {
        helloWorld: () => {
            console.log("hello world from PCS");
        },
    addItemToList:()=>{
            let createDiv = document.createElement("div");
            let listItem = document.createElement("li");
            let textinput = document.createTextNode("steve");
            listItem.appendChild(texteinput);
            console.log(textinput);
            listItem.setAttribute("steve",true);
            let createListIten = createDiv.appendChild(listItem);
            
        }
    };
    export default functions;