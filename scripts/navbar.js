// Developed by Connor Mackay
let navLinks = document.getElementById("navLinks");
let nav = document.getElementsByTagName("nav")[0];
let numClicked = 0;

function navMenu() {
    if (navLinks.style.display === "none") {
        navLinks.style.display = "block";
    } else {
        navLinks.style.display = "none";
    }

    if (numClicked === 0) {
        navLinks.style.display = "block";
        numClicked++;
    }
}

window.addEventListener("resize", function() {
    if (window.innerWidth > 1299) {
        navLinks.style.display = "block";
    } else {
        navLinks.style.display = "none";
    }
});