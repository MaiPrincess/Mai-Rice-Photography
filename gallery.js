// gallery.js

document.addEventListener('DOMContentLoaded', function() {
    const galleryContainer = document.getElementById('galleryContainer');
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightboxImg');

    // Import the photos array from photos.js
    // Make sure photos.js is loaded before gallery.js
    // If photos.js defines 'const photos', it will be available here
    // without needing to redefine it.

    // Function to create photo elements
    function createGallery() {
        photos.forEach(photo => {
            const photoElement = document.createElement('div');
            photoElement.classList.add('photo');

            const imgElement = document.createElement('img');
            imgElement.src = 'Gallery Pictures/' + photo;
            imgElement.alt = photo;
            imgElement.addEventListener('click', function() {
                openLightbox(photo);
            });

            photoElement.appendChild(imgElement);
            galleryContainer.appendChild(photoElement);
        });
    }

    // Open lightbox function
    function openLightbox(photo) {
        lightboxImg.src = 'Gallery Pictures/' + photo;
        lightbox.style.display = 'block';
    }

    // Close lightbox when clicking close button
    const closeBtn = document.querySelector('.close-btn');
    closeBtn.addEventListener('click', function() {
        lightbox.style.display = 'none';
    });

    // Close lightbox when clicking outside of the image
    lightbox.addEventListener('click', function(event) {
        if (event.target === lightbox) {
            lightbox.style.display = 'none';
        }
    });

    // Initialize gallery creation
    createGallery();
});
