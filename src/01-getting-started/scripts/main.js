import functions from './functions.js';

// **********
//cd
// Add the event listeners
// 

idNumber.addEventListener('change', (() => {
    idNumberSize.textContent = functions.size(idNumber.value);
}));

result.addEventListener("click", function () {
    ending.value = mainfunctions.myCal()
});
clear.addEventListener("click", function () {
    mainfunctions.resetCal()
});

idcanTaxEnter.addEventListener('click', function () {
    functions.taxCalmain()
});

const mainfunctions = {
    myCal: () => {

        let p1 = parseFloat(document.getElementById("p1").value);
        let p2 = parseFloat(document.getElementById("p2").value);
        let ops = document.getElementById("operation").value;
        switch (ops) {
            case 'add':
                return functions.add(p1, p2);
            case 'subtract':
                return functions.subtract(p1, p2);
            case 'multiply':
                return functions.multiply(p1, p2);
            case 'divide':
                return functions.divide(p1, p2);
        }
    },
    resetCal: () => {
        document.getElementById("p1").value = "";
        document.getElementById("p2").value = "";
        document.getElementById("ending").value = "";
    },
};