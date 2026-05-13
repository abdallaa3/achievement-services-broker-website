(function () {
  const header = document.querySelector(".site-header");
  const updateHeader = () => {
    if (!header) return;
    header.classList.toggle("is-scrolled", window.scrollY > 8);
  };
  updateHeader();
  window.addEventListener("scroll", updateHeader, { passive: true });

  const toggle = document.querySelector("[data-menu-toggle]");
  const nav = document.querySelector("[data-nav-links]");
  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      const open = nav.classList.toggle("open");
      toggle.setAttribute("aria-expanded", String(open));
    });

    nav.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        nav.classList.remove("open");
        toggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  const closeWidget = document.querySelector("[data-whatsapp-close]");
  const widget = document.querySelector("[data-whatsapp-widget]");
  if (closeWidget && widget) {
    closeWidget.addEventListener("click", () => {
      widget.style.display = "none";
    });
  }

  document.querySelectorAll("[data-contact-form]").forEach((form) => {
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      const data = new FormData(form);
      const isArabic = form.dataset.lang === "ar" || document.documentElement.lang === "ar";
      const parts = isArabic
        ? [
            "طلب جديد من الموقع:",
            "الاسم: " + (data.get("name") || ""),
            "رقم الهاتف: " + (data.get("phone") || ""),
            "الخدمة المطلوبة: " + (data.get("service") || ""),
            "الرسالة: " + (data.get("message") || "")
          ]
        : [
            "New request from website:",
            "Name: " + (data.get("name") || ""),
            "Phone: " + (data.get("phone") || ""),
            "Selected Service: " + (data.get("service") || ""),
            "Message: " + (data.get("message") || "")
          ];
      window.open("https://wa.me/971553386176?text=" + encodeURIComponent(parts.join("\n")), "_blank", "noopener");
    });
  });
})();
