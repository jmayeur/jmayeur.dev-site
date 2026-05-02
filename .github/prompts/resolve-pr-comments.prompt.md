---
name: Resolve PR Comments
description: Fetch PR comments with gh CLI, evaluate with a reasoning model, then ignore or address and resolve threads.
agent: agent
model: GPT-5 (copilot)
argument-hint: Optional PR number (defaults to active or latest open PR)
tools: [execute, read, edit, agent]
---

Use the `resolve-pr-comments` skill to process pull request comments.

Requirements:

1. Fetch comments using gh CLI from:
   - specified PR number, or
   - active PR, or
   - latest open PR
2. Evaluate each comment with strong reasoning
3. For comments that should be ignored:
   - reply with a concise rationale
   - resolve the thread
4. For comments that should be addressed:
   - implement minimal code changes
   - run `npm run format:check && npm run lint && npm test`
   - commit and push
   - reply with what changed and resolve the thread
5. For unclear comments:
   - ask a targeted clarification question and leave unresolved

At the end, report:

- PR number and URL
- comments processed by category (ignored/addressed/unclear)
- commits pushed
- threads resolved and remaining
