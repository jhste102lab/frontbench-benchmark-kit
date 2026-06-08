# FrontBench Prompt v3

Build a production-quality frontend for this scenario:

{{SCENARIO_PROMPT}}

Global requirements:
- Return one complete `index.html` file.
- Use only inline HTML, CSS, and JavaScript in that file.
- Do not use React, Vue, Svelte, JSX, build tools, or external libraries.
- Do not load remote scripts, fonts, images, iframes, APIs, analytics, or trackers.
{{SCENARIO_ASSET_REQUIREMENT}}
- Make the first screen a usable product surface for the requested category, not a generic marketing splash page.
- Include at least three interactive controls such as filters, tabs, sorting, search, toggles, option selectors, quantity controls, or buttons that update visible UI.
- Support desktop and 390px mobile widths without horizontal overflow.
- Keep contrast readable in light mode.
- Use semantic HTML where practical, with visible focus states and accessible labels for interactive controls.
- Avoid placeholder text such as lorem ipsum.
- Avoid explaining the implementation inside the UI.

Output contract:
- Return only the complete HTML document.
- Start with `<!doctype html>`.
- Do not wrap the HTML in Markdown fences.
