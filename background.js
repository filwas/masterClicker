chrome.runtime.onMessage.addListener((message) => {
    if (message.elementClicked) {
        var className = message.elementClicked.match(/class="([^"]+)"/)[1]
        console.log("CL=",className);
        console.log(message.elementClicked);

        let queryOptions = {
          currentWindow: true,
          url: "https://cockpit-sta.airhelp.com/*"
        }   
        if (BUTTONLIST.includes(className)) {
            chrome.tabs.query(queryOptions).then(
                (fulfill) => {
                    console.log(fulfill)
                    fulfill.forEach(tab => {
                        let id = tab.id;
                        console.log(fulfill[0].id == id)
                        if (id != fulfill[0].id && tab.status=="complete") {
                            chrome.scripting.executeScript({
                                target: {tabId: id},
                                func: (className) => {
                                    console.log("AHAHHA");
                                    document.getElementsByClassName(className)[0].click();
                                    return;
                                },
                                args: [className]
                            });
                        }
                    });
                }
            );
        }
    }               
});



BUTTONLIST = [
    //"start-claim-assessment-test", // Start claim assessment button
    "close-test", // close button
    //"btn btn-lg btn-success pull-right", //green accept button on many pages
    "perform-airline-assessment-test", // perform airline assessment
    "collect-compensation-test", //collect compensation
    "btn btn-primary", //add compensation
    "btn btn-lg btn-success", //collect compensation green button
    "submit-to-payout-test", //submit to payout
    "btn btn-primary btn-lg", // send to payout
]