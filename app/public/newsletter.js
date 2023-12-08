// Use the fetch() API to get the "newsletter.json" file
const response = await fetch("newsletter.json");

// Interpret the response as a JSON object
const page = await response.json();

// Get the content area 
const container = document.querySelector("#content-newsletter");

// Set the inner HTML of the content area to the form HTML
container.innerHTML = page.content;