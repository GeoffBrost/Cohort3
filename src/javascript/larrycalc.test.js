import functions from './larrycalc.js'

test("hello world", () => {
    console.log("hello world");
    functions.helloworld();
});
test("sum", () => {
    expect(functions.sum(1, 1)).toBe(2);
    expect(functions.sum(3,1)).toBe(4)
});
test("sum2",() =>{
    expect(functions.sum2(30,2)).toBe(32);
    expect(functions.sum2(1,1)).toBe(2);
});
