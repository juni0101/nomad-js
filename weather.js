const API_KEY = "ca54c37ae5454afa24be2bdb5d789afa";

function onGeoOk(position){
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    console.log("You live it", lat, lon);
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=37.3775795&lon=126.8357822&appid=ca54c37ae5454afa24be2bdb5d789afa&units=metric`
    fetch(url).then(response => response.json()).then(data => {
    const weather = document.querySelector("#weather span:first-child")
    const city = document.querySelector("#weather span:last-child")
    city.innerText = data.name;
    weather.innerText = `${data.weather[0].main} / ${data.main.temp}`;
    });
}

function onGeoError(){
    alert("Can't find you. No weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);

//https://api.openweathermap.org/data/2.5/weather?lat=37.3775795&lon=126.8357822&appid=ca54c37ae5454afa24be2bdb5d789afa