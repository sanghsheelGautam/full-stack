
const fs = require("fs");

const restaurant = [];
const image = ["first","second","third","Fourth","fifth","sixth","seventh","Eight","nine","tenth"];
const restaurantNames = [
  "Spice Haven",
  "Golden Fork",
  "Urban Tandoor",
  "Royal Bites",
  "The Hungry Hub",
  "Flavors of India",
  "Midnight Cravings",
  "Saffron Kitchen",
  "Taste Junction",
  "Red Chili House",
  "The Food Studio",
  "Curry Leaf",
  "Blue Plate Cafe",
  "Street Feast",
  "Heritage Dine",
  "Fresh Flame",
  "The Cozy Spoon",
  "Masala Magic",
  "Ocean Grill",
  "Green Bowl"
];

const foodTypes = [
  "Italian",
  "Chinese",
  "Indian",
  "Mexican",
  "Thai",
  "Japanese",
  "Fast Food",
  "Seafood",
  "Continental",
  "Desserts"
];
const locationsMeerut = [
  "Shastri Nagar",
  "Ganga Nagar",
  "Modipuram",
  "Pallavpuram",
  "Partapur",
  "Begum Bridge",
  "Hapur Road",
  "Kanker Khera",
  "Sadar Bazaar",
  "Delhi Road"
];
const Restaurant_open_time = [];
const Restaurant_close_time = [];
for(let i=0;i<100;i++){
    const obj = {};
    obj["image"] = image[Math.floor(Math.random()*10)];

    obj["name"] =restaurantNames[Math.floor(Math.random()*20)];
    obj["rating"] = Math.floor(Math.random()*5+1);
    obj["food_type"] = foodTypes[Math.floor(Math.random()*10)]  
    obj["Price_for_two"] = Math.floor(Math.random()*2401+100);
    obj["location"] = locationsMeerut[Math.floor(Math.random()*10)];
    obj["Distance_from_Customer_house"] = (Math.random()*+1).toFixed(1);
    obj["offers"] = Math.floor(Math.random()*30);
    obj["alchohol"] = Math.random() > 0.7;
    obj["Restaurant_open_time"] = Math.floor(Math.random()*24);
    obj["Restaurant_close_time"] = (obj["Restaurant_open_time"]+12)%24;

    restaurant.push(obj);
}
// console.log(restaurant);

fs.writeFileSync(
  "restaurants.json",
  JSON.stringify(restaurant, null, 2)
);

console.log(restaurant);