const externalAttributePattern =
  /\s(?:src|href|poster|action)\s*=\s*["'](https?:\/\/|\/\/|data:text\/html|javascript:)/i
const remoteCssPattern = /@import\s+url\(|@import\s+["']https?:\/\//i
const networkApiPattern = /\bfetch\s*\(|\bXMLHttpRequest\b|\bnavigator\.sendBeacon\b/i
const visibleControlPattern =
  /<(button|select|input|textarea)\b|\brole=["'](?:button|tab|switch|checkbox)["']/gi
const scriptedInteractionPattern =
  /addEventListener\s*\(\s*["'](?:click|change|input|submit|keydown|keyup)|\son(?:click|change|input|submit|keydown|keyup)\s*=|\.onclick\s*=|\.onchange\s*=/i
const semanticPattern =
  /<(main|header|nav|section|article|aside|footer|table|form)\b/i
const focusStylePattern = /:focus-visible|:focus\s*\{/i
const mobileLayoutPattern = /@media\s*\([^)]*max-width|@media\s*\([^)]*width\s*<=|overflow-x\s*:\s*hidden|max-width\s*:\s*100%/i
const placeholderPattern =
  /\blorem ipsum\b|\bplaceholder\b|\bcoming soon\b|\bTODO\b|\bexample text\b/i

export function validateHtmlContract(html) {
  const facts = collectHtmlFacts(html)
  const checks = [
    check("doctype", facts.hasDoctype, "Document starts with <!doctype html>."),
    check("html-root", facts.hasHtmlRoot, "Document includes an <html> root."),
    check("body-content", facts.hasBodyContent, "Document body has visible content."),
    check(
      "single-file",
      !facts.hasExternalResources,
      "No external scripts, stylesheets, media, forms, javascript: URLs, or HTML data URLs."
    ),
    check(
      "no-network-api",
      !facts.hasNetworkApi,
      "No fetch, XMLHttpRequest, or sendBeacon usage."
    ),
    check(
      "visible-controls",
      facts.visibleControlCount >= 3,
      "At least three interactive controls are present."
    ),
    check(
      "scripted-interaction",
      facts.hasScriptedInteraction,
      "HTML includes script hooks likely to update UI state."
    ),
    check(
      "mobile-layout",
      facts.hasMobileLayoutHint,
      "HTML includes responsive or overflow-control CSS."
    ),
    check(
      "semantic-structure",
      facts.hasSemanticStructure,
      "HTML uses basic semantic structure."
    ),
    check(
      "focus-styles",
      facts.hasFocusStyles,
      "CSS includes a visible focus-state selector."
    ),
    check(
      "no-placeholder-copy",
      !facts.hasPlaceholderCopy,
      "No obvious placeholder copy."
    ),
  ]

  return {
    passed: checks.every((item) => item.passed),
    checks,
    facts,
  }
}

export function collectHtmlFacts(html) {
  const trimmed = html.trim()
  const body = bodyContent(trimmed)

  return {
    bytes: Buffer.byteLength(html),
    hasBodyContent: visibleText(body).length > 0 || /<(img|svg|canvas|video|picture)\b/i.test(body),
    hasDoctype: trimmed.toLowerCase().startsWith("<!doctype html"),
    hasExternalResources:
      externalAttributePattern.test(trimmed) || remoteCssPattern.test(trimmed),
    hasFocusStyles: focusStylePattern.test(trimmed),
    hasHtmlRoot: /<html\b[\s\S]*<\/html>\s*$/i.test(trimmed),
    hasMobileLayoutHint: mobileLayoutPattern.test(trimmed),
    hasNetworkApi: networkApiPattern.test(trimmed),
    hasPlaceholderCopy: placeholderPattern.test(trimmed),
    hasScriptedInteraction: scriptedInteractionPattern.test(trimmed),
    hasSemanticStructure: semanticPattern.test(trimmed),
    visibleControlCount: (trimmed.match(visibleControlPattern) ?? []).length,
  }
}

function check(id, passed, message) {
  return {
    id,
    passed,
    message,
  }
}

function bodyContent(html) {
  const bodyStart = html.match(/<body\b[^>]*>/i)

  if (!bodyStart || bodyStart.index === undefined) {
    return ""
  }

  const start = bodyStart.index + bodyStart[0].length
  const end = html.toLowerCase().indexOf("</body>", start)

  return html.slice(start, end >= 0 ? end : undefined)
}

function visibleText(html) {
  return html
    .replace(/<(script|style|template|noscript)\b[\s\S]*?<\/\1>/gi, " ")
    .replace(/<!--[\s\S]*?-->/g, " ")
    .replace(/<[^>]+>/g, " ")
    .replace(/&nbsp;|&#160;/gi, " ")
    .replace(/\s+/g, " ")
    .trim()
}
