const textarea = document.getElementById("notes");
const maxChars = 5242870;
let charCount = document.getElementById("charCount");
const storageKey = "userNotes";

// Fetch value from localStorage and populate textarea
window.addEventListener("load", () => {
    textarea.value = localStorage.getItem(storageKey);
    updateCharCount();
});

textarea.addEventListener("input", () => {
    const currentValue = textarea.value;
    textarea.value = ""; // Clear the textarea
    textarea.value = currentValue.substring(0, maxChars); // Re-enter trimmed value
    localStorage.setItem(storageKey, textarea.value);
    updateCharCount();
});

function updateCharCount() {
    charCount.textContent = `${textarea.value.length}/${maxChars}`;
}
function changeTitle(value) {
    document.title = "Disneyland Notepad | " + value;
}
const tipsTab = document.getElementById('pills-tips-tab');
tipsTab.addEventListener('click', function() {
    changeTitle("Tips");
});

const notesTab = document.getElementById('pills-notes-tab');
notesTab.addEventListener('click', function() {
    changeTitle("Notes");
});

const shopTab = document.getElementById('pills-shop-tab');
shopTab.addEventListener('click', function() {
    changeTitle("Shopping");
});
const picsTab = document.getElementById('pills-pics-tab');
picsTab.addEventListener('click', function() {
    changeTitle("Pictures");
});
// All links except those excluded open in a new tab
document.querySelectorAll("a").forEach(link => {
    if (link.classList.contains("noNewTab")) {
        link.setAttribute("target", "_self"); 
    } else {
        link.setAttribute("target", "_blank");
    }
});
const toastLiveExample = document.getElementById('liveToast')
  const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastLiveExample)
    toastBootstrap.show()
document.addEventListener("DOMContentLoaded", function () {
    // Apply dark theme to the HTML element
    document.documentElement.setAttribute("data-bs-theme", "dark");
    
    // Then override for elements with the .no-dark class
    document.querySelectorAll(".no-dark").forEach(element => {
        // Option 1: Override the theme attribute
        element.setAttribute("data-bs-theme", "light");
        
        // Option 2: Force a transparent background (if that's the only issue)
        element.style.backgroundColor = "transparent";
    });
    
    // Additionally, use a MutationObserver to catch any new elements with .no-dark added later
    const observer = new MutationObserver(mutations => {
        mutations.forEach(mutation => {
            mutation.addedNodes.forEach(node => {
                if (node.nodeType === 1 && node.classList && node.classList.contains("no-dark")) {
                    node.emoveAttribute("data-bs-theme");
                    node.style.backgroundColor = "transparent";
                }
            });
        });
    });
    
    observer.observe(document.documentElement, { childList: true, subtree: true });
});

