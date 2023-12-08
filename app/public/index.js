// Use the fetch() API to get the "index.json" file
const response = await fetch("index.json");

// Interpret the response as a JSON object
const content = await response.json();

// 
const container = document.querySelector("#home-content");



// Loop through the content creating each tag and setting the inner text

for (const row of content) {
    let element = document.createElement(row.tagName);
    element.innerText = row.innerText;
    if (row.href) {
        element.href = row.href;
    }
    container.appendChild(element);
}