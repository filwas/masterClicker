// Add a click event listener to the entire document
document.addEventListener('click', function(event) {
  // Get the target element that was clicked
  var targetElement = event.target;

  // Send a message to the background script with the target element
  chrome.runtime.sendMessage({elementClicked: targetElement.outerHTML});
});
