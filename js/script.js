const menuBtn = document.getElementById("menuBtn");
const navbar = document.getElementById("navbar");
const quoteForm = document.getElementById("quoteForm");

menuBtn.addEventListener("click", () => {
  navbar.classList.toggle("active");

  if (navbar.classList.contains("active")) {
    menuBtn.textContent = "×";
  } else {
    menuBtn.textContent = "☰";
  }
});

document.querySelectorAll(".navbar a").forEach(link => {
  link.addEventListener("click", () => {
    navbar.classList.remove("active");
    menuBtn.textContent = "☰";
  });
});

quoteForm.addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const email = document.getElementById("email").value.trim();
  const service = document.getElementById("service").value;
  const message = document.getElementById("message").value.trim();

  const whatsappNumber = "13479671482";

  const text = `
Hello Elisa Moving Services, I would like a free estimate.

Name: ${name}
Phone: ${phone}
Email: ${email}
Service: ${service}

Message:
${message}
  `;

  const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`;

  window.open(url, "_blank");

  quoteForm.reset();
});

const elements = document.querySelectorAll(
  ".service-card, .about-img, .about-text, .why-card, .gallery-grid img, .contact-info, .contact-form"
);

elements.forEach(element => {
  element.classList.add("reveal");
});

window.addEventListener("scroll", revealOnScroll);

function revealOnScroll() {
  const windowHeight = window.innerHeight;

  elements.forEach(element => {
    const elementTop = element.getBoundingClientRect().top;

    if (elementTop < windowHeight - 80) {
      element.classList.add("active");
    }
  });
}

revealOnScroll();