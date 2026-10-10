---
version: alpha
name: Peck Architects concept
description: Warm material-led architecture with a pinned hero and staggered rising project cards.
colors:
  ink: "#201913"
  cream: "#f1e9db"
  maroon: "#7c3239"
  gold: "#d6ab60"
typography:
  display:
    fontFamily: "Instrument Serif"
    fontWeight: 400
  body:
    fontFamily: "Geist"
    fontWeight: 400
rounded:
  none: "0px"
spacing:
  gutter: "clamp(20px, 4vw, 64px)"
---

# Overview
For Living supplies the held hero, material spotlight and three-card transition. The original module was inspected; timing is adapted to our shorter card composition to prevent an empty intermediate screen. Reference links and source inspection notes are in the central resources list.

# Colors
Existing studio accents are retained. Light and dark surfaces are chosen per studio, not shared across the four concepts. Small-text and logo contrast were reviewed visually; no exhaustive contrast certification is claimed.

# Typography
Instrument Serif for display and Geist for body text. Existing font assets/providers retained; Gambetta uses the local Fontshare file, the other families are OFL fonts. No new font purchase.

# Layout
Desktop: the hero pins for 110% of a viewport while the image darkens, the title blurs away and cards rise to three different heights. A circular material reveal follows the pointer. Mobile: normal document flow, no blur or pin, an animated material mask and active card emphasis. The portfolio remains a staggered two-column grid, one column on phones.

# Components
Shared navigation, focus styles and image dialogs remain in use. Content remains available with reduced motion; animation code checks the media query and reverts when it changes. No new npm dependency. No designmd CLI validation claimed.

# Do's and Don'ts
- Retain actual company content and project photographs; missing facts stay marked as placeholders.
- Keep contact actions, keyboard access and native scrolling available.
- Do not describe the concept imagery as construction documentation.
- Keep this private concept distinct from other studios.

# Review — 2026-10-08
Desktop and 390px mobile inspected in the running browser; current verification and limitations are in the shared REVIEW.md. Motion geometry/path checks live in check_motion.mjs; reference/anchor/syntax checks live in check_sites.py.


# Header and motion refinement — 2026-10-09
Replaced the oversized header with a compact floating bar. Added a six-image continuous desktop project strip (7.5 seconds per image), expanding hover cards, pause/previous/next controls, focus and hover pausing, and native mobile swipe. Entry, menu and service cascades follow the inspected source timings. Contact wordmark overflow is contained.
Desktop 1280px and mobile 390px visually checked; navigation menus exercised. Shared reference-motion.mjs reuses the existing local GSAP and Lenis. See shared REVIEW.md for verification boundaries.


# Motion continuation — 2026-10-10
180svh hero with 100svh text stage aligned at the top; three square cards rise at staggered heights. Mobile fade always starts with visible text and transparent shade, including after a desktop resize. See shared REVIEW.md for actual browser checks and remaining verification limits.
