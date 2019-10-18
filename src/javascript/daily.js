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
    //Oct 17 Daily More Array Work
    mapLoop: () => {
        let objBin = [
            { id: 20, name: 'Piett', rank: 'Capatin' },
            { id: 24, name: 'Veers', rank: 'General' },
            { id: 56, name: 'Ozzel', rank: 'Admiral' },
            { id: 88, name: 'Jerjerrod', rank: 'Commander' }
        ];
        let officersRank = objBin.map(officer => officer.rank);
    },
    reduceLoop: () => {
        let objBin = [
            { id: 22, name: 'Piett', rank: 'Capatin', years: 15 },
            { id: 71, name: 'Veers', rank: 'General', years: 20 },
            { id: 88, name: 'Ozzel', rank: 'Admiral', years: 22 },
            { id: 15, name: 'Jerjerrod', rank: 'Commander', years: 10 }
        ];
        let officersyears = objBin.reduce((acc, objBin) => acc + objBin.years, 0);
        let officerexp = objBin.reduce(function (oldest, objBin) {
            return (oldest.years || 0) > objBin.years ? oldest : objBin;
        }, {});
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
}
};

export default functions;