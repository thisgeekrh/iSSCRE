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

  // "Text us" button: the message goes to the Team Hub, which saves it as a
  // text conversation, copies it to the team line (803-999-7522) and texts the
  // visitor back from the team number.
  var TEXT_US_URL = "https://hub.servernasmatt.com/leads/text/";

  function buildTextUs() {
    if (document.querySelector("[data-text-us]")) return;
    var wrap = document.createElement("div");
    wrap.className = "text-us";
    wrap.setAttribute("data-text-us", "");
    wrap.innerHTML =
      '<button type="button" class="text-us-toggle" aria-expanded="false" aria-controls="text-us-panel">' +
        '<svg aria-hidden="true" focusable="false" width="22" height="22" viewBox="0 0 24 24"><path fill="currentColor" d="M4 3h16a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H9l-5 4v-4H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2Zm3 6.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3Zm5 0a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3Zm5 0a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3Z"/></svg>' +
        '<span>Text us</span>' +
      '</button>' +
      '<section class="text-us-panel" id="text-us-panel" role="dialog" aria-modal="false" aria-labelledby="text-us-title" hidden>' +
        '<div class="text-us-head">' +
          '<h2 id="text-us-title">Text the Tyler Simmons Team</h2>' +
          '<button type="button" class="text-us-close" aria-label="Close the text form">' +
            '<svg aria-hidden="true" focusable="false" width="18" height="18" viewBox="0 0 24 24"><path fill="currentColor" d="M18.3 5.7 12 12l6.3 6.3-1.4 1.4L10.6 13.4 4.3 19.7l-1.4-1.4L9.2 12 2.9 5.7l1.4-1.4 6.3 6.3 6.3-6.3z"/></svg>' +
          '</button>' +
        '</div>' +
        '<p class="text-us-intro">Ask us anything. We\'ll text you back from our team number, usually within the hour during the day.</p>' +
        '<form class="text-us-form" action="' + TEXT_US_URL + '" method="post" novalidate>' +
          '<div class="field"><label for="tu-name">Your name</label><input id="tu-name" name="name" autocomplete="name" required></div>' +
          '<div class="field"><label for="tu-phone">Mobile number</label><input id="tu-phone" name="phone" type="tel" autocomplete="tel" inputmode="tel" required></div>' +
          '<div class="field"><label for="tu-message">Message</label><textarea id="tu-message" name="message" rows="3" required></textarea></div>' +
          '<div class="field text-us-consent"><label><input type="checkbox" name="sms_consent" value="yes" required> I agree to receive text messages from The Tyler Simmons Team about my real estate request.</label></div>' +
          '<input class="sr-only" type="text" name="_honey" tabindex="-1" autocomplete="off" aria-hidden="true">' +
          '<p class="text-us-status" role="status" aria-live="polite"></p>' +
          '<button class="button" type="submit">Send text</button>' +
          '<p class="form-note">Message frequency varies. Message and data rates may apply. Reply STOP to opt out and HELP for help. Consent is not a condition of purchase. <a href="/privacy.html">Privacy policy</a>.</p>' +
        '</form>' +
      '</section>';
    document.body.appendChild(wrap);

    var toggle = wrap.querySelector(".text-us-toggle");
    var panel = wrap.querySelector(".text-us-panel");
    var form = wrap.querySelector("form");
    var status = wrap.querySelector(".text-us-status");
    var submit = form.querySelector('button[type="submit"]');
    var openedAt = Date.now();

    function setOpen(open) {
      panel.hidden = !open;
      toggle.setAttribute("aria-expanded", String(open));
      if (open) {
        openedAt = Math.min(openedAt, Date.now());
        form.querySelector("input").focus();
      } else {
        toggle.focus();
      }
    }

    toggle.addEventListener("click", function () { setOpen(panel.hidden); });
    wrap.querySelector(".text-us-close").addEventListener("click", function () { setOpen(false); });
    panel.addEventListener("keydown", function (event) {
      if (event.key === "Escape") setOpen(false);
    });

    function showStatus(message, ok) {
      status.textContent = message;
      status.className = "text-us-status " + (ok ? "is-ok" : "is-error");
    }

    form.addEventListener("submit", function (event) {
      event.preventDefault();
      var invalid = Array.prototype.find.call(form.elements, function (el) { return el.willValidate && !el.checkValidity(); });
      if (invalid) {
        showStatus(invalid.type === "checkbox" ? "Please check the box agreeing to get texts from us." :
          "Please fill in " + form.querySelector('label[for="' + invalid.id + '"]').textContent.toLowerCase() + ".", false);
        invalid.focus();
        return;
      }
      setHidden(form, "_elapsed", ((Date.now() - pageOpenedAt) / 1000).toFixed(1));
      var click = savedAdClick();
      if (click) Object.keys(click).forEach(function (key) { if (key !== "at") setHidden(form, key, click[key]); });
      submit.disabled = true;
      showStatus("Sending…", true);
      fetch(TEXT_US_URL + "?format=json", { method: "POST", body: new FormData(form) })
        .then(function (response) { return response.json(); })
        .then(function (result) {
          showStatus(result.message, result.ok);
          if (result.ok) {
            form.reset();
            if (typeof window.gtag === "function") window.gtag("event", "text_us_submit");
          }
        })
        .catch(function () {
          showStatus("Sorry, that didn't go through. Please call or text us at 803-999-7522.", false);
        })
        .then(function () { submit.disabled = false; });
    });
  }

  buildTextUs();
})();
