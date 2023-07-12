chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
  if (changeInfo.status === "complete" && tab.active) {
    if (
      tab.url.startsWith(
        "https://www.sellingplatformconnect.amadeus.com/login/"
      )
    ) {
      chrome.storage.local.clear();
      chrome.tabs.sendMessage(tabId, { message: "urlUpdated", url: tab.url });
    }
  }
});

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  if (request.message === "inputDetected") {
    const inputData = request.input;
    storeData(inputData);
    updatePopup();
  }
});

function storeData(inputData) {
  chrome.storage.local.get(["trackedData"], function (result) {
    const trackedData = result.trackedData || [];
    trackedData.push(inputData);
    chrome.storage.local.set({ trackedData: trackedData });
  });
}

function updatePopup() {
  chrome.action.setPopup({ popup: "popup.html" });
}
