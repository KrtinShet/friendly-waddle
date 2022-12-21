function injectScript(file, node) {
  let th = document.getElementsByTagName(node)[0];
  let s = document.createElement('script');
  s.setAttribute('type', 'text/javascript');
  s.setAttribute('src', file);
  th.appendChild(s);
}

(function () {
  /**
   * Injects the script into the page when the DOM is ready.
   */
  window.addEventListener('DOMContentLoaded', function () {
    injectScript(chrome.extension.getURL('scripts/inject.js'), 'body');
  });

  window.addEventListener('message', function (event) {
    chrome.runtime.sendMessage(event.data);
  });
})();
