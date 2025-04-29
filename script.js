 // Hamburger menü logikája
 const hamburgerButton = document.querySelector('.hamburger-menu');
 const navElement = document.querySelector('nav');
 const navLinksContainer = document.querySelector('nav ul.nav-links');

 hamburgerButton.addEventListener('click', () => {
     navElement.classList.toggle('mobile-nav-open');
     const isExpanded = navElement.classList.contains('mobile-nav-open');
     hamburgerButton.setAttribute('aria-expanded', isExpanded);
 });

 // Mobil menü bezárása link kattintáskor
 function closeMobileMenu() {
     if (navElement.classList.contains('mobile-nav-open')) {
         navElement.classList.remove('mobile-nav-open');
         hamburgerButton.setAttribute('aria-expanded', 'false');
     }
 }

 // Tartalomváltás logikája
 const articleLink = document.getElementById('show-article-link');
 const sliderLink = document.getElementById('show-slider-link'); // Link a sliderhez a kártyán
 const homepageContent = document.querySelector('.homepage-grid');
 const articleContent = document.getElementById('article-content');
 const sliderContent = document.getElementById('image-slider-content'); // Slider tartalom elem

 // Navigációs linkek
 const navLinkHome = document.querySelector('nav ul.nav-links li a[href="#home"]');
 const navLinkFriss = document.querySelector('nav ul.nav-links li a[href="#friss"]'); // Cikkhez tartozó nav link
 const navLinkSztarhirek = document.querySelector('nav ul.nav-links li a[href="#sztarhirek"]'); // Sliderhez tartozó nav link
 const navTitleLink = document.querySelector('.nav-title'); // Navigációs cím link

 // Slider elemek
 const sliderImage = document.getElementById('current-slider-image');
 const prevButton = document.getElementById('prev-slide-button');
 const nextButton = document.getElementById('next-slide-button');

 // Képek forrásai a sliderhez (helyettesítsd valós URL-ekkel)
 const imageSources = [
     'kepek/sztarfoto1',
     'kepek/sztarfoto2',
     'kepek/sztarfoto3',
     'kepek/sztarfoto4',
     'kepek/sztarfoto5',

 ];
 let currentImageIndex = 0;
 // Funkció az aktív nav link beállításához
 function setActiveNavLink(activeLink) {
     // Összes linkről eltávolítjuk az 'active' class-t
     document.querySelectorAll('nav ul.nav-links li a').forEach(link => {
         link.classList.remove('active');
     });
     // Hozzáadjuk az 'active' class-t a megadott linkhez
     if (activeLink) {
         activeLink.classList.add('active');
     }
 }

 // Slider léptető funkciók
 function showNextImage() {
     currentImageIndex = (currentImageIndex + 1) % imageSources.length; // Ciklikus léptetés
     sliderImage.src = imageSources[currentImageIndex];
     sliderImage.alt = `Sztárfotó ${currentImageIndex + 1}`;
 }

 function showPrevImage() {
     currentImageIndex = (currentImageIndex - 1 + imageSources.length) % imageSources.length; // Ciklikus léptetés visszafelé
     sliderImage.src = imageSources[currentImageIndex];
     sliderImage.alt = `Sztárfotó ${currentImageIndex + 1}`;
 }

 // Ellenőrizzük, hogy minden szükséges elem megvan-e a DOM-ban
 if (hamburgerButton && navElement && navLinksContainer &&
     articleLink && sliderLink && homepageContent && articleContent && sliderContent &&
     navLinkHome && navLinkFriss && navLinkSztarhirek && navTitleLink &&
     sliderImage && prevButton && nextButton) {

     // Eseményfigyelő a "Döbbenetes Hír" (cikk) kártya linkre
     articleLink.addEventListener('click', (event) => {
         event.preventDefault(); // Megakadályozza az oldal ugrását a #hash-re
         showArticle();
         closeMobileMenu(); // Mobil menü bezárása kattintáskor
     });

     // Eseményfigyelő a "Sztárfotók" (slider) kártya linkre
     sliderLink.addEventListener('click', (event) => {
         event.preventDefault();
         showSlider();
         closeMobileMenu(); // Mobil menü bezárása kattintáskor
     });

     // Eseményfigyelő a "Kezdőlap" nav linkre
     navLinkHome.addEventListener('click', (event) => {
         event.preventDefault();
         showHomepage();
         closeMobileMenu();
     });

     // Eseményfigyelő a "Pletyka Portál" cím linkre (vissza a kezdőlapra)
     navTitleLink.addEventListener('click', (event) => {
         event.preventDefault();
         showHomepage();
         closeMobileMenu();
     });

     // Eseményfigyelő a "Friss Pletykák" nav linkre
     navLinkFriss.addEventListener('click', (event) => {
         event.preventDefault();
         showArticle();
         closeMobileMenu();
     });

     // Eseményfigyelő a "Sztárhírek" nav linkre
     navLinkSztarhirek.addEventListener('click', (event) => {
         event.preventDefault();
         showSlider();
         closeMobileMenu();
     });

     // Eseményfigyelők a slider gombokhoz
     nextButton.addEventListener('click', showNextImage);
     prevButton.addEventListener('click', showPrevImage);

     // Eseményfigyelő az összes nav linkre a mobil menü bezárásához
     navLinksContainer.querySelectorAll('a').forEach(link => {
         link.addEventListener('click', closeMobileMenu);
     });

 } else {
     console.error("Hiba: A tartalomváltáshoz vagy a sliderhez szükséges elemek egyike nem található a DOM-ban!");
     // Log which elements are missing for easier debugging
     console.log({
         hamburgerButton, navElement, navLinksContainer,
         articleLink, sliderLink, homepageContent, articleContent, sliderContent,
         navLinkHome, navLinkFriss, navLinkSztarhirek, navTitleLink,
         sliderImage, prevButton, nextButton
     });
 }

 // Kezdeti állapot beállítása (Kezdőlap mutatása)
 showHomepage();
