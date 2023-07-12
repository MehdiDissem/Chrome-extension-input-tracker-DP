document.addEventListener("DOMContentLoaded", function () {
    chrome.storage.local.get(["trackedData"], function (result) {
      const dataList = document.getElementById("dataList");
      const trackedData = result.trackedData || [];
      trackedData.forEach(function (data) {
        const listItem = document.createElement("li");
        listItem.textContent = data;
        dataList.appendChild(listItem);
      });
    });
  });
  