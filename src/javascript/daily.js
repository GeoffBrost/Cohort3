const functions =
{
    assertEquals: (p1, p2) => {
        if (p1 === p2) {
            return true;
        } else if (p1 !== p2) {
            console.log("parameter 1 is " + "parameter 2 is " + p2);
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
    reduceLoopWithGreatest:(array) => {
        let mostExp = array.reduce(function (oldest, officer) {
            return (oldest.years || 0) > officer.years ? oldest : officer;
          }, {});
          return mostExp;
    },

    filterLoop: () => {
        let pilots = [
            { id: 2, name: "Wedge Antilles", faction: "Rebels" },
            { id: 3, name: "Biggs Darklighter", faction: "Rebels" },
            { id: 5, name: "Luke Skywalker", faction: "Rebels" },
            { id: 1, name: "Darth Vader", factions: "Empire" },
            { id: 421, name: "Mualer Mithel", factions: "Empire" },
            { id: 5555, name: "Backstaber", faction: "Empire" }
        ];
        let rebels = pilots.filter(pilot => pilot.faction === "Rebels");
    },
    forEachLoop: () => {
        let pilots = [
            { id: 2, name: "Wedge Antilles", faction: "Rebels", role: "Wingman" },
            { id: 3, name: "Biggs Darklighter", faction: "Rebels", role: "Wingman" },
            { id: 5, name: "Luke Skywalker", faction: "Rebels", role: "Leader" },
            { id: 1, name: "Darth Vader", factions: "Empire", role: "Leader" },
            { id: 421, name: "Mualer Mithel", factions: "Empire", role: "Wingman" },
            { id: 5555, name: "Backstaber", faction: "Empire", role: "Wingman" }
        ];
        function myForFunction(role, Wingman) {
            console.log();
        }
    },
    //Oct 21 loopStaff - October 21, 2019
    loopStaff: (array1) => {
        let staffEmail = array1.map(functions.makeEmailObj);
        return staffEmail;
    }
};

export default functions;