# Weather-Forecast-Web-App
A fully interactive weather application that fetches real-time data from four different APIs. Users can search any city or use their device’s location to get instant weather details, sunrise/sunset times, flags, timezone, and more.

Weather Forecast Web App (4 API Integrated)
A fully functional weather application built using JavaScript that integrates four APIs to deliver real-time weather, location, and timezone data. Users can search any city or use their device’s location to fetch detailed weather information instantly.

Features
City-based weather search
Geolocation-based weather detection
Integration with multiple APIs for comprehensive data

Displays:
Temperature (°C)
Min/Max temperature
Humidity
Wind speed (km/hr)
Weather description + icon
Sunrise & sunset times
Country name, flag, and calling code
Timezone
Full formatted location string
Custom weather icon mapping
Loading animation for geolocation fetch
Error handling for invalid inputs & failed requests

APIs Used
OpenWeather API
Fetches weather based on city
Fetches weather based on latitude/longitude
OpenCage Geocoding API
Reverse geocoding (lat/lon → address)
Country code, timezone, calling code, and sun timings
Flags API
Displays country flag via ISO country code
Geolocation API (Browser)
Retrieves the user’s current coordinates

How It Works
User enters a city name or clicks Get Location.
App fetches:
Weather data from OpenWeather
Location + metadata from OpenCage
Country flag from FlagsAPI
Data is processed, converted, and displayed dynamically on the UI.
Custom logic selects the appropriate weather icon depending on conditions.

Project Structure
/weather-app
│── index.html
│── style.css
│── script.js        
│── images/          # images/icons


Tech Stack
HTML
CSS
JavaScript
REST APIs
Fetch API
DOM Manipulation

#HERE'S THE WEBSITE WORKING IMAGES:
=> With user's geolocation
<img width="1919" height="873" alt="Screenshot 2025-12-09 214623" src="https://github.com/user-attachments/assets/3b3372c2-2589-49b1-b6d5-e0decfcc7c38" />
=> Using the searchBar
<img width="1919" height="869" alt="Screenshot 2025-12-09 214930" src="https://github.com/user-attachments/assets/71a8a84f-cd81-4b89-a531-25c75cdf0cfa" />

