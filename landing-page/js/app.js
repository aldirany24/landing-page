/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Define Global Variables
 * 
*/

const Navigation  = document.querySelector("#navbar__list");
const allSections = document.querySelectorAll("section");

/**
 * End Global Variables
 * Start Helper Functions
 * 
*/

const theViewport = function (elm) {
	let theHeight = elm.getBoundingClientRect();
	return (
        theHeight.top >= 0 &&
		theHeight.bottom <= (document.innerHeight || document.documentElement.clientHeight) 
    );
};

/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/
// build the nav

function nav() {
	allSections.forEach((elm) => {
        let Thelist = document.createElement("li");
	    Thelist.classList.add("navbar__list__item");

    	let sectionName = elm.getAttribute("data-nav");
    	let sectionId = elm.getAttribute("id");
        Thelist.innerHTML = `<a href="#${sectionId}" class="nav__hyperlink">${sectionName}</a>`;
        Navigation .appendChild(Thelist);
    });
}

// Add class 'active' to section when near top of viewport

function disActivation() {
    allSections.forEach((elm) => {
        elm.classList.remove("your-active-class");
    });
}


function active(section) {
    section.classList.add("your-active-class");

}


// Scroll to anchor ID using scrollTO event

const scrollSmoth = () => {
    const navLinks = document.querySelectorAll(".nav__hyperlink");

    for(let n in navLinks){
        if(navLinks.hasOwnProperty(n)){
            navLinks[n].addEventListener("click", e => {
                e.preventDefault();
                document.querySelector(navLinks[n].hash)
                .scrollIntoView({
                    behavior: "smooth"
                });
            });
        }
    }
}

scrollSmoth();









// function scrollToSectionOnClick() {
//     let navbarAnchors = document.querySelectorAll(".nav__hyperlink");
//     navbarAnchors.forEach((element) => {
//         element.addEventListener("click", function(event) {
//             event.preventDefault();
//             document.querySelector(element.getAttribute('href')).scrollIntoView({
//                 behavior: 'smooth'
//             });
//         });
//     });
// }


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

document.addEventListener('load', nav());

// Scroll to section on link click

// Set sections as active

document.addEventListener('scroll', function (event) {
    
    allSections.forEach((elm) => {
        if (theViewport(elm)) {
            disActivation();
            active(elm);
        }
    });
});
