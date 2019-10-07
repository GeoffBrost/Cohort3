/*alert("Hello World from inline JavaScript");
*/

/*let pushMeButton = document.getElementById("pushMe");
		console.log(pushMeButton);
pushMeButton.addEventListener("click", function(){
		console.log("click me listener test");
	let boxValue = document.getElementById("inputbox").value
		console.log("boxValue",boxValue);
		console.log(typeof"boxValue");
	let number = parseInt(boxValue);
		console.log("Convert ", number);
	let sum = number + 1;
		console.log("sum", sum);
	size(sum);
});

function size(a){
	if (a < 10){
	document.getElementById("answer").innerHTML = "small";
	} else if (a >=20){
	document.getElementById("answer").innerHTML = "Large";
	} else {
	document.getElementById("answer").innerHTML = "Med";
}}
*/

let pushMeButton = document.getElementById("pushMe");
		
pushMeButton.addEventListener("click", function(){
	let boxValue = document.getElementById("inputbox").value
	let number = parseInt(boxValue);
	let sum = number + 1;
	size(sum);
});

function size(a){
	if (a < 10){
	document.getElementById("answer").innerHTML = "small";
	} else if (a >=20){
	document.getElementById("answer").innerHTML = "Large";
	} else {
	document.getElementById("answer").innerHTML = "Med";
}}