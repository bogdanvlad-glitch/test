// Smooth scroll
document.querySelectorAll("nav a").forEach(anchor => {
  anchor.addEventListener("click", function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href"))
      .scrollIntoView({ behavior: "smooth" });
  });
});

// Fake particles
const container = document.querySelector(".particles");

for (let i = 0; i < 40; i++) {
  const dot = document.createElement("div");
  dot.style.position = "absolute";
  dot.style.width = "3px";
  dot.style.height = "3px";
  dot.style.background = "white";
  dot.style.borderRadius = "50%";
  dot.style.top = Math.random() * 100 + "%";
  dot.style.left = Math.random() * 100 + "%";
  dot.style.opacity = Math.random();
  container.appendChild(dot);
}
