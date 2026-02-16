// How to create object
// const obj = { 
//     0:31,
//     1:50,
//     name: "Badshah",
//     account_balance:420,
//     gender:"Male",
//     age:21,
//     "account number":154484545,
//     undefined:30,
//     null:"Rock"
// };
// console.log(obj[undefined]);
// console.log(obj["null"]);

// const insta = {
//     insta_id: "badshahrock001",
//     password: 1211
//  }
// console.log(typeof insta);
// console.log(obj);
// console.log( obj.name);
// console.log(obj.account_balance);
// console.log(obj.age);
// console.log(obj["account_balance"]);
// console.log(obj["name"]);
// console.log(obj["age"]);
// console.log(obj["account number"]);
// console.log(obj["0"]);
// console.log(obj[1]);


// const arr = [20,50,70];
// console.log(arr[2],arr[1]);
// console.log(arr.length, obj.length);


// second method to create
// const person = new Object();
// console.log(person);

// // property add
// person.name = "Rock";
// person.age = 21;
// person.gender = "Male";
// console.log(person);
// // delete
// delete person.age;
// console.log(person);
// // Modify or update
// person.name = "Mohit";
// console.log(person);

// third method
// class people{
//     constructor(name,age,gender){
//         this.name = name;
//         this.age = age;
//         this.gender = gender;
//     }
// }
// let per1 = new people("Badshah",21,"Male");
// let per2 = new people("Vinay",20,"Male");
// let per3 = new people("Shivam",24,"Male");
// let per4 = new people("Abhinav Singh",22,"Male");

// console.log(per1);
// console.log(per2);
// console.log(per3);
// console.log(per4);

// let obj1 = { 
  
//     name: "Badshah",
//     account_balance:420,
//     gender:"Male",
//     age:21,
//     "account number":154484545,
   
// };
// // key and values
// const arr = Object.keys(obj1);
// const arr1 = Object.values(obj1);
// console.log(arr);
// console.log(arr1);
// // keys: value
// const arr2 = Object.entries(obj1);
// console.log(arr2);

// // assign use case
// const obj2 = {a:1,b:2};
// const obj3 = {c:3,d:4};
// const obj4 = Object.assign({},obj2,obj3);
// // console.log(obj2,obj3);

// console.log(obj4);

// const obj5 = {...obj2,...obj3,...obj4}; // spride oparetor
// console.log(obj5);



// nested Object
// const user = {
//     name:"Rohit",
//     balance:420,
//     address:{
//         pincode:42865559,
//         city:"Jaunpur"
//     }

// }
// // structureclone
// console.log(user.address.pincode);
// const user2 = Object.assign({},user);
// console.log(user2);
// user2.address.pincode = 4565445;
// console.log(user.address.pincode);

// Destructruing of an object
// let obj4 =  {
//     name:"Rock",
//     money:456,
//     balance:20,
//     age:21
// };
// const {name,balance,money}=obj4;
// console.log(name,balance,money);

// const arr = [1,2,3,4,5,6,7,8,9];
// const[first,second] = arr;
// const[first,second, ,third] = arr;
// const[first,second,...third] = arr;
// console.log(third);

// let obj4 =  {
//     name:"Rock",
//     money:456,
//     balance:20,
//     arr: [1,2,3,4,5,6,7,8,9],
//     age:21,
//     address:{
//         pincode:222139,
//         city:"jaunpur"
//     }
// };
// // const {address:{pincode}} = obj4;
// const {arr:[first]} = obj4;

// console.log(first);

// let user ={
//     name:"Badshah",
//     amount:420,
//     greet:function(){
//         console.log("badshah rock")
//         // return "Hello Coder";
//     },
//     meet:function(){
//         return 20;
//     }
// }

// user.greet();
// console.log(user.meet());





// importence
// inherit
let user1 ={
    name:"Badshah",
    age:21
}
let user2 ={
    amount:20,
    money:50
}

user2.__proto__ = user1;
console.log(user2.name);
console.log(user2.age);
console.log(user2.amount);
console.log(user2.money);









