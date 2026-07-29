const menuBtn = document.getElementById("menuBtn");
const navbar = document.getElementById("navbar");
const quoteForm = document.getElementById("quoteForm");

// ==========================================
// 1. MENÚ MÓVIL
// ==========================================
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

// ==========================================
// 2. FORMULARIO Y VALIDACIÓN
// ==========================================

// Función auxiliar para mostrar el error en rojo
function showError(inputId, message) {
  document.getElementById(inputId).classList.add("error-border");
  const errorSpan = document.getElementById(inputId + "Error");
  if (errorSpan) errorSpan.textContent = message;
}

// Función auxiliar para limpiar todos los errores (al enviar)
function clearErrors() {
  document.querySelectorAll(".error-border").forEach(el => el.classList.remove("error-border"));
  document.querySelectorAll(".error-msg").forEach(el => el.textContent = "");
}

// ¡NUEVO!: Quitar el rojo automáticamente apenas el usuario escribe o selecciona algo
const formInputs = document.querySelectorAll("#quoteForm input, #quoteForm select, #quoteForm textarea");
formInputs.forEach(input => {
  input.addEventListener("input", function() {
    // Si el campo ya no está vacío, quitamos el borde rojo y el texto
    if (this.value.trim() !== "") {
      this.classList.remove("error-border");
      const errorSpan = document.getElementById(this.id + "Error");
      if (errorSpan) {
        errorSpan.textContent = "";
      }
    }
  });
});

// Lógica de envío del formulario
quoteForm.addEventListener("submit", function (e) {
  e.preventDefault(); 
  clearErrors();      

  let isValid = true;

  const name = document.getElementById("name").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const email = document.getElementById("email").value.trim();
  const moveDate = document.getElementById("moveDate").value;
  const pickup = document.getElementById("pickup").value.trim();
  const destination = document.getElementById("destination").value.trim();
  const service = document.getElementById("service").value;
  const message = document.getElementById("message").value.trim();

  if (name === "") { showError("name", "Please enter your full name."); isValid = false; }
  if (phone === "") { showError("phone", "Please enter your phone number."); isValid = false; }
  if (moveDate === "") { showError("moveDate", "Please select a moving date."); isValid = false; }
  if (pickup === "") { showError("pickup", "Please enter where you are moving from."); isValid = false; }
  if (destination === "") { showError("destination", "Please enter your destination."); isValid = false; }
  if (service === "") { showError("service", "Please select a service type."); isValid = false; }
  if (message === "") { showError("message", "Please add some details about your move."); isValid = false; }

  if (!isValid) return;

  const whatsappNumber = "13479671482";

  const text = `
Hello Elisa Moving Services, I would like a free estimate.

👤 Name: ${name}
📱 Phone: ${phone}
✉️ Email: ${email || "Not provided"}

📅 Date: ${moveDate}
📍 From: ${pickup}
🏁 To: ${destination}
🚚 Service: ${service}

📝 Details:
${message}
  `;

  const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`;
  window.open(url, "_blank");

  quoteForm.reset();
});

// ==========================================
// 3. ANIMACIONES AL HACER SCROLL
// ==========================================
const elements = document.querySelectorAll(
  ".service-card, .about-img, .about-text, .why-card, .gallery-grid img, .contact-info, .contact-form, .process-card"
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