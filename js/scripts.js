document.addEventListener("DOMContentLoaded", function () {
    const welcomeBanner = document.querySelector("#welcome-banner");
    const trail = document.querySelector("#trail");
    const themeSwitch = document.getElementById('themeSwitch');
    const forms = document.getElementsByClassName("needs-validation");

    // Pour la bannière de bienvenue
    if (trail) {
        welcomeBanner.addEventListener("mousemove", (event) => {
            const x = event.clientX;
            const y = event.clientY;
            trail.style.transform = `translate(${x - 10}px, ${y - 10}px)`;
        });
    }

    // Pour la validation des formulaires
    Array.prototype.filter.call(forms, function (form) {
        form.addEventListener("submit", function (event) {
            if (form.checkValidity() === false) {
                event.preventDefault();
                event.stopPropagation();
            }
            form.classList.add("was-validated");
        }, false);
    });

    // Pour le switch de mode
    const currentTheme = localStorage.getItem('theme');
    if (currentTheme === 'dark') {
        document.body.classList.add('dark-mode');
        themeSwitch.checked = true;
    }

    themeSwitch.addEventListener('change', () => {
        document.body.classList.toggle('dark-mode');
        const theme = document.body.classList.contains('dark-mode') ? 'dark' : 'light';
        localStorage.setItem('theme', theme);
    });
});
