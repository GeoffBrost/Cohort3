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
	switch(sum) {
		case (sum < 9):
		console.log("Small");
		break;
		case (sum < 10) :
		console.log("med");
		break;
		case (sum >= 20) :
		console.log("Large");
		break;
	
	}
}) 

// function size(a){
// 	if (a >= 20){
// 		document.getElementById("answer").innerHTML = "Large";
// 	} else if (a < 10) {
// 		document.getElementById("answer").innerHTML = "Small";
// 	} else { document.getElementById("answer").innerHTML = "med";
	
// 	}
// }
// switch() {
// 	case a >= 20:
// 	console.log("Large");
// 	break;
// 	case a < 10 :
// 	console.log("Small");
// 	break;
// 	default :
// 	console.log("med");
// 	break;

// }