// --- Static Data for Wind Chill Calculation ---
// Use the same values you put in your HTML for Temperature and Wind
const temperature = 10; // Celsius
const windSpeed = 5; // km/h

// --- Dynamic Footer Content ---
// 1. Get the current year
const currentYear = new Date().getFullYear();
// 2. Get the last modified date of the document
const lastModified = document.lastModified;

// 3. Set the content of the corresponding span elements
document.getElementById('current-year').textContent = currentYear;
document.getElementById('last-modified').textContent = `Last Modification: ${lastModified}`;


// --- Wind Chill Calculation Logic ---
// Function to calculate wind chill based on metric units (Celsius, km/h)
function calculateWindChill(temp, speed) {
    // Formula: 13.12 + 0.6215*T - 11.37*V^0.16 + 0.3965*T*V^0.16
    return 13.12 + (0.6215 * temp) - (11.37 * Math.pow(speed, 0.16)) + (0.3965 * temp * Math.pow(speed, 0.16));

    /* For Imperial units (Fahrenheit, mph), use this formula:
       35.74 + 0.6215*T - 35.75*V^0.16 + 0.4275*T*V^0.16
    */
}

// Check if the conditions for wind chill calculation are met
if (temperature <= 10 && windSpeed > 4.8) {
    // Calculate the wind chill
    const windChillValue = calculateWindChill(temperature, windSpeed);
    
    // Display the result, rounded to one decimal place
    document.getElementById('weather-windchill').textContent = `${windChillValue.toFixed(1)}°C`;
} else {
    // If conditions are not met, display "N/A"
    document.getElementById('weather-windchill').textContent = 'N/A';
}