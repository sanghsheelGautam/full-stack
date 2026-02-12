// // callback function
// function fetchuser(callback){
//     console.log("Fetching the user Detail.....");
//     setTimeout(()=>{
//         console.log("Data fetched succesfully");
//         const name ="Badshah";
//         // data fetched from backend
//         // greet(name);
//         // meet(name);
//         callback(name);
//     },2000)
// }
// function greet(name){
//     // console.log("Hello Everyone");

//     console.log(`Hello ${name}`);

// }

// function meet(name){
//     console.log(`Hello ${name}, I will meet you in delhi`);
// }
// function edit(name){
//     console.log(`Edit ${name}, of the user`)
// }
// // fetchuser(greet); 
// // fetchuser(meet);
// fetchuser(edit);





//  callback hell

// domino'd pizza order kar hare ho:
function placeOrder(callback){
    console.log("talkimg with Domino's");

    setTimeout(()=>{
        console.log("order place succesfully");
        callback();
    },2000)
}
function preparingOrder(callback){
    console.log("pizza prepretion started ... ");
    setTimeout(() => {
        console.log("Pizza preparetion Done");
        callback();
    }, 5000);
}

function pickupOrder(callback){
    console.log("Reaching restorent for picking order");
    setTimeout(()=>{
        console.log("Picked up the order by Delivery Boy");
        callback();
    },3000)
}

function DeliveryOrder(){
    console.log("Delivery boy on the way");
    setTimeout(()=>{
        console.log("Order Delivery succesfully");
    },5000)
}


// call back hell ise ko kahte hai
// placeOrder(()=>{
//     preparingOrder(()=>{
//         pickupOrder(()=>{
//             DeliveryOrder();
//         })
//     });
// });


// js is a single threaded synchronous language

// js beheviour: Async

console.log("10");
setTimeout(()=>{
    
    console.log("20");
},2000);
console.log("30");

// js beheviour: sync
console.log("sync");

// console.log("10");
// console.log("20");
// console.log("30");

console.log("10");
const timer = Date.now();
// timer older time
while(Date.now()-timer<2000){
    // wait for 2 second
}
console.log("20");
console.log("30");





