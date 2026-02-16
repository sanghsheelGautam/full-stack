
const obj = fetch(`http://api.weatherapi.com/v1/current.json?key=0796c2f1b4e1468797895143261201&q=meerut&aqi=yes
`);
// obj.then((data)=>{
//     const pro = data.json();
//     pro.then((data2)=>{
//         console.log(data2);
//     })
// })

obj
.then(data=>data.json())
.then(data2=>console.log(data2.current.temp_f))


// obj.then((data)=>{
//      console.log(data);
// }).catch((error)=>{
//     console.log(error);

// })


