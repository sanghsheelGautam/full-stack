// const { keyIn } = require("readline-sync");

const quotes = [
  "Don’t watch the clock; do what it does. Keep going. — Sam Levenson",
  "Success is not final, failure is not fatal: it is the courage to continue that counts. — Winston Churchill",
  "Push yourself, because no one else is going to do it for you.",
  "The harder you work for something, the greater you’ll feel when you achieve it.",
  "Dream big. Start small. Act now. — Robin Sharma",
  "Your only limit is your mind.",
  "Growth begins at the end of your comfort zone.",
  "Don’t be afraid to fail. Be afraid not to try.",
  "Discipline is the bridge between goals and accomplishment. — Jim Rohn",
  "Small steps in the right direction can turn out to be the biggest steps of your life.",
  "Opportunities don’t happen. You create them. — Chris Grosser",
  "Don’t wish it were easier; wish you were better. — Jim Rohn",
  "Work hard in silence, let success make the noise.",
  "Great things never come from comfort zones.",
  "Do something today that your future self will thank you for.",
  "In the end, we only regret the chances we didn’t take.",
  "Happiness is not by chance, but by choice.",
  "Sometimes you win, sometimes you learn. — John C. Maxwell",
  "Your life is as good as your mindset.",
  "The best way to predict the future is to create it. — Peter Drucker"
];


// automatic quotes genrator
// function generatQuote(){
// const text = document.getElementById("quote");
// const index =Math.floor( Math.random()*quotes.length);
// text.textContent = quotes[index];

// }
// setInterval(generatQuote,2000);
// click button then genrate quotes

const button = document.querySelector("button");
button.addEventListener("click",(event)=>{
console.log(event.target);
console.log(event.type);
console.log(event.clientX);

const text = document.getElementById("quote");
const index =Math.floor( Math.random()*quotes.length);
text.textContent = quotes[index];
});



// 1:keydown ,2:keyup 
// document.addEventListener("keydown",()=>{
// const text = document.getElementById("quote");
// const index =Math.floor( Math.random()*quotes.length);
// text.textContent = quotes[index];
// });



// Event object
// document.addEventListener("keydown",(event)=>{
//   console.log(event,key);
// const text = document.getElementById("quote");
// const index =Math.floor( Math.random()*quotes.length);
// text.textContent = quotes[index];
// });



