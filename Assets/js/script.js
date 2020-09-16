$('document').ready(function(){

// Variables Defined

// Reference to the DOM Elements
// Search Bar Variables
var searchButton = $("#search-button");
var userInputField = $("#user-search-input");

// Current Weather Display Variables
var displayCurrentCity = $("#display-city");
var currentTemp = $("#display-temp");
var currentHumidity = $("#display-humidity");
var currentWindSpeed = $("#display-wind-speed");
var currentUvIndex = $("#display-uv-index");

// City Buttons Variables
var dallasButton = $("#dallas");
var chicagoButton = $("#chicago");
var newyorkButton = $("#new-york");
var miamiButton = $("#miami");
var sanfranciscoButton = $("#san-francisco");
var seattleButton = $("#seattle");
var atlantaButton = $("#atlanta");

// 5 Day Forecast Container Variables
var forecastDayOneDate = $("#day-one-date");
var forecastDayOneTemp = $("#day-one-temp");
var forecastDayOneHumidity = $("#day-one-humidity");

var forecastDayTwo = $("#day-two-forecast");
var forecastDayThree = $("#day-three-forecast");
var forecastDayFour = $("#day-four-forecast");
var forecastDayFive = $("#day-five-forecast");

// Weatherbit API Key
var apiKey = "&key=90e9e44deac84fb4a9f46233e3d5e501";


// // Weather API - 5 Day Forecast
// var fiveDayCity = "New York, NY";
// var fiveDayURL = "https://api.weatherbit.io/v2.0/forecast/daily?units=I&days=6&city=" + fiveDayCity + apiKey;

// $.ajax(fiveDayURL).done(function (response) {
// 	console.log(response);
// });

// ======================================================================

// User Searched City 

// var userSearchCity = $("#movie-input").val().trim();
// var userSearchCity = $(userInputField).val().trim();
// var citiesSearched = [""];
// var userURL = "https://api.weatherbit.io/v2.0/current?units=I&city="+ citiesSearched + apiKey;

//       // This function handles events where one button is clicked
//     $(searchButton).on("click", function(event) {
//         event.preventDefault();

//         // This line grabs the input from the textbox
//         // var userSearchCity = $(userInputField).val().trim();
//         // userSearchCity.text(JSON.stringify()).push();
        
        
//         citiesSearched.push(userSearchCity);
//         console.log(citiesSearched);

    
//         });
//         console.log(searchButton);

// $.ajax({
//       url: userURL,
//       method: "GET"
//     })
//     .then(function(response) {
//         // console.log(apiURL);
//         console.log(response);
//     });
// // ======================================================================
    // Current Weather Info Function
    function showCurrentWeatherInfo(response) {
                
        console.log(response);

        // transfer to the html
        $(displayCurrentCity).html("<h1>" + response.city_name + " (" + response.data[0].datetime + ") " );
        $(currentTemp).text("Temperature: " + response.data[0].temp);
        $(currentWindSpeed).text("Wind Speed: " + response.data[0].wind_spd);
        $(currentHumidity).text("Humidity: " + response.data[0].rh);
        $(currentUvIndex).text("UV Index: " + response.data[0].uv);
        
    };

    // Weather Forecast Functions
    function displayForecastDay1(response) {
                
        console.log(response);

        // transfer to the html
        $(forecastDayOneDate).html("<h3>" +  " (" + response.data[1].datetime + ")</h3>" );
        $(forecastDayOneTemp).text("Temperature: " + response.data[1].temp);
        // $(currentWindSpeed).text("Wind Speed: " + response.data[0].wind_spd);
        $(forecastDayOneHumidity).text("Humidity: " + response.data[1].rh);
        // $(currentUvIndex).text("UV Index: " + response.data[0].uv);
        
    };

// ======================================================================

// Dallas Weather Request 
var dallasCity = "Dallas, TX"
var dalURL = "https://api.weatherbit.io/v2.0/forecast/daily?units=I&days=6&city="+ dallasCity + apiKey;

    $(dallasButton).on("click", function(event) {
        event.preventDefault();

        $.ajax({
            url: dalURL,
            method: "GET"
        })
        .then(showCurrentWeatherInfo);

        $.ajax({
            url: dalURL,
            method: "GET"
        })
        .then(displayForecastDay1);
            
        });
    

    console.log(dallasButton);
// ======================================================================

// Chicago Weather Request 
var chicagoCity = "Chicago, IL"
var chiURL = "https://api.weatherbit.io/v2.0/forecast/daily?units=I&days=6&city="+ chicagoCity + apiKey;

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
var nycURL = "https://api.weatherbit.io/v2.0/forecast/daily?units=I&days=6&city="+ newyorkCity + apiKey;

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
var miaURL = "https://api.weatherbit.io/v2.0/forecast/daily?units=I&days=6&city="+ miamiCity + apiKey;

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
var seaURL = "https://api.weatherbit.io/v2.0/forecast/daily?units=I&days=6&city="+ seattleCity + apiKey;

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
var atlURL = "https://api.weatherbit.io/v2.0/forecast/daily?units=I&days=6&city="+ atlantaCity + apiKey;

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
var sanfranURL = "https://api.weatherbit.io/v2.0/forecast/daily?units=I&days=6&city="+ sanfranciscoCity + apiKey;

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