let startScript = document.getElementById('start');
localStorage.setItem("tampon",'false');
startScript.onclick = function(element) {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
            chrome.tabs.executeScript(tabs[0].id,{file : "main.js"})
        });
};

