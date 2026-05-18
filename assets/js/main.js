(function () {
  const googleAdsEvents = {
    whatsapp: "AW-17857671203/_YzhCMbqiK0cEKPgmcNC",
    phone: "AW-17857671203/elAbCPXAia0cEKPgmcNC"
  };

  const sendGoogleAdsConversion = (sendTo) => {
    if (typeof window.gtag !== "function") return;
    window.gtag("event", "conversion", {
      send_to: sendTo,
      value: 1.0,
      currency: "EGP"
    });
  };

  document.addEventListener("click", (event) => {
    const link = event.target.closest("a[href]");
    if (!link) return;

    const href = link.getAttribute("href") || "";
    if (href.includes("wa.me/971553386176")) {
      if (typeof window.gtag === "function") {
        window.gtag("event", "whatsapp_click", {
          event_category: "contact",
          event_label: href
        });
      }
      sendGoogleAdsConversion(googleAdsEvents.whatsapp);
    } else if (href === "tel:+971553386176" && typeof window.gtag === "function") {
      window.gtag("event", "phone_click", {
        event_category: "contact",
        event_label: href
      });
      sendGoogleAdsConversion(googleAdsEvents.phone);
    }
  });

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
      if (typeof window.gtag === "function") {
        window.gtag("event", "whatsapp_click", {
          event_category: "contact",
          event_label: "contact_form"
        });
      }
      sendGoogleAdsConversion(googleAdsEvents.whatsapp);
      window.open("https://wa.me/971553386176?text=" + encodeURIComponent(parts.join("\n")), "_blank", "noopener");
    });
  });
})();
