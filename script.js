const apiKey = "e6255bc556e042edef76380f3459ed89"
const cityInput = document.querySelector("#city-input");
const searchBtn = document.querySelector("#search");
const cityElement = document.querySelector("#city");
const countryElement = document.querySelector("#country");
const temperatureElement = document.querySelector("#temperature span");
const descElement = document.querySelector("#description");
const weatherIconElement = document.querySelector("#weather-icon");
const umidityElement = document.querySelector("#umidity span");
const windElement = document.querySelector("#wind span");
const weatherDataContainer = document.querySelector("#wheather-data");

const getWeatherData = async (city) => {
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}&lang=pt_br`;
    const res = await fetch(apiUrl);
    const data = await res.json();
    return data;
}

const showWeatherData = async (city) => {
    console.log(city);
    const data = await getWeatherData(city);
    console.log(data);
    cityElement.innerText = data.name;
    countryElement.src = `https://flagsapi.com/${data.sys.country}/flat/64.png`;
    temperatureElement.innerText = parseInt(data.main.temp);
    descElement.innerText = data.weather[0].description;
    weatherIconElement.src = `http://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    umidityElement.innerText = `${data.main.humidity}%`;
    windElement.innerText = `${data.wind.speed} km/h`;

    weatherDataContainer.classList.remove("hide");
}

searchBtn.addEventListener("click", (e) => {
    e.preventDefault();
    const city = cityInput.value;
    showWeatherData(city);
});

cityInput.addEventListener("keyup", (e) => {
    if (e.code === "Enter") {
        const city = e.target.value;
        showWeatherData(city);
    }
});