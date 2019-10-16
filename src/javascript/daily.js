const functions =
{
    assertEquals: (p1, p2) => {
        if (p1 === p2) {
            return true;
        } else if (p1 !== p2) {
            // console.log("parameter 1 is " + "parameter 2 is " + p2);
            return false;
        }
    },
    makeEmailArr: (name) => {
        let fullname = `${name[0]}.${name[1]}@evolveu.ca`;
        fullname = fullname.toLowerCase();
        return fullname;
    },
    makeEmailObj: (name) => {
        let fullname = `${name.fname}.${name.lname}@evolveu.ca`;
        fullname = fullname.toLowerCase();
        return fullname;
    },
    forLoop: () => {
        let array = [];
        let i;
        for (i = 1; i < 6; i++) {
            array.push(i);
        };
        return array;
    },
    whileLoop: () => {
        let array = [];
        let i = 1;
        while (i < 6) {
            array.push(i);
            i++;
        } return array;
    },
    doWhileLoop: () => {
        let array = [];
        let i = 1;
        do {
            array.push(i);
            i++;
        }
        while (i < 6);
        return array;
    },
    forInLoop: () => {
        let objBin = {
            apple: 5,
            oranges: 10,
            grapes: 1000
        };
        let item = "";
        for (item in objBin) {
            console.log(item);
        }
    },
    forOfLoop: () => {
        let array = ["apple", "oranges", "grapes"];
        let item = "";
        for (item of array) {
            console.log(item);
        }
    },
};

export default functions;