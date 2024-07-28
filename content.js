console.log("Content script loaded.");

function removeShortsElements() {
  // Select all elements containing links starting with '/shorts'
  document.querySelectorAll('a[href^="/shorts"]').forEach(anchor => {
    const parentElement = anchor.closest('ytd-grid-video-renderer, ytd-video-renderer, ytd-rich-item-renderer');
    if (parentElement) {
      parentElement.remove(); // Remove the entire parent element
    } else {
      anchor.remove(); // If no parent found, remove the anchor itself
    }
  });
}

// Function to observe and remove shorts elements based on the user's preference
function initRemoveShorts() {
  chrome.storage.sync.get('removeShortsEnabled', (data) => {
    if (data.removeShortsEnabled) {
      removeShortsElements();

      // Set up a MutationObserver to watch for changes in the DOM
      const observer = new MutationObserver(() => {
        removeShortsElements();
      });

      // Start observing the document body for changes
      observer.observe(document.body, { childList: true, subtree: true });
    }
  });
}

// Listen for messages from the popup script
chrome.runtime.onMessage.addListener((message) => {
  if (message.removeShortsEnabled !== undefined) {
    if (message.removeShortsEnabled) {
      removeShortsElements();

      // Set up a MutationObserver to watch for changes in the DOM
      const observer = new MutationObserver(() => {
        removeShortsElements();
      });

      // Start observing the document body for changes
      observer.observe(document.body, { childList: true, subtree: true });
    } else {
      window.location.reload(); // Reload the page to restore Shorts elements
    }
  }
});

// Initialize the script based on the stored settings
initRemoveShorts();


