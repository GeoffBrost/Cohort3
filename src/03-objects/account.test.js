import {functions,Accounts} from "./account.js"

test("hello world test", () => {
    functions.helloWorld();
});

test("accounts Object", () => {
    const testaccount = new Accounts("Super Super Cash", 5);
    expect(testaccount.getAccount()).toBe("Super Super Cash");
    expect(testaccount.getBalance()).toStrictEqual(5);
    
    const testaccount2 = new Accounts("steve", 5000);
    expect (testaccount2.getAccount()).toBe("steve");
    expect (testaccount2.getBalance()).toBe(5000);
});

test("deposit amounts", ()=>{
    const testaccount = new Accounts("Dave MacBigBucks",10000);
    expect(testaccount.deposit(10000)).toBe(20000);
    const testaccount2 = new Accounts("sue saver",500 );
    expect(testaccount2.deposit(500.25)).toBe(1000.25); 

});

test ("Withdraw",()=>{
    const testaccount= new Accounts("Billy spender", 50000.00);
    expect(testaccount.withdraw(25000)).toBe(25000.00);
    const testaccount2= new Accounts("Mike Money", 10000.00);
    expect(testaccount2.withdraw(20000)).toBe(-10000.00);
});
test ("return balance",()=>{
    const testaccount = new Accounts("Sue Saver", 1000);
    expect(testaccount.getBalance()).toBe(1000.00);
    expect(testaccount.deposit(1000)).toBe(2000.00);
    console.log(testaccount);
    expect(testaccount.getBalance()).toBe(2000.00);
    expect(testaccount.withdraw(2000)).toBe(0.00);
});