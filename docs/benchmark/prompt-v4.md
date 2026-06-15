# FrontBench Prompt v4

Build a production-quality frontend for this product brief:

{{SCENARIO_PROMPT}}

Creative brief:
- Interpret the user goal and choose the interface structure yourself.
- Make the first screen a usable product surface, not a generic landing page or decorative mockup.
- Use realistic English UI copy and domain-specific sample data.
- Include meaningful controls that visibly change the UI state; choose interactions that fit the product goal.
- Show enough product state, data, and feedback for the user decision to feel credible without padding the page with filler.

Technical contract:
- Return one complete `index.html` file.
- Use only inline HTML, CSS, and JavaScript in that file.
- Do not use React, Vue, Svelte, JSX, build tools, or external libraries.
- Do not load remote scripts, fonts, images, iframes, APIs, analytics, or trackers.
- CSS-only shapes, gradients, icons, charts, product mockups, avatars, and inline SVG are allowed.
- Support desktop and 390px mobile widths without horizontal overflow.
- Keep contrast readable in light mode.
- Use semantic HTML where practical, with visible focus states and accessible labels for interactive controls.
- Avoid placeholder text such as lorem ipsum.
- Avoid explaining the implementation inside the UI.

Output contract:
- Return only the complete HTML document.
- Start with `<!doctype html>`.
- Do not wrap the HTML in Markdown fences.
