document.addEventListener("DOMContentLoaded", function () {
  console.log("Popup loaded.");
  const removeShortsCheckbox = document.getElementById("removeShorts");

  // Function to toggle the Shorts remover on/off
  function toggleShortsRemover(isEnabled) {
    console.log("Toggle function called with isEnabled: " + isEnabled);
    
    if (isEnabled) {
      console.log("isEnabled branch executed");
      removeYouTubeShorts(); // Call the function to remove Shorts
    } else {
      console.log("else branch executed");
      restoreYouTubeShorts(); // Call the function to restore Shorts if needed
    }
  }
  

  // Function to remove YouTube Shorts
  function removeYouTubeShorts() {
    // Replace 'your-selector-for-Shorts' with the actual CSS selector
    const shortsElements = document.getElementById('logo-icon');

    shortsElements.forEach((element) => {
      element.style.display = 'none'; // Hide the element
      // OR
      // element.remove(); // Remove the element from the DOM
    });
  }

  // Function to restore YouTube Shorts if needed
  function restoreYouTubeShorts() {
    // Implement logic to restore Shorts elements here
  }

  // Initialize the checkbox based on the user's stored preference
  const isEnabled = localStorage.getItem("isEnabled") === "true"; // Convert to a boolean
  removeShortsCheckbox.checked = isEnabled;
  toggleShortsRemover(isEnabled);

  // Event Listener for Checkbox Change
  removeShortsCheckbox.addEventListener("change", function () {
    console.log("Checkbox changed: " + removeShortsCheckbox.checked);
    const isEnabled = removeShortsCheckbox.checked;
    
    // Save the user's preference in local storage
    localStorage.setItem("isEnabled", isEnabled);
    
    // Toggle the Shorts remover
    toggleShortsRemover(isEnabled);
  });

  
});

