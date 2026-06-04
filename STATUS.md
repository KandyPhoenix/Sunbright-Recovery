# Sunbright Recovery — Build Status

> **Last updated:** 2026-06-04
> **For:** Any Claude session picking this up. Read this FIRST before making changes.

---

## What this project is

A preview-stage homepage build for **Sunbright Recovery Center** — a 16-bed co-ed residential addiction recovery facility in Red Bluff, CA. The building is **fully built and finished**. They are now in the **equipping/preparing-to-open phase**.

- **Org:** 501(c)(3) nonprofit (will be by go-live)
- **Phone:** (530) 528-2342
- **Email:** info@sunbrightrecovery.com
- **Address:** 22425 Sunbright Ave, Red Bluff, CA 96080
- **Domain:** sunbrightrecovery.**org** (NOT .com — flyer shows .com but client confirmed .org)
- **Founder:** Linda Spyres, LCSW, LAADC-CA · 20+ years in addiction treatment
- **Currently:** Private pay only. Insurance credentialing in progress (commercial + government). **Never write "Medi-Cal accepted" or any specific insurer as accepted** — use language like "Insurance Network Expanding."

---

## Where things live

| Asset | Path |
|---|---|
| **Active homepage (the one being iterated on)** | `src/pages/design-preview.astro` |
| Original homepage (old Hero component layout) | `src/pages/index.astro` |
| Saved snapshots | `src/pages/design-preview-v5.astro`, `src/pages/design-preview-no-greenery.astro` |
| Admissions page mockup | `src/pages/admissions-preview.astro` |
| All photos | `public/images/` |
| Logo | `public/logo.png` |
| Strategy docs | `STRATEGY.md`, `BRAND_VOICE.md`, `SITE.md`, `NEXT_STEPS.md`, `CLAUDE.md` |
| Reserved nonprofit content (for future about/donate page) | `content/page-briefs/nonprofit-content-for-about-or-donate-page.md` |
| Repo on GitHub | https://github.com/KandyPhoenix/Sunbright-Recovery |
| Live preview URL | https://sunbright-recovery.pages.dev/design-preview |

---

## Tech stack

- **Astro 4.x** + Tailwind (Tailwind used in `index.astro` only; `design-preview.astro` uses inline `<style>`)
- **Cloudflare Pages** auto-deploys on push to `main`
- Build: `npm run build`
- Dev: `npm run dev` (port 4321)

---

## Preview-only protection (DO NOT REMOVE)

Three layers of safety so Google can't index this:
1. `<meta name="robots" content="noindex">` on every page
2. `public/robots.txt` with `Disallow: /`
3. No real domain attached yet — only the `pages.dev` preview URL

---

## What's done (homepage / design-preview)

### Section order (current)
1. **Nav** — Fixed/sticky, transparent over hero, becomes solid white on scroll (>20px). Logo turns white when transparent, full color when scrolled. CTA button is white over hero, navy when scrolled.
2. **Hero** — Navy sky background, sun graphic on right (cropped from logo, golden, scaled, positioned at translateX 95px). Headline "Recovery / Starts Here." CTAs: gold "Call (530) 528-2342" + "Start Admissions" ghost. Tagline below: "Completely private · HIPAA confidential · No commitment required"
3. **What to Know band** (navy) — 4 cards with gold circular icons: Personal & Connected (16-Bed Residential), 30/60/90 Days (Programs That Fit You), Men & Women (Co-Ed Residential), Red Bluff, CA (Serving Northern California)
4. **About** — Two-column. Left: "About Sunbright" eyebrow + "A place built for healing." headline + 2 paragraphs + small italic 501(c)(3) note + stats row (16 Residential Beds / Family Inclusive Care / 30/60/90 Day Programs). Right column: Linda's quote on softer navy gradient + "Healing Today. Hope for Tomorrow. Freedom for Life." tagline in lighter blue panel below. Card spans both grid rows.
5. **Programs** (soft gold-tinted background `#fef9ee` with gold accent divider bar at top) — 3 cards: Residential Rehab (with detox referral note), Outpatient (IOP), Sober Living & Aftercare
6. **Why Sunbright** (cream, editorial style with gold numerals 01/02/03) — Merged section combining old "Our Promise" + "Why Sunbright." Three pillars: Welcomed as you are, Evidence-based and holistic, You won't walk alone
7. **What We Treat** (gold-bg) — Headline "Addiction doesn't stand alone. Neither do you." + list of 6 conditions in Lora serif (Alcohol Use, Opioid Addiction, Stimulant Use, Co-Occurring, Relapse Prevention, Mental Health Support). Right card: friends-sunset.jpg (4 silhouetted figures arm-in-arm at sunset)
8. **A Day at Sunbright** (white) ⭐ NEW — 6 cards walking through a typical day: Morning Reflection → Group Therapy → 1-on-1 Counseling → Skills & Learning → Movement & Restoration → Community & Rest
9. **Your Journey** (navy) — 4-step admissions process: Call Us, Assessment, Plan Your Path (private pay + insurance network expanding language), Begin Recovery
10. **Get Involved / Donations** (cream) — Intro paragraph + tax-deductible note. 9 cards in 3 rows: Adopt a Space (Churches: Adopt a Room featured / Adopt a Bed / Adopt a Wing) · Most Needed (16 Mattresses / 20-30 Washable Chairs / Kitchen & Cookware) · Share Your Time (Lead a Class / Beautification & Outdoor / Cash & Gift Cards). Partners callout with "Start a Conversation →" button. Facility photo strip (4 photos: wide property + 3 interior). Dark CTA banner: "Donate or Volunteer" + "Explore Ways to Help"
11. **FAQ** (cream gradient) — Two-column. Left: heading + small "Still have questions?" card with navy "Send a Message" button to /contact. Right: 7 FAQ items including new "Do you provide medical detox?"
12. **Final CTA** (gold-pale) — "You don't have to figure this out alone." Navy phone CTA + outlined "Schedule a Tour"
13. **Footer** — Navy crisis bar: "Call us: (530) 528-2342 · Medical emergency: 911". SAMHSA referral as fine print above copyright. 4-column main footer: Brand (big white logo, tagline, description) · Programs/What We Treat · About · Get in Touch (yellow phone, email, address) + Payment. Footer titles have gold underline accents. Copyright: "© 2026 Sunbright Recovery Center · Site by Phoenix Method SEO" with Sunbright linked to /, Phoenix Method to https://phoenixmethodseo.com (gold hover).

### Major design decisions made
- **Brand palette:** Navy `#1a2e5a` + Gold `#c8900a` + Cream `#ede4d0` + warm whites. Logo navy + gold drove this.
- **Typography:** Lora serif for headings + emotional moments, Inter sans for body/UI, Dancing Script for accent/tagline lines.
- **Photos used:** All in `public/images/`. Key ones:
  - `phw-about-hero.jpg` — front entrance (used in About card previously, now in BG only)
  - `facility-wide.jpg` — full property wide shot (donations strip)
  - `facility-common-room.jpg`, `facility-interior.jpg`, `facility-tile.jpg` — interior construction shots
  - `friends-sunset.jpg` — current We Treat image (4 friends silhouetted at sunset)
  - Saved alternatives in folder: `support-adults.jpg`, `support-together.jpg`, `hands-horizontal-1/2/3.jpg`, `helping-hand-1/2.jpg`, `hope-sunrise.jpg`, `hug-for-hope.png`, `group-therapy-hands.png`
- **Phone CTAs:** 9 instances total. Industry standard for rehab.
- **Cost messaging:** NEVER promise free care. Approved phrasings:
  - "Private pay accepted today"
  - "Insurance network expanding"
  - "We're actively building our insurance network"
  - "Treatment isn't free, but we work hard to make it accessible"
  - DO NOT use: "Cost is never a barrier" or "Most insurances coming soon"

---

## What's pending (pre-launch)

### Must do before going live
- [ ] **Build linked pages** — many CTAs link to /admissions, /contact, /donate, /get-involved, /programs/*, /team, /tour, /faqs. Currently 404s. Either build them OR temporarily redirect to homepage.
- [ ] **Confirm "20+ years" language** with Linda (used in About paragraph + Linda's quote)
- [ ] **License the Unsplash photos** OR confirm all photos used have free-use rights (they should — all from Unsplash CC0)
- [ ] **Set up real domain** — Cloudflare Pages → sunbrightrecovery.org

### Optional / nice-to-have
- [ ] Add a Team preview section (Linda + Faith Odell, SUDRC)
- [ ] Testimonials/composite story (with disclaimer) — common on rehab sites
- [ ] More therapy modality detail beyond what's in "Why Sunbright"
- [ ] Crisis-moment messaging — 988 line for active crisis
- [ ] Replace facility construction photos with finished-room photos once available

### Style polish / iteration
- The "We Treat" image (friends-sunset) is current pick but user said "may need changing"
- Logo size / nav balance — currently 128px tall in 110px nav (overflow hidden)
- About card zoom — current scale(1.45) on facility image (which is now hidden since quote replaced it, but CSS still there)

---

## User preferences learned

- **Token efficiency matters** — batch operations, don't retry failed approaches
- **Honest messaging** > marketing fluff. Says it directly if something's misleading.
- **No "small"** when describing the facility (avoid "Small & Personal" → use "Personal & Connected")
- **No "home"** anywhere — use "center" (had us update 3 instances)
- **Faith-integrated, never required** is a key differentiator but should not dominate
- **Sunbright is a nonprofit** but the homepage should speak to CLIENTS not donors. Nonprofit case-making content reserved for future About/Donate pages.
- **Linda's presence** should be felt but not dominate. She's the founder, has 20+ years, but the org is bigger than her.
- **Never promise free care** but never scare people off about cost. "Call us — we'll talk through options."

---

## Recent commits (rough history)

- Recent: A Day at Sunbright section added, detox FAQ, About stat changed to Family Inclusive Care
- Friends-sunset image for We Treat
- Footer section titles got gold underline accents
- Why Sunbright + Our Promise merged into one editorial section
- Linda's quote moved into About (replacing building image card)
- Standalone quote section removed
- Programs section got soft gold tint to separate from About
- Nav: transparent over hero, white on scroll
- Insurance messaging cleaned up site-wide
- Phone CTAs reduced from 11 → 9 instances

---

## Workflow notes

- **All design iteration happens on `design-preview.astro`** — that's the live preview
- **Build + push pattern:** `cd C:/Users/kandy/Projects/Sunbright-Recovery && npm run build && git add -A && git commit -m "msg" && git push`
- Cloudflare auto-deploys on push to `main` — preview URL updates in ~30 seconds
- Don't use the Playwright MCP tool — it crashes context. Use direct tools.

---

## When in doubt

1. Read the user's most recent messages — they iterate fast and often have specific aesthetic preferences
2. Match what's already on the page (palette, type hierarchy, spacing patterns)
3. If you make a change that adds visual weight, look for somewhere else to remove it (the page is intentionally not getting longer)
4. **Ask before adding unsolicited features.** User has been clear they want to iterate methodically.
