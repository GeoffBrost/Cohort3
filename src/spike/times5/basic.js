/*alert("Hello from Javascrpit");
*/

const buttonGrab = document.getElementById('Enter');
let userinput = document.getElementById('inputBox').value

buttonGrab.addEventListener("click", function(){
	console.log("click");
	let userinput = document.getElementById('inputBox').value
	console.log(userinput);
	let number = parseInt(userinput);
	console.log(number);
	let sum = number + 1;
	console.log(sum);
	size(sum);
}) 

function size(a){
	if (a >= 20){
		document.getElementById("answer").innerHTML = "Large";
	} else if (a < 10) {
		document.getElementById("answer").innerHTML = "Small";
	} else { document.getElementById("answer").innerHTML = "med";
	
	}
}