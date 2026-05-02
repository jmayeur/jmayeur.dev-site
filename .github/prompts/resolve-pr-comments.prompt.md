---
name: Resolve PR Comments
description: Fetch PR comments via GitHub PR tools, evaluate with a reasoning model, then ignore or address and resolve threads.
agent: agent
model: GPT-5 (copilot)
argument-hint: Optional PR number (defaults to active or latest open PR)
tools: [execute, read, edit, agent]
---

Use the `resolve-pr-comments` skill to process pull request comments.

Requirements:

1. Fetch PR data using `github-pull-request_currentActivePullRequest(refresh:true)` — NOT `gh pr view` (opens alternate buffer and output is not captured)
   - The tool result includes `reviewThreads` with `id`, `isResolved`, `canResolve`, `file`, and nested `comments` — no separate GraphQL call needed
   - If a specific PR number was provided and it differs from the active PR, use `gh pr list` to confirm, then switch branch if needed
2. Evaluate each comment with strong reasoning
3. For comments that should be ignored:
   - reply with a concise rationale
   - resolve the thread using `github-pull-request_resolveReviewThread(threadId)` — NOT `gh api graphql` (capture issues)
4. For comments that should be addressed:
   - implement minimal code changes
   - search for usages with `grep_search` or `file_search` tools — NOT `rg` (not available in this environment)
   - run `npm run format:check && npm run lint && npm test`
   - commit and push
   - reply with what changed and resolve the thread using `github-pull-request_resolveReviewThread(threadId)`
5. For unclear comments:
   - ask a targeted clarification question and leave unresolved
6. After all commits, run `git status` and stage any new untracked files created during the session in a separate commit before closing

At the end, report:

- PR number and URL
- comments processed by category (ignored/addressed/unclear)
- commits pushed
- threads resolved and remaining
