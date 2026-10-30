// Scroll reveal: elemen dengan class "reveal" muncul fade-in + geser
// ke atas pas pertama kali masuk layar pas discroll.
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      observer.unobserve(entry.target); // cukup sekali aja
    }
  });
}, { threshold: 0.15 });

document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
