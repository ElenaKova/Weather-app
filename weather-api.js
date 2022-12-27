import axios from "axios";

function displayWeather(response) {
    document.querySelector("#city").innerHTML = response.data.name;
    document.querySelector("#temperature").innerHTML = Math.round(
        response.data.main.temp
    );

    document.querySelector("#humidity").innerHTML = response.data.main.humidity;
    document.querySelector("#wind").innerHTML = Math.round(
        response.data.wind.speed
    );
    document.querySelector("#type-weather").innerHTML =
        response.data.weather[0].main;
}

function searchCity(city) {
    let key = "98ad498c7ac36eb42f7e339359135880";
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&units=metric`;
    axios.get(url).then(displayWeather);
}

function searchLocation(position) {
    let key = "98ad498c7ac36eb42f7e339359135880";
    let url = `https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=${key}&units=metric`;

    axios.get(url).then(displayWeather);
}

function getCurrentLocation(event) {
    event.preventDefault();
    navigator.geolocation.getCurrentPosition(searchLocation);
}

let currentLocationButton = document.querySelector("#current_city");
currentLocationButton.addEventListener("click", getCurrentLocation);

searchCity("New York");