import {functions,Bank} from "./account.js"

test("hello world test", () => {
    functions.helloWorld();
});

test("accounts Object", () => {
    const testaccount = new Bank("Super Super Cash", 5);
    expect(testaccount.getAccount()).toBe("Super Super Cash");
    expect(testaccount.getStartBalance()).toBe(5);
    // console.log("before deposit" ,testaccount.startBalance);
    testaccount.deposit(60);
    testaccount.withdraw(3)
    // console.log("After deposit", testaccount.startBalance);
    // expect(testaccount.getStartBalance()).toBe(6);
    testaccount.balance();
    const testaccount2 = new Bank("steve", 5000);
    expect (testaccount2.getAccount()).toBe("steve");
    expect (testaccount2.getStartBalance()).toBe(5000);
});