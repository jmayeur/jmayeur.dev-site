---
name: resolve-pr-comments
description: "Resolve pull request review comments using gh CLI. Use when: fetching PR comments, triaging review feedback, deciding if comments should be ignored or fixed, applying requested updates, pushing follow-up commits, and resolving review threads."
argument-hint: "Optional PR number (defaults to active or latest open PR)"
---

# Resolve PR Comments

Use this skill to process review comments for a pull request with a deterministic, auditable loop:

1. Fetch comments with gh CLI
2. Evaluate each comment with strong reasoning
3. Decide: ignore (with rationale) or address (with code updates)
4. Push changes when needed
5. Resolve each processed thread with a clear note

## When to Use

- You want to clear Copilot or human review feedback on a PR
- You want a repeatable triage workflow for review comments
- You need to handle either a specific PR number or the most relevant open PR

## Inputs

Collect these inputs before processing:

- `prNumber` (optional)
- `baseBranch` (optional, default `main`)
- `qualityGate` (optional, default `npm run format:check && npm run lint && npm test`)

If `prNumber` is not provided:

1. Prefer the active PR in workspace context
2. Otherwise use the latest open PR:

```bash
gh pr list --state open --limit 1 --json number --jq '.[0].number'
```

## Procedure

### 1. Verify Prerequisites

- Confirm GitHub auth is valid: `gh auth status`
- Confirm repo root and current branch
- Ensure local branch matches the PR head branch; switch if needed

### 2. Fetch PR Metadata

Get base/head and URL for summary reporting:

```bash
gh pr view <PR_NUMBER> --json number,title,url,baseRefName,headRefName,author
```

### 3. Fetch Review Threads and Comments (gh CLI)

Use `gh api graphql` to retrieve unresolved review threads and comment details.

Minimum required fields per thread:

- `threadId`
- `isResolved`
- `path`
- `line` / `originalLine`
- `commentId`
- `body`
- `author`

If only timeline-level comments are available, fetch issue comments too:

```bash
gh pr view <PR_NUMBER> --comments
```

### 4. Evaluate Each Comment With a Reasoning Model

Use the strongest available reasoning model in the current environment (for example GPT-5 family reasoning models).

For each unresolved item, classify as one of:

- `ignore`: No code change needed
- `address`: Code change required
- `unclear`: Needs clarification from reviewer

Decision rubric:

- Ignore if comment is outdated, already fixed, incorrect, preference-only with no standards impact, or conflicts with project constraints
- Address if comment identifies correctness, reliability, readability, maintainability, test gap, or standards compliance issue
- Mark unclear if intent is ambiguous or contradictory

### 5. Process `ignore` Items

For each ignored thread:

1. Post a concise response explaining why no change is needed
2. Resolve the thread

Response template:

- "No code change needed: <short rationale>. Verified against <constraint/evidence>."

### 6. Process `address` Items

For each addressable thread:

1. Edit only relevant files
2. Keep changes minimal and scoped
3. Run quality gate
4. Commit and push changes
5. Reply on thread with what was changed
6. Resolve the thread

Suggested commit format:

- `fix(pr-<PR_NUMBER>): address review feedback`

Response template:

- "Addressed in commit <SHA>: <what changed>. Validation: <checks>."

### 7. Process `unclear` Items

- Reply with a targeted clarification question
- Do not resolve until reviewer confirms intent

### 8. Resolve Threads

Preferred: use GitHub PR tools to resolve review threads when available.

If operating through gh GraphQL directly, resolve by thread ID after posting a reply.

### 9. Final Report

Return a concise summary:

- PR number and URL
- Number of comments fetched
- Counts by decision type: ignored / addressed / unclear
- Commits pushed (if any)
- Threads resolved
- Any remaining blockers

## Safety Rules

- Never use destructive git commands
- Never amend existing commits unless explicitly requested
- Never resolve unclear comments without clarification
- Never perform unrelated refactors while addressing feedback
- If quality gate fails, stop, report, and do not resolve that thread yet
