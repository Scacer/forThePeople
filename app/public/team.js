let domContent = [];

domContent.push("Our Team");

function onResponse(response) {
    console.log(respone.text())
    return response.text();
}

function onTextReady(content) {
    const postTeamContent = document.querySelector('main')
    postTeamContent.append(content)
}

function onPageReady(e) {

    const pageData = {
        heading1: domContent[0]
    };

    const serializedTeamContent = JSON.stringify(pageData);

    const fetchOptions = {
        method: `POST`,
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: serializedTeamContent
    }

    fetch('http://localhost:3000/teamInfo', fetchOptions)
    .then(onResponse)
    .then(onTextReady)

}

window.addEventListener("DOMContentLoaded", onPageReady, false);
