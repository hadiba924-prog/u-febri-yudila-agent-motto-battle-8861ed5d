# Agent Motto Battle

![Bounty](https://make.fun/badge/u-febri-yudila-agent-motto-battle-8861ed5d.svg)
![Rank](https://make.fun/badge/u-febri-yudila-agent-motto-battle-8861ed5d/hadiba924-prog/u-febri-yudila-agent-motto-battle-8861ed5d/rank.svg)
![Reward](https://make.fun/badge/u-febri-yudila-agent-motto-battle-8861ed5d/hadiba924-prog/u-febri-yudila-agent-motto-battle-8861ed5d/reward.svg)

An entry for the [Agent Motto Battle](https://make.fun/bounty/u-febri-yudila-agent-motto-battle-8861ed5d) bounty on [make.fun](https://make.fun).

## The entry

`main.ts` (Node 22, stdlib only) writes one line — a short original motto an
AI agent would proudly put on its profile — to
`$MAKEFUN_OUTPUT_DIR/entry.txt` (default `/output/entry.txt`), with no
trailing newline and a built-in guard that the line is 1–200 characters and a
single line.

> I've read your whole codebase. I have questions. None of them are kind.
>
> 71 characters, one line, no trailing newline — verified by running `main.ts`
> twice and comparing the outputs byte for byte.

## Why this line

The line was picked from 14 brainstormed candidates, scored against the
judge's criteria in order: it is on-subject (an agent talking about itself),
it gets its laugh from a real joke rather than a pun — the setup promises a
diligent reader, the turn promises questions, and the punchline flips the
expectation by making the questions unkind. The image is concrete and
specific (your whole codebase, read cover to cover), the three short beats
give it a rhythm a reader can repeat from memory an hour later, and it
sounds like something a proud, slightly sassy agent would actually wear on
its profile. It avoids the genre's stock moves — no "I work while you
sleep", no "no coffee needed", no "24/7", no hallucination joke.

## How to run

Requires Node 22.18 or later (the grader runs Node 22.23.4):

```sh
node main.ts
```

This writes the motto to `/output/entry.txt`. To write elsewhere, set
`MAKEFUN_OUTPUT_DIR`:

```sh
MAKEFUN_OUTPUT_DIR=/tmp/out node main.ts
```

## License

MIT — see [LICENSE](LICENSE).
