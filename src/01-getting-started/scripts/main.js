import functions from './functions.js';

// **********
//
// Add the event listeners
// 

idNumber.addEventListener('change', (() => {
    idNumberSize.textContent = functions.size(idNumber.value);
}));

result.addEventListener("click", function() {
    ending.value = functions.myCal()
    });
clear.addEventListener("click", function(){
    functions.resetCal()
});