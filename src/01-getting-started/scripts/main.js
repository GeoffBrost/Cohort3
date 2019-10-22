import functions from './functions.js';

// **********
//cd
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

canTaxEnter.addEventListener('click', function(){
    functions.taxCal()
});