let num:number = 20;
let x = 10;
let str:string = "badshah";
let maney;
maney = "badshah";
console.log(maney.toUpperCase());
maney = 10;
let valu2:unknown;
valu2 = 10;
valu2 = "badshah";
if( typeof valu2 === "string")
console.log(valu2.toUpperCase());

// non premative data type

let arr:number[] = [1,2,3,4,5,6];
let arr1:(string | number) [] =[1,2,3,"ROck"];
let arr2:(string | number|boolean)[] = [1,2,"rock", "true"];

// Object

let obj1:{name:string,age:number,gender:string}= {
    name:"badshah",
    age:20,
    gender:"male"
}

interface admin  {
    name:string,
    age:number,
    position:string

};

interface admin{
    id:number;
}
let obj2: admin={
    name:"badshah",
    age:20,
    position:"manager",
    id:242
};