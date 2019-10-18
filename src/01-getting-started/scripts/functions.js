
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
        console.log("testing");
        let p1 = document.getElementById("p1").value;
        let p2 = document.getElementById("p2").value;
        let ops = document.getElementById("operation").value;
        switch (ops) {
            case add:
                functions.add(p1, p2);
                break;
            case sub:
                functions.sub(p1, p2);
                break;
            case multiply:
                functions.multiply(p1, p2);
                break;
            case divide:
                functions.divide(p1, p2);
                break;
        }
    }
};




export default functions;
