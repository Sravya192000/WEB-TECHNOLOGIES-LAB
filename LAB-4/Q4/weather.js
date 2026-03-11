// Cache variable
let lastCity = "";
let lastResult = null;

function getWeather() {

    const city = document.getElementById("cityInput").value.trim();
    const resultDiv = document.getElementById("result");
    const errorDiv = document.getElementById("error");
    const spinner = document.getElementById("spinner");

    errorDiv.innerHTML = "";
    resultDiv.innerHTML = "";

    if (city === "") {
        errorDiv.innerHTML = "Please enter a city name.";
        return;
    }

    // Check cache
    if (city.toLowerCase() === lastCity.toLowerCase() && lastResult !== null) {
        displayWeather(lastResult);
        return;
    }

    spinner.style.display = "block";

    const apiKey = "b56277182d6fc60a65777fc75ce79369";  // Replace with your OpenWeather API key
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    const xhr = new XMLHttpRequest();

    xhr.open("GET", url, true);

    xhr.onload = function () {
        spinner.style.display = "none";

        if (xhr.status === 200) {

            const data = JSON.parse(xhr.responseText);

            if (data.cod === 200) {
                lastCity = city;
                lastResult = data;
                displayWeather(data);
            } else {
                errorDiv.innerHTML = "City not found.";
            }

        } else {
            errorDiv.innerHTML = "Network error. Please try again.";
        }
    };

    xhr.onerror = function () {
        spinner.style.display = "none";
        errorDiv.innerHTML = "Request failed.";
    };

    xhr.send();
}

function displayWeather(data) {

    const resultDiv = document.getElementById("result");

    const temperature = data.main.temp;
    const humidity = data.main.humidity;
    const condition = data.weather[0].description;

    resultDiv.innerHTML = `
        <h3>${data.name}</h3>
        <p><strong>Temperature:</strong> ${temperature} °C</p>
        <p><strong>Humidity:</strong> ${humidity} %</p>
        <p><strong>Condition:</strong> ${condition}</p>
    `;
}
