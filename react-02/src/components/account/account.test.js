import React from 'react';
import AccountController from "./AccountController.js"
import Account from "./Account.js"
// import functions from "./accounts.functions"

test("test Accounts constructer", () => {
    const testaccount = new Account("Super Super Cash", 5);
    expect(testaccount.getAccount()).toBe("Super Super Cash");
    expect(testaccount.getBalance()).toStrictEqual(5);

    const testaccount2 = new Account("steve", 5000);
    expect(testaccount2.getAccount()).toBe("steve");
    expect(testaccount2.getBalance()).toBe(5000);
});

test("deposit amounts", () => {
    const testaccount = new Account("Dave MacBigBucks", 10000);
    expect(testaccount.deposit(10000)).toBe(20000);
    const testaccount2 = new Account("sue saver", 500);
    expect(testaccount2.deposit(500.25)).toBe(1000.25);

});

test("Withdraw", () => {
    const testaccount = new Account("Billy spender", 50000.00);
    expect(testaccount.withdraw(25000)).toBe(25000.00);
    const testaccount2 = new Account("Mike Money", 10000.00);
    expect(testaccount2.withdraw(20000)).toBe(-10000.00);
});
test("return balance", () => {
    const testaccount = new Account("Sue Saver", 1000);
    expect(testaccount.getBalance()).toBe(1000.00);
    expect(testaccount.deposit(1000)).toBe(2000.00);
    expect(testaccount.getBalance()).toBe(2000);
    expect(testaccount.withdraw(2000)).toBe(0.00);
    expect(testaccount.getBalance()).toBe(0);
});

// ---------------------------------------------------

test("AccountController Create account", () => {
    const controller1 = new AccountController();
    let controller2 = controller1.createAccount("Checking", 1000);
    expect(controller2[0].accountName).toBe("Checking");
    expect(controller2[0].balance).toBe(1000);

});

test("Account controller delete test", () => {
    const Account = new AccountController();
    Account.createAccount("Checking", 1000);
    Account.createAccount("Saving", 5000);
    Account.createAccount("Collage Fund", 1);
    expect(Account.accountList).toEqual([
        { accountName: 'Checking', balance: 1000, key: 0 },
        { accountName: 'Saving', balance: 5000, key: 1 },
        { accountName: 'Collage Fund', balance: 1, key: 2 }]);
    Account.deleteAccount(1);
    expect(Account.accountList).toEqual([
        { accountName: 'Checking', balance: 1000, key: 0 },
        { accountName: 'Collage Fund', balance: 1, key: 2 }]);
});

test("total balance on accounts ", () => {
    const controller1 = new AccountController();
    controller1.createAccount("Checking", 500);
    controller1.createAccount("Saving", 500);
    controller1.createAccount("Collage Cash", 250);
    expect(controller1.totalAccountBalance()).toBe(1250);
});
test("higest account", () => {
    const account = new AccountController();
    account.createAccount("checking", 150);
    account.createAccount("Collage Fund", 10000);
    account.createAccount("Saving", 10);
    expect(account.highestAccount()).toEqual
    ({"accountName": "Collage Fund", "balance": 10000, "key": 1});
    const account2 = new AccountController();
    account2.createAccount("checking", 1500);
    account2.createAccount("Collage Fund", 100);
    account2.createAccount("Saving", 10);
    expect(account2.highestAccount()).toEqual
    ({"accountName": "checking", "balance": 1500, "key": 0});
});

test("Lowest Amount Account", () => {
    const account1 = new AccountController();
    account1.createAccount("Checking", 250);
    account1.createAccount("Saving", 15000);
    account1.createAccount("Collage Fund", 100);
    expect(account1.lowestAccount()).toEqual
    ({"accountName": "Collage Fund", "balance": 100, "key": 2});
    const account2 = new AccountController();
    account2.createAccount("Checking", 11250);
    account2.createAccount("Saving", 100);
    account2.createAccount("Collage Fund", 2500);
    expect(account2.lowestAccount()).toEqual
    ({"accountName": "Saving", "balance": 100, "key": 1});

});
function createBigDiv() {
    let createDiv = document.createElement("div");
    createDiv.className = "BigDiv";
    createDiv.setAttribute("bigDiv", true);
    return createDiv;
};

test("select Account", () => {
    const controller1 = new AccountController();
    controller1.createAccount("Checking", 250);
    controller1.createAccount("Saving", 15000);
    controller1.createAccount("Collage Fund", 100);
    console.log(controller1);
    expect(controller1.selectAccount(2).accountName).toBe("Collage Fund");
    expect(controller1.selectAccount(0).accountName).toBe("Checking");
});

test("Controller Account deposit", () => {
    const controller1 = new AccountController();
    controller1.createAccount("a", 16);
    controller1.createAccount("b", 10);
    controller1.createAccount("c", 16);
    controller1.createAccount("d", 120);
    console.log(controller1.accountList[1].balance, controller1.accountList[1].accountName);
    controller1.deposit(1, 5)
    console.log(controller1.accountList[1].balance);

})
test("Controller Account withdraw", () => {
    const controller1 = new AccountController();
    controller1.createAccount("a", 16);
    controller1.createAccount("b", 10);
    controller1.createAccount("c", 16);
    controller1.createAccount("d", 120);
    console.log(controller1.accountList[1].balance, controller1.accountList[1].accountName);
    controller1.withdraw(1, 5)
    // console.log(controller1);
    console.log(controller1.accountList[1].balance);

})