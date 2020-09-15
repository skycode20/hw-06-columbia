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
    // Current Weather Info Function
    function showCurrentWeatherInfo(response) {
                
        console.log(response);

        // transfer to the html
        $(displayCurrentCity).html("<h1>" + response.data[0].city_name + " Weather Details</h1>");
        $(currentTemp).text("Temperature: " + response.data[0].temp);
        $(currentWindSpeed).text("Wind Speed: " + response.data[0].wind_spd);
        $(currentHumidity).text("Humidity: " + response.data[0].rh);
        $(currentUvIndex).text("UV Index: " + response.data[0].uv);
        
    };

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
        .then(showCurrentWeatherInfo);
            
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
        .then(showCurrentWeatherInfo);
            
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
        .then(showCurrentWeatherInfo);
            
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
        .then(showCurrentWeatherInfo);
            
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
        .then(showCurrentWeatherInfo);
            
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
        .then(showCurrentWeatherInfo);
            
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
        .then(showCurrentWeatherInfo);
            
        });

    console.log(sanfranciscoButton);

// =======================================================================



});