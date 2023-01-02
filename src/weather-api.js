// const axios = require('axios').default;
// import {
//     axios
// } from 'axios';
// const axios = require('axios/dist/browser/axios.cjs');

// function displayForecast(response) {
//     let forecast = response.data.daily;

//     let forecastElement = document.querySelector("#forecast");

//     let forecastHTML = `<div class="row">`;
//     forecast.forEach(function (forecastDay, index) {
//         if (index < 6) {
//             forecastHTML =
//                 forecastHTML +
//                 `
//       <div class="col-2">
//         <div class="weather-forecast-date">${formatDay(forecastDay.dt)}</div>
//         <img
//           src="http://openweathermap.org/img/wn/${
//             forecastDay.weather[0].icon
//           }@2x.png"
//           alt=""
//           width="42"
//         />
//         <div class="weather-forecast-temperatures">
//           <span class="weather-forecast-temperature-max"> ${Math.round(
//             forecastDay.temp.max
//           )}° </span>
//           <span class="weather-forecast-temperature-min"> ${Math.round(
//             forecastDay.temp.min
//           )}° </span>
//         </div>
//       </div>
//   `;
//         }
//     });

//     forecastHTML = forecastHTML + `</div>`;
//     forecastElement.innerHTML = forecastHTML;
// }

// function getForecast(coordinates) {
//     let key = "98ad498c7ac36eb42f7e339359135880";
//     let url = `https://api.openweathermap.org/data/2.5/onecall?lat=${coordinates.lat}&lon=${coordinates.lon}&appid=${key}&units=metric`;
//     axios.get(url).then(displayForecast);
// }

function displayWeather(response) {
    console.log(response.data);
    document.querySelector("#city").innerHTML = response.data.name;
    document.querySelector("#temperature").innerHTML = Math.round(
        response.data.main.temp
    );
    document.querySelector("#feels").innerHTML = Math.round(
        response.data.main.feels_like
    );
    document.querySelector("#humidity").innerHTML = response.data.main.humidity;
    document.querySelector("#wind").innerHTML = Math.round(
        response.data.wind.speed
    );

    document.querySelector("#description").innerHTML =
        response.data.weather[0].main;
    let iconElement = document.querySelector("icon");
    // iconElement.setAttribute("src", `http://openweathermap.org/img/wn/10d@2x.png`);

    iconElement.setAttribute("src", `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`);
    iconElement.setAttribute("alt", response.data.weather[0].description);

}

function searchCity(city) {
    let key = "98ad498c7ac36eb42f7e339359135880";
    // let key = "bfbe44236o410d8ab668t52c259a3289";
    // let url = `https://api.shecodes.io/weather/v1/current?query={city}&key={key}`;

    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&units=metric`;
    axios.get(url).then(displayWeather);
}

function searchLocation(position) {
    let key = "98ad498c7ac36eb42f7e339359135880";

    // let key = "bfbe44236o410d8ab668t52c259a3289";
    // let url = `https://api.shecodes.io/weather/v1/current?lon={lon}&lat={lat}&key={key}`;
    let url = `https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=${key}&units=metric`;

    axios.get(url).then(displayWeather);
}

function getCurrentLocation(event) {
    event.preventDefault();
    navigator.geolocation.getCurrentPosition(searchLocation);
}

let currentLocationButton = document.querySelector("#current_city");
currentLocationButton.addEventListener("click", getCurrentLocation);

searchCity("Milan");