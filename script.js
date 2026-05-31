const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
});

sections.forEach((section) => {
  observer.observe(section);
});

// Fade In Sections

const sections = document.querySelectorAll(
  ".about, .portfolio, .services, .verse, .contact"
);

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
});

sections.forEach((section) => {
  observer.observe(section);
});

// Portfolio Lightbox

document.querySelectorAll(".gallery img").forEach(img => {

  img.addEventListener("click", () => {

    const overlay = document.createElement("div");

    overlay.style.position = "fixed";
    overlay.style.top = "0";
    overlay.style.left = "0";
    overlay.style.width = "100%";
    overlay.style.height = "100%";
    overlay.style.background = "rgba(0,0,0,0.9)";
    overlay.style.zIndex = "9999";

    overlay.innerHTML = `
      <img src="${img.src}"
      style="
      max-width:90%;
      max-height:90%;
      position:absolute;
      top:50%;
      left:50%;
      transform:translate(-50%,-50%);
      border-radius:12px;
      ">
    `;

    document.body.appendChild(overlay);

    overlay.addEventListener("click", () => {
      overlay.remove();
    });

  });

});
