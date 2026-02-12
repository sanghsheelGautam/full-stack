// const { createElement } = require("react")

document.body.addEventListener('click',(event)=>{

    const circle = document.createElement('div'); 
    circle.className = 'circle';
    circle.textContent = '❤';
   


    const x = event.clientX;
    const y = event.clientY;
    circle.style.left = `${x-25}px`;
    circle.style.top = `${y-25}px`;
    // const color = ["red","blue","green","white","yellow","orange"];

 const color = ["#FF5733", "#33FF57", "#3357FF", "#F1C40F", "#9B59B6", "#E67E22", "#1ABC9C", "#E74C3C", "#2ECC71", "#3498DB", "#34495E", "#16A085", "#27AE60", "#2980B9", "#8E44AD", "#2C3E50", "#F39C12", "#D35400", "#C0392B", "#7F8C8D"];


    circle.style.backgroundColor = color[Math.floor(Math.random()*color.length)];
    document.body.appendChild(circle);

    setTimeout(()=>{
        circle.remove();
    },5000)
})