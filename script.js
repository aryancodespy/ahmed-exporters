const navToggle = document.querySelector(".nav-toggle");
const siteNav = document.querySelector(".site-nav");
const navLinks = document.querySelectorAll(".site-nav a");
const yearNode = document.getElementById("year");
const revealNodes = document.querySelectorAll(".reveal");
const contactForm = document.getElementById("contact-form");
const formNote = document.getElementById("form-note");
const currentPage = document.body.dataset.page;

if (yearNode) {
  yearNode.textContent = new Date().getFullYear();
}

if (navToggle && siteNav) {
  navToggle.addEventListener("click", () => {
    const isOpen = siteNav.classList.toggle("is-open");
    navToggle.setAttribute("aria-expanded", String(isOpen));
  });

  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      siteNav.classList.remove("is-open");
      navToggle.setAttribute("aria-expanded", "false");
    });
  });
}

if (currentPage) {
  navLinks.forEach((link) => {
    if (link.dataset.nav === currentPage) {
      link.classList.add("is-active");
      link.setAttribute("aria-current", "page");
    }
  });
}

if (contactForm && formNote) {
  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();
    formNote.textContent = "Thanks for your inquiry. This demo form is ready to connect to your preferred backend or email workflow.";
    contactForm.reset();
  });
}

if ("IntersectionObserver" in window) {
  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          revealObserver.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.15,
      rootMargin: "0px 0px -40px 0px",
    }
  );

  revealNodes.forEach((node) => revealObserver.observe(node));
} else {
  revealNodes.forEach((node) => node.classList.add("is-visible"));
}
