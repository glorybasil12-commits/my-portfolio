document.addEventListener("DOMContentLoaded", () => { const buttons = document.querySelectorAll('a[href^="#"]');
buttons.forEach((button) => { button.addEventListener("click", (event) => { const targetId = button.getAttribute("href");
  if (targetId === "#") {
    event.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
    return;
  }

  const target = document.querySelector(targetId);

  if (target) {
    event.preventDefault();
    target.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
  }
});
});
console.log("Design portfolio loaded successfully!"); });