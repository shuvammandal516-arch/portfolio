// MOBILE MENU

const menu = document.getElementById("menu");
const nav = document.getElementById("nav");

menu.addEventListener("click", () => {

    nav.classList.toggle("open");

    if (nav.classList.contains("open")) {
        menu.textContent = "✕";
    } else {
        menu.textContent = "☰";
    }

});


// CLOSE MENU

document.querySelectorAll("nav a").forEach(link => {

    link.addEventListener("click", () => {

        nav.classList.remove("open");

        menu.textContent = "☰";

    });

});


// 3D PHOTO EFFECT

const photo = document.querySelector(".photo-card");

document.addEventListener("mousemove", (e) => {

    if (window.innerWidth < 900) return;

    const x =
        (window.innerWidth / 2 - e.clientX) / 40;

    const y =
        (window.innerHeight / 2 - e.clientY) / 40;

    photo.style.transform =
        `rotateY(${-x}deg)
         rotateX(${y}deg)`;

});


// CONTACT FORM

const form =
    document.getElementById("contactForm");

form.addEventListener("submit", function(e) {

    e.preventDefault();

    alert(
        "Thank you! Your message is ready to send."
    );

    form.reset();

});


// CURRENT YEAR

document.getElementById("year").textContent =
    new Date().getFullYear();