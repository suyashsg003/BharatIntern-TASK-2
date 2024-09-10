var inputvalue = document.querySelector("#cityinput");
var button = document.querySelector("#add");
var city = document.querySelector("#cityoutput");
var descrip=document.querySelector("#description");
var temp = document.querySelector("#temp");
var wind = document.querySelector("#wind");
var apik="44ef0a3ab0e9baeffe8da91beb32661d";
function conversion(val)
{
    return(val-273.15).toFixed(2);
}
button.addEventListener('click' , function()
{
    fetch('https://api.openweathermap.org/data/2.5/weather?q=' + inputvalue.value +'&appid=' + apik)
    .then(res=>res.json())

    .then(data=>
    {
        console.log(data);
        var nameval = data['name'];
        var descripText = data['weather'][0]['description'];
        var temperature = data['main']['temp'];
        var windspeed = data['wind']['speed'];

        city.innerHTML = `Weather of <span>${nameval}</span>`;
        temp.innerHTML = `Temperature: <span>${conversion(temperature)}\u00B0C</span}`;
        descrip.innerHTML = `Sky Conditions:<span>${descripText}</span>`;
        wind.innerHTML = `Wind Speed:<span>${windspeed}Km/hr</span>`;
    })

    .catch(err => 
        {console.log(err);
            alert('You entered wrong city name');
    });
});
