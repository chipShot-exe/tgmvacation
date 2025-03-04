const textarea = document.getElementById("notes");
const maxChars = 5242870;
const charCount = document.getElementById("charCount");
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
const newsTab = document.getElementById('pills-news-tab');
newsTab.addEventListener('click', function() {
    changeTitle("News");
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




