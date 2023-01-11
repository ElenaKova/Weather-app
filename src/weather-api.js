function displayWeather(response) {
    // console.log(response.data);
    let cityElement = document.querySelector("#city");
    let temperatureElement = document.querySelector("#temperature");
    let feelsElement = document.querySelector("#feels");
    let humidityElement = document.querySelector("#humidity");
    let windElement = document.querySelector("#wind");
    let descriptionElement = document.querySelector("#description");
    let iconElement = document.querySelector("icon");

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

function displayFahrenheitTemp(event) {
    event.preventDefault();
    celsiusLink.classList.remove("active");
    fahrenheitLink.classList.add("active");
    let tempElement = document.querySelector("#temperature");
    let fahrenheitTemp = (celsiusTemp * 9) / 5 + 32;
    tempElement.innerHTML = Math.round(fahrenheitTemp);
}


function displayCelsiusTemp(event) {
    event.preventDefault();
    let tempElement = document.querySelector("#temperature");
    tempElement.innerHTML = Math.round(celsiusTemp);
}

let celsiusTemp = null;

displayForecast();

let celsiusLink = document.querySelector("#celsius");
celsiusLink.addEventListener("click", displayCelsiusTemp);

let fahrenheitLink = document.querySelector("#fahrenheit");
fahrenheitLink.addEventListener("click", displayFahrenheitTemp)
searchCity("Milan");

function displayForecast() {
    let forecastElement = document.querySelector("#forecast");

    let forecastHTML = "";
    let days = ["Fri", "Sat", "Sun", "Mon", "Tue"];
    days.forEach(function (day) {
        forecastHTML = forecastHTML + 
        `
        <div class="box-day container mx-1 ">
            <div class = "day-of-week align-items-center" > ${day}</div>
                <img src="http://openweathermap.org/img/wn/50d@2x.png"
                    alt=""
                    width="42"/>
                <div class="weather-forecast-temp">
                        <span class="weather-forecast-temp-max">18˚</span>
                        <span class = "weather-forecast-temp-min" > 13˚ </span>
                </div>
            </div>
        </div>
    `;
    })

    // forecastHTML = forecastHTML + `</div>`
    forecastElement.innerHTML = forecastHTML;
}
// forecastElement.innerHTML = `
// <div div class = "container d-flex flex-column justify-content-center my-3" >
//     <div class = "day-of-week align-items-center" > Fri </div>
//         <img src="http://openweathermap.org/img/wn/50d@2x.png"
//         alt=""
//         width="42"/>
//         <div class="weather-forecast-temp">
//             <span class="weather-forecast-temp-max">18˚</span>
//             <span class = "weather-forecast-temp-mim" > 13˚ </span>
//         </div>
//     </div>
// </div>
// `;





// function convertToFahrenheit(event) {
//     event.preventDefault();
//     let temperatureElement = document.querySelector("#temperature");
//     temperatureElement.innerHTML = 66;
// }

// function convertToCelsius(event) {
//     event.preventDefault();
//     let temperatureElement = document.querySelector("#temperature");
//     temperatureElement.innerHTML = 19;
// }

// let fahrenheitLink = document.querySelector("#fahrenheit");
// fahrenheitLink.addEventListener("click", convertToFahrenheit);