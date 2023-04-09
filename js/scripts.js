let currentIndex = 0;
const carouselImages = document.querySelectorAll(".carousel-image");

function changeImage(direction) {
    const newIndex = currentIndex + direction;

    if (newIndex < 0 || newIndex >= carouselImages.length) {
        // Ne change pas d'image si l'utilisateur a atteint la première ou la dernière image
        return;
    }

    carouselImages[currentIndex].style.display = "none";
    currentIndex = newIndex;
    carouselImages[currentIndex].style.display = "block";
}


window.addEventListener("DOMContentLoaded", () => {
    carouselImages[currentIndex].style.display = "block";
});
