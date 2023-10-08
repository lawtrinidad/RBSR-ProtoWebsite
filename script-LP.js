class AccordionNav {
    constructor() {
        document.addEventListener('DOMContentLoaded', () => {
            // Get references to the button and the elements with the specified classes
            var button = document.getElementById('expandNav');
            var header = document.querySelector('header');
            var navMenu = document.querySelector('.nav-menu');
            var logo = document.querySelector('.logo');
            var navList = document.querySelector('.navList');
            var loginButton = document.querySelector('.loginButton');
            const isaccordionOpen = false;
            
            // Add a click event listener to the button
            button.addEventListener('click', function() {
                // Toggle the "expand" class on the elements
                button.classList.toggle('expand');
                header.classList.toggle('expand');
                navMenu.classList.toggle('expand');
                navList.classList.toggle('expand');
                logo.classList.toggle('expand');
                loginButton.classList.toggle('expand');

                const windowWidth = window.innerWidth || document.documentElement.clientWidth;

                if ((loginButton.classList.contains('expand')) && (windowWidth < 900)) {
                    loginButton.style.display = 'block';
                } else {
                    loginButton.style.display = '';
                }
            });
        });
    }
}

// Create an instance of the AccordionNav class
new AccordionNav();

class SlideShow {
    constructor() {
        let slideIndex = 0;
            showSlides();
            
            function showSlides() {
                let slides = document.getElementsByClassName("slide");
                
                for (let i = 0; i < slides.length; i++) {
                    slides[i].style.display = "none"
                }
                
                slideIndex++;
                
                if (slideIndex > slides.length) {
                    slideIndex = 1;}
                    
                    slides[slideIndex - 1].style.display = "block";
                    setTimeout(showSlides, 2000); // Change slide every 2 seconds (2000 milliseconds)
                }
    }
}

new SlideShow();

/** NEW*/
const openFormLink = document.getElementById('openFormLink');
const popupForm = document.querySelector('.container');
const closeFormBtn = document.querySelector('.close-btn');

openFormLink.addEventListener('click', () => {
    popupForm.classList.add('sticky');
    popupForm.style.display = 'block';
});
    
closeFormBtn.addEventListener('click', () => {
    popupForm.classList.remove('sticky');
    popupForm.style.display = 'none';
});

