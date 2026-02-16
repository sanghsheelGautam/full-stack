// Array
let arr = [2,3,6,'badshah','rock',true];
console.log(arr);
console.log(Array.isArray(arr));

console.log(arr.length);
console.log(arr[0]);
console.log(arr.at(-2));
// at is latest,negative index le leta hai

// const newarr = arr;
const newarr = structuredClone(arr);
console.log(newarr==arr);
// add element in the end
arr.push(30);
arr.push(50);

console.log(arr);
arr.pop();
arr.pop();
console.log(arr);
// unshift, add element starting
arr.unshift(100);
console.log(arr);
// shift, delete element from start
arr.shift();
console.log(arr);

// delete operation
// delete arr[0];
// console.log(arr);
// console.log(arr[1]);
console.log(arr.indexOf(6));
console.log(arr.lastIndexOf(true));
console.log(arr.includes(10));
// slice => original array me change nhi karta hai 
console.log(arr.slice(2,6)); 


//splice => original array ko hi change kar deta hai 
// console.log(arr.splice(1,4 ,"Sanghsheel",50,10));
// console.log(arr);

// console.log(arr.toString());

// console.log(arr.join("*"));

// concatination
let arr1 = [1,2,3,4,5];
let arr2 = [6,7,8,9,10];
let arr3 = arr1.concat(arr2);
console.log(arr3);

// 2d array
let arr2d = [[1,2,3],
            [4,5,6],
            [7,8,9]];
console.log(arr2d);
console.log(arr2d[2][1]);
let newarr1 = arr2d.flat(Infinity); // to convert 2d array to 1d array
console.log(newarr1);




// 3d array => arr = [[1,2,[1,5]],[4,7,8]]




















