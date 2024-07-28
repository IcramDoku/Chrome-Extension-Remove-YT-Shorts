document.addEventListener('DOMContentLoaded', () => {
    const removeShortsCheckbox = document.getElementById('removeShorts');
  
    // Load the current state from storage
    chrome.storage.sync.get('removeShortsEnabled', (data) => {
      removeShortsCheckbox.checked = data.removeShortsEnabled || false;
    });
  
    // Listen for changes to the checkbox
    removeShortsCheckbox.addEventListener('change', () => {
      const isChecked = removeShortsCheckbox.checked;
      chrome.storage.sync.set({ removeShortsEnabled: isChecked });
  
      // Communicate the change to the content script
      chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        chrome.tabs.sendMessage(tabs[0].id, { removeShortsEnabled: isChecked });
      });
    });
  });  