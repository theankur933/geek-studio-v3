const io = new IntersectionObserver(
  (es) =>
    es.forEach((e) => {
      if (e.isIntersecting) {
        e.target.classList.add("in");
        io.unobserve(e.target);
      }
    }),
  { threshold: 0.12 },
);
document.querySelectorAll(".reveal").forEach((el, i) => {
  el.style.transitionDelay = (i % 4) * 80 + "ms";
  io.observe(el);
});
document.querySelectorAll(".navbar .nav-link").forEach((l) =>
  l.addEventListener("click", () => {
    const c = document.getElementById("menu");
    if (c.classList.contains("show"))
      bootstrap.Collapse.getOrCreateInstance(c).hide();
  }),
);
document.getElementById("lead").addEventListener("submit", (e) => {
  e.preventDefault();
  const b = e.target.querySelector("button[type=submit]");
  b.innerHTML =
    '<i class="bi bi-check-circle-fill me-2"></i>Thanks! We\'ll be in touch';
  b.disabled = true;
});
