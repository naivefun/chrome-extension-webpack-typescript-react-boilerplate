import '../img/icon-34.png';
import '../img/icon-128.png';

function openWindow(contentTabId) {
  const devtoolWidth = window.screen.availWidth > 1366 ? 450 : 420;

  // Open devtools window
  chrome.windows.create(
    {
      type: 'popup',
      url: chrome.extension.getURL('popup.html'),
      width: devtoolWidth,
      height: window.screen.availHeight,
      top: 0,
      left: window.screen.availWidth - devtoolWidth,
    },
    (win) => {
      function closeListener(tabId) {
        if (tabId === contentTabId || tabId === win.tabs[0].id) {
          chrome.tabs.onRemoved.removeListener(closeListener);
          chrome.windows.remove(win.id);
        }
      }
      chrome.tabs.onRemoved.addListener(closeListener);
    }
  );
}

if (chrome.browserAction) { // electron doesn't support this api
  chrome.browserAction.onClicked.addListener((tab) => {
    openWindow(tab.id);
  });
}
