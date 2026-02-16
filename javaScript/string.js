let  str ="Hello Coder Army";
let str1 = 'i am badshah rock';
let str3 = `I am sanghsheel gautam`;
let price  = 50;
console.log(`price of tomato is ${price}, get  is as soon as batter`);
console.log(str  ,str1 ,str3); 

let s1 = `Hello`;
let s2 = `Coder Army`;
console.log(s1+s2);
console.log(s2.length);

let s3 = `"Hello Coder Army"`;
let s4 = "`Hello Coder Army`";
// \n next line
console.log(s3);
console.log(s4);

// escape charactor \
console.log("I am Badshah Rock,\n I am studing in night ");
console.log("I am Badshah Rock,\\n I am studing in night ");

// to lowercase
// to uppercase
let s5  = `badshah`
console.log(s5.toLowerCase());
console.log(s5.toUpperCase());
// console.log(strtemp);

let Hero = `Hello Coder Army Coder`;
console.log(Hero.indexOf("Coder"));
console.log(Hero.lastIndexOf("Coder"));
console.log(Hero.indexOf("coder"));
console.log(Hero.includes("Coder"));
            //01234567  
let newstr = "HellDon";
//           -7-6-5-4-3-2-1
// slice can take negative index also
console.log(newstr.slice(-6,3));
console.log(newstr.substring(0,3));
let str6 = `Hello ji, kaise hai `
console.log(str6.replace("ji","Badshah"));
console.log(str6.replaceAll("ji","Badshah"));

let str7 = ` Money! Honey! Sunny! Funny`;
console.log(str6.split("!"));


 let str8 = `  Hello ji`;
 console.log(str8.trim());
 console.log(str8.length);

//  New way to create string
 let lasteststring = new String("Hello Coder Army");
 console.log(lasteststring);
 console.log(typeof lasteststring);
  
let num1 = 1332;
let num2 = new Number(1332); // true
let num3 = new Number(1332);// false
console.log(num1==num2);
console.log(num2==num3);

console.log(num2);
console.log(typeof num2);

let num = 131.16;
console.log(num.toFixed(1));
console.log(num.toPrecision(3));
console.log(num.toExponential(2));
console.log(num.toString());
console.log(num.valueOf());









