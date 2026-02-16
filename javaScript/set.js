// set
// set:unique value

// const set1 = new Set([10,20,30,40,10]);
// console.log(set1);


// const set2 = new Set();
// set2.add(4);
// set2.add(1);
// set2.add(5);
// set2.add("badshah");
// set2.add(8);
// set2.add(6);
// // delete

// set2.delete(5);
// console.log(set2);

// ig:id
// const user_id = new Set(["badshahrock_000","rohit_negi_9","mohit_91","rock_00"]);
// let new_user = "rock_00";
// console.log(user_id.has(new_user));
// user_id.clear();
// console.log(user_id);

// union
// let set1 = new Set([10,20,30,40,50,60]);
// let set2 = new Set([10,20,70,80,90,100]);
// const set3 = new Set([...set1,...set2]);
// // console.log(set3);

// // intersection
// // filter:array
// const result = [...set1].filter((num)=>set2.has(num));
// console.log(result);

let set1 = new Set([10,20,30,40,50,60]);
// iterate over set
// for of:iterator
// for(let value of set1){
//     console.log(value);
// }

// forEach
set1.forEach((value)=>console.log(value));