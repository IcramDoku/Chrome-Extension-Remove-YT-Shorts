// content.js

// Function to identify and hide YouTube Shorts elements
function hideYouTubeShorts() {
  // Replace 'your-selector-for-Shorts' with the actual CSS selector
  const shortsElements = document.querySelectorAll('#dismissible');

  shortsElements.forEach((element) => {
    element.style.display = 'none'; // Hide the element
    // OR
    // element.remove(); // Remove the element from the DOM
  });
}

// Call the hideYouTubeShorts function to start hiding Shorts
hideYouTubeShorts();

