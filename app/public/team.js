let domContent = [];

domContent.push("Our Team");

function onResponse(response) {
    console.log(response.text())
    return response.text();
}

function onTextReady(content) {
    const postTeamContent = document.querySelector('main')
    postTeamContent.appendChild(content)
}

function onPageReady(e) {

    console.log("real")

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

    console.log(fetchOptions);
    fetch('http://localhost:3000/team', fetchOptions)
    .then(onResponse)
    .then(onTextReady)

    console.log("real")

}

onPageReady();
