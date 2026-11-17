**Task:** Build a premium, phone-friendly pricing section for URY with three plans (Starter, Growth, Enterprise), a monthly/yearly toggle that saves 20% with correct yearly prices, short feature lists and clear calls to action ("Talk to sales" for Enterprise).

**Result:** The pricing section is saved at /Users/safwan/Code/twotwo/evidence/runs/ury-pricing/twotwo/index.html. It's a single HTML file with a dark, warm-gold look in the Fraunces and Inter fonts.

- **Starter:** AED 199/month for 1 outlet. On yearly it shows AED 159.20/month, billed AED 1,910.40 a year.
- **Growth:** marked "Most popular" with a gold border and a filled gold button. AED 499/month for up to 5 outlets. On yearly it shows AED 399.20/month, billed AED 4,790.40 a year.
- **Enterprise:** "Custom" pricing with a **Talk to sales** button.
- **Toggle:** the monthly/yearly toggle carries a "Save 20%" tag. It updates both the per-month price and the yearly total under it, and screen readers can tell which option is selected.
- **Phone layout:** the cards stack in a single column in plan order. I took screenshots at 375px and 1280px in both monthly and yearly mode, and there's no horizontal scrolling.

**Assumptions:**
- I wrote the feature lists, plan descriptions and headline myself; swap in your real features.
- Yearly is shown as a per-month price with the total billed yearly underneath.
- The buttons link to `#` for now.

Second pass: I changed the phone layout so Growth no longer jumps to the top and the plans stay in order. I checked the yearly prices visually on phone width, and removed two lines I'd made up ("prices exclude VAT" and "cancel anytime"). I didn't take a new screenshot after removing the "cancel anytime" line, which was a text-only change.
