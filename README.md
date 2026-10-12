# Mars Sigma Solutions — Website

A multi-page marketing website for **Mars Sigma Solutions Pvt Ltd** (India | Bahrain), built with clean, standalone HTML/CSS/JS (no framework, no CDN dependency for styles or scripts).

- **Content source:** `Website Inputs.docx` (Mars Sigma content — source of truth)
- **Design reference:** Suretax site structure/visual language
- **Contact:** +91 94440 84652 / info@marssigma.com

---

## File Structure

```
├── index.html              # Homepage — all sections
├── pages/
│   ├── business-transformation.html
│   ├── consulting.html
│   ├── third-party-inspection.html
│   ├── training.html
│   ├── contact.html
│   ├── privacy.html
│   └── terms.html
├── assets/
│   ├── css/
│   │   └── main.css        # All styles (mobile responsive, cards, navbar, footer)
│   ├── images/             # Placeholders (ready for real photography)
│   └── fonts/              # Inter (loaded from Google Fonts)
├── img/                    # Industry sector images (6 files)
├── docs/
│   └── Website Inputs.docx # Original content document (source of truth)
├── .gitignore
└── README.md               # This file
```

---

## Homepage Structure (`index.html`)

Sections in order:

| # | Section | Contents |
|---|---------|----------|
| 1 | **Navbar** | Fixed, dark, mobile burger menu. Links: Home · Business Transformation · Consulting · Third Party Inspection · Training · Contact Us · **Talk to Our Experts** (CTA) |
| 2 | **Hero** | Eyebrow, headline, tagline, description, India \| Bahrain, CTAs: *Explore Our Services* + *Talk to Our Experts* |
| 3 | **CTA Banner** | White background with maroon button: "Book Free Consultation" |
| 4 | **Who We Are** | Intro copy + stat counters (25+ Years, 1500+ Orgs, 5,000+ Trained, 5+ Countries) |
| 5 | **Core Services** | Service list links to 4 main categories (Business Transformation, Consulting, Inspection, Training) |
| 6 | **Business Transformation** | Lean, Six Sigma, 5S, TPM, TQM, Process Improvement |
| 7 | **Consulting & Certification** | ISO 9001, IATF 16949, ISO 14001, ISO 45001, ISO 27001, AS9100, ISO 22000, ISO/IEC 17025 |
| 8 | **Third-Party Inspection** | Incoming, In-Process, Final, Pre-Dispatch, Vendor Inspection, Quality Manpower Deployment |
| 9 | **Training & Competency** | Lead Auditor, Internal Auditor, Automotive Core Tools, VDA 6.3, Six Sigma, Lean Manufacturing |
| 10 | **Why Choose Us** | Six value proposition cards |
| 11 | **Industries We Serve** | Six industry cards (Engineering, Automotive, Aerospace, FMCG, IT, Process) with images from `img/` folder |
| 12 | **Standards & Frameworks** | Grid of 10 standards (ISO 9001 through Automotive Core Tools) |
| 13 | **Meet Our Founder** | Mr. Srinivasan Subramanian profile, expertise list, quote |
| 14 | **CTA Lower** | "Arrange your free initial consultation today" |
| 15 | **Footer** | Brand tagline, India \| Bahrain, phone, email, link columns, social icons, legal links |

---

## Service Categories

The website uses **4 main service categories** (aligned with the sitemap structure):

1. **Business Transformation** — Process improvement, operational excellence (Lean, Six Sigma, 5S, TPM, TQM)
2. **Consulting** — Management systems, certification readiness (ISO 9001, IATF 16949, etc.)
3. **Third-Party Inspection** — Quality assurance (Incoming, In-Process, Final, Vendor, Manpower Deployment)
4. **Training** — Competency development (Auditor, Automotive Tools, VDA 6.3, Lean, Six Sigma)

---

## Design System

| Token | Value | Use |
|---|---|---|
| `--maroon-red` | `#7A1E26` | Primary brand (buttons, eyebrows) |
| `--ink-blue` | `#0F2747` | Accent |
| `--deep-navy-black` | `#0A0F1A` | Dark backgrounds |
| `--charcoal` | `#2B2B2B` | Primary text |
| `--slate-gray` | `#6B7280` | Secondary text |
| `--light-gray` | `#E5E7EB` | Borders, highlights |
| Font | Inter (Google Fonts) | All text |

---

## Images Used

The `img/` folder contains 6 industry sector images:

- `Engineering & Manufacturing.jpg.jpeg`
- `Automotive & Auto Components.jpg.jpeg`
- `Aerospace & Precision Engineering.jpg.jpeg`
- `FMCG & Food Processing.jpg.jpeg`
- `IT & Service Organizations.jpg.jpeg`
- `Process & Industrial Sectors.jpg.jpeg`

---

## Subpages

| Page | Purpose |
|------|---------|
| `business-transformation.html` | Business improvement services overview |
| `consulting.html` | ISO consulting and certification services |
| `third-party-inspection.html` | Inspection and quality assurance services |
| `training.html` | Industrial training programs |
| `contact.html` | Enquiry form and contact details |
| `privacy.html` | Privacy policy (stub) |
| `terms.html` | Terms of service (stub) |

---

## Running Locally

```bash
python -m http.server 8123
# then open http://localhost:8123
```

---

## Content Rules

- No invented company information, testimonials, statistics or credentials.
- All content sourced from `Website Inputs.docx`.
- Images from `img/` folder replace placeholder backgrounds.
