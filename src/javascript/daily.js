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
        let email = `${name.fname}.${name.lname}@evolveu.ca`;
        email = email.toLowerCase();
        return email;
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
        }
    },
    forOfLoop: () => {
        let array = ["apple", "oranges", "grapes"];
        let item = "";
        for (item of array) {
        }
    },
    //Oct 17 Daily More Array Work
    mapLoop: (array) => {
        let officersRank = array.map(array => array.rank);
        return officersRank;
    },
    reduceLoopWithAcc: (array) => {
        let totalYears = array.reduce((acc, officer) => acc + officer.years, 0);
        return totalYears;
    },
    reduceLoopWithGreatest: (array) => {
        let mostExp = array.reduce(function (oldest, officer) {
            return (oldest.years || 0) > officer.years ? oldest : officer;
        }, {});
        return mostExp;
    },

    filterLoop: (array) => {
        let rebels = array.filter(pilot => pilot.faction === "Rebels");
        return rebels;
    },
    forEachLoop: (array) => {
        let pilotName = [];
        array.forEach(findWingMan);
        function findWingMan(item) {
            pilotName.push(item.name);
        }
        return pilotName;
    },
    //Oct 21 loopStaff - October 21, 2019
    loopStaff: (array1) => {
        let staffEmail = array1.map(functions.makeEmailObj);
        return staffEmail;
    },
    // Oct 30 daily acc total and average
    accumulatorBal: (array) => {
        let totalBal = array.reduce((acc, people) => acc + people.balance, 0);
        return totalBal;
    },
    averageBalance: (array) => {
        let totalBal = functions.accumulatorBal(array);
        let averageBal = totalBal / array.length;
        return Number(averageBal.toFixed(2));

    },
    loopStaffIn: (array) => {
       let email = [];
       for (item in array)  
    },
    loopStaffOf: (array) => {
        let email = [];
        for (let item of array) {
            email.push(functions.makeEmailObj(item));
        }
        return email;
    },
    loopStaffMap: (array1) => {
        let staffEmail = array1.map(functions.makeEmailObj);
        return staffEmail;
    },
    loopStaffForEach: (array) => {
        let email = [];
        array.forEach(function (person) {
            email.push(functions.makeEmailObj(person));
        });
        return email;
    }

};

export default functions;