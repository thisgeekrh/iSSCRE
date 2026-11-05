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

    // Google Ads conversion: someone tapped the phone number to call.
    if (eventName === "phone_click") {
      window.gtag("event", "conversion", {
        send_to: "AW-881362907/PJ_BCNflobIdENuPoqQD",
        value: 1.0,
        currency: "USD",
        transport_type: "beacon"
      });
    }
  });

  // Remember a Google Ads click for 30 days so the Hub can mark the lead
  // as coming from the ads, even if they fill out the form on a later page.
  var AD_KEY = "isscre_ad_click";
  var AD_FIELDS = ["gclid", "gbraid", "wbraid", "utm_source", "utm_medium", "utm_campaign", "utm_term"];
  try {
    var params = new URLSearchParams(window.location.search);
    if (params.get("gclid") || params.get("gbraid") || params.get("wbraid") ||
        (params.get("utm_source") === "google" && params.get("utm_medium") === "cpc")) {
      var click = { at: Date.now(), ad_landing: window.location.pathname };
      AD_FIELDS.forEach(function (key) { if (params.get(key)) click[key] = params.get(key).slice(0, 200); });
      window.localStorage.setItem(AD_KEY, JSON.stringify(click));
    }
  } catch (error) { /* storage blocked: the lead still comes through, just unmarked */ }

  function savedAdClick() {
    try {
      var click = JSON.parse(window.localStorage.getItem(AD_KEY) || "null");
      if (click && Date.now() - click.at < 30 * 24 * 60 * 60 * 1000) return click;
    } catch (error) { /* ignore */ }
    return null;
  }

  var pageOpenedAt = Date.now();

  function setHidden(form, name, value) {
    var input = form.querySelector('input[name="' + name + '"]');
    if (!input) {
      input = document.createElement("input");
      input.type = "hidden";
      input.name = name;
      form.appendChild(input);
    }
    input.value = value;
  }

  document.querySelectorAll('form[action*="hub.servernasmatt.com/leads/"]').forEach(function (form) {
    form.addEventListener("submit", function () {
      // Seconds the visitor spent on the page. Bots post straight to the Hub
      // and never send this, which is how the Hub's spam filter spots them.
      setHidden(form, "_elapsed", ((Date.now() - pageOpenedAt) / 1000).toFixed(1));
      var click = savedAdClick();
      if (!click) return;
      Object.keys(click).forEach(function (key) {
        if (key === "at" || form.querySelector('input[name="' + key + '"]')) return;
        var input = document.createElement("input");
        input.type = "hidden";
        input.name = key;
        input.value = click[key];
        form.appendChild(input);
      });
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
