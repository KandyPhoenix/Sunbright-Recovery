# Full-site launch readiness audit — 2026-11-25

Scope: the hidden full clinical site (branch `full-site`, 18 pages, last touched June 2026) ported onto today's live site on branch `seo/full-site-launch-prep`. Nothing is published. All full-site pages stay `noindex, nofollow` and out of the sitemap while `PRELAUNCH = true`.

## 1. What was fixed on the branch

| Issue found | Fix |
|---|---|
| Full-site pages used the retired PHW number (530) 528-2342 (STATUS.md: never reintroduce) | All set to (530) 513-4294 from one config file |
| Canonicals, schema and OG used `sunbrightrecovery.org` (no www, no trailing slash) | All use `https://www.sunbrightrecovery.org/.../` to match the sitemap and the live redirect |
| Titles 75–88 characters ("... Sunbright Recovery | Sunbright Recovery Center" doubled) | All 18 titles now 49–59 characters |
| 9 descriptions outside 150–160 characters, one 176 | All 150–160 |
| Org schema: parentOrganization PHW, PHP listed as a service, unverified geo and hours, `/images/og-default.jpg` (file doesn't exist) | Schema now uses only verified facts (same as PR #9) plus statewide areaServed; OG image is a real photo |
| Full-site footer missing Client Rights, First 14 Days, IIPP, Privacy Policy, 501(c)(3) letter | Added to match the live footer |
| No crisis line | Footer adds "Crisis: call or text 988" |
| No DHCS license statement (required, see section 4) | Footer line added; link waits for the DHCS page URL |
| No analytics hook | GA4 tag added, off until `PUBLIC_GA4_ID` is set in Cloudflare Production and the site is launched |
| No clinical homepage SEO | Staged homepage at `/launch-home/` (noindex) with title, description, canonical, OG and schema |
| Sitemap would have listed every new page | Sitemap filter keeps full-site pages out until launch |

Build check (my script over `dist/`, 28 pages): 1 H1 per page, all JSON-LD parses, 0 images without alt text, 0 broken internal links. Not yet done: Google Rich Results Test and Lighthouse (need the Cloudflare preview URL).

## 2. Keywords

- **Ahrefs:** the connected plan is Free with 0 API units. Keyword volume and difficulty calls return "Insufficient plan" (checked 2026-11-25). So the "Difficulty" column in `keyword-map.md` is an estimate from June, not Ahrefs data. **I cannot confirm any search volumes.** Free ways to get real numbers: Google Search Console after launch, Ahrefs Webmaster Tools (free), Google Keyword Planner (needs a Google Ads account, no spend required).
- **Remove the Medi-Cal / Medicare / "accepts insurance" targets** (keyword-map Tier 3: "rehab that accepts medi-cal", "medi-cal rehab california", "medi-cal addiction treatment") until a plan is actually accepted. HSC 11831.9 bars false or misleading statements about services on a facility's website. `/insurance/` now targets "nonprofit rehab california" instead.
- "rehab with sliding scale california": the insurance page says "We cannot promise a sliding scale", while `/faqs/` mentions sliding scale. Don't target it until Linda decides.
- Strongest honest targets for a new site (my judgment, not measured): Red Bluff / Tehama / Redding / Chico geo terms, "residential rehab northern california", "faith-based rehab california" (faith optional), "nonprofit rehab california", and question searches answered in the FAQs.
- `seo/meta-tags.csv` was stale (it said "Medi-Cal accepted" on 6 rows). It's now regenerated from the built pages.

## 3. Claims to confirm before launch (Linda or Kandy)

| # | Claim | Where | Why it needs a yes |
|---|---|---|---|
| 1 | IOP and PHP offered by Sunbright | programs/outpatient (whole page), programs/index, admissions, our-approach, sober-living, insurance, launch-home | Notes from the Curative work say IOP needs a separate outpatient certification and PHP doesn't apply. A June commit already re-framed IOP as a referral on another branch |
| 2 | Sunbright sober living program | programs/sober-living (whole page), faqs, launch-home | The same June commit calls sober living a community referral |
| 3 | "24/7 clinical support" / "round-the-clock clinical support" / "24/7 residential support staff" | programs/residential, programs/index, our-approach, team, faqs | Staffing claim |
| 4 | "Most clients admitted within 3–5 days" | launch-home (2 places) | No admissions history yet |
| 5 | EMDR for trauma | programs/index, programs/residential, trauma-addiction | Needs an EMDR-trained clinician on staff |
| 6 | Chaplaincy and pastoral counseling, devotionals | our-approach | Confirm it's offered |
| 7 | MAT care coordination | our-approach, opioids | Confirm process; IMS needs separate DHCS approval (HSC 11834.025) |
| 8 | "A program of Parish Health and Wellness", "Part of the PHW Care network", "PHW clinical oversight" | team (lines 58, 128), dual-diagnosis | Sunbright has its own 501(c)(3); you want it kept separate from PHW |
| 9 | Payment by cash, check, wire, credit/debit; "sliding-scale" | faqs line 36 | Confirm what's set up |
| 10 | "Governed by a board" | insurance, donate | Confirm board exists |
| 11 | Name spelling: "Faith Odell" (team) vs "Faith O'Dell" (live llms.txt) vs "Faith ODell" (STATUS.md) | team | Pick one |
| 12 | Team page doesn't yet include Dr. Banani, Kandy or the Lu Parish tribute (SBR-42). Max Parish is not listed (correct until he approves) | team | Pending items |
| 13 | Present-tense service copy on the live About and Home pages | about, index | Fine after licensing; keep as is until the site visit |

## 4. California rules that apply at launch (verified sources)

- **HSC 11831.12** (SB 541, effective 1/1/2022): a licensed facility's website must show, clearly and conspicuously, "Licensed by the State Department of Health Care Services." with a link to the DHCS page showing the license number and expiration date. A certified program uses "Certified by...", and one that is both must show both. Sources: DHCS BHIN 22-022; law.justia.com copy of HSC 11831.12. Note: Sunbright was licensed 11/4/2026, so this may already apply to the live site today. **That's a call for Linda; I haven't changed the live site.**
- **HSC 11831.9**: no false or misleading statements about services, treatments or location on websites, third-party listings or social media. Penalties under HSC 11831.7.
- **HSC 11831.6** (patient brokering, SB 1228): no paying or receiving anything of value for referrals. Relevant if anyone offers paid lead-gen or call-center services.
- I could not open leginfo.legislature.ca.gov from here; the statute text came from DHCS notices and Justia. Check wording on leginfo before launch.

## 5. AI search (AEO / GEO)

Already in place or staged: FAQPage schema on every full-site page; BreadcrumbList, MedicalTherapy and MedicalCondition schema; answer-first FAQ copy; staged `seo/launch/llms.txt`; AI search bots allowed (Cloudflare blocks AI training bots only, per the PR #9 audit). Still worth adding after launch (content decisions): a "Reviewed by Linda Spyres, LCSW, LAADC-CA" line with a date on clinical pages, if she agrees; the license statement and link (helps trust signals too).
