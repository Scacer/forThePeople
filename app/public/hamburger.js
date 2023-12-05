function toggleNav() {
    let links = [document.querySelector('.mainNav'), document.querySelector('.subNav')]
    for (const link of links){
        link.classList.toggle('showNav');   
    }
}

let hamburger = document.querySelector('#hamburger');
hamburger.addEventListener("click", toggleNav)