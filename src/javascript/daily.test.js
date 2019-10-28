import functions from './daily.js'
test("checkMe", function () {
    expect(functions.assertEquals(2, 2)).toBe(true);
    expect(functions.assertEquals(1, 3)).toBe(false);
    expect(functions.assertEquals("a", "b")).toBe(false);
    expect(functions.assertEquals("a", "a")).toBe(true);
    expect(functions.assertEquals("2", 2)).toBe(false);
    expect(functions.assertEquals("This is","This is")).toEqual(true);
});

test('email builder from an array', () => {
    const name = ["first", "last"];
    expect(functions.makeEmailArr(name)).toEqual("first.last@evolveu.ca");
    expect(functions.makeEmailArr(["First", "Last"])).toEqual("first.last@evolveu.ca");
    expect(functions.makeEmailArr(["Bill", "Smith"])).toEqual("bill.smith@evolveu.ca");
});

test('email builder from an object / map', () => {
    const name = { fname: 'first', lname: 'last' };
    expect(functions.makeEmailObj(name))
        .toEqual("first.last@evolveu.ca");
    expect(functions.makeEmailObj({ fname: 'First', lname: 'Last' }))
        .toEqual("first.last@evolveu.ca");
    expect(functions.makeEmailObj({ fname: "Bill", lname: "Smith" }))
        .toEqual("bill.smith@evolveu.ca");
});


test("Basics Arrays for while do while", () => {
    expect(functions.forLoop()).toStrictEqual([1, 2, 3, 4, 5]);
    expect(functions.whileLoop()).toStrictEqual([1, 2, 3, 4, 5]);
    expect(functions.doWhileLoop()).toStrictEqual([1, 2, 3, 4, 5]);
});
test("for in for of ", () => {
    expect(functions.forInLoop()).toBe();
    expect(functions.forOfLoop()).toBe();
});


test('email builder for company', () => {

    const data = {
        staff: [
            { fname: "Jane", lname: "Smith", balance: 10 },
            { fname: "Liam", lname: "Henry", balance: 1000 },
            { fname: "Emma", lname: "Jones", balance: 1330 },
            { fname: "Olivia", lname: "Notly", balance: 310 },
            { fname: "Noah", lname: "Ho", balance: 503 },
            { fname: "William", lname: "Lee", balance: 520 },
            { fname: "Benjamin", lname: "Amis", balance: 150 },
        ],
        company: "EvolveU",
        city: "Calgary",
        prov: "Alberta"
    };
    const staffEmail = functions.loopStaff(data.staff);
    expect(staffEmail[0])
        .toEqual("jane.smith@evolveu.ca");
    expect(staffEmail[3])
        .toEqual("olivia.notly@evolveu.ca");
    expect(staffEmail[6])
        .toEqual("benjamin.amis@evolveu.ca");
});

test('map looping test', () => {
    const objBin = [
        { id: 20, name: 'Piett', rank: 'Capatin' },
        { id: 24, name: 'Veers', rank: 'General' },
        { id: 56, name: 'Ozzel', rank: 'Admiral' },
        { id: 88, name: 'Jerjerrod', rank: 'Commander' }
    ];
    const officersRank = functions.mapLoop(objBin);
    expect(officersRank[0])
        .toEqual("Capatin");
    expect(officersRank[2])
        .toEqual("Admiral");
    expect(officersRank[3])
        .toEqual("Commander");
});

// test("reduce loop with accumlator", () => {
//     let objBin = [
//         { id: 22, name: 'Piett', rank: 'Capatin', years: 15 },
//         { id: 71, name: 'Veers', rank: 'General', years: 20 },
//         { id: 88, name: 'Ozzel', rank: 'Admiral', years: 22 },
//         { id: 15, name: 'Jerjerrod', rank: 'Commander', years: 10 }
//     ];
//     const totalYears = functions.reduceLoopWithAcc(objBin);
//         expect(totalYears)
//             .toEqual(67);
//         expect(bestOff)
// });
