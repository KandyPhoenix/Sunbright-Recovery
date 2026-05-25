# Sunbright Recovery Center — Website Strategy, Layout & SEO Plan

> **Status:** Strategy delivered. Awaiting Linda's review before execution.
> **Owner:** Kandy Phoenix
> **Parent Organization:** Parish Health and Wellness (PHW Care)

---

## 1. Executive Summary

| Item | Recommendation |
|---|---|
| **Site name** | Sunbright Recovery Center |
| **Domain** | sunbrightrecovery.com (primary), sunbrightrecoverycenter.com + sunbrightrehab.com as redirects |
| **Stack** | Astro + Tailwind CSS (static site generator + utility-first CSS) |
| **Hosting** | Vercel (free tier) |
| **Repo** | New GitHub repo: `KandyPhoenix/Sunbright-Recovery` |
| **SEO target** | Statewide California, with strength in faith-based + Medi-Cal + Northern CA niches |
| **Build time** | ~35 hours total (~28 Claude, ~10 Kandy) |
| **Pricing to Linda** | $2,000 flat for full launch (~$55–60/hr friend rate) + $150–250/mo ongoing SEO |
| **Calendar** | 3 weeks (4–5 hr/wk Kandy time) or 5–6 weeks (2 hr/wk) |
| **Annual hosting cost** | ~$20/yr (domain only — Vercel free tier) |

---

## 2. Why Astro + Tailwind + Vercel (Not Squarespace)

Squarespace was initially considered because PHW Care already uses it, but ruled out: templates feel constrained and template-y. Rehab sites must look premium because families judge by aesthetics when choosing where to send a loved one.

| Platform | Cost/yr | Visual quality | Easy to build (Claude) | Easy to update | SEO control | Verdict |
|---|---|---|---|---|---|---|
| **Astro + Tailwind + Vercel** | ~$20 | Unlimited (custom) | Fast (write code) | Edit markdown → git push → auto-deploy | Full (static HTML) | **Best fit** |
| Squarespace | ~$300 | Template-bound | Slow (Playwright clicks) | Slow (Playwright clicks) | Limited | Rejected |
| Webflow | ~$300 | Unlimited | Claude can't build in it | Manual clicking | Good | Skip |
| WordPress | ~$200 | Theme-dependent | Heavier setup | Plugin-dependent | Excellent | Skip |
| Next.js + Vercel | ~$20 | Unlimited | Good | Good | Excellent | Astro simpler for content sites |

**Why Astro specifically:**
- Built for content marketing sites (12 pages + blog = exactly our case)
- Ships zero JavaScript by default → fastest page loads → best Core Web Vitals → SEO advantage
- Markdown content files (`/content/pages/about.md`) — easy to author and review as prose
- Tailwind + component-driven = reusable design system (hero, cards, FAQs, CTAs)
- Native SEO support: meta tags, sitemap, RSS, JSON-LD schema all first-class
- Free hosting on Vercel, auto-deploys on `git push`

**Post-launch content updates by Linda's team (three options):**
1. **GitHub web editor** (free) — edit markdown in browser, commit triggers auto-deploy. ~30 min learning curve.
2. **Decap CMS** (free) — visual editor that writes to GitHub markdown.
3. **Sanity.io** (free tier) — full headless CMS, prettiest editor, more setup.

Start with #1, add Decap if Linda's team needs visual editing.

---

## 3. Repo Structure (`KandyPhoenix/Sunbright-Recovery`)

Separate from PHWCare. Reuses PHW's brand voice, schema patterns, and content (not code).

```
Sunbright-Recovery/
├── CLAUDE.md                          # Voice rules, build/deploy commands, brand kit
├── SITE.md                            # Sunbright context, services, keywords
├── BRAND_VOICE.md                     # Inherited from PHW + rehab-specific
├── astro.config.mjs                   # Astro config (sitemap, integrations)
├── tailwind.config.mjs                # Brand colors, typography tokens
├── package.json
├── src/
│   ├── components/                    # Hero, ProgramCard, FAQ, CTA, Nav, Footer (Tailwind)
│   ├── layouts/                       # BaseLayout, PageLayout, BlogLayout
│   ├── pages/                         # File-based routing — matches sitemap (Section 5)
│   ├── content/                       # Astro Content Collections (markdown)
│   │   ├── pages/                     # Long-form page copy in markdown
│   │   ├── faqs/                      # FAQ banks per topic
│   │   ├── team/                      # Staff bios
│   │   └── blog/                      # Posts (phase 2)
│   ├── schema/                        # JSON-LD generators (Organization, MedicalBusiness, FAQ)
│   └── styles/                        # Global Tailwind + custom CSS
├── public/                            # Images, favicon, robots.txt, sitemap
├── seo/
│   ├── keyword-map.md                 # Keyword targeting per page
│   ├── meta-tags.csv                  # Title + description per URL
│   └── competitor-analysis.md
└── design/
    ├── wireframes/
    └── inspiration/
```

**What's reused from PHWCare (content/strategy, not code):**
- `tools/templates/SEO_DELIVERABLES_AUDIT_TEMPLATE.md` — adapt for Sunbright reporting
- `sites/phwcare/PHWCare_Addiction_Service_Page.md` — ~80% transferable
- PHW's schema JSON — port to JSON-LD generators
- PHW's keyword research, brand voice, FAQ patterns

PHW's Playwright scripts are **not** reused (they target Squarespace; we're building in code).

---

## 4. Brand Voice (Inherited + Refined)

**Inherited from PHW:**
- Compassionate, judgment-free, hope-forward
- Faith-integrated (optional, never preachy)
- Evidence-based (CBT, MI, trauma-informed, family systems)
- Family-inclusive
- Direct about access (Medi-Cal, sliding scale)

**New for Sunbright (rehab-specific):**
- **Urgency-aware** — rehab decisions happen in crisis. Every page has clear "Call Now" or "Start Admissions" CTA.
- **Less clinical, more human in headings** — "addiction recovery" in H1s; clinical terms in schema/body.
- **Privacy-forward** — explicit HIPAA + confidentiality statements.
- **Outcome-focused** — lead with hope and recovery, not statistics about severity.
- **Bed availability** — surface admissions timing ("space available this week").

**Three voice rules for every page:**
1. Open with empathy, not data.
2. Make the next step obvious (call, tour, verify insurance).
3. Never shame the visitor or their loved one.

Full voice guide: `BRAND_VOICE.md`

---

## 5. Site Map (12 pages at launch + blog)

```
/                              Homepage
├── /about                     Sunbright story, mission
├── /programs                  Programs hub
│   ├── /programs/residential  Inpatient/residential
│   ├── /programs/outpatient   IOP / PHP
│   └── /programs/sober-living Sober living + aftercare
├── /what-we-treat             Conditions hub
│   ├── /what-we-treat/alcohol
│   ├── /what-we-treat/opioids
│   ├── /what-we-treat/dual-diagnosis
│   └── /what-we-treat/trauma-addiction
├── /our-approach              Evidence-based + faith-integrated methodology
├── /admissions                Process + insurance verification form
├── /insurance                 Medi-Cal, Medicare, plans, sliding scale
├── /team                      Linda, Faith, future staff
├── /family-resources          For loved ones — interventions, family therapy
├── /faqs                      Comprehensive FAQ (FAQPage schema)
├── /contact                   Phone, form, address, hours
├── /tour                      Schedule facility tour
├── /donate                    Link to phwcare.com/rehab-center-donations
└── /blog                      Phase 2 — recovery education
```

**Primary nav:**
`Programs` · `What We Treat` · `Our Approach` · `Admissions` · `Insurance` · `Team` · `Contact` · **`Call Now: 530-528-2342`** (sticky button on every page)

Page-by-page briefs: `content/pages/*.md`

---

## 6. Statewide California SEO Keyword Map

Strategy: head terms (Tier 1) are owned by national brands. Win the achievable middle and own faith-based + Medi-Cal + Northern CA niches first. Expand outward as authority grows.

See full keyword map: `seo/keyword-map.md`

**Summary:**
- **Tier 1 (aspirational):** `rehab california`, `inpatient rehab california`, `drug rehab california`
- **Tier 2 (winnable 6–12 mo):** `residential treatment center california`, `IOP california`, `sober living california`, `dual diagnosis treatment california`
- **Tier 3 (niche, high conversion):** `faith-based rehab california`, `christian rehab california`, `rehab that accepts medi-cal`, `medi-cal rehab california`
- **Tier 4 (geographic long-tail, fastest wins):** `rehab northern california`, `inpatient rehab redding ca`, `drug rehab tehama county`, `residential treatment red bluff`, `rehab near chico ca`
- **Tier 5 (intent + decision-stage):** `what to expect at inpatient rehab`, `how long is residential rehab`, `how to convince loved one to go to rehab`, `does medi-cal cover rehab`

---

## 7. Schema Architecture (JSON-LD)

Ports PHW's proven schema patterns to typed JSON-LD generators in `src/schema/`.

**Site-wide:** Organization, LocalBusiness, MedicalBusiness, WebSite

**Per-page:**
| Page | Schema |
|---|---|
| Homepage | Organization, LocalBusiness, MedicalBusiness, WebSite |
| /programs/* | MedicalTherapy, Service, FAQPage |
| /what-we-treat/* | MedicalCondition, MedicalTherapy, FAQPage |
| /team | Person (one per staff) |
| /faqs | FAQPage |
| /insurance | Service, offerCatalog |
| /contact | LocalBusiness, GeoCoordinates |
| Blog | Article, Author |

**Critical fields for rehab SEO:**
- `medicalSpecialty: ["Addiction Medicine", "Psychiatry"]`
- `availableService` listing each treatment program
- `acceptedPaymentMethod`, `priceRange`
- `aggregateRating` once reviews exist (5+ recommended before adding)
- `areaServed: "California"`

Templates: `schema-templates/`

---

## 8. Technical SEO Checklist

**Pre-launch:**
- HTTPS enforced (Vercel default)
- XML sitemap submitted to GSC + Bing Webmaster
- Robots.txt valid
- Canonical URLs per page
- Open Graph + Twitter Card per page
- Google Analytics 4 (new property, separate from PHW)
- Google Search Console verified (DNS TXT)
- Google Business Profile created (separate from PHW)
- All schema validated in Google Rich Results Test
- Mobile Lighthouse: Performance >85, SEO 100, Accessibility >90
- Alt text on every image

**Post-launch month 1:**
- Submit to **SAMHSA treatment locator** (findtreatment.gov) — major rehab referral source
- Submit to Psychology Today, Recovery.org, AddictionCenter.com directories
- Local citations: Yelp, Healthgrades, Yellow Pages
- Footer backlink from phwcare.com

---

## 9. Pricing for Linda

Market rate for rehab site builds: **$8,000–$25,000**.
Friend rate: **$2,000 flat** for full launch (~$55–60/hr × ~35 hrs).

| Phase | Total hrs | Claude | Kandy | Deliverable |
|---|---|---|---|---|
| 1. Strategy refinement → final briefs | 2 | 1.5 | 0.5 | All briefs, keyword map |
| 2. Domain + Vercel + GitHub + Astro scaffold | 1 | 0.5 | 0.5 | Live dev URL, repo set up |
| 3. Design system + Tailwind components | 6 | 5 | 1 | Hero, ProgramCard, FAQ, CTA, Nav, Footer |
| 4. Write 12 page copies (markdown) | 10 | 8 | 2 | Final copy in `src/content/pages/` |
| 5. Build 12 pages from components | 8 | 7 | 1 | All pages live on dev URL |
| 6. Schema, sitemap, SEO meta, OG | 3 | 2.5 | 0.5 | All schema validated |
| 7. GSC, GA4, GBP setup | 3 | 2 | 1 | Tracking live, GBP claimed |
| 8. Visual QA, mobile testing, image selection | 4 | 1 | 3 | Pixel-perfect mobile + desktop |
| 9. Directory submissions + launch | 2 | 1 | 1 | Live on production domain |
| **Total** | **~35** | **~28** | **~10** | Beautiful, fully optimized site |

**Calendar:** 3 weeks (4–5 hr/wk Kandy) or 5–6 weeks (2 hr/wk).

**Ongoing SEO:** $150–250/mo for monthly blog post + GSC review + 1–2 page optimizations + schema updates.

**Lower-upfront alternative:** $1,000 for Phases 1–5 (strategy + copy + basic build), then $150/mo for ongoing SEO + remaining polish.

**What to tell Linda:**
> "Standard agency cost is $10K+. Since you're self-funding and I work for you, $2,000 covers the full build at ~$55/hour — fair for the time but well below market. After launch, $200/month gets you ongoing SEO and a blog post each month, which is what actually drives rankings over time."

---

## 10. Execution Roadmap

| Week | Tasks | Owner |
|---|---|---|
| **1** | Linda approves; register domain; create `Sunbright-Recovery` repo; scaffold Astro+Tailwind; deploy hello-world to Vercel; finalize page briefs | Kandy + Claude + Linda |
| **2** | Build design system; write all 12 page copies in markdown | Claude (Kandy reviews) |
| **3** | Build all 12 pages from components + copy; inject schema; sitemap, robots, OG | Claude |
| **4** | GSC, GA4, GBP; visual QA mobile/desktop; image selection; SAMHSA + directories | Claude + Kandy |
| **5** | Launch on production domain. Add link from phwcare.com. Final schema validation. | Claude + Kandy |
| **Month 2+** | Monthly: 1 blog post (markdown commit auto-deploys), GSC review. Quarterly: ranking report. | Claude |

---

## 11. Verification & Quality Gates

**Pre-launch:**
- All 12 pages have H1, meta title (50–60 chars), meta description (150–160 chars)
- Schema validated in Google Rich Results Test (zero errors)
- Mobile Lighthouse: Performance >85, SEO 100, Accessibility >90
- All forms route to `admissions@sunbrightrecovery.com`
- Sticky phone CTA visible on every page
- Sitemap submitted, robots.txt valid

**30-day post-launch:**
- Fully indexed (`site:sunbrightrecovery.com` returns all pages)
- Listed in SAMHSA + at least 3 rehab directories
- GBP live with photos + service descriptions
- At least 1 blog post published
- Baseline rankings recorded

**90-day post-launch:**
- Ranking for at least 5 Tier 3/4 long-tail keywords in top 20
- 100+ monthly organic impressions in GSC
- Insurance verification form receiving inquiries

---

## 12. Open Decisions for Linda

Before execution begins:
1. **Name** — confirm "Sunbright Recovery Center" is final (Cash App handle suggests yes).
2. **Branding** — does PHW have a brand kit to adapt, or design fresh?
3. **Telehealth scope** — telehealth IOP statewide, or in-person at Red Bluff only?
4. **Licensure** — California DHCS licensing controls what we can publicly claim (residential vs sober living vs IOP all need different licenses). Confirm what's currently licensed.
5. **HIPAA forms** — is Vercel form / standard Astro form sufficient, or do we need HIPAA-compliant provider (Jotform Healthcare ~$30/mo, Formspark + encrypted email)?
6. **Photos** — facility photos at launch, or stock + "facility opening soon"?
