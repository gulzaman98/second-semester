const api = "a0b0c89c85792a47766d142ebf030c8c";

async function getWeather() {
    let city = document.getElementById("city").value
    let response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api}&units=metric`);

    let data = await response.json();
    let weatherDiv = document.getElementById("result")
    weatherDiv.innerHTML = `
        <p>city : ${data.name}</p>
        <p>temp : ${data.main.temp}</p>
        <p>wind : ${data.wind.speed}</p>
        <p>weather Description : ${data.weather[0].description}</p>
        
        `


}