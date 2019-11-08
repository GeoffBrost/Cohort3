
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

    //Canadian Taxes
    
    taxCal15: (income) => {
        return Number(income) * 0.15
    },
    taxCal20: (income) => {
        let base = income - 47630;
        let rateBase = base * 0.205
        let taxedBase = rateBase + 7145;
        return taxedBase;
    },
    taxCal26:(income)=>{
        let base = income - 95259;
        let rateBase = base * 0.26
        let taxedBase = rateBase + 16908;
        return taxedBase;
    },
    taxCal29:(income)=>{
        let base =income - 147667;
        let rateBase = base * 0.29
        let taxedBase = rateBase + 30535;
        return taxedBase;
    },
    taxCal33:(income) => {
        let base =income - 210371;
        let rateBase = base * 0.33
        let taxedBase = rateBase + 48719;
        return taxedBase;
    },
    taxCalmain:()=>{
        if (income < 47630){
            functions.taxCal15(income);
        }
    }
        

};


export default functions;
