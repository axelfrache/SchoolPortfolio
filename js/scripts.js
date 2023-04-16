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
