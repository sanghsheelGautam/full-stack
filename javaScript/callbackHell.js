// callback hell

function placeOrder(callback){
    console.log("Talking with Domino's");
    setTimeout(()=>{
        console.log("Order placed Succesfully");
        callback(preparetion)
    },2000)
}
function preparetion(callback){
    console.log("Pizza preparation staeted...");
    setTimeout(()=>{
        console.log("Pizza preparation done");
        callback();

    },5000)
}
function pickupOrder(callback){
    console.log("Reaching restaurant for picking order");
    setTimeout(()=>{
        console.log("Order picked up by Delivery Boy");
        callback();
    },3000)

}
function DeliveryOrder(){
    console.log("Delivery boy on the way");
    setTimeout(()=>{
        console.log("Order Deliver succesfully");
        
    },3000)

}

// placeOrder(preparetion);
// preparetion();
// callbackhell
placeOrder(()=>{
    preparetion(()=>{
        pickupOrder(()=>{ 
            DeliveryOrder();
        });
    });
});

