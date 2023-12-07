// Article Content

// This Function comprises many smaller functions used to generate the elements/skeleton for the page
function generateHTMLframe() {
    let articles = [];
    
    const domArticle = {
        fName: 'Dom',
        lName: 'Lansdale',
        image: 'images/dom.gif',
        id: 'domAboutMe',
        email: 'D.Lansdale@uea.ac.uk'
    }

    const puttyArticle = {
        fName: 'Putty',
        lName: 'Putland',
        image: 'images/putty.gif',
        id: 'puttyAboutMe',
        email: 'P.Putland@uea.ac.uk'
    }

    const sunnyArticle = {
        fName: 'Sunny',
        lName: 'Ledger',
        image: 'images/sunny.gif',
        id: 'sunnyAboutMe',
        email: 'S.Ledger@uea.ac.uk'
    }

    articles.push(domArticle);
    articles.push(puttyArticle);
    articles.push(sunnyArticle);

    createHeading('main', 'heading1');
    const teamSection = createSection('main', 'teamInfoSection');
    for (let i = 0; i < articles.length; i++) {
        createTeamInfoArticle(teamSection, articles[i]);
    }

    // Creates the bottom half of the HTML Frame
    createHeading('main', 'heading2');
    const contactSection = createSection('main', 'contactSection');

    let newContactBox = createContactBox(contactSection, 'emailBox', 'Email Us!');
    for (let i = 0; i < articles.length; i++) {
        addContactInformation(newContactBox, articles[i]);
    }
    newContactBox = createContactBox(contactSection, 'newsletterBox', 'Get Our Newsletter!');
    addNewsletterInfo(newContactBox);

    
    
}

function addNewsletterInfo(location) {
    let newP = location.appendChild(document.createElement("p"));

    newP.append('Want the latest updates and information on how to get involved with your local policy makers for sustainability? Click ');

    newAnchor = newP.appendChild(document.createElement("a"));
    newAnchor.href = 'newsletter.html'
    newAnchor.innerHTML = 'here'

    newP.append(' to sign up today!!')
}

function addContactInformation(location, articleContent) {
    let newP = location.appendChild(document.createElement("p"));

    newP.innerHTML = `${articleContent.fName} - `;

    let newEmailFrame = newP.appendChild(document.createElement("a"));
    
    newEmailFrame.href = `mailto:${articleContent.email}`;
    newEmailFrame.innerHTML = `${articleContent.email}`;
}

function createContactBox(location, boxID, heading) {
    let newContactBox = location.appendChild(document.createElement("article"));

    newContactBox.classList.add('teamBox', 'contactBox');
    newContactBox.id = boxID;

    let newHeading = newContactBox.appendChild(document.createElement("h3"));
    newHeading.innerHTML= heading;

    return newContactBox;
}

function createSection(location, sectionID){
    let sectionParent = document.querySelector(location);
    let newSection = sectionParent.appendChild(document.createElement("section"));

    newSection.id = sectionID;

    return newSection;
    
}

function createHeading(location, headingID) {
    const mainElement = document.querySelector(location);
    let heading = mainElement.appendChild(document.createElement("h2"));
    heading.classList.add('sectionHeading', 'teamBox');
    heading.id = headingID;
}

function createTeamInfoArticle(location, articleInfo) {
    let article = location.appendChild(document.createElement("article"));
    article.classList.add('teamMember', 'teamBox')

    createImage(article, articleInfo.image);
    createNameHeading(article, articleInfo);
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
    newHeading.innerHTML = `${name.fName} ${name.lName}`;
}

function createAboutMe(location, aboutMeID) {
    let newParagraph = location.appendChild(document.createElement("p"))

    newParagraph.id = aboutMeID;
}

// POST Stuff

function onResponse(response) {
    return response.text();
}

function postHeading1(content) {
    const postTeamContent = document.querySelector('#heading1');
    postTeamContent.append(content);
}

function postHeading2(content) {
    const postTeamContent = document.querySelector('#heading2');
    postTeamContent.append(content);
}

function onPageReady(e) {

    generateHTMLframe();

    const pageData = {
        heading1: 'Our Goals',
        heading2: 'Contact Us'
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

    // fetch for Heading 1
    fetch('http://localhost:3000/teamHeading1', fetchOptions)
    .then(onResponse)
    .then(postHeading1);   
    
    // fetch for Heading 2
    fetch('http://localhost:3000/teamHeading2', fetchOptions)
    .then(onResponse)
    .then(postHeading2); 

}

window.addEventListener("DOMContentLoaded", onPageReady, false);
