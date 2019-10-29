import functions from './syntax.js'

test("Checking for type attributes", () => {
    expect(functions.simpleattributes(2)).toBe("number");
    expect(functions.simpleattributes("d")).toBe("string");
    expect(functions.simpleattributes(true || false)).toBe("boolean");
    expect(functions.simpleattributes({} || [])).toBe("object");
});

test("Checking for array", () => {
    expect(functions.simplearray([])).toBe(true);
});

test("Testing for returning undefind", () => {
    expect(functions.simpleundefined(1)).toBe("undefined");
});

test("If else path testing", () => {
    expect(functions.simpleifelse("yes")).toBe("yes");
    expect(functions.simpleifelse("no")).toBe("no");
    expect(functions.simpleifelse("maybe")).toBe("maybe");
});
test("functions grab p1 p2 returns", () => {
    expect(functions.simplereturn(1, 2)).toBe(3);
    expect(functions.simplereturn(1, 1)).toBe(2);
});

test("add into array font, end, update", () => {
    expect(functions.baseArray()).toStrictEqual([2, 3, 4]);
    expect(functions.shiftArrary()).toStrictEqual([1, 2, 3, 4]);
    expect(functions.pushArray()).toStrictEqual([2, 3, 4, 5]);
    expect(functions.changeArray()).toStrictEqual([1, 2, 8, 4, 5]);
});

test("for loop run counter 5 times and stop", () => {
    expect(functions.forLoop([1, 2, 3, 4, 5])).toStrictEqual([1, 2, 3, 4, 5]);
});

test("while loop count to five", () => {
    expect(functions.whileLoops()).toStrictEqual([1, 2, 3, 4, 5]);
});

test("do while loop", () => {
    expect(functions.doWhileLoop())
        .toStrictEqual([1, 2, 3, 4, 5]);
});

test("for of loop", ()=> {
    const array = ["apple", "oranges", "grapes"];
    expect(functions.forOfLoop(array)[0])
        .toStrictEqual("apple");
    expect(functions.forOfLoop(array)[1])
        .toEqual("oranges");
    expect(functions.forOfLoop(array)[2])
        .toEqual("grapes");
});
// test("for In loop", () => {
//     const array = {
//         apple: 5,
//         oranges: 10,
//         grapes: 1000
//     };
//     expect(functions.forInLoop(array))
//         .toEqual("oranges");
//         console.log(array2);
// });