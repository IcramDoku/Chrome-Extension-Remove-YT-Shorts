// content.js

console.log("Content script loaded.");

// Function to identify and hide the YouTube logo
function hideYouTubeLogo() {
  console.log("cat");
  const logoElement = document.getElementById('logo-icon'); //this WORKES!!

  if (logoElement) {
    logoElement.style.display = 'none'; // Hide the element
    // OR
    // logoElement.remove(); // Remove the element from the DOM
  }
}

// Call the hideYouTubeLogo function to hide the logo
hideYouTubeLogo();



