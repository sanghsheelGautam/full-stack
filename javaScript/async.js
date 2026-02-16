// callback hell
card = ["pizza", "coke","sandwich"];
function placeOrder(card, callback){
    console.log("Talking with Domino's");
    setTimeout(()=>{
        console.log("Order placed Succesfully");
        const order = {orderId:23,food:card , restaurant:"Domainos",location}
        callback(order)
    },2000)
}
function preparetion(order, callback){
    console.log("Pizza preparation staeted...");
    setTimeout(()=>{
        console.log("Pizza preparation done");
        const foodDetail = {token:12, restaurant:order.restaurant,location}
        callback(foodDetail);

    },5000)
}
function pickupOrder(foodDetail, callback){
    console.log("Reaching restaurant for picking order");
    setTimeout(()=>{
        console.log("Order picked up by Delivery Boy");
        const droplocation = {}
        callback(droplocation);
    },3000)

}
function DeliveryOrder(droplocation){
    console.log("Delivery boy on the way");
    setTimeout(()=>{
        console.log("Order Deliver succesfully");
        
    },3000)

}

async function greet() {
    const order = await placeOrder(card);
    const foodDetail = await preparetion(order);
    const droplocation = await pickupOrder(foodDetail);
    DeliveryOrder(droplocation);
}
// greet();

const p1 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("Hello Everyone");
    },5000)
})

async function greet1() {
    const data = await p1;
    console.log(data);
}


greet1();
