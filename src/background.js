window.houseInfo = {};

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  window.houseInfo = request;
});

chrome.browserAction.onClicked.addListener(function (tab) {
  chrome.tabs.create({url: 'popup.html'});
});