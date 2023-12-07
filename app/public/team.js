// Article Content

function generateHTMLframe() {
    let articles = [];
    
    const domArticle = {
        name: 'Dom Lansdale',
        image: 'images/dom.gif',
        id: 'domAboutMe'
    }

    const puttyArticle = {
        name: 'Putty Putland',
        image: 'images/putty.gif',
        id: 'puttyAboutMe'
    }

    const sunnyArticle = {
        name: 'Sunny Ledger',
        image: 'images/sunny.gif',
        id: 'sunnyAboutMe'
    }

    articles.push(domArticle);
    articles.push(puttyArticle);
    articles.push(sunnyArticle);

    createHeading('main', 'heading1');
    createSection('main', 'teamInfoSection');
    for (let i = 0; i < articles.length; i++) {
        createTeamInfoArticle('#teamInfoSection', articles[i]);
    }
    createHeading('main', 'heading2')
    
    
}

function createSection(location, sectionID){
    let sectionParent = document.querySelector(location);
    let newSection = sectionParent.appendChild(document.createElement("section"));

    newSection.id = sectionID;
    
}

function createHeading(location, headingID) {
    const mainElement = document.querySelector(location);
    let heading = mainElement.appendChild(document.createElement("h2"));
    heading.classList.add('sectionHeading', 'teamBox');
    heading.id = headingID;
}

function createTeamInfoArticle(location, articleInfo) {
    const teamSection = document.querySelector(location);
    let article = teamSection.appendChild(document.createElement("article"));
    article.classList.add('teamMember', 'teamBox')

    createImage(article, articleInfo.image);
    createNameHeading(article, articleInfo.name);
    createAboutMe(article, articleInfo.id);
    
}

function createImage(location, imageURL) {
    let newImg = location.appendChild(document.createElement("img"));

    newImg.classList.add('teamImage')
    newImg.src = imageURL;

}

function createNameHeading(location, name) {
    let newHeading = location.appendChild(document.createElement("h3"))

    newHeading.classList.add('teamName')
    newHeading.innerHTML = name;
}

function createAboutMe(location, aboutMeID) {
    let newParagraph = location.appendChild(document.createElement("p"))

    newParagraph.id = aboutMeID;
}

// POST Stuff

function onResponse(response) {
    console.log(response.JSON());
    return response.text();
}

function onTextReady(content) {
    const postTeamContent = document.querySelector('#heading1');
    postTeamContent.append(content.heading1);
}

function onPageReady(e) {

    generateHTMLframe();

    const pageData = {
        heading1: 'Our Goals'
    };

    const serializedTeamContent = JSON.stringify(pageData);

    const fetchOptions = {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: serializedTeamContent
    };

    fetch('http://localhost:3000/teamPage', fetchOptions)
    .then(onResponse)
    .then(onTextReady);    

}

window.addEventListener("DOMContentLoaded", onPageReady, false);
