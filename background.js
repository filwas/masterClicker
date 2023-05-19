// Listen for messages from the content script
chrome.runtime.onMessage.addListener((message) => {
    if (message.elementClicked) {
      // Perform desired actions with the target element

        var className = message.elementClicked.match(/class="(.+?)"/)
                            

        console.log(className[0].replace(/^.{7}/).replace(".$"));
        console.log(message.elementClicked);
      // You can send this information to your server, store it locally, or perform any other operations.

      let queryOptions = {
        currentWindow: true,
        url: "https://cockpit-sta.airhelp.com/*"
        }   

        /*chrome.tabs.query(queryOptions).then(
            (fulfill) => {
                fulfill.forEach(tab => {
                    let id = tab.id;
                    chrome.scripting.executeScript({
                        target: {tabId: id},
                        func: () => {
                            let eleID = message.elementClicked.id;
                            if (eleID) {
                                document.getElementById(eleID).click();
                                return;
                            } else {
                                let eleClass = message.elementClicked.className;
                                document.getElementsByClassName(eleClass)[0].click();
                                return;
                            }
                        }
                    });
                });
            }

        )*/





    }
  });
  