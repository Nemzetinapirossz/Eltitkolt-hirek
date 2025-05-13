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
// ... existing code ...
 // Képek forrásai a sliderhez (helyettesítsd valós URL-ekkel)
 const imageSources = [
    './kepek/szf1.jpg',
    './kepek/szf2.jpg',
    './kepek/szf3.jpg',
    './kepek/szf4.jpg',
    './kepek/szf5.jpg',
    './kepek/szf6.jpg',
    './kepek/szf7.jpg',
    './kepek/szf8.jpg',
    './kepek/szf9.jpg',
    './kepek/szf10.jpg',
    './kepek/szf11.jpg',
    './kepek/szf12.jpg',
    './kepek/szf13.jpg',
    './kepek/szf14.jpg',
    './kepek/szf15.jpg',
    './kepek/szf16.jpg',
    './kepek/szf17.jpg',
    './kepek/szf18.jpg',
    './kepek/szf18.jpg',
    './kepek/szf19.jpg',
    './kepek/szf20.jpg',
];
let currentImageIndex = 0;

// Function to set the image source and alt text
function displayCurrentImage() {
   if (sliderImage && imageSources.length > 0) { // Ensure sliderImage and sources are available
       sliderImage.src = imageSources[currentImageIndex];
       sliderImage.alt = `Sztárfotó ${currentImageIndex + 1}`;
   }
}

// Slider léptető funkciók
function showNextImage() {
   if (!imageSources || imageSources.length === 0) return; // Guard clause for empty image array
   currentImageIndex = (currentImageIndex + 1) % imageSources.length; // Ciklikus léptetés
   displayCurrentImage();
}

function showPrevImage() {
   if (!imageSources || imageSources.length === 0) return; // Guard clause for empty image array
   currentImageIndex = (currentImageIndex - 1 + imageSources.length) % imageSources.length; // Ciklikus léptetés visszafelé
   displayCurrentImage();
}

// Initial display of the first image on page load
// Ensure sliderImage is present before attempting to set its src
if (sliderImage) {
   displayCurrentImage();
}

// Eseményfigyelők a slider gombokhoz
// Ensure buttons and sliderImage are present before adding listeners
if (sliderImage && nextButton && prevButton) {
   nextButton.addEventListener('click', showNextImage);
   prevButton.addEventListener('click', showPrevImage);
}