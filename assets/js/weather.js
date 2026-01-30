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
wmo_codes.set(0, ['clear', 'clear']);
wmo_codes.set(1, ['mostly clear', 'mostly-clear']);
wmo_codes.set(2, ['partly cloudy', 'partly-cloudy']);
wmo_codes.set(3, ['overcast', 'overcast']);
wmo_codes.set(45, ['fog', 'fog']);
wmo_codes.set(48, ['icy fog', 'rime-fog']);
wmo_codes.set(51, ['l.drizzle', 'light-drizzle']);
wmo_codes.set(53, ['drizzle', 'moderate-drizzle']);
wmo_codes.set(55, ['h.drizzle', 'dense-drizzle']);
wmo_codes.set(80, ['l.showers', 'light-rain']);
wmo_codes.set(81, ['showers', 'moderate-rain']);
wmo_codes.set(82, ['h.showers', 'heavy-rain']);
wmo_codes.set(61, ['l.rain', 'light-rain']);
wmo_codes.set(63, ['rain', 'moderate-rain']);
wmo_codes.set(65, ['h.rain', 'heavy-rain']);
wmo_codes.set(56, ['l.icy drizzle', 'light-freezing-drizzle']);
wmo_codes.set(57, ['icy drizzle', 'dense-freezing-drizzle']);
wmo_codes.set(66, ['l.icy rain', 'light-freezing-rain']);
wmo_codes.set(67, ['icy rain', 'heavy-freezing-rain']);
wmo_codes.set(77, ['snow grains', 'snowflake']);
wmo_codes.set(85, ['l.snow showers', 'slight-snowfall']);
wmo_codes.set(86, ['snow showers', 'heavy-snowfall']);
wmo_codes.set(71, ['l.snow', 'slight-snowfall']);
wmo_codes.set(73, ['snow', 'moderate-snowfall']);
wmo_codes.set(75, ['h.snow', 'heavy-snowfall']);
wmo_codes.set(95, ['thunder storm', 'thunderstorm']);
wmo_codes.set(96, ['t-storm + l.hail', 'thunderstorm-with-hail']);
wmo_codes.set(99, ['t-storm + hail', 'thunderstorm-with-hail']);

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
			weather.name = "";
			getWeather(pos.coords.latitude.toFixed(3), pos.coords.longitude.toFixed(3));
		},
		err => {
			console.error(err);
			weather.name = "msk";
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
