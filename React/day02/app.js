const element = React.createElement("h1",{id:"first",className:"Rock",style:{backgroundColor:"blue",fontSize:"30px",color:"pink"}},"Hello coder army");

const element2 = React.createElement("h1",{id:"second",className:"Rock",style:{backgroundColor:"black",fontSize:"30px",color:"pink"}},"Maja aya mujhe");

const div1 = React.createElement("div",{},[element,element2]);
// ReactDOM.Render(element,document.getElementById('root'));

const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(element)
root.render(div1)