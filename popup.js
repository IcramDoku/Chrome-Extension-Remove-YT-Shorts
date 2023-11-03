document.addEventListener("DOMContentLoaded", function () {
  const removeShortsCheckbox = document.getElementById("removeShorts");

  removeShortsCheckbox.addEventListener("change", function () {
    const isEnabled = removeShortsCheckbox.checked;

    // Logic to hide or remove YouTube Shorts elements
    if (isEnabled) {
      // Implement the logic here
    } else {
      // Restore Shorts elements if needed
    }
  });
});
