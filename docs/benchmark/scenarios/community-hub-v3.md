Scenario: "MakerCircle", a community site with discussions, events, member profiles, moderation controls, and onboarding flows.

Category intent:
- Design a logged-in community hub for local makers.
- Design the experience for a logged-in member who also has lightweight moderator permissions.
- The first viewport should help a member join conversations, find events, and see community activity.
- The interface should feel like an active product community, not a static marketing page.

Required product surface:
- Header with community identity, search, notifications, and member profile affordance.
- Discussion feed with topic tags, reply counts, author metadata, unread state, and pinned posts.
- Events module with dates, locations, RSVP status, capacity, and host names.
- Member directory or spotlight area with skills, location, contribution badges, and follow controls.
- Onboarding checklist for a new member with clear progress state.
- Moderation queue or admin strip for flagged posts, pending approvals, and quick actions.
- The moderation queue should appear as a compact moderator strip or side module, not as the main focus of the page.

Required sample data:
- Include 8-10 discussion posts with varied topics, authors, reply counts, unread states, and pinned or popular labels.
- Include 4-6 events with dates, locations, hosts, capacity, and RSVP states.
- Include 6-8 member profiles with skills, locations, badges, and follow states.
- Include 3-4 moderation items with clear reasons and quick actions.
- Include an onboarding checklist with 4-6 steps and visible progress.
- Assume today is May 14, 2026, and make event dates and activity timestamps consistent with that date.
- Use fictional but realistic member, host, moderator, and community names.

Required interactions:
- Filter discussions by topic, unread, popular, or pinned.
- RSVP to an event and update visible attendance, capacity, or RSVP status.
- Search members, events, or posts.
- Approve, dismiss, or mark a moderation item as reviewed.
- Follow or unfollow a member and update visible state.
- Interactive controls must update visible UI state directly. Do not rely on alert(), console messages, or purely decorative button clicks.

Visual direction:
- Warm, active community product with information density, avatars, badges, and readable feed rhythm.
- Use clear separation between member content, events, onboarding, and moderation controls.
- Use avatars, topic chips, contribution badges, event cards, unread markers, and compact activity indicators.
- Avoid invoice dashboards, shopping carts, SaaS KPI panels, and static marketing-only community copy.

Quality and behavior requirements:
- Prioritize visual hierarchy, spacing, information clarity, and realistic community behavior over adding extra sections.
- The first viewport should prioritize the primary community decision for this category. Do not cram every required module above the fold; secondary modules may continue below.
- The first viewport should make discussions, upcoming events, and member status immediately understandable.
- At 390px mobile width, search, filters, RSVP actions, feed actions, and moderation actions must remain reachable and usable without horizontal scrolling.
- Use realistic English UI copy and domain-specific sample data.
- Do not mention FrontBench or benchmarking inside the generated UI.
