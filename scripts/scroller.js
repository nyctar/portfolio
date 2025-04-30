setTimeout(() => {
    document.querySelectorAll("nav a").forEach(link => {
      link.addEventListener("click", function (e) {
        e.preventDefault();
        const targetId = this.getAttribute("href");
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: "smooth" });
          history.replaceState(null, null, " ");
        }
      });
    });
  }, 100);