
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
    
    // taxCal: () => {
    //     let taxCalInput = parseFloat(document.getElementById("canTaxInput").value);
    //     return console.log("tax cal",(taxCalInput/100) *15);
    // },
    //Canadian Taxes

    TaxCala: (income) => {
        let tax15 = 0.15 * income
        let remainder = 0; 
        if (income > 47256 && income < 96256) {
            remainder = income - 47256;
            let tax20 = remainder * 0.20;
            let resultTax = tax15 + tax20;
            return resultTax;
        }else {
            return tax15;
        }
    }
}; 

export default functions;
