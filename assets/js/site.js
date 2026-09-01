(function () {
  "use strict";

  var toggle = document.querySelector("[data-nav-toggle]");
  var nav = document.querySelector("[data-primary-nav]");

  function closeNav() {
    if (!toggle || !nav) return;
    toggle.setAttribute("aria-expanded", "false");
    nav.classList.remove("is-open");
    document.body.classList.remove("nav-open");
  }

  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      var open = toggle.getAttribute("aria-expanded") === "true";
      toggle.setAttribute("aria-expanded", String(!open));
      nav.classList.toggle("is-open", !open);
      document.body.classList.toggle("nav-open", !open);
    });

    nav.addEventListener("click", function (event) {
      if (event.target.closest("a")) closeNav();
    });

    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape") closeNav();
    });
  }

  document.querySelectorAll("[data-current-year]").forEach(function (element) {
    element.textContent = String(new Date().getFullYear());
  });

  document.addEventListener("click", function (event) {
    var link = event.target.closest("a");
    if (!link || typeof window.gtag !== "function") return;

    var href = link.getAttribute("href") || "";
    var eventName = "outbound_click";
    if (href.indexOf("tel:") === 0) eventName = "phone_click";
    if (href.indexOf("mailto:") === 0) eventName = "email_click";
    if (href.indexOf("cbmoxi.com") !== -1) eventName = "home_search_click";

    window.gtag("event", eventName, {
      link_url: link.href,
      link_text: (link.textContent || "").trim().slice(0, 100)
    });
  });

  function loadScript(src, attributes) {
    var script = document.createElement("script");
    script.src = src;
    script.async = true;
    Object.keys(attributes || {}).forEach(function (key) {
      script.setAttribute(key, attributes[key]);
    });
    document.head.appendChild(script);
  }

  function loadOptionalTools() {
    window.ChatraID = "aPdLhrXSMANfJhMAi";
    window.Chatra = window.Chatra || function () {
      (window.Chatra.q = window.Chatra.q || []).push(arguments);
    };
    loadScript("https://call.chatra.io/chatra.js");
    loadScript("https://js.hs-scripts.com/22632092.js", { id: "hs-script-loader" });
    loadScript("https://d2twz9av6or5hk.cloudfront.net/1.6/adally.js");
  }

  window.addEventListener("load", function () {
    if ("requestIdleCallback" in window) {
      window.requestIdleCallback(loadOptionalTools, { timeout: 5000 });
    } else {
      window.setTimeout(loadOptionalTools, 3000);
    }
  }, { once: true });
})();
