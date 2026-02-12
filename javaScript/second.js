let a = 10;
let b = a;
b = 30;
console.log(b); 
console.log(a);

// primitive data type vs Non primitive data type
// primitive data type: immutable
// Non primitive data type: mutable

// Object ex

let obj1 = {
    id:20,
    naming:"Rock"
};
let obj2 = obj1;
console.log(obj1);
console.log(obj2);
obj1.id = 30;
console.log(obj1);
console.log(obj2);



