// Create Element  through js

// const header1 = document.createElement('h1');
// header1.innerText = "Hello Coder Army";
// header1.style.backgroundColor = "blue";
// header1.style.fontSize = "30px";
// header1.style.color = "white";


// const header2 = document.createElement('h2');
// header2.innerText = "Badshah Rock";
// header2.style.backgroundColor = "black";
// header2.style.fontSize = "30px";
// // header2.style.color = "white";
// const root = document.getElementById("root");
// root.append(header1);
// root.append(header2);

// React = Object
// ReactDOM = Object

const React = {
    createElement:function(tag,style,children){
        const Element = document.createElement(tag);
        if(typeof children === "object"){
            for(let val of children){

                Element.append(val);
            }
        }
        else
        Element.innerText = children;
        for(let key in style){
            Element.style[key] = style[key];
        }
        return Element;
    }
}

const ReactDOM ={
    Render:function(Element,root){
        root.append(Element);
    }
}

const header1 = React.createElement('h1',{fontSize:"30px",backgroundColor:"blue",color:"white"},"Hello Coder Army");
const header2 = React.createElement('h2',{fontSize:"25px",backgroundColor:"black",color:"white"},"Kaise hai app sab log");
const l1 = React.createElement('li',{},"HTML");
const l2 = React.createElement('li',{},"CSS");
const l3 = React.createElement('li',{},"JS");

const UL = React.createElement('ul',{fontSize:"30px",backgroundColor:"blue",color:"white"},[l1,l2,l3]);

ReactDOM.Render(header1,document.getElementById("root"));
ReactDOM.Render(header2,document.getElementById("root"));
ReactDOM.Render(UL,document.getElementById("root"));