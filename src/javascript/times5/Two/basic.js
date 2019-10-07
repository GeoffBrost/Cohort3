// alert("Hello from JavaScript")
function onButtonClicked(){
    console.log("onButtonClick");
}
onButtonClicked();
let startButton = document.getElementById("button");
console.log(startButton);
startButton.addEventListener("click",function(){
    console.log("Click");
let grabInput = document.getElementById("input").value;
    console.log(grabInput);
    console.log(typeof(grabInput));
})