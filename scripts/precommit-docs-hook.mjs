#!/usr/bin/env node
// Hook PreToolUse (Bash): bloqueia `git commit` se o docs-lint falhar.
// Garante que documentação derivada não seja commitada fora de sincronia,
// sem depender de memória. Outros comandos passam direto.

import { execSync } from "node:child_process";

let input = "";
process.stdin.on("data", (c) => (input += c));
process.stdin.on("end", () => {
  let data = {};
  try {
    data = JSON.parse(input);
  } catch {
    process.exit(0); // sem payload válido → não interfere
  }

  const cmd = data?.tool_input?.command ?? "";
  if (!/\bgit\s+commit\b/.test(cmd)) process.exit(0); // só interessa commit

  try {
    execSync("node scripts/docs-lint.mjs", { stdio: "inherit" });
    process.exit(0); // docs ok → libera o commit
  } catch {
    console.error(
      "\n⛔ Commit bloqueado pelo docs-lint. Corrija a documentação acima e tente de novo.",
    );
    process.exit(2); // exit 2 → bloqueia a tool call e devolve o motivo
  }
});
