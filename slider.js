document.querySelectorAll(".slider").forEach((slider) => {
  const track = slider.querySelector(".slider-track");
  const slides = slider.querySelectorAll(".slide");
  const dotsContainer = slider.querySelector(".slider-dots");
  const btnPrev = slider.querySelector(".prev");
  const btnNext = slider.querySelector(".next");

  let index = 0;

  slides.forEach((_, i) => {
    const dot = document.createElement("div");
    dot.classList.add("dot");
    if (i === 0) dot.classList.add("aktif");
    dot.addEventListener("click", () => goTo(i));
    dotsContainer.appendChild(dot);
  });
  const dots = dotsContainer.querySelectorAll(".dot");

  function goTo(i) {
    index = i;
    track.style.transform = `translateX(-${index * 100}%)`;
    dots.forEach((d) => d.classList.remove("aktif"));
    dots[index].classList.add("aktif");
  }

  btnNext.addEventListener("click", () => goTo((index + 1) % slides.length));
  btnPrev.addEventListener("click", () => goTo((index - 1 + slides.length) % slides.length));

  setInterval(() => goTo((index + 1) % slides.length), 4000);
});