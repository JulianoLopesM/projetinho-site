document.addEventListener("DOMContentLoaded", function () {
    const toggleButton = document.querySelector(".toggle-button");
    const expandable = document.querySelector(".expandable");

    toggleButton.addEventListener("click", function () {
        expandable.classList.toggle("active");
    });
});