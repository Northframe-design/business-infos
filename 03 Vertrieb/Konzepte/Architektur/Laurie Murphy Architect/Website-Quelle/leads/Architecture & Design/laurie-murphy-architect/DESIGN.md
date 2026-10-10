---
version: alpha
name: Laurie Murphy Architect concept
description: Few projects but seven clear categories and a strong logo with a skyline: a light, calm page with one large photo that switches per category.
colors:
  paper: "#f0f0f2"
  ink: "#1b1d21"
  red: "#8a0000"
  olive: "#5d5e55"
typography:
  display:
    fontFamily: "Manrope"
    fontWeight: 400
rounded:
  none: "0px"
spacing:
  gutter: "clamp(20px, 4vw, 64px)"
---

# Overview
Few projects but seven clear categories and a strong logo with a skyline: a light, calm page with one large photo that switches per category. Reference sites used: Illoca (calm, centered mark and a line that draws itself, here the ground line under the hero) and Driessen Architectuur (one large image instead of a thumbnail grid). Only the idea is used, no code is copied from the reference sites.

# Colors
- **paper** `#f0f0f2`: page
- **ink** `#1b1d21`: text, work section
- **red** `#8a0000`: logo red (CTA)
- **olive** `#5d5e55`: logo grey

Contrast of body text on the page background was set up for AA (large text and labels were not measured one by one). Not validated with the designmd CLI.

# Typography
Manrope 300–800 (OFL).

# Layout
Single page, one idea per section. Desktop uses the full width with a fluid gutter; below 900px every pinned or horizontal part becomes a normal vertical stack.

# Components
Compact studio introduction with a prominent quote action and phone number. Project selection supports hover, click and keyboard focus with aria-pressed state. On mobile, the category strip sits above the image so the selected result stays nearby.

# Do's and Don'ts
- Do keep the logo as the main brand element.
- Do keep all copy from the firm's own site and mark missing data `[placeholder]`.
- Don't add projects, awards, reviews or numbers that the source site does not show.
- Don't reuse this page structure for another lead.

# Review — 2026-10-06
Compact studio introduction with a prominent quote action and phone number. Project selection supports hover, click and keyboard focus with aria-pressed state. On mobile, the category strip sits above the image so the selected result stays nearby.

Shared interaction CSS/JS provides mobile navigation, visible focus states, minimum touch targets and native image dialogs. Layouts and palettes remain studio-specific. Desktop and 390px mobile views inspected in the running browser. See ../_shared/REVIEW.md for ranked findings, verification and limitations. No designmd CLI validation claimed.
