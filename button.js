// script.js

// Show or hide the button based on scroll position
window.onscroll = function() {
    const button = document.getElementById("back-to-top");
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        button.style.opacity = "1"; // Show button
        button.style.transform = "translateY(0)"; // Slide into view
    } else {
        button.style.opacity = "0.1"; // Hide button
        button.style.transform = "translateY(1000px)"; // Slide out of view
    }
};

// Smooth scroll to top
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}
