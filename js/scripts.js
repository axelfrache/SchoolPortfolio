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

document.addEventListener("DOMContentLoaded", function () {
    const forms = document.getElementsByClassName("needs-validation");

    Array.prototype.filter.call(forms, function (form) {
        form.addEventListener("submit", function (event) {
            if (form.checkValidity() === false) {
                event.preventDefault();
                event.stopPropagation();
            }
            form.classList.add("was-validated");
        }, false);
    });
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

const welcomeBanner = document.getElementById('welcome-banner');

var colors = [[62,35,255],
    [60,255,60],
    [255,35,98],
    [45,175,230],
    [255,0,255],
    [255,128,0]];


var step = 0;

var colorIndices = [0,1,2,3];

var gradientSpeed = 0.002;

function updateGradient() {

    if ( $===undefined ) return;

    var c0_0 = colors[colorIndices[0]];
    var c0_1 = colors[colorIndices[1]];
    var c1_0 = colors[colorIndices[2]];
    var c1_1 = colors[colorIndices[3]];

    var istep = 1 - step;
    var r1 = Math.round(istep * c0_0[0] + step * c0_1[0]);
    var g1 = Math.round(istep * c0_0[1] + step * c0_1[1]);
    var b1 = Math.round(istep * c0_0[2] + step * c0_1[2]);
    var color1 = "rgb("+r1+","+g1+","+b1+")";

    var r2 = Math.round(istep * c1_0[0] + step * c1_1[0]);
    var g2 = Math.round(istep * c1_0[1] + step * c1_1[1]);
    var b2 = Math.round(istep * c1_0[2] + step * c1_1[2]);
    var color2 = "rgb("+r2+","+g2+","+b2+")";

    $('#welcome-banner').css({
        background: "-webkit-gradient(linear, left top, right top, from("+color1+"), to("+color2+"))"}).css({
        background: "-moz-linear-gradient(left, "+color1+" 0%, "+color2+" 100%)"});

    step += gradientSpeed;
    if ( step >= 1 )
    {
        step %= 1;
        colorIndices[0] = colorIndices[1];
        colorIndices[2] = colorIndices[3];

        colorIndices[1] = ( colorIndices[1] + Math.floor( 1 + Math.random() * (colors.length - 1))) % colors.length;
        colorIndices[3] = ( colorIndices[3] + Math.floor( 1 + Math.random() * (colors.length - 1))) % colors.length;

    }
}

setInterval(updateGradient,10);

const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightboxImg');
const closeLightbox = document.getElementById('closeLightbox');

document.querySelectorAll('.screen img').forEach(img => {
    img.addEventListener('click', function () {
        lightbox.style.display = 'flex';
        lightboxImg.src = this.src;
        document.body.classList.add('lightbox-open');
    });
});

document.querySelectorAll('.screenAvenue img').forEach(img => {
    img.addEventListener('click', function () {
        lightbox.style.display = 'flex';
        lightboxImg.src = this.src;
        document.body.classList.add('lightbox-open');
    });
});

closeLightbox.addEventListener('click', function () {
    lightbox.style.display = 'none';
    document.body.classList.remove('lightbox-open');
});

lightbox.addEventListener('click', function (e) {
    if (e.target === lightbox) {
        lightbox.style.display = 'none';
        document.body.classList.remove('lightbox-open');
    }
});