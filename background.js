browser.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
  if (changeInfo.status === 'complete') {
    browser.tabs.executeScript(tabId, {file: 'mercari_search.js'});
  }
});
