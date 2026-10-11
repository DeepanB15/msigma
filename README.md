# Mars Sigma Solutions — Website

A multi-page marketing website for **Mars Sigma Solutions Pvt Ltd** (India | Bahrain), built with clean, standalone HTML/CSS/JS (no framework, no CDN dependency for styles or scripts).

- **Content source:** `Website Inputs.docx` (Mars Sigma content — source of truth)
- **Design reference:** original Suretax site structure/visual language
- **Contact shown:** +91 94440 84652 / info@marssigma.com

---

## File Structure

```
├── index.html              # Homepage — all 13 sections (see breakdown below)
├── pages/
│   ├── about.html          # Who We Are + statistics (figures pending confirmation)
│   ├── services.html       # The six core services with tag chips
│   ├── industries.html     # Six industries served, each with relevant standards/tools
│   ├── iso-9001-2026.html  # ISO 9001:2026 transition page (six-step approach + publication note)
│   ├── founder.html        # Founder profile, expertise, proposed quote (needs founder approval)
│   ├── how-we-work.html    # Six-step engagement process (Understand → Sustain)
│   ├── contact.html        # Enquiry form (all six services dropdown) + contact details
│   ├── privacy.html        # STUB — final privacy text pending approval
│   └── terms.html          # STUB — final terms text pending approval
├── assets/
│   ├── css/
│   │   ├── main.css        # Homepage design system (tokens, cards, steps, footer, responsive)
│   │   └── subpage.css     # Shared subpage shell (navbar, hero, cards, step list, CTA, footer)
│   ├── js/
│   │   └── main.js         # Shared scripts (mobile nav toggle)
│   ├── images/             # (empty — ready for real photography)
│   └── fonts/              # (empty — Inter is currently loaded from Google Fonts)
├── docs/
│   ├── Website Inputs.docx # Original content document (source of truth, do not edit)
│   ├── sample.md           # Original Suretax content structure reference (do not edit)
│   └── docx_text.txt       # Plain-text extraction of Website Inputs.docx (do not edit)
├── .vscode/                # Editor config
├── .htmlvalidate.json      # html-validate config (allows inline styles / void style)
├── .gitignore
└── README.md               # This file
```

---

## Page Details

### `index.html` — Homepage
Sections in order, all reachable via the navbar or scrolling:

| # | Section | Contents |
|---|---------|----------|
| 1 | **Navbar** | Fixed, dark, mobile burger menu. Links: Home · About · Services · Industries · ISO 9001:2026 · Founder · How We Work · **Talk to Our Experts** (CTA) |
| 2 | **Hero** | Eyebrow, headline ("Driving Quality…"), tagline, description, India \| Bahrain, CTAs: *Explore Our Services* + *Talk to Our Experts*, gradient placeholder background |
| 3 | **Who We Are** | Intro copy + 4 stat counters (25+/1500+/5,000+/5+ — **figures need confirmation before publication**) |
| 4 | **What We Do** | Six service cards (01–06), each with tag chips (ISO 9001, IATF 16949, Lean, Six Sigma, etc.) |
| 5 | **ISO 9001:2026 Transition** | Six-step visual journey; horizontal on desktop, vertical timeline on mobile; CTA "Book Your ISO 9001:2026 Gap Assessment" |
| 6 | **Why Mars Sigma** | Six minimal differentiator cards + closing statement |
| 7 | **Industries We Serve** | Six image cards with gradient placeholders (swap for real photos) |
| 8 | **Meet Our Founder** | Mr. Srinivasan Subramanian profile, expertise list, proposed quote with approval note |
| 9 | **How We Work** | Understand → Assess → Design → Implement → Verify → Sustain |
| 10 | **Client Success** | Four engagement areas (no fabricated testimonials, per content rules) |
| 11 | **Standards & Frameworks** | Grid of 10 tiles incl. VDA 6.3 and Automotive Core Tools (APQP \| PPAP \| FMEA \| MSA \| SPC) |
| 12 | **Let's Work Together** | Final CTAs + supporting line of all six capabilities |
| 13 | **Footer** | Brand tagline, India \| Bahrain, clickable phone + email, link columns, legal links |

Also includes: **JSON-LD Organization schema**, favicon (inline SVG data URI), and a small script for the mobile menu toggle.

### `pages/contact.html`
Working client-side form (Name, Company, Phone, Email, **Service of Interest** — all six services, Message) with privacy consent note. ⚠️ Form posts to `#` — needs a backend endpoint or form service.

### `pages/iso-9001-2026.html`
Full transition methodology plus a publication-check note: the site deliberately does **not** claim ISO 9001:2026 is a published replacement for ISO 9001:2015 until official publication is confirmed.

### `pages/founder.html`
Full founder profile incl. "A Vision Beyond Compliance" and "A Message from Our Founder". The quotation is marked as **proposed brand messaging requiring founder approval**.

---

## Design System

| Token | Value | Use |
|---|---|---|
| `--black-3` | `#020e12` | Dark section/footer backgrounds |
| `--black-4` | `#11262a` | Placeholder gradients |
| `--midnight-blue` | `#001d7c` | Accent (eyebrows, primary buttons) |
| `--light-grey` | `#d2d7d5` | Accents, borders, highlights |
| Font | Inter (Google Fonts) | Headings + body |

Buttons are pill-shaped with an arrow circle (matching the reference design). Grids collapse 3→2→1 cols at 991px/479px; stat grid 4→2; ISO steps 6→3→vertical timeline.

---

## Actions Required Before Going Live

1. **Replace image placeholders** — every `.ph` / gradient block has a descriptive `aria-label` saying what photo belongs there (hero, 6 industries, founder portrait).
2. **Confirm statistics** — Years of Experience, Organizations Supported, Professionals Trained, Countries Served.
3. **Founder quote approval** before publishing.
4. **Fill `privacy.html` and `terms.html`** final text (marked as stubs on-page).
5. **Wire the enquiry form** to a real endpoint (backend/API or service like Formspree), and route submissions per the content plan.
6. **Add WhatsApp + social links** only once approved.
7. Optional: replace Inter with the Ampersans font if licensed, and swap the inline SVG favicon for the brand mark.
8. SEO: update domain in JSON-LD (`https://www.marssigma.com/`), meta og:image, and add per-page canonical URLs.

---

## Running Locally

Any static server works:

```bash
python -m http.server 8123
# then open http://localhost:8123
```

## Validation

HTML validated with `html-validate` (config in `.htmlvalidate.json`):

```bash
npx html-validate *.html
```

---

## Content Rules (carried over from the conversion brief)

- No invented company information, testimonials, statistics or credentials.
- Figures and quotes needing confirmation are marked on-page and in comments.
- Suretax content/tax content fully removed; visual design language retained.
