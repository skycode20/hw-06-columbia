# hw-06-columbia

# The Weather Dashboard Assignment

## Road to the Weather-Tron 2000 Functionality

- The objective of this assignment was to create a functioning weather application that shows the current weather and the 5-day forecast for the respective city. In addition to that the user should be able to search for a city and get the forecast for it.

<br><br>

<!-- Container Imgs -->
<p align="center">
<img src="Assets\img\basicframework1.jpg" alt="html code that generates the main body and search containers" width = 400px height = 400px>
<img src="Assets\img\basicframework2.jpg" alt="html code that generates the current city weather containers" width = 400px height = 400px>
<img src="Assets\img\basicframework3.jpg" alt="html code that generates the city button containers" width = 400px height = 400px>
<img src="Assets\img\basicframework4.jpg" alt="html code that generates the 5 day forecast containers" width = 400px height = 400px>
</p>

<br><br>

- The first thing I had to do was to create the basic framework layout for the page. Adding the header, the city buttons, the current weather container, the search input bar, search button, the 5 day forecast containers, and the footer. Once the general containers were set then I added some Bootstrap styling to them. I also added some the links to the external css and my script.js files.

<br><br>

<!-- Variables Img -->
<p align="center">
<img src="Assets\img\variables1.jpg" alt="The javascript code used to define variables" width = 400px height = 400px>
</p>

<br><br>

- Next I defined some variables especially the html elements so I can attach some listening events to the buttons via the onclick function.

- I used the Weatherbit API to furnish the site with the weather data. I made an ajax request for Dallas at first. Once I tested that it worked I repeated the same steps for each of the city buttons. I started out by hard coding everything but then shortened it into functions that can make the code look neater.

<br><br>

<!-- Weather Request Function Imgs -->
<p align="center">
<img src="Assets\img\weatherajax1.jpg" alt="ajax function for Dallas that requests the current weather and 5 day forecast" width = 400px height = 400px>
<img src="Assets\img\weatherfunction1.jpg" alt="weather function that traverses the object from the ajax call" width = 400px height = 400px>
</p>

<br><br>

- The user city search function allows the user to search a city and get its weather info. I used the same method with traversing the object as the static list of cities provided. I grabbed the user input and put it in local storage then once it was retrieved, pushed it into the ajax request.

<br><br>

<!-- User City Search Function Img -->
<p align="center">
<img src="Assets\img\searchcityfunction1.jpg" alt="function for the user city search function" width = 400px height = 400px>
</p>

<br><br>

- The UV Colorizer function was added to make sure the UV was color coded based on the uv index value to alert the user of what level of sun protection would be needed. An if statement contained within a function was used to create certain conditions to show the right color. 

<br><br>

<!-- UV Colorizer Function Img -->
<p align="center">
<img src="Assets\img\uvcolorizer1.jpg" alt="function to color the uv index based on its value" width = 400px height = 400px>
</p>

## Link to the Deployed App

<br>

- [Go to the Weather-Tron 2000](https://skycode20.github.io/weather-forecaster-app/)
