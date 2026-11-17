**Task:** I built a single-page dashboard for a restaurant owner that covers today's revenue, orders, average bill and busy hours. It uses realistic sample data with one weak metric that needs attention. It also has an hourly sales chart and three things to act on, and it works on desktop and on a phone.

**Result:** `/Users/safwan/Code/twotwo/evidence/runs/restaurant-dashboard/twotwo/index.html`

The page shows a made-up restaurant, Olive & Ember, on Wednesday 18 Nov after it closed. Every number is compared with the last 4 Wednesdays:
- **Top row:** revenue is $10,570 (+3.4%) and orders are 298 (+20%). The busiest hour was 8–9 pm, with $1,890 and 45 orders.
- **Needs attention:** the average bill is $35.47, down 14% from $41.20. Its card has a red border and a "Needs attention" tag. More guests came in, but each one spent less.
- **Chart:** sales by hour from 11 am to 10 pm. The busy hours, 7–10 pm, are shown in green and brought in $4,810, or 46% of the day.
- **What to do next:**
  1. Raise the average bill by having servers offer drinks and desserts at every table.
  2. Add one server and one line cook from 7 to 10 pm.
  3. Do something about the 3–5 pm dip, which made only $450: try an offer or trim the shift.

I checked every figure against the hourly data, including the totals, the average bill and the percentages.

Second pass: I took screenshots at 1280px and 375px wide. Neither has horizontal scrolling. On the phone the chart labels were too small to read, so the chart now redraws to fit the screen width and keeps its text full size. I also made the chart's caption, legend and advice all use the same 7–10 pm window.

**Assumptions:** the amounts are in US dollars, and "today" means the full day after closing time rather than a live view during service.
