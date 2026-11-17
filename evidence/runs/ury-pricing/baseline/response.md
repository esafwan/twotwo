I built the URY pricing section. It's a single self-contained HTML file at /Users/safwan/Code/twotwo/evidence/runs/ury-pricing/baseline/index.html.

**Plans and prices**
- **Starter:** AED 199/month for 1 outlet.
- **Growth:** AED 499/month for up to 5 outlets. It has a "Most popular" badge, a dark card and a highlighted button.
- **Enterprise:** custom pricing, with a "Talk to sales" button.
- Starter and Growth both use "Start free trial" as the button.

**Yearly prices (20% off)**
The yearly view shows the monthly equivalent, with the annual total billed underneath:
- **Starter:** AED 159.20/month, billed AED 1,910.40 a year (199 × 12 × 0.8).
- **Growth:** AED 399.20/month, billed AED 4,790.40 a year (499 × 12 × 0.8).

**Design**
- Warm off-white background, a serif display font (Fraunces) with Inter for body text, and a single terracotta accent colour.
- On a phone the cards stack in one column, with Growth moved to the top. Buttons and toggle controls are at least 44px tall so they're easy to tap.
- I took a screenshot at phone width (375px): no sideways scrolling. I didn't do a full visual review at desktop width, and I didn't click through the toggle in a browser.

**Placeholders to check**
- I wrote the feature lists, headline and "excluding VAT" footnote myself, so check them against what URY actually offers.
- The "free trial" button text is also my wording.
- The buttons don't link anywhere yet (`href="#"`).
