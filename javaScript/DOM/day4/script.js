// const red = document.getElementById('red');
// const blue = document.getElementById('blue');
// const orange = document.getElementById('orange');
// const green = document.getElementById('green');
// const yellow = document.getElementById('yellow');
// const body = document.body;
// // document.body


// red.addEventListener('click',()=>{
//     body.style.backgroundColor = "red";


// });
// blue.addEventListener('click',()=>{
//     body.style.backgroundColor = "blue";


// });
// orange.addEventListener('click',()=>{
//     body.style.backgroundColor = "orange";


// });
// green.addEventListener('click',()=>{
//     body.style.backgroundColor = "green";


// });
// yellow.addEventListener('click',()=>{
//     body.style.backgroundColor = "yellow";


// });



// const buttons = document.querySelectorAll('button');
// const body = document.body;

// buttons.forEach((button)=>{
//     button.addEventListener('click',()=>{
//         body.style.backgroundColor = button.id;
//     })

// })




const root = document.getElementById('root');
root.addEventListener('click',(event)=>{
    // console.log(event.target.tagName);
    if(event.target.tagName==='BUTTON')
    document.body.style.backgroundColor = event.target.id;
});



