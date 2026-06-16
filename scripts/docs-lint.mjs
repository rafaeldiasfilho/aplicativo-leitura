#!/usr/bin/env node
// docs-lint — guarda mecânico contra deriva de documentação.
// Checa invariantes determinísticas (o que script pega; o resto é do
// docs-context-curator). Silencioso no sucesso; falha com lista clara.
//
// Invariantes:
//  1. Toda skill em .claude/skills/ aparece no docs/AI_AGENTS.md.
//  2. Todo subagente em .claude/agents/ aparece no docs/AI_AGENTS.md.
//  3. Frontmatter: skill tem name == pasta e description; agente tem name + description.
//  4. Links markdown ](*.md) em docs/ apontam para arquivo existente.
//  5. Skills/agentes carregam REGRA, não ESTADO (sem "estado atual", "ainda
//     não existe", "(Fase N)") — estado vive no código + ROADMAP/KANBAN.
//  6. Refs "§N" em docs/ apontam para uma seção existente do APP_CONTEXT.

import { readdirSync, readFileSync, existsSync, statSync } from "node:fs";
import { join, dirname, resolve } from "node:path";

const root = process.cwd();
const errors = [];
const err = (m) => errors.push(m);

const read = (p) => readFileSync(p, "utf8");
const listDir = (p) => (existsSync(p) ? readdirSync(p) : []);

// --- frontmatter mínimo (name/description) ---
function frontmatter(text) {
  const m = text.match(/^---\n([\s\S]*?)\n---/);
  if (!m) return null;
  const fm = {};
  for (const line of m[1].split("\n")) {
    const kv = line.match(/^(\w+):\s*(.*)$/);
    if (kv) fm[kv[1]] = kv[2].trim();
  }
  return fm;
}

const aiAgentsPath = "docs/AI_AGENTS.md";
const aiAgents = existsSync(aiAgentsPath) ? read(aiAgentsPath) : "";

// --- 1. skills ↔ AI_AGENTS + 3. frontmatter ---
const skillsDir = ".claude/skills";
for (const name of listDir(skillsDir)) {
  const skillPath = join(skillsDir, name, "SKILL.md");
  if (!existsSync(skillPath)) {
    err(`Skill "${name}" sem SKILL.md.`);
    continue;
  }
  const text = read(skillPath);
  const fm = frontmatter(text);
  if (!fm || !fm.name) err(`Skill "${name}": frontmatter sem "name".`);
  else if (fm.name !== name)
    err(`Skill "${name}": name do frontmatter ("${fm.name}") difere da pasta.`);
  if (!fm || !fm.description) err(`Skill "${name}": frontmatter sem "description".`);
  if (!aiAgents.includes(name))
    err(`Skill "${name}" não está listada em docs/AI_AGENTS.md.`);
}

// --- 2. agentes ↔ AI_AGENTS + 3. frontmatter ---
const agentsDir = ".claude/agents";
for (const file of listDir(agentsDir)) {
  if (!file.endsWith(".md")) continue;
  const name = file.replace(/\.md$/, "");
  const fm = frontmatter(read(join(agentsDir, file)));
  if (!fm || !fm.name) err(`Agente "${name}": frontmatter sem "name".`);
  if (!fm || !fm.description) err(`Agente "${name}": frontmatter sem "description".`);
  if (!aiAgents.includes(name))
    err(`Agente "${name}" não está listado em docs/AI_AGENTS.md.`);
}

// --- 4. links markdown para *.md em docs/ ---
const docsDir = "docs";
const linkRe = /\]\(([^)]+?\.md)(#[^)]*)?\)/g;
for (const file of listDir(docsDir)) {
  if (!file.endsWith(".md")) continue;
  const filePath = join(docsDir, file);
  const text = read(filePath);
  for (const m of text.matchAll(linkRe)) {
    const target = m[1];
    if (/^https?:\/\//.test(target)) continue;
    const resolved = resolve(dirname(filePath), target);
    if (!existsSync(resolved))
      err(`docs/${file}: link para arquivo inexistente "${target}".`);
  }
}

// --- 5. skills/agentes sem estado mutável ---
const stateSmells = [
  /estado atual/i,
  /ainda não existe[m]?/i,
  /\(Fase \d\)/i,
];
for (const [dir, kind] of [[skillsDir, "skill"], [agentsDir, "agente"]]) {
  const files = [];
  for (const entry of listDir(dir)) {
    const p = join(dir, entry);
    if (statSync(p).isDirectory()) {
      const sp = join(p, "SKILL.md");
      if (existsSync(sp)) files.push(sp);
    } else if (entry.endsWith(".md")) files.push(p);
  }
  for (const p of files) {
    const text = read(p);
    for (const re of stateSmells) {
      const hit = text.match(re);
      if (hit)
        err(
          `${kind} ${p}: contém estado ("${hit[0]}"). Skills/agentes carregam regra, não estado — mova status para ROADMAP/KANBAN/código.`,
        );
    }
  }
}

// --- 6. refs §N apontam para seção existente do APP_CONTEXT ---
const appContextPath = "docs/APP_CONTEXT.md";
if (existsSync(appContextPath)) {
  const sections = new Set();
  for (const m of read(appContextPath).matchAll(/^##\s+(\d+)\./gm))
    sections.add(Number(m[1]));
  const maxSection = Math.max(...sections);
  for (const file of listDir(docsDir)) {
    if (!file.endsWith(".md")) continue;
    const text = read(join(docsDir, file));
    for (const m of text.matchAll(/§(\d+)/g)) {
      const n = Number(m[1]);
      if (!sections.has(n))
        err(
          `docs/${file}: ref "§${n}" não existe no APP_CONTEXT (seções vão até §${maxSection}).`,
        );
    }
  }
}

if (errors.length) {
  console.error(`\n✗ docs-lint: ${errors.length} problema(s) de documentação:\n`);
  for (const e of errors) console.error(`  • ${e}`);
  console.error("");
  process.exit(1);
}
console.log("✓ docs-lint: documentação coerente.");
