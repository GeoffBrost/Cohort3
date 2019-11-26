import { functions, Accounts, AccountController } from "./account.js"

test("hello world test", () => {
    functions.helloWorld();
});

test("accounts Object", () => {
    const testaccount = new Accounts("Super Super Cash", 5);
    expect(testaccount.getAccount()).toBe("Super Super Cash");
    expect(testaccount.getBalance()).toStrictEqual(5);

    const testaccount2 = new Accounts("steve", 5000);
    expect(testaccount2.getAccount()).toBe("steve");
    expect(testaccount2.getBalance()).toBe(5000);
});

test("deposit amounts", () => {
    const testaccount = new Accounts("Dave MacBigBucks", 10000);
    expect(testaccount.deposit(10000)).toBe(20000);
    const testaccount2 = new Accounts("sue saver", 500);
    expect(testaccount2.deposit(500.25)).toBe(1000.25);

});

test("Withdraw", () => {
    const testaccount = new Accounts("Billy spender", 50000.00);
    expect(testaccount.withdraw(25000)).toBe(25000.00);
    const testaccount2 = new Accounts("Mike Money", 10000.00);
    expect(testaccount2.withdraw(20000)).toBe(-10000.00);
});
test("return balance", () => {
    const testaccount = new Accounts("Sue Saver", 1000);
    expect(testaccount.getBalance()).toBe(1000.00);
    expect(testaccount.deposit(1000)).toBe(2000.00);
    expect(testaccount.getBalance()).toBe(2000);
    expect(testaccount.withdraw(2000)).toBe(0.00);
});
test("AccountController", () => {
    const controller1 = new AccountController("Steve", "Checking");
    expect(controller1.getUserName()).toBe("Steve");
    let controller2 = controller1.createAccount("Checking", 1000);
    expect(controller2[0].accountName).toBe("Checking");
    expect(controller2[0].balance).toBe(1000);

});

test("Account controller delete test", () => {
    const controller1 = new AccountController("Jimmy", "Saving");
    controller1.createAccount("Checking", 1000);
    controller1.createAccount("Saving", 5000);
    controller1.createAccount("Collage Fund", 1);
    expect(controller1.accountGroup).toEqual([
        { accountName: 'Checking', balance: 1000 },
        { accountName: 'Saving', balance: 5000 },
        { accountName: 'Collage Fund', balance: 1 }]);
    let account4 = controller1.deleteAccount("Saving");
    expect(controller1.accountGroup).toEqual([
        { accountName: 'Checking', balance: 1000 },
        { accountName: 'Collage Fund', balance: 1 }]);
});

test ("total balance on accounts ",()=>{
    const controller1 = new AccountController("Jimmy", "Checking");
    controller1.createAccount("Checking", 500);
    controller1.createAccount("Saving", 500);
    controller1.createAccount("Collage Cash", 250);
    expect(controller1.totalAccountBalance()).toBe(1250);
});
test ("higest account", ()=>{
    const controller1 = new AccountController("Jimmy", "Collage Fund");
    controller1.createAccount("checking", 150);
    controller1.createAccount("Collage Fund", 10000);
    controller1.createAccount("Saving", 10);
    expect(controller1.highestAccount()).toEqual({"accountName": "Collage Fund", "balance": 10000});
});

test ("Lowest Amount Account",()=>{
    const controller1 = new AccountController("Jimmy","Collage Fund");
    controller1.createAccount("Checking", 250);
    controller1.createAccount("Saving", 15000);
    controller1.createAccount("Collage Fund",100);
    expect(controller1.lowestAccount()).toEqual({"accountName": "Collage Fund", "balance": 100});
    console.log(controller1)
})