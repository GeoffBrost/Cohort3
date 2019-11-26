import { functions, AccountController, Accounts } from './daily.js'
//Nov 26
test("Destructuring assignment", () => {
    const object = new AccountController("Jimmy", "Checking");
    object.createAccount("Jimmy", "Checking");
    object.createAccount("steve", "Saving");
    object.createAccount("mike", "Collage Fund");
    object.createAccount("Jen", "Moneyz please please please");
    console.log(object.accountGroup);
    let [account1, account2, ...rest]= object.accountGroup;
    console.log(account1);
    console.log(account2);
    console.log(rest);
    expect(account1).toEqual({ accountName: 'Jimmy', balance: 'Checking' });
    expect(account2).toEqual({ accountName: 'steve', balance: 'Saving' });
    expect(rest).toEqual([{ accountName: 'mike', balance: 'Collage Fund' },{ accountName: 'Jen', balance: 'Moneyz please please please' }]);
});

// Nov 8 Callback Exercise
// test("CallBack Exercise", ()=>{
//     expect(functions.callBack(people)).toBe(44);
// })


test("More Array Oct ", () => {
    expect(functions.accumulatorBal(data.staff)).toBe(3823);
    expect(functions.accumulatorBal(test2)).toBe(840);
});
test("averageBalance", () => {
    expect(functions.averageBalance(data.staff)).toBe(546.14);
    expect(functions.averageBalance(test2)).toBe(280);
});

test("checkMe", function () {
    expect(functions.assertEquals(2, 2)).toBe(true);
    expect(functions.assertEquals(1, 3)).toBe(false);
    expect(functions.assertEquals("a", "b")).toBe(false);
    expect(functions.assertEquals("a", "a")).toBe(true);
    expect(functions.assertEquals("2", 2)).toBe(false);
    expect(functions.assertEquals("This is", "This is")).toEqual(true);
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


    const staffEmail = functions.loopStaff(data.staff);
    expect(staffEmail[0])
        .toEqual("jane.smith@evolveu.ca");
    expect(staffEmail[3])
        .toEqual("olivia.notly@evolveu.ca");
    expect(staffEmail[6])
        .toEqual("benjamin.amis@evolveu.ca");
});

test('map looping test', () => {
    const objBin = starWarsCommanders;
    const officersRank = functions.mapLoop(objBin);
    expect(officersRank[0])
        .toEqual("Capatin");
    expect(officersRank[2])
        .toEqual("Admiral");
    expect(officersRank[3])
        .toEqual("Commander");
});

test("reduce loop with accumlator", () => {

    const objBin = starWarsCommanders;
    const totalYears = functions.reduceLoopWithAcc(objBin);
    const mostExp = functions.reduceLoopWithGreatest(objBin);
    expect(totalYears)
        .toEqual(67);
    expect(mostExp.years)
        .toEqual(22);

});
test("filter looper test", () => {
    const pilots = starWarsPilots
    const rebelspilots = functions.filterLoop(pilots);
    const pilotsName = functions.forEachLoop(pilots);
    expect(rebelspilots[0])
        .toEqual({ id: 2, name: "Wedge Antilles", faction: "Rebels", role: "Wingman" });
    expect(rebelspilots[1])
        .toEqual({ id: 5, name: "Luke Skywalker", faction: "Rebels", role: "Leader" });

    expect(pilotsName[0])
        .toEqual("Wedge Antilles");
    expect(pilotsName[2])
        .toEqual("Luke Skywalker");
    expect(pilotsName[5])
        .toEqual("Biggs Darklighter");

});

test('functions.loopStaffForEachdata.staff', () => {
    const staffEmail = functions.loopStaffForEach(data.staff);
    expect(staffEmail[0]).toBe('jane.smith@evolveu.ca');
    expect(staffEmail[3]).toBe('olivia.notly@evolveu.ca');
    expect(staffEmail[6]).toBe('benjamin.amis@evolveu.ca');
});
test("loopStaffMapping", () => {
    const staffEmail = functions.loopStaffMap(data.staff);
    expect(staffEmail[0]).toBe('jane.smith@evolveu.ca');
    expect(staffEmail[3]).toBe('olivia.notly@evolveu.ca');
    expect(staffEmail[6]).toBe('benjamin.amis@evolveu.ca');
});

test("loopStaffOF", () => {
    const staffEmail = functions.loopStaffOf(data.staff);
    expect(staffEmail[0]).toBe('jane.smith@evolveu.ca');
    expect(staffEmail[3]).toBe('olivia.notly@evolveu.ca');
    expect(staffEmail[6]).toBe('benjamin.amis@evolveu.ca');
});


// Test Data 


let starWarsPilots = [
    { id: 2, name: "Wedge Antilles", faction: "Rebels", role: "Wingman" },
    { id: 421, name: "Mualer Mithel", factions: "Empire", role: "Wingman" },
    { id: 5, name: "Luke Skywalker", faction: "Rebels", role: "Leader" },
    { id: 1, name: "Darth Vader", factions: "Empire", role: "Leader" },
    { id: 5555, name: "Backstaber", faction: "Empire", role: "Wingman" },
    { id: 3, name: "Biggs Darklighter", faction: "Rebels", role: "Wingman" }
];

const starWarsCommanders = [
    { id: 22, name: 'Piett', rank: 'Capatin', years: 15 },
    { id: 71, name: 'Veers', rank: 'General', years: 20 },
    { id: 88, name: 'Ozzel', rank: 'Admiral', years: 22 },
    { id: 15, name: 'Jerjerrod', rank: 'Commander', years: 10 }
];

const people = [
    { fname: "Alex", lname: "Smith", province: "BC", age: 33 },
    { fname: "Angela", lname: "Jones", province: "AB", age: 61 },
    { fname: "Anne", lname: "Bird", province: "SK", age: 35 },
    { fname: "Brent", lname: "Riddle", province: "MN", age: 79 },
    { fname: "Byron", lname: "Cardenas", province: "BC", age: 38 },
    { fname: "Carrie", lname: "Ramirez", province: "AB", age: 89 },
    { fname: "Cheryl", lname: "Glenn", province: "SK", age: 70 },
    { fname: "Dima", lname: "Curry", province: "MN", age: 67 },
    { fname: "Dustin", lname: "Bullock", province: "BC", age: 59 },
    { fname: "Eva", lname: "Keiths", province: "AB", age: 24 },
    { fname: "Faith", lname: "Liu", province: "SK", age: 46 },
    { fname: "Fawad", lname: "Bowman", province: "MN", age: 69 },
    { fname: "Forest", lname: "Vaughn", province: "BC", age: 52 },
    { fname: "Giovanni", lname: "Browning", province: "AB", age: 32 },
    { fname: "Greg", lname: "Hogan", province: "SK", age: 55 },
    { fname: "Harpreet", lname: "Ramsey", province: "MN", age: 18 },
    { fname: "Ian", lname: "Fitzgerald", province: "BC", age: 16 },
    { fname: "James", lname: "Kramer", province: "AB", age: 57 },
    { fname: "Jarvis", lname: "Ortega", province: "SK", age: 69 },
    { fname: "Jawad", lname: "Huerta", province: "MN", age: 35 },
    { fname: "Jinbong", lname: "Robinson", province: "BC", age: 26 },
    { fname: "Jingnan", lname: "Hatfield", province: "AB", age: 71 },
    { fname: "Joe", lname: "Banks", province: "SK", age: 37 },
    { fname: "Kristina", lname: "Dalton", province: "MN", age: 73 },
    { fname: "Latora", lname: "Matthews", province: "BC", age: 25 },
    { fname: "Lauren", lname: "McClure", province: "AB", age: 42 },
    { fname: "Licedt", lname: "Rasmussen", province: "SK", age: 30 },
    { fname: "Linden", lname: "Pierce", province: "MN", age: 68 },
    { fname: "Luis", lname: "Price", province: "BC", age: 23 },
    { fname: "Marcela", lname: "Perez", province: "AB", age: 20 },
    { fname: "Marilou", lname: "Graham", province: "SK", age: 32 },
    { fname: "Matt", lname: "Novak", province: "MN", age: 29 },
    { fname: "Monica", lname: "Giles", province: "BC", age: 34 },
    { fname: "Niloufar", lname: "Carson", province: "AB", age: 29 },
    { fname: "Omar", lname: "Olson", province: "SK", age: 69 },
    { fname: "Roger", lname: "Woodard", province: "MN", age: 84 },
    { fname: "Roman", lname: "Swanson", province: "BC", age: 21 },
    { fname: "Seun", lname: "Kelly", province: "AB", age: 60 },
    { fname: "Shane", lname: "Frost", province: "SK", age: 87 },
    { fname: "Steven", lname: "Haynes", province: "MN", age: 47 },
    { fname: "Thomas", lname: "Hart", province: "BC", age: 14 },
    { fname: "Trent", lname: "Kerr", province: "AB", age: 12 },
    { fname: "Darrell", lname: "Koch", province: "SK", age: 10 },
    { fname: "Tylor", lname: "Torres", province: "MN", age: 98 }
];


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

const test2 = [];
test2.push(data.staff[0]);
test2.push(data.staff[3]);
test2.push(data.staff[5]);