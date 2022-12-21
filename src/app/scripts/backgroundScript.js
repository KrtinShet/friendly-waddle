let currentPopup = null;

function createPopup(hostTabId, service) {
  function handlePopupClosed(windowId) {
    if (currentPopup && windowId == currentPopup.id) {
      currentPopup = null;
      chrome.storage.session.set({
        currentPopup: { isOpen: false, popup: null },
      });
    }
  }

  if (!currentPopup) {
    const tabIdParam = new URLSearchParams({
      tabId: hostTabId,
    });
    const popUrl = chrome.runtime.getURL(
      `popup.html?${tabIdParam}#/${service.type}`
    );

    chrome.windows
      .create({
        url: popUrl,
        type: 'popup',
        height: 628,
        width: 395,
        left: 1500,
        top: 0,
      })
      .then((window) => {
        currentPopup = window;
        chrome.storage.session.set({
          currentPopup: { isOpen: true, popup: currentPopup },
        });
        chrome.windows.onRemoved.addListener(handlePopupClosed);
      });
  } else {
    chrome.scripting.executeScript({
      target: { tabId: hostTabId },
      function: () =>
        alert(
          'Extension is ignoring given request because it can only have one popup at a time. Make sure to close the current popup before making another request'
        ),
    });
  }
}

function extMessageHandler(request, sender, sendResponse) {
  if (request.type === 'createPopup') {
    createPopup(sender.tab.id, request.service);
  }
}

/**
 * Fired when a message is sent from either an extension process or a content script.
 */
chrome.runtime.onMessage.addListener(extMessageHandler);
