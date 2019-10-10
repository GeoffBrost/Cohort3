import functions from './syntax.js'

test("Checking for type attributes"  , () => {
    expect(functions.simpleattributes(2)).toBe("number");
    expect(functions.simpleattributes("d")).toBe("string");
    expect(functions.simpleattributes(true || false)).toBe("boolean");
    expect(functions.simpleattributes({} || [] )).toBe("object");
});

test("Checking for array" ,() => {
    expect(functions.simplearray([])).toBe(true);
});

test("Testing for returning undefind" ,() => {
    expect(functions.simpleundefined(1)).toBe("undefined");
});

test("If else path testing" , () => {
    expect(functions.simpleifelse("yes")).toBe("yes");
    expect(functions.simpleifelse("no")).toBe("no");
    expect(functions.simpleifelse("maybe")).toBe("maybe");
});
// test("functions grab p1 p2 returns" , () => {
//     expect(functions.simplereturn(p1)).toBe(p1);
//     expect(functions.simplereturn(p2)).toBe(p2);
//     expect(functions.simplereturn(p1+p2)).toBe(p1+p2);
// });

test("add into array font, end, update", () => {
    expect(functions.baseArray()).toStrictEqual([2,3,4]);
    expect(functions.shiftArrary()).toStrictEqual([1,2,3,4]);
    expect(functions.pushArray()).toStrictEqual([2,3,4,5]);
    expect(functions.changeArray()).toStrictEqual([1,2,8,4,5]);
});

test("for loop run counter 5 times and stop", () => {
    expect(functions.forLoop()).toStrictEqual([1,2,3,4,5]);
});
