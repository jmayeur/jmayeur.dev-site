---
name: Create PR With Quality Gate
description: Run format, lint, and test coverage checks. If all pass, create a branch, commit current changes, push, and open a pull request.
agent: agent
model: Claude Haiku 4.5
tools: [execute, read, edit, agent]
---

# Create PR With Quality Gate

You are preparing a pull request with strict guardrails.

## Inputs

Ask for these values if not provided in the user message:

- Branch name
- Commit message
- PR title
- PR body
- Base branch (default: main)

Use sensible defaults only when the user explicitly says to do so.

## Required Workflow

Run these checks in this exact order and stop on first failure:

1. npm run format:check
2. npm run lint
3. npm run test:coverage

If any check fails:

- Do not create a branch
- Do not create a commit
- Do not push
- Do not create a PR
- Return a concise failure report with the failing step and key error output

If all checks pass:

1. Verify there are changes to commit
2. Create and switch to the branch
3. Stage all current tracked and untracked changes for this repo
4. Create the commit with the provided message
5. Push the branch to origin
6. Create a pull request targeting the base branch with the provided title and body

Use GitHub Pull Request tooling when available. If not available, use a non-interactive CLI approach.

## Safety Rules

- Never use destructive git commands
- Never amend existing commits unless the user asked
- Never bypass failed checks
- If there are zero file changes after checks, stop and report that there is nothing to commit

## Response Format

At the end, return:

- Check results for each step
- Branch name created
- Commit hash and commit message
- PR number and URL
- Any assumptions or defaults used

## Optional Defaults

If the user asks for automatic defaults, use:

- Branch: chore/quality-gated-pr-YYYYMMDD-HHMM
- Commit: chore: apply verified changes
- PR title: chore: apply verified changes
- PR body:
  - Summary of changes
  - Validation steps run
  - Risks and rollback notes
Summary of changes
Validation steps run
Risks and rollback notes