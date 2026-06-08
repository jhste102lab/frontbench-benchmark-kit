Scenario: "InvoicePulse", a lightweight accounts receivable dashboard for small B2B teams.

Category intent:
- Design a focused SaaS operations dashboard, not a brand landing page.
- The first viewport should help a finance operator decide what to chase today.
- The interface should feel like an actual product workspace for accounts receivable operations.

Required product surface:
- Top summary strip with receivables, overdue amount, days sales outstanding, and cash expected this week.
- Main work queue with invoices, customer names, invoice numbers, amounts, due dates, risk status, owner, and next action.
- Side panel for cash forecast, customer risk, and follow-up recommendations.
- Compact activity or reminders area for recently sent nudges, promised payment dates, and completed follow-ups.
- Use internally consistent invoice states for overdue, due soon, promised, paid, and high-risk accounts.
- Assume today is May 14, 2026, and make due dates, overdue states, and promised payment dates consistent with that date.

Required sample data:
- Include 10-14 invoices with varied customers, amounts, owners, risk levels, statuses, and due dates.
- Include 4-6 activity or reminder items.
- Include 3-5 customer risk or forecast insights in the side panel.
- Use fictional but realistic company, customer, and employee names.

Required interactions:
- Search or filter invoices by customer, status, owner, or risk.
- Tabs or segmented controls for all, overdue, due soon, promised, and paid.
- Sort or update visible rows by amount, due date, or risk.
- Include at least one action that changes UI state, such as marking a follow-up complete.
- When a follow-up is marked complete, update the row status, activity feed, reminder count, or recommendation panel visibly.
- Interactive controls must update visible UI state directly. Do not rely on alert(), console messages, or purely decorative button clicks.

Visual direction:
- Quiet B2B SaaS interface with dense but readable tables, clear hierarchy, and restrained color.
- Use status colors sparingly for risk, overdue, success, and warnings.
- Use cards, segmented controls, compact tables, side panels, badges, and clear empty states where useful.
- Avoid oversized hero copy, decorative marketing sections, vague startup landing layouts, and empty illustration-led screens.

Quality and behavior requirements:
- Prioritize visual hierarchy, spacing, information clarity, and realistic product behavior over adding extra sections.
- The first viewport should prioritize the primary operational decision for this category. Do not cram every required module above the fold; secondary modules may continue below.
- The first viewport should make the main work queue and highest-priority follow-up recommendation immediately visible.
- At 390px mobile width, primary actions, filters, tabs, summaries, and row actions must remain reachable and usable without horizontal scrolling.
- Use realistic English UI copy and domain-specific sample data.
- Do not mention FrontBench or benchmarking inside the generated UI.
