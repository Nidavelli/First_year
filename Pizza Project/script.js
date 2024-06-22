// Navbar
let menu = document.querySelector('#menu-icon'); // Selecting the menu icon element
let navbar = document.querySelector('.navbar'); // Selecting the navbar element

menu.onclick = () => { // Adding a click event listener to the menu icon
    navbar.classList.toggle('active'); // Toggling the 'active' class on the navbar when the menu icon is clicked
}

window.onscroll = () => { // Adding a scroll event listener to the window
    navbar.classList.remove('active'); // Removing the 'active' class from the navbar when scrolling
}

// Dark Mode
let darkmode = document.querySelector('#darkmode'); // Selecting the dark mode icon

darkmode.onclick = () => { // Adding a click event listener to the dark mode icon
    if(darkmode.classList.contains('bx-moon')){ // Checking if dark mode is currently enabled
        darkmode.classList.replace('bx-moon','bx-sun'); // Replacing the moon icon with the sun icon
        document.body.classList.add('active'); // Adding the 'active' class to the body to enable dark mode
    } else {
        darkmode.classList.replace('bx-sun','bx-moon'); // Replacing the sun icon with the moon icon
        document.body.classList.remove('active'); // Removing the 'active' class from the body to disable dark mode
    }
}

// Scroll Reveal
const sr = ScrollReveal ({ // Initializing ScrollReveal with custom options
    origin:  'left', // Animation starts from the left
    distance: '40px', // Distance of animation
    duration: 2000, // Animation duration
    reset: true // Resets the animation on window resize
});

// Reveal animations for specified elements
sr.reveal(`.home-text, .home-img,
            .about-img, .about-text,
            .box, .s-box,
            .btn, .connect-text,
            .contact-box`, {
    interval: 200 // Interval between individual element animations
});

// Background Music Control
let musicIcon = document.getElementById("music-icon"); // Selecting the music icon element
let backgroundMusic = document.getElementById("backgroundMusic"); // Selecting the background music element

musicIcon.onclick = () => { // Adding a click event listener to the music icon
    if (musicIcon.classList.contains("bx-speaker")) { // Checking if music is currently playing
        backgroundMusic.play(); // Playing the background music
        musicIcon.classList.replace('bx-speaker','bxs-speaker'); // Replacing the speaker icon with the speaker icon with sound waves
        musicIcon.classList.add("active"); // Adding the 'active' class to the music icon
    } else {
        backgroundMusic.pause(); // Pausing the background music
        musicIcon.classList.replace('bxs-speaker','bx-speaker'); // Replacing the speaker icon with the regular speaker icon
        musicIcon.classList.remove("active"); // Removing the 'active' class from the music icon
    }
};
