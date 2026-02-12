document.querySelector('button').addEventListener('click',()=>{
    const place = document.getElementById('location').value;

    function updateTemp(data){
        const element = document.getElementById('weatherInfo');
        element.innerHTML = `Today's Temperature: ${data.current.temp_c}`;
    }

     const prom = fetch(`http://api.weatherapi.com/v1/current.json?key=0796c2f1b4e1468797895143261201&q=${place}&aqi=yes
`)
    prom
    .then(response=>response.json())
    .then(data=>updateTemp(data));

    })

