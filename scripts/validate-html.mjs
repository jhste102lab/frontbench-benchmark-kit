#!/usr/bin/env node

import { readFile } from "node:fs/promises"
import { resolve } from "node:path"
import { validateHtmlContract } from "./lib/html-contract.mjs"

const args = process.argv.slice(2)
const jsonOnly = args.includes("--json")
const target = args.find((arg) => !arg.startsWith("--"))

if (!target) {
  console.error("Usage: npm run validate -- ./index.html [--json]")
  process.exit(2)
}

const path = resolve(target)
const html = await readFile(path, "utf8")
const result = validateHtmlContract(html)

if (jsonOnly) {
  console.log(JSON.stringify(result, null, 2))
} else {
  printReport(path, result)
}

process.exitCode = result.passed ? 0 : 1

function printReport(path, result) {
  console.log(`FrontBench HTML contract report`)
  console.log(`File: ${path}`)
  console.log(`Status: ${result.passed ? "PASS" : "FAIL"}`)
  console.log("")

  for (const item of result.checks) {
    const marker = item.passed ? "PASS" : "FAIL"
    console.log(`${marker} ${item.id}: ${item.message}`)
  }

  console.log("")
  console.log(
    JSON.stringify(
      {
        passed: result.passed,
        facts: result.facts,
      },
      null,
      2
    )
  )
}
