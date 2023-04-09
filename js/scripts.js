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
document.addEventListener("DOMContentLoaded", function () {
    const welcomeBanner = document.querySelector("#welcome-banner");
    const trail = document.querySelector("#trail");

    if (trail) {
        welcomeBanner.addEventListener("mousemove", (event) => {
            const x = event.clientX;
            const y = event.clientY;
            trail.style.transform = `translate(${x - 10}px, ${y - 10}px)`;
        });
    }
});

