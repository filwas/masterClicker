// Listen for messages from the content script
chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {
    if (message.elementClicked) {
      // Perform desired actions with the target element
      console.log("Element clicked:", message.elementClicked);
      // You can send this information to your server, store it locally, or perform any other operations.
    }
  });
  