# Sunbright Recovery Center — Repo Configuration

> Drop this file at the root of `KandyPhoenix/Sunbright-Recovery`. It tells any future Claude Code session the context, stack, and workflow rules for this repo.
>
> **⚠️ START HERE — READ `STATUS.md` FIRST.** That file documents exactly what's been done, what's pending, where each thing lives, key user preferences, and approved messaging. This CLAUDE.md is foundational context; STATUS.md is the live progress log.
>
> **⚠️ THE SITE IS LIVE** at https://www.sunbrightrecovery.org (since 2026-06-27). A push to `main` publishes publicly in ~30s.
> Homepage work happens in `src/pages/index.astro`. Pages whose filename starts with `_` are the hidden clinical site and are NOT built — never un-hide one until Kandy says the facility is licensed.
> *(Corrected 2026-09-18: this line used to name `design-preview.astro` as the active file and a pages.dev preview URL. Both were stale.)*

## Project

- **Name:** Sunbright Recovery Center
- **Site:** www.sunbrightrecovery.**org** (NOT .com — the flyer shows .com, client confirmed .org)
- **Phone:** (530) 513-4294 — main SRC line (set 2026-09-18, SBR-33)
- **Parent Org:** Parish Health and Wellness (PHW Care) — phwcare.com
- **Strategy doc:** Originally drafted in `KandyPhoenix/PHWCare` under `sites/sunbright/`. The master strategy (STRATEGY.md, BRAND_VOICE.md, SEO keyword map, etc.) lives there as the source of truth for non-code planning. This repo holds the actual Astro site code + content.

## Stack

- **Framework:** Astro 4.x (static site generator)
- **Styling:** Tailwind CSS 3.x
- **Hosting:** **Cloudflare Pages** (auto-deploy on push to `main`) — NOT Vercel; that was the original plan and never happened
- **Content:** Astro Content Collections (markdown in `src/content/`)
- **Forms:** TBD with Linda — standard Astro form vs Jotform Healthcare ($30/mo for HIPAA compliance)
- **Analytics:** Google Analytics 4 (new property, separate from PHW)
- **Search Console:** Google Search Console (DNS TXT verify)

## Directory layout

```
Sunbright-Recovery/
├── CLAUDE.md                # This file
├── README.md                # Public-facing
├── SITE.md                  # Business context (mirror of PHWCare's version)
├── BRAND_VOICE.md           # Voice guide (mirror of PHWCare's version)
├── astro.config.mjs
├── tailwind.config.mjs
├── package.json
├── tsconfig.json
├── .gitignore
├── src/
│   ├── components/          # Hero, ProgramCard, FAQ, CTA, Nav, Footer, StickyPhoneButton
│   ├── layouts/             # BaseLayout, PageLayout, BlogLayout
│   ├── pages/               # File-based routing — see sitemap below
│   ├── content/             # Astro Content Collections
│   │   ├── pages/           # Long-form copy in markdown
│   │   ├── faqs/            # FAQ banks per topic
│   │   ├── team/            # Staff bios
│   │   └── blog/            # Posts (phase 2)
│   ├── schema/              # JSON-LD generators (Organization, MedicalBusiness, FAQ)
│   └── styles/              # Global Tailwind + custom CSS
├── public/                  # Static assets (images, favicon, robots.txt)
└── seo/                     # Keyword map, meta-tags CSV, competitor analysis
```

## Sitemap (12 pages + blog)

```
/                              Homepage
├── /about
├── /programs
│   ├── /programs/residential
│   ├── /programs/outpatient
│   └── /programs/sober-living
├── /what-we-treat
│   ├── /what-we-treat/alcohol
│   ├── /what-we-treat/opioids
│   ├── /what-we-treat/dual-diagnosis
│   └── /what-we-treat/trauma-addiction
├── /our-approach
├── /admissions
├── /insurance
├── /team
├── /family-resources
├── /faqs
├── /contact
├── /tour
├── /donate
└── /blog                     Phase 2
```

## Commands

```bash
# Install
npm install

# Dev server (http://localhost:4321)
npm run dev

# Type check
npm run astro check

# Build (outputs to dist/)
npm run build

# Preview production build locally
npm run preview
```

## Deploy

- Push to `main` → **Cloudflare Pages** auto-deploys to the LIVE public site (~30s)
- Push to any other branch → Cloudflare builds a preview URL
- Custom domain (`www.sunbrightrecovery.org`) configured in the Cloudflare Pages dashboard
- Verify a deploy with `curl` against the live URL — don't assume it landed

## Brand voice (MANDATORY)

Inherited from PHW Care, with rehab-specific refinements. Full guide in `BRAND_VOICE.md`. Three rules for every page:

1. **Open with empathy, not data.** First sentence meets the reader emotionally.
2. **Make the next step obvious.** Phone CTA, verify insurance, schedule tour.
3. **Never shame the visitor or their loved one.** No moral language about addiction.

See `BRAND_VOICE.md` for the full word bank (words we use, words we avoid) and example before/after copy.

## SEO

- **Target:** Statewide California
- **Strategy:** Own faith-based + Medi-Cal + Northern CA niches (Tier 3 + 4) first; aspire to head terms (Tier 1) over 12+ months
- **Schema:** JSON-LD on every page (Organization, MedicalBusiness site-wide; page-specific types per Section 7 of strategy)
- **Meta titles:** 50–60 chars; meta descriptions: 150–160 chars (see `seo/meta-tags.csv`)
- **Validate:** Every page through Google Rich Results Test before launch

## Schema requirements

Every page MUST inject JSON-LD via the `<JsonLd />` component in the layout. Schema generators live in `src/schema/`:

- `organization.ts` — site-wide Organization + LocalBusiness + MedicalBusiness
- `medicalTherapy.ts` — for /programs/* pages
- `medicalCondition.ts` — for /what-we-treat/* pages
- `faqPage.ts` — for any page with FAQs
- `person.ts` — for /team page (one per staff)
- `breadcrumb.ts` — for all non-homepage pages

Validate with: `npm run build && npm run preview`, then test each URL at https://search.google.com/test/rich-results

## Git workflow

- **Branch from:** `main`
- **Branch naming:** `feature/<short-description>` or `content/<page-name>` or `seo/<change>`
- **Commit style:** Imperative mood, focus on why ("Add Medi-Cal callout to insurance hero" not "Updated insurance.astro")
- **PRs:** Always against `main`. Cloudflare Pages builds a preview URL per branch for review before merge.

## Privacy & HIPAA

- **No PHI in markdown content.** Testimonials must be composite (clearly disclaimed) or have signed releases.
- **Forms** route to `info@sunbrightrecovery.org` (changed 2026-07-09, SBR-19, in the Web3Forms dashboard — the access key in `contact.astro` was NOT changed. There is NO `admissions@` mailbox.) If using a standard Astro form: do NOT collect medical details (only name, phone, email, "how can we help" free text). For insurance verification (collects DOB, member ID, etc.): MUST use HIPAA-compliant provider (Jotform Healthcare or similar).
- **Analytics:** GA4 standard tracking only. No PII in event names. Do not track form field values.

## Open decisions (link to PHWCare strategy)

See `KandyPhoenix/PHWCare#1` PR for the full strategy + open decisions Linda needs to confirm. Top blockers:

1. DHCS licensure scope (what can we publicly claim now)
2. Telehealth scope (statewide IOP via video, or in-person Red Bluff only)
3. Branding (adapt PHW kit or design fresh)
4. Phone — RESOLVED: Sunbright has its own line, 530-513-4294 (set 2026-09-18, SBR-33)
5. HIPAA form provider
6. Legal entity (DBA, LLC, or nonprofit)
