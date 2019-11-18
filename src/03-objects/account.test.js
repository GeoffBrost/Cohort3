import {functions,accounts} from "./account.js"

test("hello world test", () => {
    functions.helloWorld();
});

test("accounts Object", () => {
    const testaccount = new accounts("Super Super Cash", 5);
    expect(testaccount.getAccount()).toBe("Super Super Cash");
    expect(testaccount.getStartBalance()).toBe(5);
    const testaccount = new accounts("steve" 5000);
    expect (testaccount.getAccount()).toBe("steve");
    expect (testaccount.getStartBalance()).toBe(5000);
});