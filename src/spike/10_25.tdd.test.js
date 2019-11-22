
// step 1 create two files PSC and .test
// step 2 write test for console.log
// step 3 import export between PSC .test
// step 4 write stub - stub empty function with function name and pereamaters
// the return a dumb result 
// step 5 write test - fail 
// step 6 change test to pass - minmal code
// step 7 contiune unit done
// refactor

import functions from "./10_25_tdd.js"
import { exportAllDeclaration } from "@babel/types";

test("hello world", () => {
    console.log("hello world from test");
    expect(functions.helloWorld()).toBe(undefined);
});
test("sum", () => {
    expect(functions.sum(2, 2)).toBe(4);
    expect(functions.sum(2, 1)).toBe(3);
});
