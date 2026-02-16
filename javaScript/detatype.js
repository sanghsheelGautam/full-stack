// declearation of data type
// Number, boolean, string,null,undefined,symbol,bigint ,bigint 

// number
let account_balance = 30;
console.log( account_balance);
console.log(typeof account_balance);

// string
let str = "badshah";
console.log( str);
console.log(typeof str);

// boolean
let stetement = true;
console.log(stetement);
console.log(typeof stetement);

// undefined
let account;
console.log(account);
console.log(typeof account);

// null -> object data type [this is a error]
let bal = null; // this is object  data type 
console.log(null);
console.log(typeof null);

// BigInt
let a = 1448488945498798444894n; // without n 1.4484889454987984e+21 with n 1448488945498798444894n
console.log(a); //o/p 1.4484889454987984e+21 but last me n likh do fir same aa jayega 
 


console.log(Number.MAX_SAFE_INTEGER);
console.log(Number.MIN_SAFE_INTEGER);


// Non primitive Data type
// Array,Object,function
// array
let arr = [10,20,30,"Rock","Vinay"];
console.log(arr);
console.log(typeof arr);

// Object ->key: value
let obj = {user_name: "badshah",
           account_balance:21155454,
           balance:450
          }
console.log(obj);
console.log(typeof obj);


// function
let fun = function(){
    console.log("Hello Coder Army");
    return 10;
}
fun();
console.log(typeof fun);

// Type Conversion

let account_balance1 = "100";
let num = Number(account_balance1);
console.log(num);
console.log(typeof num);

// Boolean
let x = true;
console.log(Number(x));
let y = false;
console.log(Number(y));


let account1 = "100ax";
console.log(Number(account1));

// null
let x1 = null;
console.log(Number(x1));

// undefined
let x2;
console.log(Number(x2));

// String ke ander convert
let ab = 20;
console.log(String(ab));
console.log(typeof String(ab));


let ax = false;
console.log(String(ax));
console.log(typeof String(ax));
// Boolean
let abc = " ";// agar empaty hai to false ayega ,agar kuchh bhi hai double qouted ke ander to vo true hoga 
console.log(Boolean(abc));  