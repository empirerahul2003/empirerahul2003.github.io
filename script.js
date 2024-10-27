const images = [
    'documents/hero.jpg',
    'documents/hero2.jpg',
    'documents/hero3.jpg',
    'documents/hero4.jpg',
    // Add more image filenames as needed
];

let currentImageIndex = 0;
const slideshowContainer = document.querySelector('.slideshow-container');

function createImageElement(src) {
    const div = document.createElement('div');
    div.style.backgroundImage = `url(${src})`;
    div.classList.add('slideshow-image');
    return div;
}

function nextImage() {
    const nextIndex = (currentImageIndex + 1) % images.length;
    const nextImage = createImageElement(images[nextIndex]);
    slideshowContainer.appendChild(nextImage);

    setTimeout(() => {
        nextImage.classList.add('active');
        slideshowContainer.children[currentImageIndex].classList.remove('active');
    }, 50);

    setTimeout(() => {
        slideshowContainer.removeChild(slideshowContainer.children[currentImageIndex]);
    }, 1000);

    currentImageIndex = nextIndex;
}

// Initial setup
window.addEventListener('DOMContentLoaded', (event) => {
    slideshowContainer.appendChild(createImageElement(images[0]));
    slideshowContainer.firstChild.classList.add('active');

    // Change image every 5 seconds
    setInterval(nextImage, 5000);
});
