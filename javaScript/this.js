
// globalObject
// window
// console.log();
// console.log(Math.random());
// setInterval();
// new Object();
// new String("Rock"); 
// console.log(globalThis);
// ye sab global Object me ata hai 



// this keyword

// this keyword in js is a special keyword that refers to the context 
// //in which the current code is being executed.
// Its value depends on how the function where this is used is called.

// 1: global context (Outside Any Function)
// In browsers: window
// In Node.js:Module's exports Object


// "use strict"
// let a = 10;
// const b = 20;
// console.log(this.a);
// console.log(this==window);
// let obj ={
//     name:10
// }
// Object.freeze(obj);
// obj.name = 30;
// console.log(obj);

// "use strict"
// let obj ={
//     name:"ROck",
//     age:21,
//     greet:function(){
//         console.log(this.name);
//     }
// }
// // obj.greet();
// greet();
// window.greet();


// let obj ={
//     name:"ROck",
//     age:21,
//     greet:()=>{
//         console.log(this);
//     }
// }
// obj.greet();

// let obj ={
//     name:"ROck",
//     age:21,
//     greet:function(){
//     let ab = ()=>{
//         console.log(this);
//     };
//     ab();
// }
// }
// obj.greet();



// class Person{
//     constructor(name,age){
//         this.name = name;
//         this.age = age;
//     }
// };

// let a = new Person("ROck",10);
// console.log(a);

let greet = ()=>{
    console.log(this);
}
greet();

let meet = function(){
    console.log(this);
}
meet();
