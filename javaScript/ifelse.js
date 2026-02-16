// If else
// let age = 30;
// if(age>=18){
//     console.log("Eligble for vote");
// }
// else{
//     console.log(" Not Eligble for vote");

const { useCallback } = require("react");

// }

// if else if
// let age = 44;
// if (age<18) {
//      console.log("KID");

// }
// else if(age>45){
//         console.log("old");

// }
// else{
//     console.log("yange");

// }


// multiple condition:whitch case
// const day = new Date().getDay();
// console.log(day);

// switch(day){
//     case 0:
//         console.log("Sunday");
//         break;
//     case 1:
//         console.log("Monday");
//         break;
//     case 2:
//         console.log("Tuesday");
//         break;
//     case 3:
//         console.log("Wednesday");
//         break; 
//     case 4:
//         console.log("Thursday");
//         break; 
//     case 5:
//         console.log("Friday");
//         break;
//     case 6:
//         console.log("Saturday");
//         break;
//     default:
//         console.log("Not a valid day");
// }



// loop : ek hi kam ko bar bar print karana 

// for loop
// let sum =0;
// for(let i=0;i<=5;i++){
//      sum +=i;     
//     }
//     console.log(sum);
// // Nested for loop: Loop ke andar loop
// for(let i =0;i<5;i++){
//     for(let j =0;j<5;j++){
//     }
//     console.log("*****");
// }



// scope ke baare main:
// globle scope
// let a = 10;
// var b = 6;
// const c = 9;
// function greet(){
//     let a = 10;
//     var b = 6;
//     const c = 9;
    
//     console.log("Hello");
// }
// greet();
// console.log(b);


// console.log(c); 
// let a = 1;
// const b = 2;
// var c = 3;
// console.log(a); 
// console.log(b); 



// while loop
// let  i=0;
// while(i<6){
//     console.log(i);
//     i++;
// }

// do while loop   (HW)

// let arr = [10,20,30];
// for(let i =0;i<arr.length;i++){
//     console.log(arr[i]);
// }

// const obj  = {
//     name:"Rock",
//     age:21,
//     city:"jaunpur"
// }
// const key = Object.keys(obj);
// for(let i=0;i<key.length;i++){
//     console.log(obj[key[i]]);
// }

// let obj = {
//     name:"Rock",
//     age:12,
//     gender:"Male",
//     city:"Jaunpur"
// };

// // for in loop , I can iterate over keys in an object
// for(let key in obj){
//     console.log(key,obj[key]);
// }

// console.log(Object.keys(obj));


// let obj2 = Object.create(obj);
// obj2.money = 214;
// obj2.id = "bass";
// console.log(obj2);
// console.log(Object.keys(obj2));
// for(let key in obj2){
//     console.log(key,obj[key]);
// }

// let obj1 = {};
// obj1.name = "Rock";
// obj1.age = 21;
// // key value writable enumerable configurable
// console.log(Object.getOwnPropertyDescriptor(obj1,'name'));

// writable = true or value ko kya main change kar sakta hu
// obj1.name = "Badshah";
// configurable: true -> change kar sakte hai agar false hai to nhi kar sakte hai




// let obj1 = {};
// obj1.name = "Rock";
// obj1.age = 21;
// // key value writable enumerable configurable
// Object.getOwnPropertyDescriptor(obj1,"name",{
//     writable: true,
//     enumerable: true, 
//     configurable: true
// });
// console.log(obj1);


// let obj1 = {};
// // obj1.name = "Rock";
// // obj1.age = 21;
// // key value writable enumerable configurable
// Object.defineProperties(obj1,'name',{
//     value: "Badshah",
//     writable: false,
//     enumerable: false, 
//     configurable: false
// });
// obj1.name="Sanghsheel";
// console.log(obj1);


// let obj1 = {
// name:"Rock",
// age:21,
// account_number:455522155
// };
// key value writable enumerable configurable
// Object.defineProperties(obj1,"account_number",{
//     writable: false
//     // enumerable: true, 
//     // configurable: true
// });
// console.log(obj1);


// let costumer = {
// name:"Rock",
// age:21,
// account_number:455522155
// };
// Object.defineProperties(costumer,"name",{
//     enumerable:false,
// })

// for(let key in costumer){
// console.log(key);
// }


// for in loop: Inko array ke sath nhi lete 
// array is an Object 
// const arr = [1,4,5,2];
// arr.name = "Badshah";
// for(let key in arr){
//     console.log(key,arr[key]);

// }


// let user = {
//     name:"Rock",
//     age:21
// }
// Object.defineProperty(user,'name',{
//     writable:false,
// });
// user.name = "badshah";

// console.log(Object.getOwnPropertyDescriptor(user,"name"));



// for of loop  => don't use for of loop in object

// const arr = [10,20,30,40,50,60];
// for(let value of arr){
//     console.log(value);
// }

// let str = "Badshah is a good boys";
// for(let value of str){
//     console.log(value);

// }

// const obj ={
//     name:"badshah",
//     age:21
// }
// // for(let value of obj){ //obj is not iterable
// //     console.log(value);
// // }
// for(let value of Object.keys(obj)){
//     console.log(value,obj[value]);
// }



// forEach

// let arr = [10,20,30,40,50,60];
// arr.forEach((num)=>{
//     console.log(num);
// });
// let arr = [10,20,30,40,50,60];
// arr.forEach(num =>  console.log(num));

// let arr = [10,20,30,40,50,60];
// single argument:number
// second index
// third:array ko bhi pass
// arr.forEach(callBackFunction)
// arr.forEach((num,index,a) => {
//     a[index] = num*2;
// });
// console.log(arr);

// function greet(num){
//     console.log(num);
// }
// arr.forEach(greet);


// filter 
//  filter ke andar ham sirf filter kar sakte hai modifie nhi kar sakte hai

// ye yes aur no me ans accept karta hai
// let arr = [10,22,33,41,50,60];
// const result = arr.filter((num)=>{
//     return num % 2 == 0;
// });

//  short me 
// const result = arr.filter((num)=>num % 2 == 0);
// console.log(result);

// const student = [
//     {name:"Badshah",age:22,marks:70},
//     {name:"vinay",age:21,marks:80},
//     {name:"Rock",age:32,marks:50},
//     {name:"Karisham",age:22,marks:70},
//     {name:"Jahanvi",age:22,marks:40},
//     {name:"kapoor",age:52,marks:90},

// ];
// const result = student.filter((obj)=>{
//     return obj.marks>50;
// });

// // single line me likh sakte hai (short me)
// const result1 = student.filter((obj)=> obj.marks>50);
// const result2 = student.filter((value)=> value.marks>50);
// const result3 = student.filter(({marks})=> marks>50);


// console.log(result);
// console.log(result1);
// console.log(result2);
// console.log(result3);



// Map
// map me value ko modifie kar sakte hai 
// const arr=[1,2,3,4,5,6];
// const result= arr.map((num)=>{
//     return num*num;
// })
// //  short me 
// const result1= arr.map(num=>num*num);
// console.log(result);
// console.log(result1);

// const arr=[1,2,3,4,5,6];
// const result = arr.filter((num)=> num%2==0).map((num)=>num*num);
// console.log(result);

// reduce
// const arr = [10,20,30,40,50,60];
// // const result = arr.reduce(callback function, initialization)
// const result = arr.reduce((acc,curr)=>{
//     console.log(acc,curr);
//     acc = acc+curr;
//     return acc;
// },0);
// console.log(result);


// let arr = ["orange","apple","banana","orange","apple","banana"];
// // final result ek object ke form
// // orange: 2, apple: 2, 'banana,': 2
// const result = arr.reduce((acc,curr)=>{
//     if(acc.hasOwnProperty(curr))
//         acc[curr]++;
//     else
//         acc[curr] = 1;

//     return acc;
// },{});
// console.log(result);




