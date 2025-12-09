// import DOMPurify from  'dompurify';
const searchButton = document.getElementById("searchButton");
const searchInput = document.getElementById("searchInput");
const apiKEY = "b2d149978dce29170ca17a41bf5e2c35"; //Open-weather API key
const apiKey = `84b56e1dbc7049918d28f7460f1de8d2`; //Open-Cage API key
const API = `https://api.opencagedata.com/geocode/v1/json?q=` //Open-Cage API Url
let countryName;

//*Calling API Open-Weather API when clicked or pressed Enter key
searchButton.addEventListener("click", () => {
    countryName = searchInput.value;
    weather(countryName,apiKEY);
});
document.body.addEventListener("keydown", (e) => {
    if(e.key.toLowerCase() == "enter"){
        countryName = searchInput.value;
        weather(countryName, apiKEY);
    } 
})

//! Openweather API calling function
async function weather(countryName,apiKEY) {
    try {
        const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${countryName}&appid=${apiKEY}`).then(res => res.json());
            if(res.cod == 404)      alert('Please enter correct cityName!!');
            else if(res.cod == 400) alert('Please enter Something!!');
            else if(res.cod == 200){
            const {weather,main,wind,name} = res; //Extracting values
            weatherDisplay(weather,main,wind,name); //Passing values to Display function
            } 
    } catch (error) {
        console.log(error.message);
    }
}
//! Displaying function for Openweather
function weatherDisplay(weather,main,wind,name){
    //Extracting  usable data
    const {temp,temp_min,temp_max,humidity} = main; 
    const weathericon = weather[0].main;
    const weatherDiscription = weather[0].description;
    
    //Getting code to display weather image from API
    const answer = weatherIconId(weathericon,weatherDiscription);
    let descCode = answer;

    // Displaying weather image with Openweather weather icon API
    const weatherImage = document.getElementById("weatherImage");
    document.querySelectorAll('.last-img').forEach(c => c.style.display = "block");

    weatherImage.style.display = "block";
    weatherImage.src = `https://openweathermap.org/img/wn/${descCode}@2x.png`

    //Displaying other data
    document.getElementById("weatherInfo").innerText = weathericon;
    document.getElementById("windSpeed").innerText = `${wind.speed*3.6} km/hr`;
    document.getElementById("humidityLevel").innerText = `${humidity}%`;
    document.getElementById("cityCname").innerText = name;
    document.getElementById("temperature").innerText = `Temperature: ${(temp-273.15).toFixed(2)}°C`;
    document.getElementById("minTemp").innerText = `Minimum Temp: ${(temp_min-273.15).toFixed(2)}°C`;
    document.getElementById("maxTemp").innerText = `Maximum Temp: ${(temp_max-273.15).toFixed(2)}°C`;
}
//! Getting weather icon code
function weatherIconId(weathericon,weatherDiscription){
    const mist = ['Mist','Smoke','Haze','Dust','Fog','Sand','Dust','Ash','Squall','Tornado'];
// clear sky
    if(weathericon.toLowerCase() == 'clear sky' || weathericon.toLowerCase() == 'clear') return '01d';
    // clouds
    else if(weathericon.toLowerCase() == 'clouds'){
        if(weatherDiscription.toLowerCase() == 'few clouds') return '02d';
        else if (weatherDiscription.toLowerCase() == 'scattered clouds') return '03d';
        else if (weatherDiscription.toLowerCase() == 'broken clouds' || weatherDiscription.toLowerCase() == 'overcast clouds') return '04d';
        } 
    // drizzle
    else if(weathericon.toLowerCase() == 'drizzle') return '09d';
    // rain
    else if(weathericon.toLowerCase() == 'rain'){
        if(weatherDiscription.toLowerCase() == 'freezing rain') return '13d';
        return '10d';
    }
    // thunderstorm
    else if(weathericon.toLowerCase() == 'thunderstorm') return '11d';
    else{
        if(mist.includes(weathericon)) return '50d';
    }
}

//* Getting location when clicked on button
document.getElementById("getLocationBtn").addEventListener("click", () => {
if (navigator.geolocation) {
navigator.geolocation.getCurrentPosition(function(position) 
    {
    // Getting lat & long
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;

    //Getting image element from html
    const fgimg = document.getElementById("fg");
    const sunimage = document.getElementsByClassName("sunimage");

    //Starting Loading gif
    const loading = document.querySelector(".loading");
    loading.style.display = "block";
    
    //Calling openweather API of lat & lon version
    const weatherCoodsAPI = 'https://api.openweathermap.org/data/2.5/weather?'
    weatherCoods(latitude,longitude,weatherCoodsAPI,apiKEY);

    //Calling opencage API
    opencage(latitude,longitude,fgimg,sunimage,loading);
    },
    function(error) 
    {
        switch (error.code) 
            {
            case error.PERMISSION_DENIED:
            console.error("User denied the request for Geolocation.");
            break;
            case error.POSITION_UNAVAILABLE:
            console.error("Location information is unavailable.");
            break;
            case error.TIMEOUT:
            console.error("The request to get user location timed out.");
            break;
            case error.UNKNOWN_ERROR:
            console.error("An unknown error occurred.");
            break;
            }
    },
    {
      enableHighAccuracy: true, // Request more precise location
      maximumAge: 0 // Don't use a cached position
    }
);
} else {
    console.error("Geolocation is not supported by this browser.");
}
})

//! Openweather API lat&long version calling function
//* Reusing the Displaying function for Openweather
async function weatherCoods(latitude,longitude,weatherCoodsAPI,apiKEY) {
    try {
        const res = await fetch(`${weatherCoodsAPI}lat=${latitude}&lon=${longitude}&appid=${apiKEY}`).then(res => res.json());
        if(res.cod == 404)      alert('Please enter correct cityName!!');
        else if(res.cod == 400) alert('Please enter Something!!');
        else if(res.cod == 200){
            console.log(res);
            const {weather,main,wind,name} = res; //Extracting values
            weatherDisplay(weather,main,wind,name); //Passing values to Display function
        }
    } catch (error) {
        console.log(error.message);
    }
}

//! Opencage API calling function
async function opencage(latitude,longitude,fgimg,sunimage,loading) {
    try{
    const cleanResponse = await fetch(`${API}${latitude}%2C+${longitude}&key=${apiKey}`).then(res => res.json());
    if(cleanResponse.status.code == 200){
        // Extracting usefull data
        const {annotations,formatted} = cleanResponse.results[0];
        const {DMS,callingcode,sun,timezone} = annotations;
        const {components} = cleanResponse.results[0];
        const lat = DMS.lat;
        const long = DMS.lng;
        const {rise,set} = sun;
        const {name} = timezone;
        //* Calling Displaying function for Openweather
        displayFirstsection(lat,long,callingcode,rise,set,name,formatted,components,fgimg,sunimage,loading);
    } 
    else if(cleanResponse.status.code == 400) console.error('not a valid format.');
    else console.error('Sorry we could not fetch the data');
    }
    catch(error){
        console.error(error.message);
    }
}


//! Displaying function for OpenCage
function displayFirstsection(lat,long,callingcode,rise,set,name,formatted,components,fgimg,sunimage,loading){
//extracting data
rise = rise.civil;
set = set.civil;
const flagName = components["ISO_3166-1_alpha-2"];

const finalRise = new Date(rise * 1000);
const finalSet = new Date(set * 1000);

// Stoping loading gif
loading.style.display = "none";

//Displaying data
document.getElementById("showlatlong").innerText = `Latitude: ${lat} Longitude:${long}`;
document.getElementById("callcode").innerText = `Calling Code:${callingcode}`;
document.querySelector(".timezone").innerText = `${name}`;
document.getElementById("add").innerText = `${formatted}`;
document.querySelector(".country").innerText = `${flagName}`;

//Extracting sun element and displaying data
let sunimageArr = Array.from(sunimage);
sunimageArr.forEach(e => e.style.display = "block")
document.getElementById("rise").innerText = `Sunrise:${finalRise.toLocaleTimeString()}`;
document.getElementById("set").innerText = `Sunset:${finalSet.toLocaleTimeString()}`;

//Displaying country flag with flags API
fgimg.style.display = "block";
fgimg.src = `https://flagsapi.com/${flagName}/shiny/64.png`
}
