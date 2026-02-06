document.addEventListener("DOMContentLoaded", function() {
    
    // 1. Inject HTML: We restore the 'logo-container' and 'sliding-background' divs here
    document.body.insertAdjacentHTML('afterbegin', `
    
    <div id="installHeaderWrap" class="fixed-top px-md-5" style="z-index: 1020;" hidden>
        <header class="d-flex align-items-center justify-content-center glasscard top-overlay py-2 position-relative" id="installHeader">
            <button type="button" 
                    class="btn-close btn-close-white position-absolute start-0 top-50 translate-middle-y ms-3 z-2" 
                    aria-label="Close" 
                    id="closeInstall"></button>

            <div class="text-center w-100 px-5"> 
                <button type="button" id="installButtonAction" class="btn btn-outline-primary glassbutton text-white border-white">
                    Install App
                </button>
            </div>
        </header>
    </div>

    <div class="position-fixed top-0 end-0 p-3" style="z-index: 1030;">
        <button class="btn btn-outline-light glassbutton" 
                type="button" 
                data-bs-toggle="offcanvas" 
                data-bs-target="#mobileMenu" 
                aria-controls="mobileMenu">
            <i class="bi bi-list fs-4"></i>
        </button>
    </div>

    <div class="offcanvas offcanvas-end text-white" 
         tabindex="-1" 
         id="mobileMenu" 
         aria-labelledby="mobileMenuLabel"
         style="backdrop-filter: blur(10px); background-color: #18192fea;">
        
        <div class="offcanvas-header border-bottom border-secondary">
            <h5 class="offcanvas-title" id="mobileMenuLabel">Menu</h5>
            <button type="button" class="btn-close btn-close-white me-sm-2" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        
        <div class="offcanvas-body">
            <nav class="nav flex-column gap-3 fs-6">
                <a class="nav-link text-light d-flex align-items-center" href="/">
                    <i class="bi bi-house me-3"></i> Home
                </a>
                <a class="nav-link text-light d-flex align-items-center noNewTab" href="LLSR.html">
                    <i class="bi bi-table me-3"></i> Lightning Lanes
                </a>
            </nav>
        </div>
    </div>

    <div id="logo-container" class="position-relative text-center pt-5">
        <div class="sliding-background"></div>
        
        <a href="/" class="noNewTab link-light link-underline link-underline-opacity-0 d-block">
	        <svg width="250" class="m-3 translate-middle-x start-50 position-relative" height="auto" id="logo" viewBox="100 -50 1100 700" xmlns="http://www.w3.org/2000/svg">
    <style>
        .logo-path { fill: #000; fill-rule: evenodd; }
    </style>
    <g class="logo-path">
        <path d="M369.986 455.789c3.105-15.936 5.83-30.727 9.042-45.414.405-1.842 3.14-3.697 5.205-4.506 1.964-.766 4.462-.175 6.724-.175 174.757 0 349.513.029 524.268-.065 12.914-.007 26.205-1.91 33.06 14.564 3.922-4.399 6.391-7.838 9.535-10.469 2.275-1.9 5.39-3.698 8.227-3.863 13.312-.773 13.353-.575 17.79 11.919 4.42 12.454 8.778 24.929 13.376 38.009-209.531 0-417.866 0-627.228 0z"/>
        <path d="M230.595 511.338c11.02-15.226 21-29.384 31.519-43.131 1.508-1.97 5.627-2.711 8.541-2.719 43.753-.122 87.505-.014 131.257.021 133.018.111 266.036.203 399.054.324 64.12.06 128.238.242 192.357.122 5.597-.01 9.305 1.69 12.884 5.866 10.938 12.755 22.253 25.184 34.582 39.04-3.678.261-5.965.569-8.249.569-106.867.024-213.737.054-320.604-.135-3.666-.005-7.939-1.439-10.899-3.61-37.746-27.685-81.264-33.186-129.276 4.114-2.977 1.756-156.277-.086-159.435-.081-58.839.122-117.68.09-176.521.074-1.194-.004-2.387-.202-5.211-.454z"/>
        <path d="M381.301 398.104v-44.307h104.468c-3.658 8.773-7.128 17.098-11.17 26.799 7.073 0 13.006.357 18.849-.216 1.789-.173 3.96-2.593 4.869-4.5 2.698-5.657 5.132-11.479 7.126-17.419 1.373-4.085 3.709-5.186 7.803-5.184 91.744.097 183.487.033 275.229.233 3.666.007 7.33 2.316 9.397 3.014 5.085-1.228 9.085-2.82 13.163-3.045 8.02-.443 16.096-.385 24.112.052 2.061.113 5.025 1.951 5.834 3.769 5.979 13.435 11.516 27.066 17.264 40.801-157.783 0-317.074 0-476.944 0z"/>
        <path d="M645.8 213.667c4.198 6.7 7.607 12.14 11.581 18.479 2.045-4.706 2.724-9.681 5.544-11.777 2.677-1.992 7.594-.978 12.311-1.347v-17.747h79.71v17.798c5.179 0 9.574 0 14.56 0v59.096h-9.146c-62.123 0-124.249 0-186.37 0-15.468 0-15.468 0-18.486-15.973 2.209-.29 4.398-.578 6.635-.87-2.548-22.672 13.363-38.889 20.495-58.165 1.772-4.786 11.936-3.932 14.098.983 6.171 14.03 12.505 28.02 17.77 42.395 1.529 4.175-.322 9.587-.627 14.487 6.907 2.238 11.19 0.295 14.112-7.198 5.102-13.088 11.335-25.735 17.814-40.164z"/>
        <path d="M768.348 286.028c6.583 20.383 12.943 40.073 19.351 59.917-73.71 0-148.398 0-223.077 0 1.091-9.977 2.924-19.825 3.037-29.692.114-9.93-1.478-19.88-2.358-30.224 67.955 0 136.179 0 203.048 0z"/>
        <path d="M242.703 614.039c3.463-11.945 6.59-22.735 9.748-33.631 94.943 0 199.646.193 294.683.193 0 23.369 0 16.824 0 40.575-2.407.148-15.3.262-17.927.262-88.946.027-177.894.166-266.84-.284-6.301-.029-12.582-4.442-19.664-7.115z"/>
        <path d="M252.189 563.268v-39.896c48.676 0 284.032-.824 314.056-.824 0 0-14.436 33.631-16.597 40.72h-297.459z"/>
        <path d="M111.533 621.096s-7.805 1.076-10.089 0c0-146.6 55.252-258.388 113.235-341.818 79.5-98.184 180.486-162.987 304.82-189.686 43.009-9.233 86.526-12.152 130.414-10.382 1.924.077 3.839.333 6.034.529-.778 6.056-3.31 8.255-9.469 8.096-93.739-2.415-182.163 17.937-264.085 63.901-248.542 152.225-261.343 371.636-270.86 469.36z"/>
        <path d="M780.712 96.596c84.907 16.624 150.779 49.518 216.911 104.39 76.502 63.477 129.555 142.921 159.329 237.774 18.264 58.185 24.803 117.86 21.758 178.69-.287 5.721-2.598 7.014-8.168 4.952 4.663-123.42-28.746-235.448-104.446-333.57-75.596-97.99-165.378-156.81-286.503-183.814.334-2.499.671-5.05 1.119-8.422z"/>
        <path d="M676.179 107.912h79.062c0 5.321.363 7.872-.09 12.97-.623 7.004 1.147 12.545 6.654 17.317 1.768 1.53 3.04 6.237 2.002 7.979-7.777 13.076-9.832 27.11-8.592 41.929.104 1.239-.046 2.506-.159 3.752-.044.464-.318.907-.685 1.892h-79.134c0-3.118-.171-5.827.03-8.506 1.012-13.257-.658-25.92-7.13-37.822-1.054-1.937-1.217-6.313-.028-7.201 8.835-6.602 8.422-15.803 8.088-25.145-.109-2.984-.018-3.358-.018-7.165z"/>
        <path d="M717.006-4.023c11.124 22.866 22.204 45.626 33.27 68.395 4.606 9.481 9.112 19.01 13.796 28.452 2.768 5.579 1.028 7.99-5 7.984-28.888-.025-57.777-.008-86.666-.022-5.169-.003-7.922-1.8-5.141-7.363 16.042-32.102 32.096-64.201 48.175-96.288.181-.362.722-.548 1.566-1.158z"/>
        <path d="M471.361 345.941h-90.548c3.794-6.42 7.045-11.982 10.352-17.507 7.612-12.72 15.406-25.33 22.791-38.18 2.32-4.04 5.236-3.561 9.624-4.15 12.356-1.66 19.66 1.127 24.485 13.217 5.468 13.699 13.326 26.439 20.11 39.616 1.104 2.152 2.01 4.408 3.186 7.004z"/>
        <path d="M841.114 345.727h-37.721c0-4.618.313-9.064-.113-13.439-.276-2.809-.84-6.361-2.678-8.09-4.607-4.331-5.067-8.575-2.216-13.86 1.175-2.184 1.775-4.678 2.643-7.031 7.176-19.525 8.223-20.252 28.88-17.525 1.94.254 4.245 2.303 5.266 4.14 3.153 5.689 5.448 11.86 8.679 17.501 3.748 6.546 6.041 12.438-1.122 18.351-1.339 1.107-1.442 4.09-1.55 6.234-.224 4.43-.068 8.879-.068 13.719z"/>
        <path d="M870.319 398.291c4.966-14.678 9.561-28.64 14.578-42.447.479-1.318 3.57-2.315 5.487-2.377 8.021-.262 16.065-.266 24.086.008 1.894.063 4.938 1.13 5.425 2.471 5.026 13.816 9.633 27.786 14.571 42.345h-64.147z"/>
        <path d="M336.976 454.348h-64.944c.702-1.947 1.12-3.798 1.989-5.408 6.795-12.588 13.974-24.977 20.42-37.74 3.93-7.776 10.504-3.386 15.858-4.529 4.339-.928 6.112 1.73 7.675 5.309 6.096 13.942 12.431 27.779 19.002 42.368z"/>
        <path d="M528.847 294.242c5.386 17.106 10.771 34.214 16.333 51.876h-35.293c5.932-17.775 11.666-34.949 17.397-52.124.523.083 1.043.167 1.563.248z"/>
        <path d="M905.039 308.613c4.012 12.172 8.026 24.342 12.258 37.181h-28.796c5.023-12.7 9.83-24.851 14.636-37 0.633-.062 1.269-.122 1.902-.181z"/>
        <path d="M397.657 234.375c10.54-2.812 21.081-5.623 32.204-8.591v16.091c-10.931-2.05-21.451-4.025-31.969-5.997-.078-.5-.156-1-.235-1.503z"/>
        <path d="M556.203 154.275c10.296-2.741 20.59-5.482 31.676-8.435v15.941c-10.779-2.001-21.27-3.95-31.762-5.898 0.03-.536 0.058-1.072 0.086-1.608z"/>
        <path d="M684.968-29.049c10.038-2.685 20.077-5.371 30.958-8.281v15.863c-10.287-1.869-20.641-3.745-30.996-5.624 0.014-.653 0.026-1.306 0.038-1.958z"/>
        <path d="M903.839 270.17v16.178c-10.997-2.082-21.42-4.055-31.843-6.03 0-.532 0-1.063 0-1.592 10.268-2.759 20.534-5.519 31.84-8.556z"/>
        <path d="M819.433 217.705v16.061c-10.815-1.96-21.143-3.833-31.472-5.706-.09-.608-.18-1.216-.271-1.825 10.3-2.766 20.598-5.534 31.743-8.53z"/>
        <path d="M810.14 277.989c3.251-8.966 6.102-16.822 9.758-26.908 4.115 10.092 7.401 18.153 10.973 26.908h-20.731z"/>
        <path d="M273.543 355.202c10.271-2.748 20.543-5.494 31.527-8.433v15.939c-10.753-2.013-21.151-3.958-31.549-5.903.007-.536 0.014-1.07 0.022-1.603z"/>
        <path d="M429.9 259.534c3.21 6.646 5.738 11.881 8.621 17.852h-17.972c3.076-5.874 5.75-10.977 9.351-17.852z"/>
        <path d="M962.906 398.041c2.387-6.185 4.516-11.7 7.426-19.245 2.728 7.21 4.822 12.754 7.277 19.245h-14.703z"/>
        <path d="M299.59 395.925c2.538-4.771 4.467-8.396 7.297-13.721 2.048 5.563 3.437 9.335 5.051 13.721h-12.348z"/>
        <path d="M872.91 522.976c.149.055.286.116.434.171l-57.312-.133c.09-.034.178-.072.269-.105-34.785 0-67.298-.362-101.998-.362 6.103 10.427 12.316 41.258 15.531 40.362h184.075c31.934 0 63.254 0 94.725 0 0-13.511 0-26.494 0-39.933-44.997 0-89.183 0-135.724 0z"/>
        <path d="M1016.336 587.401c-1.081-4.47-2.973-6.01-7.652-5.981-33.438.198-66.872.199-100.308-.004-1.162-.008-2.16.115-3.046.356l-151.87-.356.082.385c-2.656 0-5.642-2.445-19.355-1.391v39.856l129.948 2.176c-.166.122-.299.221-.472.351 54.571 0 107.697 0 162.151 0-3.429-12.647-6.715-23.955-9.478-35.392z"/>
    </g>
</svg>
            <h1 id="header">Disneyland Notepad</h1>
            <h2 id="snippet" class="h5"></h2>
        </a>
    </div>
    `);
    let installPrompt = null;
    const installHeaderWrap = document.getElementById("installHeaderWrap");
    const installButtonAction = document.getElementById("installButtonAction");
    const closeInstall = document.getElementById("closeInstall");

    const disableInAppInstallPrompt = () => {
        installPrompt = null;
        if (installHeaderWrap) {
			installHeaderWrap.setAttribute("hidden", "");

		}
    };

    window.addEventListener("beforeinstallprompt", (event) => {
        event.preventDefault();
        installPrompt = event;
        if (installHeaderWrap) installHeaderWrap.removeAttribute("hidden");
    });

    if (installButtonAction) {
        installButtonAction.addEventListener("click", async () => {
            if (!installPrompt) return;
            const result = await installPrompt.prompt();
            console.log(`Install prompt result: ${result.outcome}`);
            disableInAppInstallPrompt();
        });
    }

    if (closeInstall) {
        closeInstall.addEventListener("click", disableInAppInstallPrompt);
    }
    const snippets = [
        "It's a Small World has a sun and moon in every room, because everyone lives under the same sky.",
        "Disneyland opened on July 17th, 1955!",
        "Gum is not sold anywhere in Disneyland!",
		"You can go to Disneyland in Google Street View!"
    ];
    const quoteWrap = document.getElementById("snippet");
    if (quoteWrap) {
        const randomIndex = Math.floor(Math.random() * snippets.length);
        quoteWrap.innerHTML = snippets[randomIndex];
    }
    const footerEl = document.getElementById("footer");
    if (footerEl) {
        footerEl.innerHTML = `
        <div class="linksWrapper"><h4 class="linksTitle">Helpful links</h4></div>
        <div class="b-example-divider"></div>
        <div class="container">
            <footer class="row row-cols-1 row-cols-sm-2 row-cols-md-4 py-5 my-5 border-top">
                <div class="col mb-3">
                    <p class="text-body-secondary">By Liam Martin | 2026</p>
                    <div class="btn-group" role="group">
                         <a class="btn btn-outline-primary" href="https://forms.gle/65Een6CEYxmPe9AS6" data-bs-toggle="tooltip" data-bs-title="Suggest an edit" target="_blank"><i class="bi bi-input-cursor-text"></i></a>
                         <a class="btn btn-outline-primary" href="https://github.com/chipShot-exe" data-bs-toggle="tooltip" data-bs-title="Github" target="_blank"><i class="bi bi-github"></i></a>
                         <a class="btn btn-outline-primary" href="mailto:leeyummartin@gmail.com" data-bs-toggle="tooltip" data-bs-title="Email Me" target="_blank"><i class="bi bi-envelope-paper-fill"></i></a>
                    </div>
                </div>
                <div class="col mb-3">
                    <h5>Resources</h5>
                    <ul class="nav flex-column">
                        <li class="nav-item mb-2 linkFit"><a href="https://cdn1.parksmedia.wdprapps.disney.com/vision-dam/digital/parks-platform/parks-global-assets/disneyland/guest-services/maps/FY24_DL_Winter_1_08_24_to_4_04_24.pdf?2024-01-12T21:52:56+00:00" class="link-underline-dark link-offset-3 nav-link p-0">Disneyland Park Map</a></li>
                        <li class="nav-item mb-2 linkFit"><a href="https://www.youtube.com/watch?v=G4hMCNkYQD8" class="link-underline-dark link-offset-3 nav-link p-0">How to share Google Maps location</a></li>
                        <li class="nav-item mb-2 linkFit"><a href="https://www.thrill-data.com/" class="link-underline-dark link-offset-3 nav-link p-0">Thrill Data (Extensive graphs)</a></li>
						</ul>
                </div>
                <div class="col mb-3">
                    <h5>News</h5>
                    <ul class="nav flex-column">
                        <li class="nav-item mb-2 linkFit"><a href="https://disneyparksblog.com/dlr/" class="link-underline-dark link-offset-3 nav-link p-0">Official Disney Parks blog</a></li>
                        <li class="nav-item mb-2 linkFit"><a href="https://www.reddit.com/r/Disneyland/" class="link-underline-dark link-offset-3 nav-link p-0">Disneyland subreddit</a></li>
                    </ul>
                </div>
                <div class="col mb-3">
                    <h5>Fun stuff</h5>
                    <ul class="nav flex-column">
                        <li class="nav-item mb-2 linkFit"><a href="http://soundsofdisneyland.com/" class="link-underline-dark link-offset-3 nav-link p-0">Disneyland ambient music</a></li>
                        <li class="nav-item mb-2 linkFit"><a href="https://parkprofessor.net/parkle.html" class="link-underline-dark link-offset-3 nav-link p-0" data-bs-toggle="tooltip" data-bs-title="Guess a park-related word every day!">Parkle</a></li>
                    </ul>
                </div>
            </footer>
        </div>`;
        
        const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
        tooltipTriggerList.forEach((el) => new bootstrap.Tooltip(el));
        
        const toastLive = document.getElementById('liveToast');
        if (toastLive) {
            const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastLive);
            toastBootstrap.show();
        }
        
        document.querySelectorAll("a").forEach((link) => {
            link.setAttribute("target", link.classList.contains("noNewTab") ? "_self" : "_blank");
        });
    }
});