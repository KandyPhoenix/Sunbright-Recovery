# Sunbright Recovery Center — Next Steps

> Read after reviewing `STRATEGY.md`. This is the action checklist to get from "approved strategy" to "live site."

## Pre-execution checklist (Kandy + Linda)

### Linda must confirm (Open Decisions — see STRATEGY.md §12)
- [ ] Final name: "Sunbright Recovery Center" ✓?
- [ ] Branding: adapt PHW kit, or design fresh?
- [ ] Telehealth scope: statewide IOP via telehealth, or in-person Red Bluff only?
- [ ] Current DHCS licenses: which programs can we publicly claim now? Which are "coming soon"?
- [ ] HIPAA form: standard form OK, or Jotform Healthcare ($30/mo)?
- [ ] Photos: facility photos at launch, or use stock until ready?
- [ ] Pricing approved at $2,000 flat (or $1,000 phased alternative)?
- [ ] Phone: keep PHW's 530-528-2342 or get Sunbright-specific line?
- [ ] Email: add new Google Workspace user (~$6/mo) or forward to PHW inbox?

### Kandy actions (~3 hrs before Phase 1)
- [ ] Register domain `sunbrightrecovery.com` (~$20/yr — Namecheap, Cloudflare, or Google Domains)
- [ ] Register backup domains: `sunbrightrecoverycenter.com`, `sunbrightrehab.com` (optional, ~$40 total)
- [ ] Create GitHub repo: `KandyPhoenix/Sunbright-Recovery`
- [ ] Grant Claude access to the new repo (so I can push code during build)
- [ ] Create Vercel account (free); connect to the new repo
- [ ] Decide: GA4 + GSC under kandy_angel@outlook.com or linda@phwcare.com?

## Execution phases (~35 hours total — see STRATEGY.md §9 for full breakdown)

### Phase 1: Strategy refinement (2 hrs)
- Linda reviews this strategy
- We finalize page briefs (currently summarized in STRATEGY.md §7)
- Linda approves keyword targeting + voice

### Phase 2: Repo + scaffold (1 hr)
- `npm create astro@latest sunbright -- --template minimal`
- Add Tailwind CSS, `@astrojs/sitemap`, `@astrojs/rss`, `@astrojs/image`
- Configure `astro.config.mjs` for sitemap + site URL
- Deploy hello-world to Vercel; connect custom domain (Vercel handles SSL)

### Phase 3: Design system (6 hrs)
- Brand colors (TBD with Linda): warm + hopeful palette (sage green, warm gold, soft white)
- Typography: pair a humanist serif (e.g., Lora) for headings + clean sans (e.g., Inter) for body
- Reusable Tailwind components: Hero, ProgramCard, FAQ accordion, CTA, Nav, Footer, TestimonialCard, TrustBadges, StickyPhoneButton

### Phase 4: Page copy (10 hrs)
- Write all 12 page copies in markdown
- Linda reviews each in batches of 3-4

### Phase 5: Build pages (8 hrs)
- Wire copy + components into Astro pages
- Image placement (stock initially if no facility photos)

### Phase 6: Schema + SEO (3 hrs)
- Inject JSON-LD from `schema-templates/` into every page
- Sitemap, robots.txt, canonicals, OG tags, Twitter cards
- Validate every page in Google Rich Results Test

### Phase 7: GSC + GA4 + GBP (3 hrs)
- Google Search Console: verify via DNS TXT
- Google Analytics 4: new property
- Google Business Profile: claim/create listing (separate from PHW)

### Phase 8: QA (4 hrs — mostly Kandy)
- Mobile testing (Pixel, iPhone simulators)
- Lighthouse audits (target: Perf >85, SEO 100, A11y >90)
- Form submission tests
- Browser testing (Chrome, Safari, Firefox)
- Image selection

### Phase 9: Launch (2 hrs)
- Point production domain to Vercel
- Submit sitemap to GSC
- Submit to SAMHSA findtreatment.gov
- Submit to Psychology Today, Recovery.org, AddictionCenter.com
- Add backlink from phwcare.com footer
- Announce on PHW's social channels

## Post-launch ongoing ($150–250/mo)

### Monthly
- 1 blog post (Tier 5 keyword targeting)
- GSC review: top queries, ranking shifts, CTR opportunities
- 1–2 page optimizations based on GSC data
- Schema updates as staff/programs change

### Quarterly
- Full keyword ranking report
- Competitor SERP check (Tier 4 local terms)
- GBP photos + posts refresh
- Link-building outreach (Tehama County health resources, NorCal therapist directories)

## What's NOT in scope for $2,000

These would be add-ons if Linda wants them later:
- Custom illustrations or animations
- Video production
- Professional photography (facility, team)
- HIPAA-compliant chat widget
- E-commerce / online payments
- Patient portal integration
- EHR/EMR integration
- Multi-language (Spanish) — common ask for CA rehabs; +$500-1000 to add

## Risk flags

1. **DHCS licensure** is the highest-risk unknown. We cannot publicly claim "residential treatment" or "PHP" unless properly licensed. Confirm what's currently licensed before publishing service pages. If something isn't licensed yet, label it "Opening soon — accepting waitlist."

2. **Same address as PHW** for GBP — Google sometimes flags duplicate addresses. We may need a suite number or service-distinct GBP setup.

3. **Phone number sharing with PHW** could confuse callers about which service they're calling about. Recommend either a separate Sunbright line or clear IVR / receptionist scripting.

4. **Sunbright legal entity** — is Sunbright Recovery Center a DBA of PHW, a subsidiary LLC, or a separate nonprofit? This affects schema (`parentOrganization`), tax language on donate page, and insurance billing.
