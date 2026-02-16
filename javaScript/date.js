// Date 
//const d = new Date();// milisecond me leta hai 1 second me 1000 milisecond hota hai
// console.log(d.toDateString());
// console.log(d.getDate());
// console.log(d.toString());
// console.log(d.toISOString());
// console.log(typeof d);
// console.log(d.toTimeString());
// console.log(d.getDay());
// sun, mon, tue, Wed, thu, fri, sat
 // 0 ,1   , 2  ,  3 , 4  , 5  ,  6
//  console.log(d.getMonth());
//  jan , feb , mar .......
//   0  , 1   , 2  ,3  ....
// console.log(d.getFullYear());
// console.log(d.getMilliseconds());
// console.log(d.getMinutes());
// console.log(d.getHours());
// console.log(d.getTime());
// console.log(d.getTimezoneOffset());
// const now = Date.now();
// console.log(now);

// year / months / day/ Hours/ minute /second / millisecond

//  NUmber = 0 based start honge
// String = 1 based start honge

// const D = new Date("2050-7-25");
// const date = new Date(2024,4,28)
// console.log(D.toDateString());
// console.log(date.toString());

// const Da = new Date();
// Da.setDate(20);
// Da.setFullYear(2025);
// Da.setMonth(9);
// console.log(Da.toLocaleDateString());

// Date calculation

// const date1 = new Date();
// console.log(date1);
// const date2 = new Date("2025-04-21");
// console.log(date1-date2);
// Diferent millisecond


//  countdown timer for olympics
// Days ,Hours,minute,second
const date3 = new Date();
const date4 = new Date("2029-07-14T00:00:00");
const date5 = date4-date3;
const Days = Math.floor(date5/(1000*60*60*24));
const hour = Math.floor((date5/(1000*60*60))%24);
const minute = Math.floor((date5/(1000*60))%60);
const second = Math.floor((date5/(1000))%60);

console.log(`Olympics CounDownTime: Days:${Days} hour ${hour} minute ${minute} second ${second}`);


