document.addEventListener("DOMContentLoaded", function(){
   // Hamburger menu HTML
   const hamburgerMenu = `
   <style>
      #hamburger-menu { position:fixed;top:18px;right:18px;z-index:1050; }
      #hamburger-sidebar {
         visibility: hidden;
         opacity: 0;
         transition: opacity 0.2s, visibility 0.2s;
         position:fixed;top:0;right:0;height:100vh;width:220px;
         background:rgba(17,25,40,0.95);
         backdrop-filter:blur(8px);
         box-shadow:2px 0 16px #0008;
         z-index:1060;
         padding-top:60px;
      }
      #hamburger-sidebar.open {
         visibility: visible;
         opacity: 1;
      }
      #hamburger-overlay {
         display:none;
         position:fixed;top:0;left:0;width:100vw;height:100vh;
         background:rgba(0,0,0,0.2);
         z-index:1059;
      }
      #hamburger-overlay.open {
         display:block;
      }
   </style>
   <div id="hamburger-menu">
      <button id="hamburger-btn" class="btn btn-outline-light" style="font-size:1.2rem;padding:0.25rem 0.5rem;">
         <i class="bi bi-list"></i>
      </button>
      <div id="hamburger-sidebar">
         <button id="hamburger-close" class="btn btn-outline-light" style="position:absolute;top:18px;right:18px;">
            <i class="bi bi-x-lg"></i>
         </button>
         <nav class="nav flex-column mt-4 ms-3">
            <a class="nav-link text-light" href="index.html"><i class="bi bi-house"></i> Home</a>
            <a class="nav-link text-light" href="#pills-home" data-bs-toggle="pill"><i class="bi bi-exclamation-circle"></i> Tips</a>
            <a class="nav-link text-light" href="#pills-profile" data-bs-toggle="pill"><i class="bi bi-journal-bookmark"></i> Notes</a>
            <a class="nav-link text-light" href="#pills-shop" data-bs-toggle="pill"><i class="bi bi-bag"></i> Shopping</a>
            <a class="nav-link text-light" href="#pills-updates" data-bs-toggle="pill"><i class="bi bi-info-square"></i> Updates</a>
            <a class="nav-link text-light" href="#pills-qrcode" data-bs-toggle="pill"><i class="bi bi-qr-code"></i> QR Code</a>
         </nav>
      </div>
      <div id="hamburger-overlay"></div>
   </div>
   `;
   document.body.insertAdjacentHTML('afterbegin', hamburgerMenu);

   // Hamburger menu JS
   const btn = document.getElementById('hamburger-btn');
   const sidebar = document.getElementById('hamburger-sidebar');
   const closeBtn = document.getElementById('hamburger-close');
   const overlay = document.getElementById('hamburger-overlay');

   function openSidebar() {
      sidebar.classList.add('open');
      overlay.classList.add('open');
   }
   function closeSidebar() {
      sidebar.classList.remove('open');
      overlay.classList.remove('open');
   }
   btn.addEventListener('click', openSidebar);
   closeBtn.addEventListener('click', closeSidebar);
   overlay.addEventListener('click', closeSidebar);
   document.addEventListener('keydown', function(e){
      if (e.key === "Escape") closeSidebar();
   });

   document.getElementById("footer").innerHTML = `      <div class="linksWrapper">
         <h4 class="linksTitle">Helpful links</h4>
      </div>
      <div class="b-example-divider"></div>
      <div class="container">
         <footer class="row row-cols-1 row-cols-sm-2 row-cols-md-4 py-5 my-5 border-top">
            <div class="col mb-3">
               <p class="text-body-secondary">&copy; Liam Martin | 2025</p>
               <div class="btn-group" role="group" aria-label="Outlined button group">
                  <a class="btn btn-outline-primary" href="https://forms.gle/65Een6CEYxmPe9AS6" data-bs-toggle="tooltip" data-bs-title="Suggest an edit" target="_blank"><i class="bi bi-input-cursor-text"></i></a>
                  <a class="btn btn-outline-primary" href="https://github.com/chipShot-exe" data-bs-toggle="tooltip" data-bs-title="Github" target="_blank"><i class="bi bi-github"></i></a>
                  <a class="btn btn-outline-primary" href="mailto:leeyummartin@gmail.com" data-bs-toggle="tooltip" data-bs-title="Email Me" target="_blank"><i class="bi bi-envelope-paper-fill"></i></a>
               </div>
            </div>
            <!-- Section 1 -->
            <div class="col mb-3">
               <h5>Resources</h5>
               <ul class="nav flex-column">
                  <li class="nav-item mb-2 linkFit">
                     <a href="https://cdn1.parksmedia.wdprapps.disney.com/vision-dam/digital/parks-platform/parks-global-assets/disneyland/guest-services/maps/FY24_DL_Winter_1_08_24_to_4_04_24.pdf?2024-01-12T21:52:56+00:00" class="link-underline-dark link-offset-3 nav-link p-0">Disneyland Park Map</a>
                  </li>
                  <li class="nav-item mb-2 linkFit">
                     <a href="https://www.youtube.com/watch?v=G4hMCNkYQD8" class="link-underline-dark link-offset-3 nav-link p-0">How to share Google Maps location</a>
                  </li>
               </ul>
            </div>
            <div class="col mb-3">
               <h5>News</h5>
               <ul class="nav flex-column">
                  <li class="nav-item mb-2 linkFit">
                     <a href="https://disneyparksblog.com/dlr/" class="link-underline-dark link-offset-3 nav-link p-0">Official Disney Parks blog</a>
                  </li>
                  <li class="nav-item mb-2 linkFit">
                     <a href="https://www.reddit.com/r/Disneyland/" class="link-underline-dark link-offset-3 nav-link p-0">Disneyland subreddit (Forum thread)</a>
                  </li>
               </ul>
            </div>
            <div class="col mb-3">
               <h5>Fun stuff</h5>
               <ul class="nav flex-column">
                  <li class="nav-item mb-2 linkFit">
                     <a href="http://soundsofdisneyland.com/" class="link-underline-dark link-offset-3 nav-link p-0">Disneyland ambient music</a>
                  </li>
                  <li class="nav-item mb-2 linkFit">
                     <a href="#" class="link-underline-dark link-offset-3 nav-link p-0 text-body-secondary" data-bs-toggle="tooltip" data-bs-title="Check back here later for some useful links!">Coming soon!</a>
                  </li>
               </ul>
            </div>
                        <div class="col mb-3">
               <h5>Blogs and Unofficial</h5>
               <ul class="nav flex-column">
                  <li class="nav-item mb-2 linkFit">
                     <a href="Mouseplanet.com" class="link-underline-dark link-offset-3 nav-link p-0">Mouseplanet.com</a>
                  </li>
                  <li class="nav-item mb-2 linkFit">
                     <a href="Disneytouristblog.com" class="link-underline-dark link-offset-3 nav-link p-0 text-body-secondary">Disney tourist blog</a>
                  </li>
               </ul>
            </div>
         </footer>`;
})