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
const updatesTab = document.getElementById('pills-updates');
updatesTab.addEventListener('click', function() {
    changeTitle("Updates");
});
const picsTab = document.getElementById('pills-pics-tab');
picsTab.addEventListener('click', function() {
    changeTitle("Pictures");
});

const qrTab = document.getElementById('pills-qrcode');
qrTab.addEventListener('click', function() {
    changeTitle("QR code");
});
// All links except those excluded open in a new tab
document.querySelectorAll("a").forEach(link => {
    if (link.classList.contains("noNewTab")) {
        link.setAttribute("target", "_self"); 
    } else {
        link.setAttribute("target", "_blank");
    }
});
const toastLiveExample = document.getElementById('liveToast');
  const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastLiveExample);
    toastBootstrap.show();
const snippets = ["<div>It's a Small World has a sun and moon in every room, because everyone lives under the same sky.</div>","<div>Disneyland opened on July 17th, 1955</div>",];
const quoteWrap = document.getElementById("snippet");
const randomIndex = Math.floor(Math.random() * snippets.length);
quoteWrap.innerHtml = snippets[randomIndex];
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/service-worker.js')
      .then(reg => console.log('SW registered:', reg.scope))
      .catch(err => console.error('SW registration failed:', err));
  });
}
let installPrompt = null;
const installButton = document.querySelector("#install");
const installHeader = document.querySelector("#installHeader")

window.addEventListener("beforeinstallprompt", (event) => {
  event.preventDefault();
  installPrompt = event;
  installHeader.removeAttribute("hidden");
});
function disableInAppInstallPrompt() {
  installPrompt = null;
  installButton.setAttribute("hidden", "");
  installHeader.setAttribute("hidden","");
}
installButton.addEventListener("click", async () => {
  if (!installPrompt) {
    return;
  }
  const result = await installPrompt.prompt();
  console.log(`Install prompt was: ${result.outcome}`);
  disableInAppInstallPrompt();
});
window.addEventListener("appinstalled", () => {
  disableInAppInstallPrompt();
});
