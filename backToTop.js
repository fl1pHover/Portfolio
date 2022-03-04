window.addEventListener("scroll", function() {
    var header = document.getElementById("navbar");
    header.classList.toggle("sticky", window.scrollY > 0)
})

window.addEventListener("scroll", function() {
    var header = document.getElementById("backTop");
    header.classList.toggle("active", window.scrollY > 0)
})

function scrollToTop() {
    widnow.scrollTo({
        top: 200,
        behavior: 'smooth',
    })
}