"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Person {
    name;
    age;
    constructor(n1, n2) {
        this.name = n1;
        this.age = n2;
    }
}
const obj1 = new Person("Badshah", 20);
console.log(obj1);
class employee extends Person {
    salery;
    constructor(salery, name, age) {
        super(name, age);
        this.salery = salery;
    }
}
const E1 = new employee(420, "Rock", 20);
console.log(E1);
// Generic : Template
function value(a) {
    return a;
}
console.log(10);
console.log("Badshah");
console.log(value([10, 20, 30]));
console.log(true);
//# sourceMappingURL=Classes.js.map