const API_KEY = '1a3987365f05332510c9fb7b9e67f19b';

const searchTemperature = () => {
    const city = document.getElementById('city-name').value;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => displayTemperature(data))
        .catch(error => console.error('Error:', error));
}

const setInnerText = (id, text) => {
    document.getElementById(id).innerText = text;
}

const displayTemperature = temperature => {
    setInnerText('city', temperature.name);
    setInnerText('temp', temperature.main.temp + " °C");
    setInnerText('weather', temperature.weather[0].main);

    // weather icon settings 
    const iconCode = temperature.weather[0].icon;
    const url = `http://openweathermap.org/img/wn/${iconCode}@2x.png`;
    const imgIcon = document.getElementById('image-icon');
    imgIcon.setAttribute('src', url);
}
