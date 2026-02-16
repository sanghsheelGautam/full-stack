"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const obj = {
    name: "badshah",
    age: 20,
    gender: "male",
    adhar: 45115
};
const obj01 = {
    name: "Badshah",
    age: 20,
    balance: 252
};
;
const arr = [{ name: "badshah", age: 20 }, { name: "vinay", age: 20 }];
// function in TS
function greet(a) {
    console.log(a);
    return a + 5;
}
console.log(greet(10));
function meet(msg, val) {
    console.log(msg, val);
}
meet("badshah ROck", 50);
// arrow functuon 
const sum = (a, b) => {
    return a + b;
};
console.log(20, 40);
// call back
function placeOrder(Order, callback) {
    const amount = Order + 20;
    callback(amount);
}
placeOrder(10, (amount) => {
    console.log(amount);
});
// Rest Parameter
function total(...arr) {
    let ans = 0;
    arr.forEach((val) => ans = ans + val);
    console.log(ans);
}
total(1, 2, 5, 8, 82, 3, 3, 5, 6, 5);
const obj2 = {
    name: "Badshah",
    age: 20,
    sallay: "no ",
    id: 200
};
console.log(obj2);
//# sourceMappingURL=app.js.map