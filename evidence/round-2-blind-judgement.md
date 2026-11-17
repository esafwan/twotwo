# Round 2: blind judgement

A separate Opus 5.5 (low effort) judge scored each pair under random A/B labels without knowing which version used `/twotwo`. It saw the same desktop and phone screenshots and the HTML source.

**Answer key:**
- event-poster: A = twotwo, B = baseline
- restaurant-dashboard: A = twotwo, B = baseline
- grill-offer-poster: A = baseline, B = twotwo
- ury-launch-poster: A = twotwo, B = baseline

**Result:** `/twotwo` won 3 of 4 (dashboard, grill offer poster, URY launch poster). The baseline won the event poster. That loss came from an over-broad rule in the skill, which removed the button styling from a poster's "Reserve your seat" call to action. The rule has since been fixed, and the event poster was re-run: see `runs/event-poster/twotwo-v2`.

---

(Judge's verdicts below, verbatim, in blind A/B labels.)

### event-poster
| Criterion | A | B |
|---|---|---|
| Missing requirements | 4 | 5 |
| Readability | 4 | 5 |
| Alignment | 4 | 5 |
| Visual hierarchy | 3 | 5 |
| Usefulness | 3 | 5 |

**A defects:** "Reserve your seat" is plain bold text under a rule, with no button, arrow or other cue that it can be tapped, so the call to action is weak. On the phone there is about 400px of empty dark space between the subtitle and the details, which pushes the date, venue, seat count and CTA to the bottom of the screen. "20 SEATS ONLY" is a small caption that is easy to miss. The headline and the CTA are about the same size, so they compete for attention.
**B defects:** On the phone, the card sits with big empty margins above and below it. "For retail owners" appears as a bullet next to the logistics, where it reads as a detail rather than as the audience line. Otherwise it is clean: a "20 SEATS ONLY" pill at the top and a full-width amber CTA button.
**Winner:** B, because it has a real, prominent CTA button, keeps the scarcity message visible, and balances the layout well on both phone and desktop.

### restaurant-dashboard
| Criterion | A | B |
|---|---|---|
| Missing requirements | 5 | 4 |
| Readability | 5 | 4 |
| Alignment | 5 | 4 |
| Visual hierarchy | 5 | 4 |
| Usefulness | 5 | 4 |
| Mobile layout | 5 | 4 |
| Data consistency | 5 | 3 |

**Data check, A:** the hourly bars add up to $10,570, which matches the revenue card. $10,570 / 298 = $35.47, which matches the average bill. The baseline $10,220 / 248 = $41.21, against $41.20 shown. The changes are +3.4%, +20.2% and −13.9%, all correct. The 7–10 pm bars add up to $4,810, which is 45.5% of the day and is shown as 46%. The 3–5 pm bars add up to $450, as the observation says. The peak hour is 8 pm at $1,890, matching the card. 18 Nov 2026 is a Wednesday, which is correct.
**Data check, B:** the bars add up to $8,940, which matches revenue. $8,940 / 212 = $42.17 and $8,430 / 184 = $45.82, both correct. The changes are +6.0%, +15.2% and −8.0%, all correct. 6–9 pm adds up to $4,370, which is 48.9% and is shown as 49%. The 7–8 pm peak of $1,620 matches the card.
**A defects:** Only minor ones. The "118 orders" for 7–10 pm cannot be checked against the data, because there are no hourly order counts. On desktop the layout leaves a large empty area below the cards.
**B defects:** The header says "Tue 18 Nov", but 18 Nov 2026 is a Wednesday. It says "updated 9:45 pm", yet the chart already shows full 9 pm and 10 pm bars ($920 and $510) and the totals include them, which contradicts the update time. Observation 1 suggests briefing servers on "tonight's dessert special", which comes too late at 9:45 pm. The caption says "peak hours (12–1 pm, 6–9 pm)", but the dark bars are 12p and 1p, which is 12–2 pm, and dark bars are simply any bar of $980 or more, so the caption does not match the rule. Observation 4 ("Orders up 15%") repeats the card and gives weak advice. The phone chart has no value labels and no y-axis. The desktop chart has empty space below it.
**Winner:** A, because every number reconciles, the dates and times are consistent, and the advice is specific, while B has a wrong weekday, a timestamp that contradicts its own data, and a mislabelled peak-hours caption.

### grill-offer-poster
| Criterion | A | B |
|---|---|---|
| Missing requirements | 3 | 5 |
| Readability | 2 | 5 |
| Alignment | 2 | 4 |
| Visual hierarchy | 3 | 5 |
| Usefulness | 2 | 5 |

**A defects:** The phone view is badly broken. The "GRILLAX" logo sits on top of the "WEEKEND OFFER" badge. The headline is cut off at the right edge ("WEEKEN…"). The price circle covers "FEAST". The offer line ("…2 drinks") is cut off behind the sticky footer. The footer values wrap into cramped two-line stacks ("FRI – / SUN", "6 – 11 / PM"). The drinks fall outside the visible area on the phone. On desktop the price circle overlaps the right-hand drink glass. The poster is very tall (1350px) rather than an Instagram-friendly proportion.
**B defects:** The phone view leaves about 350px of empty dark area below the poster. On the phone, the "AVAILABLE" label over "DINE-IN ONLY" adds little. Otherwise the food is centred and dominant, the yellow AED 49 price badge is prominent, and all three conditions are shown clearly.
**Winner:** B, because A's phone version has overlapping and cut-off text, including the headline and the offer line, while B shows every element cleanly.

### ury-launch-poster
| Criterion | A | B |
|---|---|---|
| Missing requirements | 5 | 4 |
| Readability | 5 | 4 |
| Alignment | 5 | 3 |
| Visual hierarchy | 5 | 4 |
| Usefulness | 5 | 4 |

**A defects:** Only minor ones. The phone version is long, about 1480px. The "LAUNCHING NOW" label in the CTA bar is low contrast. The product mockup clearly shows all three features (orders, kitchen, profit), and the CTA "Book a demo at ury.app" is prominent.
**B defects:** On desktop there are large unexplained empty bands, about 190px above and about 200px below the product mockup. The mockup leaves out kitchen operations entirely and shows only orders and profit. On the phone the mockup panel is offset and crowds into the subtitle and the "01" feature label. The third feature is labelled "Daily profit" rather than "Daily profit tracking". The footer "Orders · Kitchen · Profit" repeats the feature list. The CTA pill is small next to the headline.
**Winner:** A, because its product visual covers all three features with even, tight spacing, while B has large layout gaps and a mockup that leaves out the kitchen.
