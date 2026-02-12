// document object model (DOM)
// const  obj= document.getElementById("first");
// obj.className = "Rock";
// const obj1 = document.getElementsByClassName("header1");

// access
// const id = document.querySelector("#first");
// id.innerHTML = "Hello Badshah";

// const id2 = document.querySelector('.header2');
// id2.style.backgroundColor ="pink";


// how to iterate over Node list

// const obj = document.querySelectorAll('.header');

// 1: obj.forEach((val)=>{
    //  console.log(val)
// })

// 2:
// for(let val of obj)
//     console.log(val);


// 3:
// for(let i =0;i<obj.length;i++){
//     console.log(obj[0]);
// }


// Convert NodeList into array
// Array.from(obj);

// accessing by tag name

// const obj =  document.getElementsByTagName('h1');
// console.log(obj);
// how to iterate over it
//1: for(let i = 0;i<obj.length;i++)
//     obj[i].style.color="red";

//2: for(let val of obj)
//     console.log(val)

//3: Array.from(obj).forEach((val)=>{
//     console.log(val);
// })

// const list = document.querySelector('li');
// console.log(list.parentElement);
// console.log(list.parentNode);



// const par  = document.querySelector('ul');
// console.log(par);
// console.log(par.childNodes);
// console.log(par.children);
// console.log(par.firstChild);
// console.log(par.lastChild);
// console.log(par.firstElementChild);
// console.log(par.nextSibling);


// innerHTML
// 
// document.getElementById('first').innerHTML
// document.getElementById('first').innerText
// document.getElementById('first').textContent




