// function

function greet(){
console.log("Hello Coder Army");
}
// greet();
// greet();
// add two number
            // parameter
function sum(number1,number2){
    console.log(number1+number2);
}
// function call: argument
// sum(4,8);
// sum(8,4);
function multiply(number1,number2){
    // console.log(number1*number2);
    return number1*number2;
}
// multiply(7,5);
// console.log(multiply(4,5));

// second type decleare of function
const fun = function(){
    // console.log("Hello");
    return "Money";
}
// fun();
// console.log(fun());

// Arrow function type third
const fun1 = (num1,num2)=>{
    console.log("Hello Badshah Rock");
    return num1*num2;
}
// fun1();
// console.log(fun1(4,2));


const sum1 = (num1,num2)=>num1 + num2;
// console.log(sum1(55,5));

const cube = function(number){
    return number* number *number;
}
// console.log(cube(8));

const cube1 = number => number* number *number;
// console.log( cube1(7));


const sum3 = function(...number){
    console.log(number)
}
// sum3(1);
// sum3(1,2);
// sum3(1,2,3);
// sum3(1,2,3,4);
// sum3(1,2,3,4,5);

let obj4 = {
    name:"Rock",
    age:21,
    money:455
}
console.log(obj4);
function fun4(obj5){
    console.log(obj4.name,obj4.age);
}
fun4(obj4);


function funs(obj4){
    obj4.age= 22;
    console.log(obj4.name,obj4.age);
}
funs(obj4);
console.log(obj4);

