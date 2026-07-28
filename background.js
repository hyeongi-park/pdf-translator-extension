chrome.runtime.onInstalled.addListener(() => {
  chrome.contextMenus.create({
    id: "translate-pdf",
    title: "translate '%s'",
    contexts: ["selection"]
  });
});

chrome.contextMenus.onClicked.addListener((info, tab) => {
  if (info.menuItemId === "translate-pdf") {
    const selectedText = info.selectionText;
    
    const translateUrl = `https://translate.google.com/?sl=en&tl=ko&text=${encodeURIComponent(selectedText)}&op=translate`;
    
    chrome.windows.create({
      url: translateUrl,
      type: "popup",
      width: 600,
      height: 700
    });
  }
});