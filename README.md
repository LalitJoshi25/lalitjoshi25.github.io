# Aarav Mehta — Portfolio Website (placeholder name)

A fast, dependency-free portfolio site built with plain HTML, CSS and
JavaScript — no build step, no framework, ready to host on GitHub Pages.

The design uses a "blueprint / schematic" visual style: the hero section
draws an animated diagram of AEM's Page → Template → Component → Dialog
hierarchy, and every content panel uses corner-bracket framing instead of
generic drop-shadow cards.

**Live demo of this template:** none yet — that'll be your GitHub Pages URL
once you deploy it (see below).

---

## 1. What's in this project

```
├── index.html          ← page structure (all sections)
├── css/
│   └── style.css       ← all styling, responsive rules, animations
├── js/
│   ├── content.js      ← ALL your editable content lives here
│   └── main.js         ← renders content.js into the page + interactions
├── assets/
│   ├── resume.pdf       ← placeholder resume — replace with your real one
│   └── favicon.svg
├── .nojekyll            ← tells GitHub Pages not to run Jekyll on this repo
└── README.md
```

You should only ever need to edit **`js/content.js`** to update your name,
bio, skills, jobs, projects, certifications, education and contact info.
Everything on the page is rendered from that one file. If you want to
change the wording of a section heading or add a whole new section, you'll
edit `index.html` directly too, but day-to-day updates (a new job, a new
project) only touch `content.js`.

---

## 2. Before you publish: replace the placeholder content

Everything in the current site — the name "Aarav Mehta", the company
names, the project list, the certifications — is **dummy placeholder
data**. Open `js/content.js` and replace:

- `personal` — your real name, role, tagline, location, email, phone,
  and the real URLs for your GitHub / LinkedIn / Naukri profiles.
- `about`, `skillGroups`, `experience`, `projects`, `certifications`,
  `education` — your real history.
- Replace `assets/resume.pdf` with your actual resume file (keep the
  filename, or update `personal.resumeFile` if you rename it).

Also update the placeholder `<title>` and meta description tags near the
top of `index.html`, and the favicon if you want a custom one.

---

## 3. Making the contact form actually deliver email (required)

GitHub Pages only serves static files — there's no server to receive form
submissions. This project solves that with **Formspree**
(https://formspree.io), a free service that accepts your form's POST
request and forwards it straight to your inbox. No backend of your own
required, and it works perfectly on GitHub Pages.

### Setup (takes about 3 minutes)

1. Go to **https://formspree.io** and create a free account.
2. Click **"New Form"**, give it a name (e.g. "Portfolio contact form"),
   and set the destination to your real email address.
3. Formspree will give you a form endpoint that looks like:
   ```
   https://formspree.io/f/abcdwxyz
   ```
4. Open `js/content.js` and find the `contactForm` section near the
   bottom:
   ```js
   contactForm: {
     formspreeEndpoint: "https://formspree.io/f/YOUR_FORM_ID"
   }
   ```
   Replace `YOUR_FORM_ID` with your real ID (or paste the whole URL
   Formspree gave you).
5. Save, commit, and push. Submit a real test message from your live
   site — Formspree will send a confirmation email the first time, and
   you'll need to click the confirmation link before messages start
   arriving in your inbox.

That's it — no server, no API keys exposed in your code, and it works
with a plain static GitHub Pages deployment.

**Free-tier limits:** Formspree's free plan currently allows a limited
number of submissions per month, which is normally more than enough for
a personal portfolio. Check https://formspree.io/plans for current
limits if you expect high volume.

### If the form isn't configured yet

Until you add your real Formspree ID, submitting the form will show a
message telling *you* (not the visitor) that the form needs to be
configured — it will never silently pretend to succeed.

### Alternative: EmailJS

If you'd rather not use Formspree, **EmailJS** (https://www.emailjs.com)
is a similar free service that sends email directly from client-side
JavaScript using your own Gmail/Outlook account as the sender. It
requires a little more setup (an EmailJS account, an email service
connection, and a template), but it's also fully compatible with GitHub
Pages. If you'd like to switch, the only file that needs to change is
the `submit` handler in `js/main.js` — swap the `fetch()` call for
EmailJS's `emailjs.send()` call per their docs.

---

## 4. Running the site locally

No build tools or dependencies are required. From the project folder,
run any static file server, for example:

```bash
python3 -m http.server 8000
```

Then open **http://localhost:8000** in your browser. (Opening
`index.html` directly by double-clicking it also mostly works, but a
local server avoids some browser restrictions and is closer to how
GitHub Pages will actually serve it.)

---

## 5. Deploying to GitHub Pages

1. **Create a repository** on GitHub (e.g. `your-username.github.io` for
   a root-domain site, or any repo name for a project site).
2. **Push this project** to that repository:
   ```bash
   git init
   git add .
   git commit -m "Initial portfolio site"
   git branch -M main
   git remote add origin https://github.com/your-username/your-repo.git
   git push -u origin main
   ```
3. In your repository, go to **Settings → Pages**.
4. Under **Build and deployment → Source**, choose **"Deploy from a
   branch"**.
5. Under **Branch**, select `main` and folder `/ (root)`, then click
   **Save**.
6. GitHub will publish your site within a minute or two at:
   - `https://your-username.github.io/your-repo/` (project repo), or
   - `https://your-username.github.io/` (if your repo is named
     `your-username.github.io`)
7. Revisit **Settings → Pages** to see the live URL once it's ready.

The included `.nojekyll` file tells GitHub Pages to serve the site as-is
without running it through Jekyll, which avoids any surprises with
filenames that start with underscores or other Jekyll-specific
processing (not currently used here, but it's a safe default).

### Using a custom domain (optional)

If you own a domain and want `www.yourname.com` instead of the
`github.io` URL, add a `CNAME` file to the project root containing just
your domain name, then follow GitHub's custom domain instructions under
**Settings → Pages → Custom domain**.

---

## 6. After deploying

Add your live GitHub Pages link to:
- Your **LinkedIn** profile's Featured section
- Your **Naukri** profile
- Your **resume** (as a clickable link or QR code)

---

## 7. Testing checklist (already done, but useful if you make changes)

- [ ] Every nav link scrolls to the correct section
- [ ] Mobile menu opens/closes and closes on link click or Escape
- [ ] Site is usable at common breakpoints: ~1440px, ~820px (tablet),
      ~390px (mobile)
- [ ] Contact form: empty submit shows validation errors; valid submit
      with a real Formspree ID sends an email and shows a success
      message
- [ ] No errors in the browser console (Right-click → Inspect →
      Console)
- [ ] Resume button opens/downloads the correct PDF
- [ ] All social links point to your real profiles, not placeholders

---

## 8. Customizing the design

All design tokens (colors, fonts, spacing) are defined as CSS custom
properties at the top of `css/style.css` under `:root`. Changing a
color site-wide — for example the amber accent — is a one-line edit:

```css
:root {
  --amber: #FFB454; /* change this hex value */
}
```

The hero animation (the blueprint diagram) is inline SVG inside
`index.html` (`#blueprintSvg`) with its animation timing controlled in
`css/style.css` under the `.bp-box`, `.bp-connector` and `.bp-node`
rules, if you want to adjust or remove it.

---

## 9. Browser support & accessibility notes

- Tested in current Chromium-based browsers at desktop, tablet and
  mobile viewport sizes.
- Respects `prefers-reduced-motion` — animations and smooth scrolling
  are disabled for users who have that OS/browser setting enabled.
- All interactive elements have visible keyboard focus states and a
  "Skip to main content" link for keyboard/screen-reader users.
- Color contrast for all text/background combinations meets or exceeds
  WCAG AA.
