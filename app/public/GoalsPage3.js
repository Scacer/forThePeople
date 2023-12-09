let newImage = document.createElement("img")
newImage.id = "MainImage"
newImage.src = "images/HealthMap.jpeg"
let navElement = document.getElementById("loadcontent");
navElement.parentNode.insertBefore(newImage, navElement);


 let newSection = document.createElement("section");
 document.getElementById("loadcontent").appendChild(newSection);
 newSection.id = "FirstSection"


 let newSection1 = document.createElement("section");
 document.getElementById("loadcontent").appendChild(newSection1);
 newSection1.id = "NoBorder"

 
 let newSection2 = document.createElement("section");
 document.getElementById("loadcontent").appendChild(newSection2);
 newSection2.id = "TextWithImage"

//////////// LOADING FIRST SECTION ELEMENT /////////////////////////////////////////////////////////

class ImageClicker2{
    constructor(img,header,text){
        this.img = img;
        this.header = header;
        this.text = text;
    
        
    }
}
const image6 = new ImageClicker2("images/Health1Image.jpeg","Unsafe water usage","very poor housing conditions leading to a poor standard of living along with use of kerosne makes it a high fire risk")
const image7 = new ImageClicker2("images/Health2Image.webp","Awful housing conditions","very poor housing conditions leading to a poor standard of living along with use of kerosne makes it a high fire risk")

const ImageClickers2 = [];

ImageClickers2.push(image6,image7);

console.log(ImageClickers2);


const ArticleSelector2 = document.querySelector("#FirstSection");

function loadcontent2(){
    let displayItem2 = ImageClickers2.map( (item2) => {
        return `
        <article class="ImageText">
            <h3> ${item2.header} </h3>
            <img src="${item2.img}">
            <p> ${item2.text}</p>
        </article>
    
        `;
    })

    displayItem2 = displayItem2.join("");
    console.log(displayItem2);
    ArticleSelector2.innerHTML = displayItem2;
}

window.addEventListener("DOMContentLoaded", loadcontent2, false);

////////////////////////////////////////////////////////////////////////////////////////////////////


let newHeaderTwo = document.createElement("h2");
newHeaderTwo.textContent = "How Poverty Is affecting Children"
newHeaderTwo.id = "AlignH2Element"
let sectionElement1 = document.getElementById("NoBorder");
sectionElement1.parentNode.insertBefore(newHeaderTwo, sectionElement1);


//////////////// LOADING SECOND SECTION ELEMENT /////////////////////////////////////////////////////

class ImageClicker1{
    constructor(img,header,text,text2,text3){
        this.img = img;
        this.header = header;
        this.text = text;
        this.text2 = text2;
        this.text3 = text3;
        
    }
}
const image4 = new ImageClicker1("images/Health3Image.jpeg","Unsafe Cooking methods","this is just used for testing as it need to test it","this is just used for testing as it need to test it","this is just used for testing as it need to test it")
const image5 = new ImageClicker1("images/Health4Image.jpeg","SafeWater Drinking","this is just used for testing as it need to test it","this is just used for testing as it need to test it","this is just used for testing as it need to test it")

const ImageClickers1 = [];

ImageClickers1.push(image4,image5);

console.log(ImageClickers1);


const ArticleSelector1 = document.querySelector("#NoBorder");

function loadcontent1(){
    let displayItem1 = ImageClickers1.map( (item1) => {
        return `
        <article class="TextBorder">
        <div id="BodyImg">
            <h2 id="AlignTitleInBox">${item1.header}</h2>
            <ol id="list">
                <li> ${item1.text}</li>
                <li> ${item1.text2}</li>
                <li> ${item1.text3}</li>
            </ol>
            <img src="${item1.img}" id="imgNextText">
        </div>
        </article>

    
        `;
    })

    displayItem1 = displayItem1.join("");
    console.log(displayItem1);
    ArticleSelector1.innerHTML = displayItem1;
}




window.addEventListener("DOMContentLoaded", loadcontent1, false);


//////////////////////////////////////////////////////////////////////////////////////////

let newHeaderThree = document.createElement("h2");
newHeaderThree.textContent = "Clickable Images"
newHeaderThree.id = "AlignH2Element"
let sectionElement = document.getElementById("TextWithImage");
sectionElement.parentNode.insertBefore(newHeaderThree, sectionElement);

// LOADING CLICKABLE IMAGES ////////////////////////////////////////////////////////////////////



class ImageClicker{
    constructor(id,header,img,text){
        this.id = id;
        this.header = header;
        this.img = img;
        this.text = text;
    }
}
const image1 = new ImageClicker(0,"Click below:", "images/EducationTeaching.jpeg", "this is just used for testing as it need to test it")
const image2 = new ImageClicker(1,"Click below:", "images/ImprovedFarmingPractises.jpeg", "this is just used for testing as it need to test it")
const image3 = new ImageClicker(2,"Click below:", "images/MedicineEnhancements.jpeg", "this is just used for testing as it need to test it")

const ImageClickers = [];

ImageClickers.push(image1,image2,image3);

console.log(ImageClickers);


const ArticleSelector = document.querySelector("#TextWithImage");

function loadcontent(){
    let displayItem = ImageClickers.map( (item) => {
        return `

        <article class ="ImageDropDown">    
            <h4>${item.header} </h4>
            <img src=${item.img} id=${item.id} />
            <p class = "ImageTextHidden" > ${item.text} </p>
        </article>
        `;
    })

    displayItem = displayItem.join("");
    console.log(displayItem);
    ArticleSelector.innerHTML = displayItem;
    ArticleSelector.addEventListener("click", toggleImage);
}



function toggleImage(e) {
    if (e.currentTarget != e.target){
        const targetID = e.target.id;
        const item = ImageClickers.find(i => i.id == targetID)
        if (typeof item != "undefined"){
            let ImageShow = document.querySelectorAll('.ImageTextHidden');
            ImageShow.forEach((ArraySelector,i) => {
                if (i == e.target.id){
                    ArraySelector.classList.toggle('ImageTextShow');
                }
            })


        }
    }
}


window.addEventListener("DOMContentLoaded", loadcontent, false);

//////////////////////////////////////////////////////////////////////////////////////////////////