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

const homeButton = document.getElementById('homebtn');
const helpButton = document.getElementById('helpbtn');
const aboutButton = document.getElementById('aboutbtn');
const iframe = document.getElementById('webpage-content');

homeButton.addEventListener('click', function (event) {
    event.preventDefault(); // Prevent the default link behavior (page navigation)

    // Change the iframe source to 'help.html'
    iframe.src = 'landingpage.html';
});

helpButton.addEventListener('click', function (event) {
    event.preventDefault(); // Prevent the default link behavior (page navigation)

    // Change the iframe source to 'help.html'
    iframe.src = 'help.html';
});

aboutButton.addEventListener('click', function (event) {
    event.preventDefault(); // Prevent the default link behavior (page navigation)

    // Change the iframe source to 'help.html'
    iframe.src = 'about.html';
});


