const form = document.querySelector('form');

// form.addEventListener('click',(event)=>{
//     console.log(event.target.value)
// })

// form.addEventListener('input',(event)=>{
//     console.log(event.target.value)
// })

// form.addEventListener('change',(event)=>{
//     console.log(event.target.value)
// })

// form.addEventListener('focusin',(event)=>{
//     console.log(event.target.value)
// })


// form.addEventListener('focusout',(event)=>{
//     console.log(event.target.value)
// })


// form.addEventListener('dbclick',(event)=>{
//     console.log("double click");
// })


// form.addEventListener('submit',(event)=>{
//     console.log(event.target.value);
//     console.log("form Submitted")
    
// })

// form.addEventListener('reset',(event)=>{
//     console.log("reset");// submit button ke jagah reset karna hai
// })


form.addEventListener('submit',(event)=>{
    event.preventDefault();
//    const first= document.getElementById('first');
//    console.log(first.value)
//    const second = document.getElementById("second");
//    console.log(second.value);
//    const third = document.getElementById("third");
//    console.log(third.value);
   const data = new FormData(form);  // key values 
   for(let [key,value] of data.entries()){

       console.log(key,value);
   }
    // console.log(Array.from(Data.keys()));
    // console.log(Array.from(Data.value()));

})

