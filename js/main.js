/**
 * ============================================================================
 *  main.js — rendering + interactions
 *  You shouldn't need to edit this file to update your content; edit
 *  js/content.js instead. This file just reads that data and wires up
 *  navigation, animations and the contact form.
 * ============================================================================
 */
(function () {
  "use strict";

  const data = window.SITE_CONTENT;

  /* ------------------------------------------------------------------ */
  /* Small helpers                                                       */
  /* ------------------------------------------------------------------ */
  const $ = (sel, ctx = document) => ctx.querySelector(sel);
  const $$ = (sel, ctx = document) => Array.from(ctx.querySelectorAll(sel));

  function el(tag, className, html) {
    const node = document.createElement(tag);
    if (className) node.className = className;
    if (html !== undefined) node.innerHTML = html;
    return node;
  }

  function escapeHTML(str) {
    if (!str) return "";
    return str
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  const ICONS = {
    mail: '<svg viewBox="0 0 24 24"><path d="M2 5.5A1.5 1.5 0 0 1 3.5 4h17A1.5 1.5 0 0 1 22 5.5v13a1.5 1.5 0 0 1-1.5 1.5h-17A1.5 1.5 0 0 1 2 18.5v-13Zm2.2.5 7.3 5.6a.9.9 0 0 0 1 0L19.8 6H4.2ZM4 8.1V18h16V8.1l-7.1 5.5a2.9 2.9 0 0 1-3.4 0L4 8.1Z"/></svg>',
    phone: '<svg viewBox="0 0 24 24"><path d="M6.6 10.8c1.3 2.5 3.1 4.3 5.6 5.6l1.9-1.9c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.5.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.4 21 3 13.6 3 4.9c0-.6.4-1 1-1h3.1c.6 0 1 .4 1 1 0 1.2.2 2.4.6 3.5.1.3 0 .7-.2 1L6.6 10.8Z"/></svg>',
    pin: '<svg viewBox="0 0 24 24"><path d="M12 2a7 7 0 0 0-7 7c0 5.2 7 13 7 13s7-7.8 7-13a7 7 0 0 0-7-7Zm0 9.6a2.6 2.6 0 1 1 0-5.2 2.6 2.6 0 0 1 0 5.2Z"/></svg>',
    github: '<svg viewBox="0 0 24 24"><path d="M12 .5C5.73.5.5 5.73.5 12c0 5.09 3.29 9.4 7.86 10.93.57.1.78-.25.78-.55v-2.16c-3.2.7-3.87-1.36-3.87-1.36-.53-1.33-1.29-1.69-1.29-1.69-1.05-.72.08-.7.08-.7 1.16.08 1.77 1.2 1.77 1.2 1.03 1.76 2.71 1.25 3.37.96.1-.75.4-1.25.73-1.54-2.55-.29-5.24-1.28-5.24-5.7 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11 11 0 0 1 5.79 0c2.2-1.49 3.17-1.18 3.17-1.18.64 1.59.24 2.76.12 3.05.74.81 1.18 1.84 1.18 3.1 0 4.43-2.7 5.4-5.27 5.69.42.36.78 1.07.78 2.16v3.2c0 .3.2.66.79.55A10.52 10.52 0 0 0 23.5 12C23.5 5.73 18.27.5 12 .5Z"/></svg>',
    external: '<svg viewBox="0 0 24 24"><path d="M14 3h7v7h-2V6.4l-9.3 9.3-1.4-1.4L17.6 5H14V3ZM5 5h6v2H5v12h12v-6h2v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2Z"/></svg>'
  };

  /* ------------------------------------------------------------------ */
  /* Populate <title> / meta                                             */
  /* ------------------------------------------------------------------ */
  if (data.meta) {
    document.title = data.meta.siteTitle || document.title;
  }

  /* ------------------------------------------------------------------ */
  /* Hero                                                                 */
  /* ------------------------------------------------------------------ */
  function renderHero() {
    const p = data.personal;
    $("#heroTagline").textContent = p.tagline;

    const stats = [
      { label: "Experience", value: p.yearsExperience },
      { label: "Location", value: p.location.split(",")[0] },
      { label: "Status", value: p.availability }
    ];
    const statsEl = $("#heroStats");
    stats.forEach((s) => {
      const wrap = el("div");
      wrap.appendChild(el("dt", null, escapeHTML(s.label)));
      wrap.appendChild(el("dd", null, escapeHTML(s.value)));
      statsEl.appendChild(wrap);
    });

    if (p.socials.github) $("#heroGithub").href = p.socials.github;
    if (p.socials.linkedin) $("#heroLinkedin").href = p.socials.linkedin;

    $$(".nav__brand-text").forEach((n) => (n.textContent = p.name));
  }

  /* ------------------------------------------------------------------ */
  /* About                                                                */
  /* ------------------------------------------------------------------ */
  function renderAbout() {
    const container = $("#aboutText");
    data.about.paragraphs.forEach((para) => {
      container.appendChild(el("p", null, escapeHTML(para)));
    });

    const factsEl = $("#aboutFacts");
    data.about.facts.forEach((f) => {
      const wrap = el("div");
      wrap.appendChild(el("dt", null, escapeHTML(f.label)));
      wrap.appendChild(el("dd", null, escapeHTML(f.value)));
      factsEl.appendChild(wrap);
    });
  }

  /* ------------------------------------------------------------------ */
  /* Skills                                                               */
  /* ------------------------------------------------------------------ */
  function renderSkills() {
    const grid = $("#skillsGrid");
    data.skillGroups.forEach((group) => {
      const panel = el("div", "skill-panel reveal");
      panel.appendChild(el("h3", null, escapeHTML(group.category)));
      const tagWrap = el("div", "skill-panel__tags");
      group.skills.forEach((skill) => {
        tagWrap.appendChild(el("span", "tag", escapeHTML(skill)));
      });
      panel.appendChild(tagWrap);
      grid.appendChild(panel);
    });
  }

  /* ------------------------------------------------------------------ */
  /* Experience                                                           */
  /* ------------------------------------------------------------------ */
  function renderExperience() {
    const list = $("#experienceTimeline");
    data.experience.forEach((job) => {
      const item = el("li", "timeline-item reveal");

      const meta = el("div", "timeline-item__meta");
      meta.appendChild(el("span", null, escapeHTML(job.period)));
      meta.appendChild(el("span", null, "·"));
      meta.appendChild(el("span", null, escapeHTML(job.location)));
      item.appendChild(meta);

      item.appendChild(el("h3", "timeline-item__role", escapeHTML(job.role)));
      item.appendChild(el("p", "timeline-item__company", escapeHTML(job.company)));

      const points = el("ul", "timeline-item__points");
      job.points.forEach((pt) => points.appendChild(el("li", null, escapeHTML(pt))));
      item.appendChild(points);

      list.appendChild(item);
    });
  }

  /* ------------------------------------------------------------------ */
  /* Projects                                                             */
  /* ------------------------------------------------------------------ */
  function renderProjects() {
    const grid = $("#projectsGrid");
    data.projects.forEach((proj) => {
      const card = el("article", "project-card reveal");

      const header = el("div", "project-card__header");
      header.appendChild(el("h3", "project-card__title", escapeHTML(proj.title)));
      if (proj.featured) header.appendChild(el("span", "project-card__badge", "Featured"));
      card.appendChild(header);

      card.appendChild(el("p", "project-card__summary", escapeHTML(proj.summary)));

      const stack = el("div", "project-card__stack");
      proj.stack.forEach((s) => stack.appendChild(el("span", "tag", escapeHTML(s))));
      card.appendChild(stack);

      const links = el("div", "project-card__links");
      if (proj.links && proj.links.github) {
        const a = el("a", null, `${ICONS.github}<span>Code</span>`);
        a.href = proj.links.github;
        a.target = "_blank";
        a.rel = "noopener";
        links.appendChild(a);
      }
      if (proj.links && proj.links.demo) {
        const a = el("a", null, `${ICONS.external}<span>Live demo</span>`);
        a.href = proj.links.demo;
        a.target = "_blank";
        a.rel = "noopener";
        links.appendChild(a);
      }
      card.appendChild(links);

      grid.appendChild(card);
    });
  }

  /* ------------------------------------------------------------------ */
  /* Certifications                                                       */
  /* ------------------------------------------------------------------ */
  function renderCertifications() {
    const grid = $("#certsGrid");
    data.certifications.forEach((cert) => {
      const card = el("div", "cert-card reveal");
      card.appendChild(el("h3", "cert-card__name", escapeHTML(cert.name)));
      card.appendChild(el("p", "cert-card__meta", `${escapeHTML(cert.issuer)} · ${escapeHTML(cert.date)}`));
      if (cert.credentialUrl) {
        const a = el("a", "cert-card__link", "View credential");
        a.href = cert.credentialUrl;
        a.target = "_blank";
        a.rel = "noopener";
        card.appendChild(a);
      }
      grid.appendChild(card);
    });
  }

  /* ------------------------------------------------------------------ */
  /* Education                                                            */
  /* ------------------------------------------------------------------ */
  function renderEducation() {
    const list = $("#educationTimeline");
    data.education.forEach((ed) => {
      const item = el("li", "timeline-item reveal");
      const meta = el("div", "timeline-item__meta");
      meta.appendChild(el("span", null, escapeHTML(ed.period)));
      item.appendChild(meta);
      item.appendChild(el("h3", "timeline-item__role", escapeHTML(ed.degree)));
      item.appendChild(el("p", "timeline-item__company", escapeHTML(ed.institution)));
      if (ed.detail) item.appendChild(el("p", "timeline-item__detail", escapeHTML(ed.detail)));
      list.appendChild(item);
    });
  }

  /* ------------------------------------------------------------------ */
  /* Resume section links                                                 */
  /* ------------------------------------------------------------------ */
  function renderResume() {
    const file = data.personal.resumeFile;
    if (!file) return;
    $("#resumeDownload").href = file;
    $("#resumeView").href = file;
  }

  /* ------------------------------------------------------------------ */
  /* Contact list + footer links                                         */
  /* ------------------------------------------------------------------ */
  function renderContactAndFooter() {
    const p = data.personal;
    const list = $("#contactList");

    const mailLi = el("li");
    mailLi.innerHTML = `${ICONS.mail}<span><span class="contact__list-label">Email</span><a href="mailto:${escapeHTML(p.email)}">${escapeHTML(p.email)}</a></span>`;
    list.appendChild(mailLi);

    if (p.phone) {
      const phoneLi = el("li");
      phoneLi.innerHTML = `${ICONS.phone}<span><span class="contact__list-label">Phone</span><a href="tel:${escapeHTML(p.phone.replace(/\s+/g, ""))}">${escapeHTML(p.phone)}</a></span>`;
      list.appendChild(phoneLi);
    }

    const pinLi = el("li");
    pinLi.innerHTML = `${ICONS.pin}<span><span class="contact__list-label">Location</span><span>${escapeHTML(p.location)}</span></span>`;
    list.appendChild(pinLi);

    // Footer links
    const footerLinks = $("#footerLinks");
    const links = [
      { label: "GitHub", href: p.socials.github },
      { label: "LinkedIn", href: p.socials.linkedin },
      { label: "Naukri", href: p.socials.naukri },
      { label: "Twitter", href: p.socials.twitter }
    ].filter((l) => l.href);
    links.forEach((l) => {
      const a = el("a", null, escapeHTML(l.label));
      a.href = l.href;
      a.target = "_blank";
      a.rel = "noopener";
      footerLinks.appendChild(a);
    });

    $("#footerYear").textContent = new Date().getFullYear();
  }

  /* ------------------------------------------------------------------ */
  /* Navigation: mobile toggle + smooth scroll + scrollspy                */
  /* ------------------------------------------------------------------ */
  function initNav() {
    const toggle = $("#navToggle");
    const menu = $("#navMenu");

    function closeMenu() {
      menu.classList.remove("is-open");
      toggle.setAttribute("aria-expanded", "false");
      toggle.setAttribute("aria-label", "Open menu");
    }
    function openMenu() {
      menu.classList.add("is-open");
      toggle.setAttribute("aria-expanded", "true");
      toggle.setAttribute("aria-label", "Close menu");
    }

    toggle.addEventListener("click", () => {
      const isOpen = menu.classList.contains("is-open");
      isOpen ? closeMenu() : openMenu();
    });

    // Close mobile menu whenever a nav link is used
    $$("[data-scroll]").forEach((link) => {
      link.addEventListener("click", () => closeMenu());
    });

    // Close on Escape
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") closeMenu();
    });

    // Scrollspy — highlight the current section's nav link
    const sections = $$("main section[id]");
    const navLinks = $$(".nav__link[data-nav-link]");
    if ("IntersectionObserver" in window && sections.length) {
      const spy = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const id = entry.target.getAttribute("id");
              navLinks.forEach((link) => {
                link.classList.toggle("is-active", link.getAttribute("href") === `#${id}`);
              });
            }
          });
        },
        { rootMargin: "-45% 0px -50% 0px", threshold: 0 }
      );
      sections.forEach((s) => spy.observe(s));
    }
  }

  /* ------------------------------------------------------------------ */
  /* Scroll reveal — one restrained, IO-driven pattern                   */
  /* ------------------------------------------------------------------ */
  function initScrollReveal() {
    const targets = $$(".reveal");
    if (!("IntersectionObserver" in window) || !targets.length) {
      targets.forEach((t) => t.classList.add("is-visible"));
      return;
    }
    const io = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );
    targets.forEach((t) => io.observe(t));
  }

  /* ------------------------------------------------------------------ */
  /* Contact form — Formspree AJAX submission                            */
  /* ------------------------------------------------------------------ */
  function initContactForm() {
    const form = $("#contactForm");
    const status = $("#formStatus");
    const submitBtn = $("#contactSubmit");
    const endpoint = (data.contactForm && data.contactForm.formspreeEndpoint) || "";

    const fields = {
      name: { input: $("#name"), error: $("#nameError"), message: "Please enter your name." },
      email: { input: $("#email"), error: $("#emailError"), message: "Please enter a valid email address." },
      subject: { input: $("#subject"), error: $("#subjectError"), message: "Please add a subject." },
      message: { input: $("#message"), error: $("#messageError"), message: "Please write a short message." }
    };

    function validateField(key) {
      const f = fields[key];
      f.input.dataset.touched = "true";
      const valid = f.input.checkValidity() && f.input.value.trim().length > 0;
      f.error.textContent = valid ? "" : f.message;
      return valid;
    }

    Object.keys(fields).forEach((key) => {
      fields[key].input.addEventListener("blur", () => validateField(key));
      fields[key].input.addEventListener("input", () => {
        if (fields[key].input.dataset.touched === "true") validateField(key);
      });
    });

    function setStatus(text, state) {
      status.textContent = text;
      if (state) status.setAttribute("data-state", state);
      else status.removeAttribute("data-state");
    }

    form.addEventListener("submit", async (e) => {
      e.preventDefault();

      const results = Object.keys(fields).map((key) => validateField(key));
      const allValid = results.every(Boolean);
      if (!allValid) {
        setStatus("Please fix the highlighted fields.", "error");
        return;
      }

      // Honeypot: if filled in, silently "succeed" without sending anywhere (likely a bot)
      const honeypot = $("#companyWebsite");
      if (honeypot && honeypot.value) {
        form.reset();
        setStatus("Thanks! Your message has been sent.", "success");
        return;
      }

      if (!endpoint || endpoint.includes("YOUR_FORM_ID")) {
        setStatus(
          "Contact form isn't configured yet. See README.md — add your Formspree endpoint in js/content.js.",
          "error"
        );
        return;
      }

      const payload = {
        name: fields.name.input.value.trim(),
        email: fields.email.input.value.trim(),
        subject: fields.subject.input.value.trim(),
        message: fields.message.input.value.trim()
      };

      submitBtn.disabled = true;
      submitBtn.querySelector(".btn__label").textContent = "Sending…";
      setStatus("Sending your message…", "sending");

      try {
        const res = await fetch(endpoint, {
          method: "POST",
          headers: { "Content-Type": "application/json", Accept: "application/json" },
          body: JSON.stringify(payload)
        });

        if (res.ok) {
          form.reset();
          Object.values(fields).forEach((f) => (f.input.dataset.touched = "false"));
          setStatus("Thanks! Your message has been sent — I'll get back to you soon.", "success");
        } else {
          const data = await res.json().catch(() => null);
          const msg = data && data.errors ? data.errors.map((er) => er.message).join(", ") : null;
          setStatus(msg || "Something went wrong sending your message. Please try emailing me directly.", "error");
        }
      } catch (err) {
        setStatus("Network error — please check your connection or email me directly.", "error");
      } finally {
        submitBtn.disabled = false;
        submitBtn.querySelector(".btn__label").textContent = "Send message";
      }
    });
  }

  /* ------------------------------------------------------------------ */
  /* Init                                                                 */
  /* ------------------------------------------------------------------ */
  function init() {
    if (!data) {
      console.error("SITE_CONTENT is missing — check that js/content.js loaded before js/main.js.");
      return;
    }
    renderHero();
    renderAbout();
    renderSkills();
    renderExperience();
    renderProjects();
    renderCertifications();
    renderEducation();
    renderResume();
    renderContactAndFooter();

    initNav();
    initScrollReveal();
    initContactForm();

    // Mark section headers/ledes for reveal too (subtle, single pattern)
    $$(".eyebrow, .section-title, .section-lede").forEach((n) => n.classList.add("reveal"));
    initScrollReveal();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
