$('document').ready(function(){

// Variables Defined

// Reference to the DOM Elements
var searchButton = $("#search-button");
var userInputField = $("#user-search-input");

var displayCurrentCity = $("#display-city");
var currentTemp = $("#display-temp");
var currentHumidity = $("#display-humidity");
var currentWindSpeed = $("#display-wind-speed");
var currentUvIndex = $("#display-uv-index");

var dallasButton = $("#dallas");
var chicagoButton = $("#chicago");
var newyorkButton = $("#new-york");
var miamiButton = $("#miami");
var sanfranciscoButton = $("#san-francisco");
var seattleButton = $("#seattle");
var atlantaButton = $("#atlanta");

var apiKey = "&key=90e9e44deac84fb4a9f46233e3d5e501";

// xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
// Weather API - Current Weather ------- Not being used!
// var queryURL = "";

// var settingsCurrentDay = {
    // 	"async": true,
    // 	"crossDomain": true,
    // 	"url": "https://weatherbit-v1-mashape.p.rapidapi.com/current?units=I&lang=en&lon=-74.0059&lat=40.7142",
    // 	"method": "GET",
    // 	"headers": {
        // 		"x-rapidapi-host": "weatherbit-v1-mashape.p.rapidapi.com",
        // 		"x-rapidapi-key": "1158285bedmshcd503baf4df4f38p164fc5jsn041ef8eb90ab"
        // 	}
        // }
        // console.log(settingsCurrentDay);
        
        // $.ajax(settingsCurrentDay).done(function (response) {
            // 	console.log(response);
            // });
            
// xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx


// Weather API - 5 Day Forecast
var fiveDayCity = "New York, NY";
var fiveDayURL = "https://api.weatherbit.io/v2.0/forecast/daily?units=I&city=" + fiveDayCity + apiKey;

$.ajax(fiveDayURL).done(function (response) {
	console.log(response);
});

// ======================================================================

// User Searched City 
var userSearchCity = "Raleigh, NC"
var userURL = "https://api.weatherbit.io/v2.0/current?units=I&city="+ userSearchCity + apiKey;

$.ajax({
      url: userURL,
      method: "GET"
    })
    .then(function(response) {
        // console.log(apiURL);
        console.log(response);
    });
// ======================================================================

// Dallas Weather Request 
var dallasCity = "Dallas, TX"
var dalURL = "https://api.weatherbit.io/v2.0/current?units=I&city="+ dallasCity + apiKey;

    $(dallasButton).on("click", function(event) {
        event.preventDefault();

        $.ajax({
            url: dalURL,
            method: "GET"
        })
        .then(function(response) {
            
            console.log(response);

            // transfer to the html
            $(displayCurrentCity).html("<h1>" + response.data[0].city_name + " Weather Details</h1>");
            $(currentTemp).text("Temperature: " + response.data[0].temp);
            $(currentWindSpeed).text("Wind Speed: " + response.data[0].wind_spd);
            $(currentHumidity).text("Humidity: " + response.data[0].rh);
            $(currentUvIndex).text("UV Index: " + response.data[0].uv);
            
        });
    });

    console.log(dallasButton);
// ======================================================================

// Chicago Weather Request 
var chicagoCity = "Chicago, IL"
var chiURL = "https://api.weatherbit.io/v2.0/current?units=I&city="+ chicagoCity + apiKey;

    $(chicagoButton).on("click", function(event) {
        event.preventDefault();

    $.ajax({
        url: chiURL,
        method: "GET"
        })
        .then(function(response) {
            
            console.log(response);

            // transfer to the html
            $(displayCurrentCity).html("<h1>" + response.data[0].city_name + " Weather Details</h1>");
            $(currentTemp).text("Temperature: " + response.data[0].temp);
            $(currentWindSpeed).text("Wind Speed: " + response.data[0].wind_spd);
            $(currentHumidity).text("Humidity: " + response.data[0].rh);
            $(currentUvIndex).text("UV Index: " + response.data[0].uv);
            
        });
    });

    console.log(chicagoButton);

// ======================================================================

// New York Weather Request 
var newyorkCity = "New York, NY"
var nycURL = "https://api.weatherbit.io/v2.0/current?units=I&city="+ newyorkCity + apiKey;

    $(newyorkButton).on("click", function(event) {
        event.preventDefault();

    $.ajax({
        url: nycURL,
        method: "GET"
        })
        .then(function(response) {
            
            console.log(response);

            // transfer to the html
            $(displayCurrentCity).html("<h1>" + response.data[0].city_name + " Weather Details</h1>");
            $(currentTemp).text("Temperature: " + response.data[0].temp);
            $(currentWindSpeed).text("Wind Speed: " + response.data[0].wind_spd);
            $(currentHumidity).text("Humidity: " + response.data[0].rh);
            $(currentUvIndex).text("UV Index: " + response.data[0].uv);
            
        });
    });

    console.log(newyorkButton);
// ======================================================================

// Miami Weather Request 
var miamiCity = "Miami, FL"
var miaURL = "https://api.weatherbit.io/v2.0/current?units=I&city="+ miamiCity + apiKey;

    $(miamiButton).on("click", function(event) {
        event.preventDefault();

    $.ajax({
        url: miaURL,
        method: "GET"
        })
        .then(function(response) {
            
            console.log(response);

            // transfer to the html
            $(displayCurrentCity).html("<h1>" + response.data[0].city_name + " Weather Details</h1>");
            $(currentTemp).text("Temperature: " + response.data[0].temp);
            $(currentWindSpeed).text("Wind Speed: " + response.data[0].wind_spd);
            $(currentHumidity).text("Humidity: " + response.data[0].rh);
            $(currentUvIndex).text("UV Index: " + response.data[0].uv);
            
        });
    });

    console.log(miamiButton);

// ======================================================================

// Seattle Weather Request 
var seattleCity = "Seattle, WA"
var seaURL = "https://api.weatherbit.io/v2.0/current?units=I&city="+ seattleCity + apiKey;

    $(seattleButton).on("click", function(event) {
        event.preventDefault();

    $.ajax({
        url: seaURL,
        method: "GET"
        })
        .then(function(response) {
            
            console.log(response);

            // transfer to the html
            $(displayCurrentCity).html("<h1>" + response.data[0].city_name + " Weather Details</h1>");
            $(currentTemp).text("Temperature: " + response.data[0].temp);
            $(currentWindSpeed).text("Wind Speed: " + response.data[0].wind_spd);
            $(currentHumidity).text("Humidity: " + response.data[0].rh);
            $(currentUvIndex).text("UV Index: " + response.data[0].uv);
            
        });
    });

    console.log(seattleButton);

// ======================================================================

// Atlanta Weather Request 
var atlantaCity = "Atlanta, GA"
var atlURL = "https://api.weatherbit.io/v2.0/current?units=I&city="+ atlantaCity + apiKey;

    $(atlantaButton).on("click", function(event) {
        event.preventDefault();

    $.ajax({
        url: atlURL,
        method: "GET"
        })
        .then(function(response) {
            
            console.log(response);

            // transfer to the html
            $(displayCurrentCity).html("<h1>" + response.data[0].city_name + " Weather Details</h1>");
            $(currentTemp).text("Temperature: " + response.data[0].temp);
            $(currentWindSpeed).text("Wind Speed: " + response.data[0].wind_spd);
            $(currentHumidity).text("Humidity: " + response.data[0].rh);
            $(currentUvIndex).text("UV Index: " + response.data[0].uv);
            
        });
    });

    console.log(atlantaButton);

// ======================================================================

// San Francisco Weather Request 
var sanfranciscoCity = "San Francisco, CA"
var sanfranURL = "https://api.weatherbit.io/v2.0/current?units=I&city="+ sanfranciscoCity + apiKey;

$(sanfranciscoButton).on("click", function(event) {
    event.preventDefault();

    $.ajax({
        url: sanfranURL,
        method: "GET"
        })
        .then(function(response) {
            
            console.log(response);

            // transfer to the html
            $(displayCurrentCity).html("<h1>" + response.data[0].city_name + " Weather Details</h1>");
            $(currentTemp).text("Temperature: " + response.data[0].temp);
            $(currentWindSpeed).text("Wind Speed: " + response.data[0].wind_spd);
            $(currentHumidity).text("Humidity: " + response.data[0].rh);
            $(currentUvIndex).text("UV Index: " + response.data[0].uv);
            
        });
    });

    console.log(sanfranciscoButton);

// =======================================================================


    // var weather = [""]

    // function weatherButton() {


    // }
// Adding Click Listener to the Buttons
// Dallas Button
// $(dallasButton).on("click", function(){
//     console.log(dallasButton);
// })

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


});