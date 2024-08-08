// ┬ ┬┌─┐┌─┐┌┬┐┬ ┬┌─┐┬─┐
// │││├┤ ├─┤ │ ├─┤├┤ ├┬┘
// └┴┘└─┘┴ ┴ ┴ ┴ ┴└─┘┴└─
// Functions to setup Weather widget.

const iconElement = document.querySelector('.weatherIcon');
const tempElement = document.querySelector('.weatherValue p');
const descElement = document.querySelector('.weatherDescription p');
const cityElement = document.querySelector('.weatherCity p');
const weather = {};
weather.temperature = {
	unit: 'celsius',
};

var wmo_codes = new Map();
wmo_codes.set(0, ['Clear', 'clear']);
wmo_codes.set(1, ['Mostly Clear', 'mostly-clear']);
wmo_codes.set(2, ['Partly Cloudy', 'partly-cloudy']);
wmo_codes.set(3, ['Overcast', 'overcast']);
wmo_codes.set(45, ['Fog', 'fog']);
wmo_codes.set(48, ['Icy Fog', 'rime-fog']);
wmo_codes.set(51, ['L.Drizzle', 'light-drizzle']);
wmo_codes.set(53, ['Drizzle', 'moderate-drizzle']);
wmo_codes.set(55, ['H.Drizzle', 'dense-drizzle']);
wmo_codes.set(80, ['L.Showers', 'light-rain']);
wmo_codes.set(81, ['Showers', 'moderate-rain']);
wmo_codes.set(82, ['H.Showers', 'heavy-rain']);
wmo_codes.set(61, ['L.Rain', 'light-rain']);
wmo_codes.set(63, ['Rain', 'moderate-rain']);
wmo_codes.set(65, ['H.Rain', 'heavy-rain']);
wmo_codes.set(56, ['L.Icy Drizzle', 'light-freezing-drizzle']);
wmo_codes.set(57, ['Icy Drizzle', 'dense-freezing-drizzle']);
wmo_codes.set(66, ['L.Icy Rain', 'light-freezing-rain']);
wmo_codes.set(67, ['Icy Rain', 'heavy-freezing-rain']);
wmo_codes.set(77, ['Snow Grains', 'snowflake']);
wmo_codes.set(85, ['L.Snow Showers', 'slight-snowfall']);
wmo_codes.set(86, ['Snow Showers', 'heavy-snowfall']);
wmo_codes.set(71, ['L.Snow', 'slight-snowfall']);
wmo_codes.set(73, ['Snow', 'moderate-snowfall']);
wmo_codes.set(75, ['H.Snow', 'heavy-snowfall']);
wmo_codes.set(95, ['Thunder Storm', 'thunderstorm']);
wmo_codes.set(96, ['T-Storm + L.Hail', 'thunderstorm-with-hail']);
wmo_codes.set(99, ['T-Storm + Hail', 'thunderstorm-with-hail']);

var tempUnit = CONFIG.weatherUnit;

const KELVIN = 273.15;
const key = `${CONFIG.weatherKey}`;
setPosition();

function setPosition(position) {
	if (!CONFIG.trackLocation || !navigator.geolocation) {
		if (CONFIG.trackLocation) {
			console.error('Geolocation not available');
		}
		getWeather(CONFIG.defaultLatitude, CONFIG.defaultLongitude);
		return;
	}
	navigator.geolocation.getCurrentPosition(
		pos => {
			weather.name = "(geo-ip)";
			getWeather(pos.coords.latitude.toFixed(3), pos.coords.longitude.toFixed(3));
		},
		err => {
			console.error(err);
			weather.name = "(msk)";
			getWeather(CONFIG.defaultLatitude, CONFIG.defaultLongitude);
		},
		{timeout:3000}
	);
}

function getWeather(latitude, longitude) {
	let api = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,weather_code`
	fetch(api)
		.then(function(response) {
			let data = response.json();
			console.log(data);
			return data;
		})
		.then(function(data) {
			weather.temperature.value = data.current.temperature_2m
			weather.description = wmo_codes.get(data.current.weather_code)[0];
			weather.iconId = wmo_codes.get(data.current.weather_code)[1];
		})
		.then(function() {
			displayWeather();
		});
}

function displayWeather() {
	iconElement.innerHTML = `<img src="assets/icons/${CONFIG.weatherIcons}/${weather.iconId}@4x.png"/>`;
	tempElement.innerHTML = `${weather.temperature.value.toFixed(0)}°<span class="darkfg">${tempUnit}</span>`;
	descElement.innerHTML = `${weather.description}`;
	cityElement.innerHTML = `${weather.name}`;
}
