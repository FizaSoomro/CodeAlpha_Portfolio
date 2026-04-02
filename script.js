function scrollToSection(id) {
    document.getElementById(id).scrollIntoView({
        behavior: "smooth"
    });
}
function goNext() {
    window.location.href = "about.html";
}

function goPrev() {
    window.location.href = "index.html";
}
function goBack() {
    window.location.href = "index.html";
}