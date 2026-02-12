function fetchuser() {
    console.log("fetching the user detail .....")
    setTimeout(()=>{
        console.log("Data fetching sucesfully");
        greet();
    },2000)
}
function greet(){
    console.log("Hello Everyone");
}
fetchuser();

function fetchdata(callback){
    console.log("Fetched info of user");

    setTimeout(()=>{
        console.log("User detail fetched succesfully");
        const obj = {
            name: "Badshah",
            age : 21,
            city:"Delhi"
        }
        callback(obj);
    },2000)
}
fetchdata(greet);

