<!-- Paste this entire block into README.md -->
<div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial; max-width: 900px; margin: 24px auto; line-height:1.55; color:#222;">
  <h1 style="margin-bottom:6px;">Weather-Forecast-Web-App</h1>
  <p style="margin-top:0;color:#555;">
    A fully interactive weather app that fetches real-time data from <strong>four APIs</strong>.
    Search any city or use your device location to get weather, sunrise/sunset, flags, timezone, and more.
  </p>

  <div style="display:flex; gap:8px; align-items:center; margin:10px 0 20px 0;">
    <img alt="JS" src="https://img.shields.io/badge/JavaScript-ES6-black?logo=javascript" style="height:20px;">
    <img alt="APIs" src="https://img.shields.io/badge/API%20Integrated-4-lightgrey?style=flat" style="height:20px;">
    <img alt="Status" src="https://img.shields.io/badge/Status-Active-brightgreen" style="height:20px;">
  </div>

  <h2 style="margin-top:18px;">Overview</h2>
  <p style="color:#444;">Built with <strong>HTML, CSS, and Vanilla JavaScript</strong>. Demonstrates API chaining, async handling, DOM updates and small UX touches (loading state, error messages).</p>

  <h2 style="margin-top:18px;">Features</h2>
  <ul style="margin:8px 0 18px 20px; color:#333;">
    <li>City-based weather search</li>
    <li>Geolocation-based weather detection</li>
    <li>Displays:
      <ul style="margin:6px 0 6px 18px;">
        <li>Temperature (°C), min/max</li>
        <li>Humidity</li>
        <li>Wind speed (km/hr)</li>
        <li>Weather description + icon</li>
        <li>Sunrise &amp; sunset (local time)</li>
        <li>Country name, ISO code, flag &amp; calling code</li>
        <li>Timezone &amp; formatted address</li>
      </ul>
    </li>
    <li>Custom weather icon mapping</li>
    <li>Loading animation during geolocation calls</li>
    <li>Robust error handling for invalid input & failed API calls</li>
  </ul>

  <h2 style="margin-top:12px;">APIs Used</h2>
  <table style="border-collapse:collapse; width:100%; max-width:760px;">
    <tr>
      <td style="padding:8px 10px; border:1px solid #eee; width:220px; background:#fafafa;"><strong>OpenWeather</strong></td>
      <td style="padding:8px 10px; border:1px solid #eee;">Weather by city and by lat/lon</td>
    </tr>
    <tr>
      <td style="padding:8px 10px; border:1px solid #eee; background:#fafafa;"><strong>OpenCage</strong></td>
      <td style="padding:8px 10px; border:1px solid #eee;">Reverse geocoding → timezone, calling code, sun timings</td>
    </tr>
    <tr>
      <td style="padding:8px 10px; border:1px solid #eee; background:#fafafa;"><strong>FlagsAPI</strong></td>
      <td style="padding:8px 10px; border:1px solid #eee;">Country flag via ISO code</td>
    </tr>
    <tr>
      <td style="padding:8px 10px; border:1px solid #eee; background:#fafafa;"><strong>Geolocation API</strong></td>
      <td style="padding:8px 10px; border:1px solid #eee;">Browser geolocation for lat/lon</td>
    </tr>
  </table>

  <h2 style="margin-top:18px;">How it works</h2>
  <ol style="margin:8px 0 18px 20px;">
    <li>Enter a city or click <strong>Get Location</strong>.</li>
    <li>App fetches weather from OpenWeather and location metadata from OpenCage; flags from FlagsAPI.</li>
    <li>Process the JSON responses, convert temps &amp; times, and update the DOM.</li>
    <li>Custom mapping picks the right weather icon to display.</li>
  </ol>

  <h2 style="margin-top:18px;">Project Structure</h2>
  <pre style="background:#f7f7f8; padding:10px 12px; border-radius:6px; color:#222; overflow:auto;">
/weather-app
│── index.html
│── style.css
│── script.js
│── images/          # icons, screenshots
│── README.md
  </pre>

  <h2 style="margin-top:18px;">Tech Stack</h2>
  <p style="margin:6px 0 18px 0;">HTML · CSS · JavaScript · Fetch API · REST APIs · DOM Manipulation</p>

  <h2 style="margin-top:18px;">Screenshots</h2>
  <div style="display:flex;flex-direction:column;gap:14px; align-items:flex-start;">
    <div>
      <strong>Using user geolocation</strong>
      <div style="margin-top:6px;">
        <img alt="geo" src="https://github.com/user-attachments/assets/3b3372c2-2589-49b1-b6d5-e0decfcc7c38" style="max-width:100%; border:1px solid #eee; border-radius:6px;">
      </div>
    </div>

    <div>
      <strong>Using the search bar</strong>
      <div style="margin-top:6px;">
        <img alt="search" src="https://github.com/user-attachments/assets/71a8a84f-cd81-4b89-a531-25c75cdf0cfa" style="max-width:100%; border:1px solid #eee; border-radius:6px;">
      </div>
    </div>
  </div>

  <h2 style="margin-top:18px;">Attribution</h2>
  <ul style="margin:8px 0 18px 20px; color:#333;">
    <li>Weather data: <a href="https://openweathermap.org">OpenWeather</a></li>
    <li>Geocoding: <a href="https://opencagedata.com">OpenCage Data</a></li>
    <li>Flags: <a href="https://flagsapi.com">FlagsAPI</a></li>
    <li>Icons: images collected from the web (used for educational, non-commercial purposes)</li>
  </ul>

  <h2 style="margin-top:18px;">License</h2>
  <p style="margin:6px 0 18px 0; color:#444;">No license file included. Code is shown for portfolio/educational purposes only.</p>

  <hr style="border:none; height:1px; background:#eee; margin:20px 0;">

  <p style="font-size:13px;color:#666;">Want this prettier or converted into a GitHub Pages site (full HTML/CSS + JS)? I can help convert it to a static demo page.</p>
</div>
