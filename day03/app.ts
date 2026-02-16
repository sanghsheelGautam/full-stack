interface parsion{
    name:string,
    age:number,
    gender:string
    adhar?:number  // optional ye ya na le 
}

const obj:parsion={
    name:"badshah",
    age:20,
    gender:"male",
    adhar:45115
}


interface costomer{
    name:string,
    age:number
    balance:number,

}

const obj01: Required<costomer> = {
    name:"Badshah",
    age:20,
    balance:252
}

// partial: All property become optional
// Required:All property should be filled
// readonly:The property can real only ,change is not available


// array of object

interface people{
    name:string,
    age:number
};

const arr:people[] = [{name:"badshah",age:20},{name:"vinay",age:20}];

// function in TS

function greet(a:number):number{
    console.log(a);
    return a+5;
}
console.log(greet(10));

function meet(msg:string,val:number):void{
    console.log(msg,val);
}

meet("badshah ROck" , 50);

// arrow functuon 

const sum=(a:number,b:number):number =>{
    return a + b;
}

console.log(20,40);

// call back

function placeOrder(Order:number, callback:(amount:number)=>void):void{
    const amount:number = Order +20;
    callback(amount);
    
}
placeOrder(10, (amount)=>{
    console.log(amount);
})


// Rest Parameter

function total(...arr:number[]){

    let ans:number =0;
    arr.forEach((val:number)=>ans = ans + val);
    console.log(ans);
}
total(1,2,5,8,82,3,3,5,6,5);

// Extend
interface human{
    name:string,
    age:number
}

interface teacher extends human {
    sallay:string,
    id:number
}

const obj2:teacher={
    name:"Badshah",
    age:20,
    sallay:"no ",
    id:200
}

console.log(obj2)

