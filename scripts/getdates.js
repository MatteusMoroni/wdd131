
let currentYear = new Date().getFullYear();

let lastModified = document.lastModified;

// Output to footer paragraphs
document.getElementById("copyright").innerHTML = `&copy ${currentYear} - Matteus Moroni - Brazil`;
document.getElementById("lastModified").innerHTML = `Last modified: ${lastModified}`;