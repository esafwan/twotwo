I built the dashboard as one self-contained file: /Users/safwan/Code/twotwo/evidence/runs/restaurant-dashboard/baseline/index.html

**Layout:**
- **Top row:** four headline numbers, each compared with last Tuesday.
  - Revenue: $8,940, up 6%.
  - Orders: 212, up 15%.
  - Average bill: $42.17, down 8%. This is the weak metric. Its card is red and labelled "needs attention".
  - Busiest hour: 7–8 pm, with $1,620 from 34 orders.
- **Hourly sales chart:** covers 11 am to 10 pm. The peak hours (lunch and 6–9 pm) are in a darker colour, and a note explains that the kitchen is closed 3–5 pm.
- **"What to do" list, four actions:**
  - Have servers suggest the dessert special to raise the average bill.
  - Add a floor server from 6 pm, since 6–9 pm brings in 49% of revenue.
  - Try a late-lunch menu or close earlier, since 2–3 pm earned only $190.
  - Keep lunch prep at the current level, since orders are growing.

It needs no outside libraries, adapts to dark mode, and rearranges for smaller screens: two columns of cards on tablets, a stacked layout on phones. I took screenshots at 375px and 1280px wide, and neither showed any sideways scrolling.
