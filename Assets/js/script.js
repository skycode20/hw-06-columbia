// Variables Defined

// Reference to the DOM Elements
var searchButton = $("#search-button");
var userInputField = $("#user-search-input");

var displayCurrentCity = $("#display-city");
var currentTemp = $("#display-temp");
var currentHumidity = $("#display-humidity");
var currentWindSpeed = $("#display-wind-speed");
var currentUvIndex = $("#display-uv-index");

var dallasButton = $("dallas");
var chicagoButton = $("chicago");
var newyorkButton = $("new-york");
var miamiButton = $("miami");
var sanfranciscoButton = $("san-francisco");
var seattleButton = $("seattle");
var atlantaButton = $("atlanta");

// Weather API - Current Weather
var queryURL = "";

var settingsCurrentDay = {
	"async": true,
	"crossDomain": true,
	"url": "https://weatherbit-v1-mashape.p.rapidapi.com/current?units=I&lang=en&lon=-74.0059&lat=40.7142",
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "weatherbit-v1-mashape.p.rapidapi.com",
		"x-rapidapi-key": "1158285bedmshcd503baf4df4f38p164fc5jsn041ef8eb90ab"
	}
}
console.log(settingsCurrentDay);

$.ajax(settingsCurrentDay).done(function (response) {
	console.log(response);
});

// Weather API - 5 Day Forecast
var settingsFiveDay = {
	"async": true,
	"crossDomain": true,
	"url": "https://weatherbit-v1-mashape.p.rapidapi.com/forecast/3hourly?units=I&lang=en&lat=40.7142&lon=-74.0059",
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "weatherbit-v1-mashape.p.rapidapi.com",
		"x-rapidapi-key": "1158285bedmshcd503baf4df4f38p164fc5jsn041ef8eb90ab"
	}
}

$.ajax(settingsFiveDay).done(function (response) {
	console.log(response);
});

// ======================================================================

// User Searched City 
var newCity = "Raleigh, NC"

var userCurrentDay = {
	"async": true,
	"crossDomain": true,
	"url": "https://weatherbit-v1-mashape.p.rapidapi.com/current?units=I&city=" + newCity,
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "weatherbit-v1-mashape.p.rapidapi.com",
		"x-rapidapi-key": "1158285bedmshcd503baf4df4f38p164fc5jsn041ef8eb90ab"
	}
}
console.log(userCurrentDay);

$.ajax(userCurrentDay).done(function (response) {
	console.log(response);
});
// ======================================================================

// Dallas Weather Request 
var dallasCity = "Dallas, TX"

var currentWeatherDallas = {
	"async": true,
	"crossDomain": true,
	"url": "https://weatherbit-v1-mashape.p.rapidapi.com/current?units=I&city=" + dallasCity,
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "weatherbit-v1-mashape.p.rapidapi.com",
		"x-rapidapi-key": "1158285bedmshcd503baf4df4f38p164fc5jsn041ef8eb90ab"
	}
}

$.ajax(currentWeatherDallas).done(function (response) {
	console.log(response);
});
// ======================================================================

// Chicago Weather Request 
var chicagoCity = "Chicago, IL"

var currentWeatherChicago = {
	"async": true,
	"crossDomain": true,
	"url": "https://weatherbit-v1-mashape.p.rapidapi.com/current?units=I&city=" + chicagoCity,
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "weatherbit-v1-mashape.p.rapidapi.com",
		"x-rapidapi-key": "1158285bedmshcd503baf4df4f38p164fc5jsn041ef8eb90ab"
	}
}

$.ajax(currentWeatherChicago).done(function (response) {
	console.log(response);
});
// ======================================================================

// New York Weather Request 
var newyorkCity = "New York, NY"

var currentWeatherNewYork = {
	"async": true,
	"crossDomain": true,
	"url": "https://weatherbit-v1-mashape.p.rapidapi.com/current?units=I&city=" + newyorkCity,
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "weatherbit-v1-mashape.p.rapidapi.com",
		"x-rapidapi-key": "1158285bedmshcd503baf4df4f38p164fc5jsn041ef8eb90ab"
	}
}

$.ajax(currentWeatherNewYork).done(function (response) {
	console.log(response);
});
// ======================================================================

// Miami Weather Request 
var miamiCity = "Miami, FL"

var currentWeatherMiami = {
	"async": true,
	"crossDomain": true,
	"url": "https://weatherbit-v1-mashape.p.rapidapi.com/current?units=I&city=" + miamiCity,
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "weatherbit-v1-mashape.p.rapidapi.com",
		"x-rapidapi-key": "1158285bedmshcd503baf4df4f38p164fc5jsn041ef8eb90ab"
	}
}

$.ajax(currentWeatherMiami).done(function (response) {
	console.log(response);
});
// ======================================================================

// Seattle Weather Request 
var seattleCity = "Seattle, WA"

var currentWeatherSeattle = {
	"async": true,
	"crossDomain": true,
	"url": "https://weatherbit-v1-mashape.p.rapidapi.com/current?units=I&city=" + seattleCity,
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "weatherbit-v1-mashape.p.rapidapi.com",
		"x-rapidapi-key": "1158285bedmshcd503baf4df4f38p164fc5jsn041ef8eb90ab"
	}
}

$.ajax(currentWeatherSeattle).done(function (response) {
	console.log(response);
});
// ======================================================================

// Atlanta Weather Request 
var atlantaCity = "Atlanta, GA"

var currentWeatherAtlanta = {
	"async": true,
	"crossDomain": true,
	"url": "https://weatherbit-v1-mashape.p.rapidapi.com/current?units=I&city=" + atlantaCity,
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "weatherbit-v1-mashape.p.rapidapi.com",
		"x-rapidapi-key": "1158285bedmshcd503baf4df4f38p164fc5jsn041ef8eb90ab"
	}
}

$.ajax(currentWeatherAtlanta).done(function (response) {
	console.log(response);
});
// ======================================================================

// San Francisco Weather Request 
var sanfranciscoCity = "San Francisco, CA"

var currentWeatherSanFrancisco = {
	"async": true,
	"crossDomain": true,
	"url": "https://weatherbit-v1-mashape.p.rapidapi.com/current?units=I&city=" + sanfranciscoCity,
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "weatherbit-v1-mashape.p.rapidapi.com",
		"x-rapidapi-key": "1158285bedmshcd503baf4df4f38p164fc5jsn041ef8eb90ab"
	}
}

$.ajax(currentWeatherSanFrancisco).done(function (response) {
	console.log(response);
});



// var APIKey = "1158285bedmshcd503baf4df4f38p164fc5jsn041ef8eb90ab";

// // Here we are building the URL we need to query the database
// var queryURL = "https://weatherbit-v1-mashape.p.rapidapi.com/current?units=I" +
//   "&city=Raleigh,NC" + APIKey;

// // Here we run our AJAX call to the OpenWeatherMap API
// $.ajax({
//   url: queryURL,
//   method: "GET"
// })
//   // We store all of the retrieved data inside of an object called "response"
//   .then(function(response) {

//     // Log the queryURL
//     console.log(queryURL);

//     // Log the resulting object
//     console.log(response);

// //     // Transfer content to HTML
// //     $(".city").html("<h1>" + response.name + " Weather Details</h1>");
// //     $(".wind").text("Wind Speed: " + response.wind.speed);
// //     $(".humidity").text("Humidity: " + response.main.humidity);
    
// //     // Convert the temp to fahrenheit
// //     var tempF = (response.main.temp - 273.15) * 1.80 + 32;

// //     // add temp content to html
// //     $(".temp").text("Temperature (K) " + response.main.temp);
// //     $(".tempF").text("Temperature (F) " + tempF.toFixed(2));

// //     // Log the data in the console as well
// //     console.log("Wind Speed: " + response.wind.speed);
// //     console.log("Humidity: " + response.main.humidity);
// //     console.log("Temperature (F): " + tempF);
//   });
