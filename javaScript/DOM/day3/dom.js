
{/* <li>TS</li> */}

// Create an element


// function attach(content){
// const element = document.createElement("li");
// element.innerHTML = content;

// const parent = document.getElementById("root");
// parent.appendChild(element);
// parent.append(element,"Badshah");
// };
// attach("TS");
// attach("react");
// attach("Node");


// const textNode = document.createTextNode("Hello coder army");
// const parent = document.getElementById("root");
// parent.append(textNode);


// create an attribute node
// const element=document.createAttribute("id");
// element.value = "first";

// access to first child
// const curr_list = document.querySelector("li");
// curr_list.setAttributeNode(element);

// access to second list
// const parent = document.getElementById("root");
// parent.children[1].setAttributeNode(element);


// Accessing Attributes
// 1:getAttribute
// 2:setAttribute
// 3:removeAttribute

// access attribute of a element
// const element = document.getElementById("root");
// console.log(element.getAttribute("class"));

// // setAttribute
// element.setAttribute("costom","20")
// element.setAttribute("class","Badshah")

// // 3:removeAttribute


// element.removeAttribute("costom");





// Add Nodes to the DOM
// 1: append

// const parent = document.getElementById("root");
// const element = document.createElement('li');
// element.innerHTML = "TS";

// // parent.prepend(element);
// // parent.append(element)

// const child2 = parent.children[1];
// parent.insertBefore(element,child2);

// parent.replaceChild(element,child2);


// const parent = document.getElementById("root");
// // parent.innerHTML += "TS";

// const element = document.createElement("div");
// element.innerHTML = "Hello Coder Army";

// parent.insertAdjacentElement("beforebegin",element);



// Delete node or element

 const parent = document.querySelector("li");
 parent.remove();
