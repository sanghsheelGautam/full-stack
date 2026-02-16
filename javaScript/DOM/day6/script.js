// Data store
// store the question
// Option ko store karana : 4 option
// answer
const questionBank = [
  {
    question: " Which keyword is used to declare a variable in JavaScript?",
    options: ["var", "let", "const", "All of the above"],
    answer: "All of the above"
  },
  {
    question: " What is the correct syntax to print something in the console?",
    options: ["print('Hello')", "console.print('Hello')", "console.log('Hello')", "log.console('Hello')"],
    answer: "console.log('Hello')"
  },
  {
    question: " Which data type is NOT primitive in JavaScript?",
    options: ["String", "Number", "Object", "Boolean"],
    answer: "Object"
  },
  {
    question: " How do you write a single-line comment in JavaScript?",
    options: ["<!-- comment -->", "// comment", "/* comment */", "** comment **"],
    answer: "// comment"
  },
  {
    question: " What does 'typeof null' return?",
    options: ["null", "undefined", "object", "number"],
    answer: "object"
  },
  {
    question: " Which method converts JSON string to JavaScript object?",
    options: ["JSON.parse()", "JSON.stringify()", "JSON.object()", "JSON.convert()"],
    answer: "JSON.parse()"
  },
  {
    question: " How can you detect the client’s browser name?",
    options: ["browser.name", "navigator.appName", "client.browser", "window.browserName"],
    answer: "navigator.appName"
  },
  {
    question: " Which symbol is used for comments in JavaScript?",
    options: ["//", "#", "/* */", "<!-- -->"],
    answer: "//"
  },
  {
    question: " What will '2' + 2 output?",
    options: ["4", "22", "NaN", "Error"],
    answer: "22"
  },
  {
    question: " Which function is used to parse an integer from a string?",
    options: ["parseInt()", "parseFloat()", "Number()", "toInteger()"],
    answer: "parseInt()"
  },
  {
    question: " What is the default value of an uninitialized variable?",
    options: ["null", "undefined", "0", "NaN"],
    answer: "undefined"
  },
  {
    question: " Which company developed JavaScript?",
    options: ["Netscape", "Microsoft", "Sun Microsystems", "Oracle"],
    answer: "Netscape"
  },
  {
    question: " What is the result of typeof NaN?",
    options: ["NaN", "undefined", "number", "object"],
    answer: "number"
  },
  {
    question: " Which built-in method reverses the order of the elements of an array?",
    options: ["reverse()", "sort()", "push()", "join()"],
    answer: "reverse()"
  },
  {
    question: " How do you create a function in JavaScript?",
    options: ["function = myFunction()", "function myFunction()", "create myFunction()", "def myFunction()"],
    answer: "function myFunction()"
  },
  {
    question: " Which operator is used to assign a value to a variable?",
    options: ["-", "=", "==", "==="],
    answer: "="
  },
  {
    question: " What does the '===' operator do?",
    options: ["Compares only values", "Compares both value and type", "Assigns a value", "None of the above"],
    answer: "Compares both value and type"
  },
  {
    question: " Which method removes the last element from an array?",
    options: ["pop()", "shift()", "remove()", "delete()"],
    answer: "pop()"
  },
  {
    question: " What is the output of Boolean(0)?",
    options: ["true", "false", "undefined", "error"],
    answer: "false"
  },
  {
    question: " Which statement is used to stop a loop?",
    options: ["stop", "exit", "break", "return"],
    answer: "break"
  }
];

function RandomQuestion(){
  // const Data = new Set();
  // // use set for unique object
  // while(Data.size!=5){
  //   const index = Math.floor(Math.random()*20);
  //   Data.add(questionBank[index]);
  // }
  // // convert set into array
  // return [...Data];




// nlogn
  // questionBank.sort(()=>Math.random()-0.5);
  // return questionBank.slice(0,5);

const arr = [];
let length = questionBank.length;
for(let i = 0;i<5;i++){
  const index = Math.floor(Math.random()*length);
  arr.push(questionBank[index]);


  // swap
  [questionBank[index],questionBank[length-1]] = [questionBank[length-1],questionBank[index]];
  length--;
}
return arr;


}

// select the form and insert the element into it
const form = document.querySelector('form');

const problem = RandomQuestion();
const original_ans = {};
 problem.forEach((obj,index)=>{
  const div_element = document.createElement('div');
  div_element.className = 'question';

  original_ans[`q${index+1}`]= obj['answer']

  const para = document.createElement('p');
  para.textContent = `${index+1}.${obj['question']}`;
  div_element.appendChild(para);

  // create 4 option
  obj['options'].forEach((data)=>{
    const label = document.createElement('label');
    const input = document.createElement('input');
    input.type = 'radio';
    input.name = `q${index+1}`;
    input.value = data;

    label.appendChild(input);
    label.appendChild(document.createTextNode(data));
    div_element.appendChild(label);
    div_element.appendChild(document.createElement('br'));
  })
  form.appendChild(div_element);
 })
  

const button = document.createElement('button');
button.type = 'submit';
button.className = 'submit-btn';
button.textContent = 'submit';

form.appendChild(button);



form.addEventListener('submit',(event)=>{
    event.preventDefault();
    const data = new FormData(form);
  

    let result = 0;
    for(let [key,value] of data.entries()){
        if(value === original_ans[key])
            result++;
    }

 const out = document.getElementById('out');
    out.innerText = `${result} Out of 5 is currect`;

})


