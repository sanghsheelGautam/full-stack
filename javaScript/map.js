// // map
// // key value pair: key should be unique
// const map1 = new Map();
// map1.set(3,90);
// map1.set("Rock",45);
// map1.set(20,"Badshah");
// map1.delete(3);
// console.log(map1);
// console.log(map1.has("Rock"));
// console.log(map1.size);

const map1 = new Map([
    [4,"Rock"],
    ["Badshah","Rock"],
    [30,10],
    [63,78]
]);
// for of loop
for(let value of map1){
    console.log(value);
}
for(let [key,value] of map1){
    console.log(key,value);
}

// console.log(map1);



