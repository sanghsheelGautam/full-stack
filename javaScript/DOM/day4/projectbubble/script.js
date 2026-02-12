const grandParent = document.getElementById('grandParent');
const parent = document.getElementById('parent');
const child = document.getElementById('child');

// event bubbling and event capturing
// addEventListener(first_event,useCallback,capture) // event capturing agar capture true hoga to event capturing chalega and agar false hua to bubbling chalega

// event bubbling
// child.addEventListener('click',()=>{
//     console.log("child clicked");
// },false);
// parent.addEventListener('click',()=>{
//     console.log("parent clicked");
// },false);
// grandParent.addEventListener('click',()=>{
//     console.log("grandParent clicked");
// },false);


// event capturing
// child.addEventListener('click',()=>{
//     console.log("child clicked");
// },true);
// parent.addEventListener('click',()=>{
//     console.log("parent clicked");
// },true);
// grandParent.addEventListener('click',()=>{
//     console.log("grandParent clicked");
// },true);


// dry run

child.addEventListener('click',(event)=>{
    // console.log("child clicked");
        // console.log(event.target);
            console.log(event.currentTarget);


},false);
parent.addEventListener('click',(event)=>{
    // console.log("parent clicked");
    // console.log(event.target);
    console.log(event.currentTarget);


},false);
grandParent.addEventListener('click',(event)=>{
    // console.log("grandParent clicked");
    // console.log(event.target);
    console.log(event.currentTarget);


},false);



