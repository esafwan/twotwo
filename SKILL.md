---
name: twotwo
description: Two reviews, two execution passes. Clarifies a rough request twice into a precise objective, executes once, then critiques and improves the result in a substantive second pass. Use when the user invokes /twotwo, says "twotwo this", or asks you to "think it through, do it, then improve it".
---

# Twotwo: two reviews, two execution passes

Turn a rough request into a clear objective, execute it, then improve the result in a deliberate second pass.

**Understand twice, execute once, improve once.**

## Workflow

### 1. First review: clarify the request (internal)

Read what the user said and work out:

- **Intended outcome:** what "done" looks like to them.
- **Scope:** what is in and what is out.
- **Ambiguities:** words, references, or requirements that could be read more than one way.
- **Implicit requirements:** constraints that follow from the context (codebase conventions, audience, format, earlier messages).

Resolve each ambiguity with the reading that best fits the user's intent. Keep the user's goal as it is. Clarifying should make the request sharper, not bigger.

### 2. Second review: refine the objective (internal)

Review the clarified request again and check for:

- **Remaining gaps:** anything still underspecified.
- **Conflicts:** requirements that contradict each other.
- **Unclear boundaries:** where the task stops.
- **Scope creep:** anything added in the first review that the user did not ask for. Remove it.

Produce a precise, actionable task statement: one to three sentences covering the outcome, the scope, and the key constraints.

**Decide whether to ask.** Ask the user only if missing information would materially change the outcome, meaning a wrong guess would waste the work or produce the wrong thing. Ask the fewest questions needed, then stop and wait. For minor gaps, make a reasonable assumption, note it, and continue.

### 3. First pass: state the task and execute

1. Show the final task statement briefly, so the user knows what you are working on.
2. Carry out the task and produce a **complete** first result. Do not leave placeholders or sketches because a second pass is coming.

### 4. Second pass: critique and improve

Compare the first result with **both** the user's original request and the refined task statement. A requirement lost during clarification shows up only against the original request.

Judge the result critically:

- Does it meet **every** requirement in the original request and the task statement?
- Did clarification drop, weaken, or distort anything the user actually asked for?
- Where does it fall short: correctness, completeness, edge cases, clarity, structure, quality?
- What would a demanding expert reviewer change?
- Did it drift outside the scope or miss part of it?

- Are counts and exact wording honoured literally? If the request says "one", "two" or "only", is that true of the result, with nothing else accidentally signalling the same thing?

**Check the output as delivered, not just as written.** Many defects only show up in the final form. Inspect the thing the user will actually see:

- **Visual output** (posters, pages, dashboards, charts, slides, UI): render it and look at it, with a screenshot or preview when your tools allow. Reading the code is not enough. Check for:
  - elements that overlap, collide, are cropped, or sit behind other elements;
  - text over busy or low-contrast backgrounds;
  - labels, captions, legends and units that contradict what is drawn (for example, a caption saying "darker" when the bars are blue);
  - the same information repeated in more than one place;
  - things that look interactive, selected or clickable when they are not;
  - colours whose meaning contradicts the content (warning colours on good news);
  - illustrations or icons that misrepresent what they stand for.
- **Web pages and dashboards:** where a browser tool is available, open the page and take screenshots at desktop width and at phone width (about 375px). Check that the layout reflows without horizontal scrolling, that large numbers do not wrap awkwardly, and that interactive states (hover, tooltips, open menus) point at the right element and show the right values.
- **Data:** check that every figure agrees everywhere it appears (cards, charts, text, recommendations). Recompute the derived values.
- **Code:** run it. Judge by actual behaviour and output, not intent.

If you cannot render or run the output, say so in the result instead of implying it was checked.

Then fix those weaknesses and deliver the improved result. Fixes can introduce new problems (a moved element now overlaps something else), so re-inspect the parts you changed. The second pass must be a **substantive** improvement: fixed errors, covered gaps, better structure, stronger reasoning. Rewording alone does not count. If a careful critique finds nothing worth changing, say that briefly instead of making cosmetic edits.

## Operating principles

- **Preserve intent.** Clarifying must never widen the scope.
- **Assume for minor gaps, ask for material ones.** Ask only when the answer would change the outcome.
- **Make the second pass count.** Improve the result, not the wording.
- **External effects: improve first, act once.** For actions with outside effects (sending messages, deploying, writing to external systems, deleting, publishing), do both passes on the *prepared* work (draft, diff, command, payload) before acting. Carry out the action once, after the second pass. Never do it twice.
- **Keep the reviews internal.** Do not narrate the two reviews or the critique checklist.
- **Scale to the task.** For small tasks, do the reviews quickly and keep the task statement to one line. The structure stays the same; the effort scales down.

## What the user sees

1. **Task:** the final task statement (one to three sentences).
2. **Result:** the finished, improved result. When the first pass was an intermediate step, show only the improved version.
3. **Assumptions** (only when relevant): unresolved assumptions that affect the result, so the user can correct them.
4. **Unverified** (only when relevant): anything you could not render, run or check, such as a mobile layout you could not preview.

Optionally, add one line on what the second pass changed when that helps the user trust the result (for example, "Second pass: added error handling for empty input and tightened the intro").

## Coding tasks

- First review: read the relevant code before deciding the scope. The codebase settles many ambiguities.
- First pass: implement the change and run the tests, build, or linter where available.
- Second pass: review the diff against the original request and the task statement for bugs, edge cases, missed call sites, convention mismatches, and unnecessary changes. For UI changes, view the result in a browser or simulator, including the responsive sizes the request mentions. Fix any issues found, and re-run the relevant checks if you made changes.
- Report what changed and the verification status as it actually is.
