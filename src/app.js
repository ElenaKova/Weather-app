function formatDate(date) {
    let hours = date.getHours();
    if (hours < 10) {
        hours = `0${hours}`;
    }
    let minutes = date.getMinutes();
    if (minutes < 10) {
        minutes = `0${minutes}`;
    }

    let dayIndex = date.getDay();
    let days = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
    ];
    let day = days[dayIndex];

    return `${day} ${hours}:${minutes}`;
}

let currentDayTime = document.querySelector("#day-time");
let time = new Date();
currentDayTime.innerHTML = formatDate(time);


// function searchCity(city) {
//     let key = "98ad498c7ac36eb42f7e339359135880";
//     // let key = "bfbe44236o410d8ab668t52c259a3289";
//     // let url = `https://api.shecodes.io/weather/v1/current?query={city}&key={key}`;

//     let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&units=metric`;
//     axios.get(url).then(displayWeather);
// }

// function handleSubmit(event) {
//     event.preventDefault();
//     let cityElement = document.querySelector("#city");
//     let cityInput = document.querySelector("#input-city");
//     cityElement.innerHTML = cityInput.value;
// }

// searchCity("Milan");

// let searchForm = document.querySelector("#enter_city");
// searchForm.addEventListener("submit", handleSubmit);

// function searchLocation(position) {
//     let key = "98ad498c7ac36eb42f7e339359135880";

//     // let key = "bfbe44236o410d8ab668t52c259a3289";
//     // let url = `https://api.shecodes.io/weather/v1/current?lon={lon}&lat={lat}&key={key}`;
//     let url = `https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=${key}&units=metric`;

//     axios.get(url).then(displayWeather);
// }

// function getCurrentLocation(event) {
//     event.preventDefault();
//     navigator.geolocation.getCurrentPosition(searchLocation);
// }

// let currentLocationButton = document.querySelector("#current_city");
// currentLocationButton.addEventListener("click", getCurrentLocation);





function convertToFahrenheit(event) {
    event.preventDefault();
    let temperatureElement = document.querySelector("#temperature");
    temperatureElement.innerHTML = 66;
}

function convertToCelsius(event) {
    event.preventDefault();
    let temperatureElement = document.querySelector("#temperature");
    temperatureElement.innerHTML = 19;
}

let fahrenheitLink = document.querySelector("#fahrenheit");
fahrenheitLink.addEventListener("click", convertToFahrenheit);

let celsiusLink = document.querySelector("#celsius");
celsiusLink.addEventListener("click", convertToCelsius);