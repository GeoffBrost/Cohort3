
const functions = {

    size: (num) => {
        if (num < 0) return "negative";
        if (num < 10) return "small";
        if (num < 20) return "medium";
        return "large";
    },

    add: (num1, num2) => {
        return num1 + num2;
    },
    subtract: (num1, num2) => {
        return num1 - num2;
    },
    multiply: (num1, num2) => {
        return num1 * num2
    },
    divide: (num1, num2) => {
        return (num1 / num2)
    },
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
        document.getElementById("p1").value="";
        document.getElementById("p2").value="";
        document.getElementById("ending").value="";
    },
    taxCal: () => {
        let taxCalInput = parseFloat(document.getElementById("canTaxInput").value);
        return("tax cal",(taxCalInput/100) *15);
    },


};


export default functions;
