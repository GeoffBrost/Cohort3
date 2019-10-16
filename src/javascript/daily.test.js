import functions from './daily.js'
test ("checkMe", function ()  {
   expect(functions.assertEquals(2,2)).toBe(true);
   expect(functions.assertEquals(1,3)).toBe(false);
   expect(functions.assertEquals("a","b")).toBe(false);
   expect(functions.assertEquals("a","a")).toBe(true);
   expect(functions.assertEquals("2",2)).toBe(false);
//    expect(assertEquals()).toBe()
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
    expect(functions.forLoop()).toStrictEqual([1,2,3,4,5]);
    expect(functions.whileLoop()).toStrictEqual([1,2,3,4,5]);
    expect(functions.doWhileLoop()).toStrictEqual([1,2,3,4,5]);
});
test("for in for of ", () =>{
    expect(functions.forInLoop()).toBe();
    expect(functions.forOfLoop()).toBe();
});