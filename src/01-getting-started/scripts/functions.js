
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
    taxCal26: (income) => {
        let base = income - 95259;
        let rateBase = base * 0.26
        let taxedBase = rateBase + 16908;
        return taxedBase;
    },
    taxCal29: (income) => {
        let base = income - 147667;
        let rateBase = base * 0.29
        let taxedBase = rateBase + 30535;
        return taxedBase;
    },
    taxCal33: (income) => {
        let base = income - 210371;
        let rateBase = base * 0.33
        let taxedBase = rateBase + 48719;
        return taxedBase;
    },
    taxCalmain: (income) => {
        if (income < 47630) {
            return functions.taxCal15(income);
        }
        else if (income > 47630 && income < 95259) {
            return functions.taxCal20(income);
        } else if (income > 95259 && income < 147667) {
            return functions.taxCal26(income);
        } else if (income > 147667 && income < 210371) {
            return functions.taxCal29(income);
        } else if (income > 210371) {
            return functions.taxCal33(income);
        }
    },
    addWWArray: (arrayInput) => {
        workingWithArray.push(arrayInput);
        console.log(workingWithArray);
        return workingWithArray;
    },
    showWWArray: () => {
        console.log(workingWithArray);
    }
};

const workingWithArray = [];

export default functions;
