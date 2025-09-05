// Handle contact form
const form = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  formMessage.textContent = "Thanks for reaching out! I'll get back to you soon.";
  form.reset();
});

// Scroll to contact section when button clicked
document.getElementById("contactBtn").addEventListener("click", () => {
  document.getElementById("contact").scrollIntoView({ behavior: "smooth" });
});
