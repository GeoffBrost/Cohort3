import { Person, functions } from "./oostuff.js"
import { exportAllDeclaration } from "@babel/types";


test("hello World", () => {
    console.log("hello world from oostuff.js");
    functions.helloWorld();
});
test("class name return", () => {
    const l = new Person("Larry", 5);
    expect (l.getName()).toBe("Larry");
    expect (l.getAge()).toBe(5);
    l.birthday();
    expect(l.getAge()).toBe(6);
    const d = new Person("Dean", 29);
    expect (d.getName()).toBe("Dean");
    expect (d.getAge()).toBe(29);
    d.birthday();
    expect(d.getAge()).toBe(30);

});
