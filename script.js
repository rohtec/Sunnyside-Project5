document.querySelector('.dropdown-btn').addEventListener("click", function () {
    var dropdownNav = this.nextElementSibling;
    if (dropdownNav.style.display === "block") {
        dropdownNav.style.display = "none";
    }
    else {
        dropdownNav.style.display = "block";
    }
});