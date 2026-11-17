# Twotwo

**Two reviews. Two execution passes.**

Twotwo is an agent skill for Claude Code and other `SKILL.md`-compatible coding agents. It turns a rough request into a clear objective, does the work, and then improves the result in a deliberate second pass.

> Understand twice, execute once, improve once.

## Why

Agents usually act on the first reading of a request and stop at the first draft. That causes two common problems:

- **Misread intent:** the agent solves a slightly different problem than the one you asked about.
- **First-draft quality:** obvious gaps, missed edge cases, and loose ends that a quick self-review would have caught.

Twotwo fixes both. It reviews the request twice before starting and critiques the result once before handing it over.

## How it works

| Step | Phase | What happens |
| --- | --- | --- |
| 1 | **First review**: clarify | Identify the intended outcome and scope, resolve ambiguity, and surface implicit requirements without changing your intent. |
| 2 | **Second review**: refine | Look for remaining gaps, conflicts, unclear boundaries, and scope creep. Produce a precise task statement. Ask only if missing information would materially change the outcome. |
| 3 | **First pass**: execute | State the task briefly, then produce a complete first result. |
| 4 | **Second pass**: improve | Compare the result with **both** your original request and the refined task statement, then fix the weaknesses. It must be a real improvement, not rewording. |

The reviews stay internal. You see:

1. **Task:** the final task statement.
2. **Result:** the finished, improved result.
3. **Assumptions:** only when they matter.

## Principles

- **Preserve intent.** Clarifying never widens the scope.
- **Assume for minor gaps, ask for material ones.**
- **Make the second pass count.** Fix errors and gaps; don't just reword.
- **Improve first, act once.** For actions with outside effects (sending, deploying, deleting, publishing), both passes run on the *prepared* work. The action itself happens once.
- **Scale to the task.** Small tasks get light reviews. The structure stays the same.

## Install

### Claude Code

Clone the repository into your skills folder.

Personal (all projects):

```bash
git clone https://github.com/esafwan/twotwo.git ~/.claude/skills/twotwo
```

Single project:

```bash
git clone https://github.com/esafwan/twotwo.git .claude/skills/twotwo
```

Start a new session and the skill will be available.

### Other agents

Any agent that loads `SKILL.md` skills can use Twotwo. Clone it, or symlink it, into that agent's skills directory.

## Usage

Invoke it explicitly. Twotwo does not trigger on its own.

```text
/twotwo write a migration guide for moving our API from v1 to v2
```

You can also say "twotwo this" or "think it through, do it, then improve it".

### Example

**You:** `/twotwo add rate limiting to the login endpoint`

**Agent:**

> **Task:** Add per-IP rate limiting to `POST /login` using the existing middleware stack: 5 attempts per minute, with a 429 response and a `Retry-After` header. No changes to other endpoints.
>
> *…implementation…*
>
> Second pass: added a test for the 429 path and moved the limit into config instead of hard-coding it.

## Files

| File | Purpose |
| --- | --- |
| [`SKILL.md`](SKILL.md) | The skill definition that the agent loads. |
| `README.md` | This document. |
