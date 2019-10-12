window.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll(".grid").sparkle({
        starsource: document.querySelector(".smile"),
        count: 16,
        minAge: 300,
        maxAge: 700
    });
});
