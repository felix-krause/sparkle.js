window.addEventListener('DOMContentLoaded', () => {
    var i = 0;
    document.querySelectorAll(".grid>div").forEach(el => {
        i++
        el.sparkle({
            starsource: `${i}`,
            count: i
        });
    });
});
