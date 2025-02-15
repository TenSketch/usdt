// GSAP Animation for Navbar Scroll Effect

document.addEventListener("DOMContentLoaded", function () {
    const navbar = document.querySelector(".navbar");

    window.addEventListener("scroll", function () {
        if (window.scrollY > 50) {
            navbar.classList.add("scrolled");
        } else {
            navbar.classList.remove("scrolled");
        }
    });

    gsap.from(".navbar", { opacity: 0, y: -20, duration: 1, ease: "power2.out" });
});

//   coomon section gsap
document.addEventListener("DOMContentLoaded", function () {
    gsap.to(".gsap-fade", { opacity: 1, y: 0, duration: 1, stagger: 0.3, ease: "power2.out" });
});
