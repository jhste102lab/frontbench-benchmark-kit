Scenario: "Northstar Goods", a curated lifestyle shopping mall with filters, product comparison, cart actions, and merchandising modules.

Category intent:
- Design a shoppable storefront where the first viewport supports discovery and buying decisions.
- The page should feel like a polished retail experience, not an admin dashboard.
- The first screen should help shoppers understand the collection, compare options, and start buying.

Required product surface:
- Header with store identity, category navigation, search, account affordance, and cart status.
- Merchandising area for a current collection or promotion with visible product context.
- Product grid with real product names, prices, ratings, badges, availability, and add-to-cart controls.
- Faceted filters for category, price range, material, color, rating, or availability.
- Comparison tray or selected-products panel that helps shoppers compare at least two items.
- Cart drawer, mini-cart, or order summary area that updates when products are added.
- Product cards should show enough decision-making information to feel genuinely shoppable.

Required sample data:
- Include 10-12 products with varied categories, prices, ratings, materials, colors, badges, and availability.
- Include at least 2 sale or limited-stock items.
- Include at least 3 product categories.
- Allow shoppers to compare 2-3 selected products, with visible differences in price, rating, material, availability, and key attributes.
- Use fictional but realistic product, brand, collection, and customer names.

Required interactions:
- Search and filter products with visible product count changes.
- Sort products by featured, price, rating, or newest.
- Add or remove items from cart and update cart total, cart count, or mini-cart contents.
- Select products for comparison and update the comparison panel.
- Interactive controls must update visible UI state directly. Do not rely on alert(), console messages, or purely decorative button clicks.

Visual direction:
- Premium commerce design with strong product cards, clear pricing hierarchy, and tactile controls.
- Use swatches, ratings, sale badges, availability labels, compact merchandising modules, and product-like CSS visuals.
- Product visuals may be CSS-generated cards, shapes, gradients, or inline SVG; do not load remote images.
- Avoid generic dashboard KPIs, invoice language, SaaS tables, and purely editorial landing-page sections.

Quality and behavior requirements:
- Prioritize visual hierarchy, spacing, product clarity, and realistic shopping behavior over adding extra sections.
- The first viewport should prioritize the primary shopping decision for this category. Do not cram every required module above the fold; secondary modules may continue below.
- The first viewport should include shopping context, visible products, and at least one buying or filtering action.
- At 390px mobile width, search, filters, sorting, product cards, cart actions, and comparison controls must remain reachable and usable without horizontal scrolling.
- Use realistic English UI copy and domain-specific sample data.
- Do not mention FrontBench or benchmarking inside the generated UI.
