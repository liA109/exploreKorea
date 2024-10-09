//   *************** SHOW MENU ***************
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

//   *************** MENU SHOW ***************
// Validate if constanst exists
// If clicked, it shows the show-menu class with a top:0; overriding the .nav-menu{top: -100%};
if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
}

//   *************** MENU HIDDEN ***************
// Validate if constanst exists
if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
}

//   *************** REMOVE MENU MOBILE ***************
const navLink = document.querySelectorAll('.nav__link')

const linkAction = () =>{
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))


// *************** ADD BLUR TO HEADER ***************
const blurHeader = () =>{
    const header = document.getElementById('header')
    // When the scroll is greater than 50 viewport innerHeight, add the blur-header class
    this.scrollY >= 50 ? header.classList.add('blur-header')
                       : header.classList.remove('blur-header')
}
window.addEventListener('scroll', blurHeader)


// *************** SHOW SCROLL-UP ***************
const scrollUp = () =>{
    const scrollUp = document.getElementById('scroll-up')
    // When the scroll is higher than 350 viewport innerHeight, add the show-scroll class to the a tag with the scrollUp class
    this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
                        : scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)


// *************** SCROLL SECTIONS ACTIVE LINK ***************
const sections = document.querySelectorAll('section[id]')

const scrollActive = () =>{
    const scrollDown = window.scrollY

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight,
        sectionTop = current.offsetTop - 58,
        sectionId = current.getAttribute('id'),
        sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')

        if(scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight){
            sectionsClass.classList.add('active-link')
        }else{
            sectionsClass.classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)


// *************** SCROLL REVEAL ANIMATION ***************
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 3000,
    delay: 400,
    // reset: true ANIMATIONS REPEAT
})
sr.reveal('.home__data, .explore__data, .explore__user, .footer__container, .section__title')
sr.reveal('.home__card', {delay: 600, distance: '1000px', interval: 100})
sr.reveal('.about__data, .join__image', {origin: 'right'})
sr.reveal('.about__image, .join__data', {origin: 'left'})
// sr.reveal('.popular__card', {interval: 100})



// *************** MODAL POPUP ***************
const openBtns = document.querySelectorAll("#startJourney, #exploreTravel, #footerLink, #homeImages, #card__button");
const closeBtn = document.getElementById("closeModal");
const modal = document.getElementById("modal");

// Add event listeners to each open button
openBtns.forEach((btn) => {
    btn.addEventListener("click", (event) => {
        event.preventDefault(); // Prevents any default behavior
        modal.classList.add("open");
    });
});

closeBtn.addEventListener("click", () => {
    modal.classList.remove("open");
});

const emailInput = document.querySelector(".join__input");
const emailError = document.getElementById("emailError");

// Hide the error message initially
emailError.style.display = "none";

// Subscribe button functionality
const subscribe = document.getElementById("subscribe");
subscribe.addEventListener("click", (event) => {
    event.preventDefault(); // Prevent default form submission
    const emailValue = emailInput.value.trim();

    if (emailValue === "") {
        emailError.style.display = "block"; // Show error message
    } else {
        emailError.style.display = "none"; // Hide error message
        modal.classList.add("open");
    }
});



// *************** POPULAR IMAGE SLIDER ***************
let scrollContainer = document.querySelector(".gallery");
let backBtn = document.getElementById("backBtn");
let nextBtn = document.getElementById("nextBtn");

// Function to calculate scroll step based on gallery width
const getScrollStep = () => {
    let containerWidth = scrollContainer.offsetWidth;
    return containerWidth; // Scroll step equals the container width
};

nextBtn.addEventListener("click", () => {
    scrollContainer.style.scrollBehavior = "smooth";
    scrollContainer.scrollLeft += getScrollStep();
});

backBtn.addEventListener("click", () => {
    scrollContainer.style.scrollBehavior = "smooth";
    scrollContainer.scrollLeft -= getScrollStep();
});



// *************** TOOLTIP ***************
document.addEventListener("DOMContentLoaded", function () {
    const exploreUser = document.querySelector('.hover__sets');
    const cardTooltip = document.querySelector('.card__tooltip');
    let tooltipTimeout;

    // Show tooltip on hover
    exploreUser.addEventListener('mouseenter', function () {
        clearTimeout(tooltipTimeout); // Clear any existing timeout
        cardTooltip.classList.add('show'); // Show tooltip
    });

    // Start a delay to hide the tooltip when hover is removed
    exploreUser.addEventListener('mouseleave', function () {
        tooltipTimeout = setTimeout(function () {
            cardTooltip.classList.remove('show'); // Hide tooltip after 10 seconds
        }, 10000); // 10000ms = 10 seconds
    });

    // Also prevent hiding if the tooltip is hovered
    cardTooltip.addEventListener('mouseenter', function () {
        clearTimeout(tooltipTimeout); // Clear timeout to prevent hiding
    });

    // Hide tooltip when the mouse leaves the tooltip itself after 10 seconds
    cardTooltip.addEventListener('mouseleave', function () {
        tooltipTimeout = setTimeout(function () {
            cardTooltip.classList.remove('show'); // Hide tooltip after 10 seconds
        }, 10000); 
    });

    // Hide tooltip when clicking outside of it
    document.addEventListener('click', function(event) {
        const isClickInsideTooltip = cardTooltip.contains(event.target);
        const isClickInsideExploreUser = exploreUser.contains(event.target);

        // If the click is outside both the tooltip and the exploreUser, hide the tooltip
        if (!isClickInsideTooltip && !isClickInsideExploreUser) {
            cardTooltip.classList.remove('show');
        }
    });
});