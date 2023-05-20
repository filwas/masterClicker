// Add a click event listener to the entire document
document.addEventListener('click', (event) => {
  // Send a message to the background script with the target element
  chrome.runtime.sendMessage({elementClicked: event.target.outerHTML});
});
