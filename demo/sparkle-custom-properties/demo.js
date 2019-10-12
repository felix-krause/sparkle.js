window.addEventListener('DOMContentLoaded', () => {
    document.getElementById("sparkle").sparkle({
        position: "afterbegin",
        count: 25,
        minAge: 500,
        maxAge: 2000,
        size: {
            width: "15px",
            height: "15px"
        }
    });
});
