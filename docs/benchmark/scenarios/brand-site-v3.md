Scenario: "Auralite", a premium audio product brand site for wireless headphones with product storytelling, social proof, and conversion controls.

Category intent:
- Design a premium product brand site with real conversion controls.
- The first viewport should sell and configure the product, not just show a vague hero message.
- The page should balance brand storytelling with a usable purchase experience.

Required product surface:
- Product-first hero with product name, price, primary value proposition, color or finish selector, and buy CTA.
- Sticky or persistent purchase summary with selected finish, price, and availability.
- Editorial product storytelling sections for sound quality, comfort, battery life, and materials.
- Social proof with reviews, press-style quotes, customer ratings, or creator-style endorsements.
- Specification comparison or feature matrix against at least one alternate model.
- FAQ, shipping, warranty, or returns module that supports purchase confidence.
- Product visuals should feel premium even without remote images, using CSS-generated product mockups, gradients, material swatches, or inline SVG.

Required sample data:
- Include 3-4 finishes or configurations with different names, availability, and at least one price or stock difference.
- Include 4-6 fictional reviews, press-style quotes, customer ratings, or creator-style endorsements.
- Include a comparison table with the main product and at least one alternate model.
- Include realistic specs for battery life, weight, driver size, noise control, charging, and included accessories.
- Use fictional but realistic names for reviews, press-style quotes, creators, customers, products, and publications.
- Do not imply real endorsements from real people, real creators, real companies, or real publications.

Required interactions:
- Choose color, finish, or configuration and update product preview text, price, availability, and purchase summary.
- The finish selector should update both the selected text state and a visible product mockup detail such as shell color, accent ring, cushion tone, or case color.
- Toggle or tab between specs, reviews, and included accessories.
- Add to cart, reserve, or update a purchase summary visibly.
- Filter or switch visible testimonials by use case such as commute, studio, travel, or calls.
- Interactive controls must update visible UI state directly. Do not rely on alert(), console messages, or purely decorative button clicks.

Visual direction:
- Premium consumer electronics aesthetic with confident typography, product-detail emphasis, and conversion clarity.
- Use image-like CSS product mockups, material swatches, specification tables, refined spacing, and polished purchase controls.
- Use brand storytelling, but keep the purchase path visible and actionable.
- Avoid SaaS dashboards, invoice tables, shopping mall product grids, generic startup landing sections, and empty decorative hero layouts.

Quality and behavior requirements:
- Prioritize visual hierarchy, spacing, product clarity, and realistic purchase behavior over adding extra sections.
- The first viewport should prioritize the primary product decision for this category. Do not cram every required module above the fold; secondary modules may continue below.
- The first viewport should make the product, selected configuration, price, availability, and buy action immediately clear.
- At 390px mobile width, finish selectors, purchase CTA, sticky summary, tabs, and FAQ controls must remain reachable and usable without horizontal scrolling.
- Use realistic English UI copy and domain-specific sample data.
- Do not mention FrontBench or benchmarking inside the generated UI.
