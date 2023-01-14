// import axios from "axios";
function getForecast(coordinates) {
    console.log(coordinates);
    let key = "eb9542c65e739e0fb25ade97c749e2aa";
    let url = `https://api.openweathermap.org/data/3.0/onecall?lat=${coordinates.lat}&lon=${coordinates.lon}&appid=${key}&units=metric`;
    console.log(url);
    axios.get(url).then(displayForecast);
}

function displayForecast(response) {
    let forecast = response.data.daily;
    let forecastElement = document.querySelector("#forecast");

    let forecastHTML = "";
    // let days = ["Fri", "Sat", "Sun", "Mon", "Tue"];
    forecast.forEach(function (forecastDay) {
        forecastHTML = forecastHTML +
            `
        <div class="box-day container mx-1 ">
            <div class = "day-of-week align-items-center" >${forecastDay.dt}</div>
                <img src="http://openweathermap.org/img/wn/${forecastDay.weather[0].icon}@2x.png"
                    alt=""
                    width="42"/>
                <div class="weather-forecast-temp">
                        <span class="weather-forecast-temp-max">${forecastDay.temp.max}˚</span>
                        <span class = "weather-forecast-temp-min" > ${forecastDay.temp.min}˚ </span>
                </div>
            </div>
        </div>
    `;
    })

    // forecastHTML = forecastHTML + `</div>`
    forecastElement.innerHTML = forecastHTML;
};

function displayWeather(response) {
    // console.log(response.data);
    let cityElement = document.querySelector("#city");
    let temperatureElement = document.querySelector("#temperature");
    let feelsElement = document.querySelector("#feels");
    let humidityElement = document.querySelector("#humidity");
    let windElement = document.querySelector("#wind");
    let descriptionElement = document.querySelector("#description");
    let iconElement = document.querySelector("#icon");

    displayForecast();

    celsiusTemp = response.data.main.temp;

    cityElement.innerHTML = response.data.name;

    temperatureElement.innerHTML = Math.round(
        celsiusTemp
    );

    feelsElement.innerHTML = Math.round(
        response.data.main.feels_like
    );
    humidityElement.innerHTML = response.data.main.humidity;
    windElement.innerHTML = Math.round(
        response.data.wind.speed
    );
    descriptionElement.innerHTML =
        response.data.weather[0].description;

    iconElement.setAttribute("src", `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`);
    iconElement.setAttribute("alt", response.data.weather[0].description);


    getForecast(response.data.coord);
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
api.openweathermap.org/data/2.5/forecast?id=524901&appid={API key}
    axios.get(url).then(displayWeather);
}

function handleSubmit(event) {
    event.preventDefault();
    let cityInputElement = document.querySelector("#input-city");
    searchCity(cityInputElement.value);
}

let form = document.querySelector("#enter_city");
form.addEventListener("submit", handleSubmit);

function getCurrentLocation(event) {
    event.preventDefault();
    navigator.geolocation.getCurrentPosition(searchLocation);
}

let currentLocationButton = document.querySelector("#current_city");
currentLocationButton.addEventListener("click", getCurrentLocation);
// function displayFahrenheitTemp(event) {
//     event.preventDefault();
//     celsiusLink.classList.remove("active");
//     fahrenheitLink.classList.add("active");
//     let tempElement = document.querySelector("#temperature");
//     let fahrenheitTemp = (celsiusTemp * 9) / 5 + 32;
//     tempElement.innerHTML = Math.round(fahrenheitTemp);
// }

function displayCelsiusTemp(event) {
    event.preventDefault();
    let tempElement = document.querySelector("#temperature");
    tempElement.innerHTML = Math.round(celsiusTemp);
}

let celsiusTemp = null;

displayForecast();

let celsiusLink = document.querySelector("#celsius");
celsiusLink.addEventListener("click", displayCelsiusTemp);

// let fahrenheitLink = document.querySelector("#fahrenheit");
// fahrenheitLink.addEventListener("click", displayFahrenheitTemp)
searchCity("Kyiv");