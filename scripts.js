const textarea = document.getElementById("notes");
const maxChars = 5242870;
const charCount = document.getElementById("charCount");
const storageKey = "userNotes";
window.addEventListener("load", () => {
    const saved = localStorage.getItem(storageKey);
    if (saved) textarea.value = saved;
});

textarea.addEventListener("input", () => {
    if (textarea.value.length > maxChars) {
        textarea.value = textarea.value.substring(0, maxChars);
    }
    localStorage.setItem(storageKey, textarea.value);
});
function changeTitle(value) {
    document.title = "Disneyland Notepad | " + value;
}
document.getElementById("pills-tips-tab").addEventListener("click", () => changeTitle("Tips"));
document.getElementById("pills-notes-tab").addEventListener("click", () => changeTitle("Notes"));
document.getElementById("pills-shop-tab").addEventListener("click", () => changeTitle("Shopping"));
document.getElementById('pills-updates').addEventListener('click', () => changeTitle("Updates"));
document.getElementById('pills-qrcode').addEventListener('click', () => changeTitle("QR code"));
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/service-worker.js')
            .then((reg) => console.log('SW registered:', reg.scope))
            .catch((err) => console.error('SW registration failed:', err));
    });
}
const showUrls = {
    fantasmic: "https://api.themeparks.wiki/v1/entity/8c36ff0b-3a32-4d7b-9388-0516c19277db/live",
    holidayMagic: "https://api.themeparks.wiki/v1/entity/9a9c4a2c-5ddb-47df-adda-e9f6ccf7864b/live",
    paintTheNight: "https://api.themeparks.wiki/v1/entity/c60e9de0-df2b-4484-9b05-299939dc247a/live",
    worldOfColor: "https://api.themeparks.wiki/v1/entity/457e2029-852f-4de7-9ca0-e4cc6f0cfcad/live",
	wondrousJourneysFireworks: "https://api.themeparks.wiki/v1/entity/115863ac-0880-4630-afd3-b1a1b5033d51/live"
};
const showNamesPretty = {
    fantasmic: "Fantasmic!",
    holidayMagic: "Believe... In Holiday Magic",
    paintTheNight: "Paint the Night",
    worldOfColor: "World of Color",
	wondrousJourneysFireworks: "Wondrous Journeys with Fireworks",
	wondrousJourneysNoFireworks: "Wondrous Journeys (No fireworks)"
};
async function getShowtimes() {
    let showtimesResult = {};
    const promises = Object.entries(showUrls).map(async ([key, url]) => {
        try {
            const response = await fetch(url);
            if (!response.ok) throw new Error(`HTTP ${response.status}`);
            
            const result = await response.json();
			
            if (result.liveData?.[0]?.status === "OPERATING") {
if (key == "wondrousJourneysFireworks") {
				} 
                const times = result.liveData[0].showtimes?.map(s => s.startTime) ?? [];
                showtimesResult[key] = times;
            } else {
				if (key == "wondrousJourneysFireworks") {
					const wondrousResponse = await fetch("https://api.themeparks.wiki/v1/entity/2e062fa5-42fd-4167-859c-aa00fddfa22c/live");
					if (!wondrousResponse.ok) throw new Error(`HTTP ${wondrousResponse.status}`);
					const wondrousResult = await wondrousResponse.json();
					if (wondrousResult.liveData?.[0]?.status === "OPERATING") {
						const times = wondrousResult.liveData[0].showtimes?.map(s => s.startTime) ?? [];
                		showtimesResult["wondrousJourneysNoFireworks"] = times;
					}
				} 
                showtimesResult[key] = [];
            }
        } catch (error) {
            console.error(`Error fetching ${key}:`, error);
            showtimesResult[key] = [];
        }
    });

    await Promise.all(promises);
//	alert(JSON.stringify(showtimesResult));
    return showtimesResult;
}
function formatSingleTime(utcString) {
    const date = new Date(utcString);
    if (isNaN(date)) return "";
    
    return new Intl.DateTimeFormat(undefined, {
        hour: 'numeric',
        minute: '2-digit',
        hour12: true
    }).format(date);
}
function emptyArray(value) {
  	return Array.isArray(value) && value.length === 0;
}
window.addEventListener("load", () => {
	const tonightHeader = document.createElement("h2", "fw-bold");
	tonightHeader.textContent = "Tonight";
	tonightHeader.classList.add("top-50", "text-center", "p-2", "h2", "fw-bold")
    const container = document.getElementById("showTableWrap");
    if (!container) return;

getShowtimes().then(data => {
    const activeShows = Object.entries(data).filter(([key, times]) => 
        Array.isArray(times) && times.length > 0
    );

    if (activeShows.length > 0) {
        // Create a Bootstrap Row container
        const gridContainer = document.createElement("div");
        gridContainer.classList.add("row", "text-center", "gx-2", "gy-4", "mt-n4");

        activeShows.forEach(([key, times]) => {
            // Create a Column for each show
            // 'col-12' makes it stack on mobile
            // 'col-md' makes them share the row on desktop (bs-medium and up)
            const showCol = document.createElement("div");
            showCol.classList.add("col-12", "col-md");

            const name = showNamesPretty[key] || key;
            const formattedTimes = times.map(t => formatSingleTime(t)).join(", ");

            showCol.innerHTML = `
                <div class="p-2">
                    <div class="fw-bold fs-4">${name}</div>
                    <div class="fs-5 opacity-75">${formattedTimes}</div>
                </div>
            `;
            gridContainer.appendChild(showCol);
        });

        container.innerHTML = ""; 
        container.appendChild(gridContainer);
        container.before(tonightHeader);
    }
});
});