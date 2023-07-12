chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  if (request.message === "urlUpdated") {
    const inputField = document.getElementById("officeIdInput");
    if (inputField) {
      inputField.addEventListener("input", function (event) {
        const input = event.target.value;
        chrome.runtime.sendMessage({ message: "inputDetected", input: input });
      });
    }
  }
});
