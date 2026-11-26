# Full-site launch checklist — Sunbright Recovery Center

Prepared 2026-11-25 on branch `seo/full-site-launch-prep`. **Nothing here goes live until the December DHCS site visit is done and Kandy says yes.** Merging this branch to `main` IS the launch.

## A. Before launch: decisions only Linda / Kandy can make
See `seo/launch-readiness-audit.md` section 3 for every page line that needs a yes/no.

- [ ] Confirm which levels of care the DHCS license covers. The full site describes IOP, PHP and sober living as Sunbright programs; earlier notes say IOP needs a separate outpatient certification and PHP is not applicable. Decide: keep, rewrite as referrals, or hold those pages back.
- [ ] Get the DHCS web page that shows Sunbright's license number and expiration date. Paste it into `DHCS_LICENSE_URL` in `src/config/site.ts`. Required on the website by HSC 11831.12 (see audit section 4).
- [ ] Confirm how Sunbright relates to PHW Care (team page says "a program of Parish Health and Wellness"; the live llms.txt says "founding community partner"; Sunbright has its own 501(c)(3)).
- [ ] Approve which homepage goes live: the staged clinical homepage (`/launch-home/` on the preview) or the current community homepage.

## B. Accounts and tracking (Kandy signs in; I don't)
Use the Sunbright Google account Kandy and Linda choose (NEXT_STEPS.md still lists this as open). Keep it separate from PHW's properties.

### 1. Google Search Console (do this now; it doesn't publish anything)
1. Go to search.google.com/search-console, Add property, choose **Domain**, enter `sunbrightrecovery.org`.
2. Copy the TXT record Google shows.
3. Cloudflare dashboard > sunbrightrecovery.org > DNS > Add record: Type `TXT`, Name `@`, Content = the Google string. Save.
4. Back in Search Console click Verify. Google says it can take 2-3 days; leave the record in place for good.
   Source: support.google.com/webmasters/answer/9008080
5. Sitemaps > submit `https://www.sunbrightrecovery.org/sitemap-index.xml` (live pages now; full-site pages join it automatically when PRELAUNCH flips).
6. Optional: Settings > Users, add a second owner (Linda) so access isn't tied to one person.

### 2. Bing Webmaster Tools (5 minutes after step 1)
bing.com/webmasters > My Sites > **Import** > sign in with the same Google account > pick the site. Imported sites are verified automatically. (Bing blog, "Import sites from Search Console", updated June 2025.) Bing's index also feeds other search and AI answer tools, so don't skip it.

### 3. Ahrefs Webmaster Tools (free)
The current Ahrefs API plan is Free with 0 units, so keyword, traffic and backlink data return "Insufficient plan" (checked 2026-11-25). Ahrefs Webmaster Tools is a separate free product for sites you verify:
1. ahrefs.com/webmaster-tools > sign up > Add project > **Import from Google Search Console** (must match the www version).
2. Run Site Audit (free up to 5,000 crawl credits per project per month). Source: help.ahrefs.com articles 3275938 and 13002606.

### 4. Google Analytics 4 (create now, switch on at launch)
1. analytics.google.com > Admin > Create > Property. Name "Sunbright Recovery Center", time zone Pacific, currency USD.
2. Data streams > Add stream > Web > `https://www.sunbrightrecovery.org`, name "Sunbright website" > Create.
3. Copy the Measurement ID (starts with `G-`). Source: support.google.com/analytics/answer/14183469
4. Admin > Data collection: leave **Google signals OFF**. Do not link Google Ads.
5. Cloudflare dashboard > Workers & Pages > sunbright-recovery > Settings > environment variables, **Production** only: add `PUBLIC_GA4_ID` = the G- ID. Do not add it to Preview.
6. The tag only prints on pages that are indexable (after launch) and only when that variable is set, so previews never send data.
Privacy notes (read before turning it on): HHS's tracking-technology bulletin still says HIPAA can apply on public pages where people type identifying or health details (forms, scheduling). Its rule for plain public pages was vacated in part by AHA v. Becerra (N.D. Tex., June 20, 2024). Source: hhs.gov/hipaa/for-professionals/privacy/guidance/hipaa-online-tracking. So: no GA on the contact form fields, no event names with personal info, Google signals off. If a HIPAA form provider is chosen later, ask them about tracking on that page.

### 5. Google Business Profile
Create a profile for **Sunbright Recovery Center** at 22425 Sunbright Ave, Red Bluff, separate from PHW's 756 Rio Street listing. Use the real business name only (no keywords added). Category and verification are done in the GBP app. I found no addiction-specific GBP rule in Google's guidelines (support.google.com/business/answer/3038177); I cannot confirm whether Google adds extra checks for this category.

### 6. Paid ads (only if you ever run Google Ads)
Google requires LegitScript certification for addiction treatment ads in the US (support.google.com/adspolicy/answer/176031). Organic SEO doesn't need it.

## C. Launch day (in this order)
1. Merge PR #9 (live-site schema / llms.txt / 404) if not already merged.
2. On this branch: set `PRELAUNCH = false` in `src/config/launch.mjs`.
3. Rename `src/pages/index.astro` to `src/pages/_index-community.astro`, then `src/pages/launch-home.astro` to `src/pages/index.astro`.
4. Copy `seo/launch/robots.txt` over `public/robots.txt`, and `seo/launch/llms.txt` over `public/llms.txt` (after Linda checks every line).
5. Update the live pages that still say "preparing to open" (about, contact, events, get-involved, footers, `SiteSchema.astro`) and add the main nav links to them.
6. `npm run build` — check the sitemap lists the full-site pages.
7. Validate with Google's Rich Results Test on the preview URL before merging.
8. Merge, then: Search Console > URL Inspection > Request indexing for `/`, `/programs/residential/`, `/admissions/`, `/insurance/`.
9. Submit the FindTreatment.gov facility registration form (email FindTreatment@samhsa.hhs.gov). Listing requires the yearly N-SUMHSS survey.

## D. First 90 days (once there's data)
- Weekly: Search Console Performance (queries, pages), Coverage errors.
- Monthly: Ahrefs Webmaster Tools Site Audit; new backlinks.
- Citations and links: FindTreatment.gov, Tehama County resources, PHW Care footer link, local churches and partners, Psychology Today facility listing.
- Content: one answer-style article a month from real questions people call about.
