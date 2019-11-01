class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
        getName() {
            return this.name;
        }
        getAge(){
            return this.age;
        }
        birthday(){
            this.age ++;
        }

};

const functions = {
    helloWorld: () => {
        console.log("hello world from PCS");
    }
};
export { Person, functions };
