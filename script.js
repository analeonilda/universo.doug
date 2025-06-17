// Smooth scrolling for navigation links
document.querySelectorAll("a[href^=\"#\"]").forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior: "smooth"
        });
    });
});

// Initialize Swiper for the workshop carousel
const swiper = new Swiper(".swiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        640: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        1024: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
    },
});

// Add animation on scroll for elements with .fade-in-element class
const fadeInElements = document.querySelectorAll(".fade-in-element");

const observerOptions = {
    root: null,
    rootMargin: "0px",
    threshold: 0.1
};

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("fade-in-visible");
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

fadeInElements.forEach(element => {
    observer.observe(element);
});

// WhatsApp link for contact button
document.addEventListener("DOMContentLoaded", function() {
    const whatsappButton = document.querySelector(".whatsapp-button");
    if (whatsappButton) {
        whatsappButton.addEventListener("click", function(e) {
            e.preventDefault();
            const phoneNumber = "5567992837970"; // Seu número de telefone com código do país
            const message = "Olá! Tenho interesse no projeto Universo Doug e gostaria de mais informações.";
            const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
            window.open(whatsappUrl, "_blank");
        });
    }

    const ctaButton = document.querySelector(".cta-button");
    if (ctaButton) {
        ctaButton.addEventListener("click", function(e) {
            e.preventDefault();
            const phoneNumber = "5567992837970"; // Seu número de telefone com código do país
            const message = "Olá! Tenho interesse no projeto Universo Doug e gostaria de mais informações.";
            const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
            window.open(whatsappUrl, "_blank");
        });
    }
});


