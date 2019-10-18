import functions from './functions.js';

// **********
//
// Add the event listeners
// 

idNumber.addEventListener('change', (() => {
    idNumberSize.textContent = functions.size(idNumber.value);
}));

result.addEventListener("click", functiuon() {
    ending.textContent = functions.myCal()
    });