// Nav Menu Code:
document.addEventListener("DOMContentLoaded", function () {
    document
        .querySelector(".nav__toggler")
        .addEventListener("click", function () {
            document.querySelector(".nav__list").classList.toggle("hidden");
        });
});

// Collapsibles Code:
const collapsibles = document.querySelectorAll(".collapsible");
collapsibles.forEach((item) =>
    item.addEventListener("click", function () {
        this.classList.toggle("collapsible--expanded");
    })
);
