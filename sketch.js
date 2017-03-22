var api = 'http://api.openweathermap.org/data/2.5/weather?q=';
var city = ['Tokyo', 'New York', 'Sao Paulo', 'Seoul', 'Mexico City', 'Osaka', 'Manila', 'Mumbai', 'Delhi', 'Jakarta', 'Lagos', 'Kolkata', 'Cairo', 'Los Angeles', 'Buenos Aires', 'Rio de Janeiro', 'Moscow', 'Shanghai', 'Karachi', 'Paris', 'Istanbul', 'Nagoya', 'Beijing', 'Chicago', 'London', 'Shenzhen', 'Essen', 'Tehran', 'Bogota', 'Lima', 'Bangkok', 'Johannesburg', 'Chennai', 'Taipei', 'Baghdad', 'Santiago', 'Bangalore', 'Hyderabad', 'St Petersburg', 'Philadelphia', 'Lahore', 'Kinshasa', 'Miami', 'Ho Chi Minh City', 'Madrid', 'Tianjin', 'Kuala Lumpur', 'Toronto', 'Milan', 'Shenyang', 'Dallas', 'Boston', 'Belo Horizonte', 'Khartoum', 'Riyadh', 'Singapore', 'Washington', 'Detroit', 'Barcelona', 'Houston'];
var apikey = '&APPID=ba61a311d052599fd7f49219f76046b6';

function setup() {
	noCanvas();
	setInterval(checkRain, 60000);
	noLoop();
}

function checkRain() {
	removeElements();
	for(i=0;i<city.length;i++) {
		var url = api + city[i] + apikey;
		loadJSON(url, gotData);
	}
}

function gotData(data) {
	if(data.weather[0].id < 202 || data.weather[0].id >= 310 && data.weather[0].id <= 314 || data.weather[0].id >= 500 && data.weather[0].id <= 531 || data.weather[0].id >= 615 && data.weather[0].id <= 616) {
		createP("It's raining in: " + data.name + ".");
	}
}