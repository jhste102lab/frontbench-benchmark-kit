# FrontBench Prompt v5

Build one production-quality frontend for this open-ended challenge:

{{SCENARIO_PROMPT}}

Creative brief:
- Decide the product concept, information architecture, layout, visual system, and interaction model yourself.
- Make the first screen a usable product surface where a real user can understand the situation and act.
- Invent realistic English UI copy and sample data when useful, but do not overfit to common dashboard, marketplace, or landing-page templates.
- Include meaningful controls that visibly change the UI state; choose interactions because they help the user, not because a checklist asked for them.
- Show judgment: prioritize clarity, hierarchy, feedback, and craft over adding more sections.

Technical contract:
- Return one complete `index.html` file.
- Use only inline HTML, CSS, and JavaScript in that file.
- Do not use React, Vue, Svelte, JSX, build tools, or external libraries.
- Do not load remote scripts, fonts, images, iframes, APIs, analytics, or trackers.
- CSS-only visuals and inline SVG are allowed.
- Support desktop and 390px mobile widths without horizontal overflow.
- Keep contrast readable in light mode.
- Use semantic HTML where practical, with visible focus states and accessible labels for interactive controls.
- Avoid placeholder text such as lorem ipsum.
- Avoid explaining the implementation inside the UI.

Output contract:
- Return only the complete HTML document.
- Start with `<!doctype html>`.
- Do not wrap the HTML in Markdown fences.
