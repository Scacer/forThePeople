function toggleGoalNav() {
    let links = document.querySelector('.subNav');
    links.classList.toggle('showSubNav')
}

let goalsNav = document.querySelector('#goalsNav');
goalsNav.addEventListener("click", toggleGoalNav);