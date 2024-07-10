// Get references to the sections
var aboutSection = document.getElementById("about");
var contactSection = document.getElementById("contact");
var casesSection = document.getElementById("cases");
var mediaSection = document.getElementById("media");

function hideAllSections() {
    aboutSection.style.display = "none";
    contactSection.style.display = "none";
    casesSection.style.display = "none";
    mediaSection.style.display = "none";
}

// Initialize the page by showing the "About" section
hideAllSections();
aboutSection.style.display = "block";

function displayAbout() {
    hideAllSections();
    aboutSection.style.display = "block";
}

function displayContact() {
    hideAllSections();
    contactSection.style.display = "block";
}

function displayCases() {
    hideAllSections();
    casesSection.style.display = "block";
}

function displayMedia() {
    hideAllSections();
    mediaSection.style.display = "block";
}

