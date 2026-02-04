// Mobile menu toggle
const menuToggle = document.getElementById("menu-toggle");
const closeMenu = document.getElementById("close-menu");
const sidebar = document.getElementById("mobile-sidebar");
const overlay = document.getElementById("overlay");
const menuIcon = document.getElementById("menu-icon");

function openMenu() {
  sidebar.classList.remove("-translate-x-full");
  overlay.classList.remove("invisible", "opacity-0");
  overlay.classList.add("visible", "opacity-100");
  menuIcon.classList.remove("fa-bars");
  menuIcon.classList.add("fa-xmark");
}

function closeMenuFunc() {
  sidebar.classList.add("-translate-x-full");
  overlay.classList.add("invisible", "opacity-0");
  overlay.classList.remove("visible", "opacity-100");
  menuIcon.classList.remove("fa-xmark");
  menuIcon.classList.add("fa-bars");
}

menuToggle.addEventListener("click", openMenu);
closeMenu.addEventListener("click", closeMenuFunc);
overlay.addEventListener("click", closeMenuFunc);

// Mobile dropdown toggle (for "About")
document.querySelectorAll(".mobile-dropdown-toggle").forEach((btn) => {
  btn.addEventListener("click", () => {
    const dropdown = btn.nextElementSibling;
    const icon = btn.querySelector("i");
    dropdown.classList.toggle("hidden");
    icon.classList.toggle("rotate-180");
  });
});

const header = document.getElementById("main-header");
let lastScroll = 0;

window.addEventListener("scroll", () => {
  const currentScroll = window.pageYOffset;

  // إخفاء عند النزول، إظهار عند الصعود
  if (currentScroll > lastScroll && currentScroll > 100) {
    // Scroll Down
    header.classList.add("navbar-hidden");
  } else {
    // Scroll Up
    header.classList.remove("navbar-hidden");
  }

  // إضافة خلفية داكنة أكثر عند السكرول
  if (currentScroll > 50) {
    header.classList.add("py-3", "bg-[#0a0a0a]");
    header.classList.remove("py-4");
  } else {
    header.classList.remove("py-3", "bg-[#0a0a0a]");
    header.classList.add("py-4");
  }

  lastScroll = currentScroll;
});

// Select all containers
const card = document.querySelector(".card-container");
const inner = card.querySelector(".card-inner");

card.addEventListener("mousemove", (e) => {
  const rect = card.getBoundingClientRect();

  // Calculate mouse position relative to card center
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;

  const centerX = rect.width / 2;
  const centerY = rect.height / 2;

  // Calculate rotation (adjust the '20' to increase/decrease tilt intensity)
  const rotateX = ((y - centerY) / centerY) * 10;
  const rotateY = ((x - centerX) / centerX) * -10;

  inner.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
});

// Reset position when mouse leaves
card.addEventListener("mouseleave", () => {
  inner.style.transform = "rotateX(0deg) rotateY(0deg)";
});

const card2 = document.querySelector(".card-container-2");
const inner2 = card2.querySelector(".card-inner-2");

card2.addEventListener("mousemove", (e) => {
  const rect = card2.getBoundingClientRect();

  // Calculate mouse position relative to card center
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;

  const centerX = rect.width / 2;
  const centerY = rect.height / 2;

  // Calculate rotation (adjust the '20' to increase/decrease tilt intensity)
  const rotateX = ((y - centerY) / centerY) * 10;
  const rotateY = ((x - centerX) / centerX) * -10;

  inner2.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
});

// Reset position when mouse leaves
card2.addEventListener("mouseleave", () => {
  inner2.style.transform = "rotateX(0deg) rotateY(0deg)";
});

const bike = document.querySelector(".scrolling-bike");

let lastScrollY = window.scrollY;
let currentX = 0; // current horizontal position
const moveAmount = 3; // pixels per scroll event

window.addEventListener("scroll", () => {
  const currentScrollY = window.scrollY;

  if (currentScrollY > lastScrollY) {
    // scrolling down → move right
    currentX += moveAmount;
  } else {
    // scrolling up → move left
    currentX -= moveAmount;
  }

  bike.style.transform = `translateX(${currentX}px)`;
  lastScrollY = currentScrollY;
});

const magnetArea = document.getElementById("magnet-area");
const bikeImg = document.getElementById("bicycle-img");

magnetArea.addEventListener("mousemove", (e) => {
  const { left, top, width, height } = magnetArea.getBoundingClientRect();

  // حساب مركز العنصر
  const centerX = left + width / 2;
  const centerY = top + height / 2;

  // حساب المسافة بين الماوس والمركز
  const mouseX = e.clientX - centerX;
  const mouseY = e.clientY - centerY;

  // قوة المغناطيس (التحريك)
  const force = 0.15;
  const moveX = mouseX * force;
  const moveY = mouseY * force;

  // قوة الدوران (2D Effect)
  const rotateY = mouseX * 0.05;
  const rotateX = -mouseY * 0.05;

  bikeImg.style.transform = `translate(${moveX}px, ${moveY}px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
});

// إعادة الدراجة لمكانها عند خروج الماوس
magnetArea.addEventListener("mouseleave", () => {
  bikeImg.style.transform = `translate(0px, 0px) rotateX(0deg) rotateY(0deg)`;
});

document.querySelectorAll(".faq-btn").forEach((button) => {
  button.addEventListener("click", () => {
    const currentItem = button.parentElement;
    const content = button.nextElementSibling;
    const icon = button.querySelector("i");
    const title = button.querySelector("span");

    // Toggle logic
    const isOpen =
      content.style.maxHeight !== "0px" && content.style.maxHeight !== "";

    // Close all other items
    document.querySelectorAll(".faq-content").forEach((c) => {
      c.style.maxHeight = "0px";
      c.parentElement
        .querySelector("i")
        .classList.replace("fa-chevron-up", "fa-chevron-down");
      c.parentElement
        .querySelector("i")
        .classList.replace("text-orange-600", "text-zinc-500");
      c.parentElement.querySelector("span").classList.remove("text-orange-600");
      c.parentElement.querySelector("span").classList.add("text-white");
    });

    // Toggle current item
    if (!isOpen) {
      content.style.maxHeight = "500px";
      icon.classList.replace("fa-chevron-down", "fa-chevron-up");
      icon.classList.add("text-orange-600");
      title.classList.add("text-orange-600");
      title.classList.remove("text-white");
    }
  });
});
// Select all cards
const cards = document.querySelectorAll(".service-card");

cards.forEach((card) => {
  // When mouse enters, start the floating animation
  card.addEventListener("mouseenter", () => {
    card.classList.add("animate-float");
  });

  // When mouse leaves, remove the animation and return to original position
  card.addEventListener("mouseleave", () => {
    card.classList.remove("animate-float");
  });
});

const testimonials = [
  {
    name: "Sarah Lisgun",
    role: "Bike Rider",
    image: "https://i.pravatar.cc/150?u=sarah",
    text: "A bicycle, also called a pedal cycle, bike or cycle, is a human-powered or motor-powered assisted, pedal-driven, single-track vehicle, having two wheels attached to a frame, one behind the other. A bicycle rider is called a cyclist, or bicyclist.",
  },
  {
    name: "John Mueller",
    role: "Mountain Biker",
    image: "https://i.pravatar.cc/150?u=john",
    text: "A bicycle, also called a pedal cycle, bike or cycle, is a human-powered or motor-powered assisted, pedal-driven, single-track vehicle, having two wheels attached to a frame, one behind the other. A bicycle rider is called a cyclist, or bicyclist.",
  },
];

let currentIndex = 0;

function updateSlider() {
  const card = document.getElementById("testimonial-card");
  card.classList.add("opacity-0");

  setTimeout(() => {
    document.getElementById("user-name").innerText =
      testimonials[currentIndex].name;
    document.getElementById("user-role").innerText =
      testimonials[currentIndex].role;
    document.getElementById("user-image").src =
      testimonials[currentIndex].image;
    document.getElementById("testimonial-text").innerText =
      testimonials[currentIndex].text;
    card.classList.remove("opacity-0");
  }, 300);
}

function nextSlide() {
  currentIndex = (currentIndex + 1) % testimonials.length;
  updateSlider();
}

function toggleAccordion(button) {
  const item = button.parentElement;
  const content = button.nextElementSibling;
  const icon = button.querySelector("svg");
  const text = button.querySelector("span");

  // Close others
  document.querySelectorAll(".accordion-content").forEach((c) => {
    if (c !== content) {
      c.style.maxHeight = "0";
      c.parentElement.classList.remove("bg-[#0c0c0c]");
      c.parentElement
        .querySelector("svg")
        .classList.remove("rotate-180", "text-orange-600");
      c.parentElement.querySelector("span").classList.remove("text-orange-600");
      c.parentElement.querySelector("span").classList.add("text-white");
    }
  });

  // Toggle current
  if (content.style.maxHeight === "0px" || content.style.maxHeight === "") {
    content.style.maxHeight = "500px";
    item.classList.add("bg-[#0c0c0c]");
    icon.classList.add("rotate-180", "text-orange-600");
    text.classList.remove("text-white");
    text.classList.add("text-orange-600");
  } else {
    content.style.maxHeight = "0";
    item.classList.remove("bg-[#0c0c0c]");
    icon.classList.remove("rotate-180", "text-orange-600");
    text.classList.add("text-white");
    text.classList.remove("text-orange-600");
  }
}
document
  .getElementById("contact-form")
  .addEventListener("submit", function (e) {
    e.preventDefault();
    const btn = e.target.querySelector("button");
    const originalText = btn.innerText;

    btn.innerText = "Sending...";
    btn.disabled = true;

    setTimeout(() => {
      alert("Thank you! Your message has been sent.");
      btn.innerText = originalText;
      btn.disabled = false;
      e.target.reset();
    }, 1500);
  });

document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();
  alert("Form submitted successfully!");
});

// Reset position when mouse leaves
card.addEventListener("mouseleave", () => {
  inner.style.transform = "rotateX(0deg) rotateY(0deg)";
});

document.querySelectorAll(".faq-btn").forEach((button) => {
  button.addEventListener("click", () => {
    const currentItem = button.parentElement;
    const content = button.nextElementSibling;
    const icon = button.querySelector("i");
    const title = button.querySelector("span");

    // Toggle logic
    const isOpen =
      content.style.maxHeight !== "0px" && content.style.maxHeight !== "";

    // Close all other items
    document.querySelectorAll(".faq-content").forEach((c) => {
      c.style.maxHeight = "0px";
      c.parentElement
        .querySelector("i")
        .classList.replace("fa-chevron-up", "fa-chevron-down");
      c.parentElement
        .querySelector("i")
        .classList.replace("text-orange-600", "text-zinc-500");
      c.parentElement.querySelector("span").classList.remove("text-orange-600");
      c.parentElement.querySelector("span").classList.add("text-white");
    });

    // Toggle current item
    if (!isOpen) {
      content.style.maxHeight = "500px";
      icon.classList.replace("fa-chevron-down", "fa-chevron-up");
      icon.classList.add("text-orange-600");
      title.classList.add("text-orange-600");
      title.classList.remove("text-white");
    }
  });
});