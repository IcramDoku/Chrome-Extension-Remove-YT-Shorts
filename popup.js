document.addEventListener("DOMContentLoaded", function () {
  const removeShortsCheckbox = document.getElementById("removeShorts");

  // Function to toggle the Shorts remover on/off
  function toggleShortsRemover(isEnabled) {
    if (isEnabled) {
      removeYouTubeShorts(); // Call the function to remove Shorts
    } else {
      restoreYouTubeShorts(); // Call the function to restore Shorts if needed
    }
  }

  // Function to remove YouTube Shorts
  function removeYouTubeShorts() {
    // Replace 'your-selector-for-Shorts' with the actual CSS selector
    const shortsElements = document.querySelectorAll('#dismissible');

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
  chrome.storage.local.get("isEnabled", function (result) {
    removeShortsCheckbox.checked = result.isEnabled || false;
    toggleShortsRemover(result.isEnabled || false);
  });

  removeShortsCheckbox.addEventListener("change", function () {
    const isEnabled = removeShortsCheckbox.checked;

    // Save the user's preference in local storage
    chrome.storage.local.set({ isEnabled });

    // Toggle the Shorts remover
    toggleShortsRemover(isEnabled);
  });
});

