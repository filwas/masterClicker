// Get the active tab in the current window
chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
    // Inject the content script into the active tab
    chrome.tabs.executeScript(tabs[0].id, { file: "content.js" });
  });
  