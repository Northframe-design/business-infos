---
version: alpha
name: Boothe Architects concept
description: Asymmetric architectural editorial hero and a scroll-morphing serif BOOTHE signoff.
colors:
  paper: "#faf9f5"
  paperSecondary: "#ece5da"
  blue: "#2145d3"
  ink: "#313131"
typography:
  display:
    fontFamily: "Gambetta"
    fontWeight: 400
  body:
    fontFamily: "Open Sans"
    fontWeight: 400
rounded:
  none: "0px"
spacing:
  gutter: "clamp(20px, 4vw, 64px)"
---

# Overview
Normal Is Boring supplies the offset hero typography, character reveals and independently extending footer letters. The original SVG morph trigger was inspected and adapted to our own licensed Gambetta outlines. Reference links and source inspection notes are in the central resources list.

# Colors
Existing studio accents are retained. Light and dark surfaces are chosen per studio, not shared across the four concepts. Small-text and logo contrast were reviewed visually; no exhaustive contrast certification is claimed.

# Typography
Gambetta for display and Open Sans for body text. Existing font assets/providers retained; Gambetta uses the local Fontshare file, the other families are OFL fonts. No new font purchase.

# Layout
Hero lines enter in sequence; desktop scrolling expands the sketch-to-building film while the title exits. The existing AI concept film is preserved and labelled. Six matching-topology SVG paths morph directly through GSAP attribute interpolation, retaining crisp letterforms with different extension lengths. Footer trigger: top 50% to bottom bottom, scrub 2. The header fades away at the signoff to avoid covering contact links. Gallery filters wrap on mobile. Hero pinning responds to viewport changes.

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
Added a clean typographic header, initial compact stacked navigation and a scroll-dependent Menu button. Desktop project section pins and moves horizontally; category changes refresh its distance and keyboard focus moves to the focused project. Pin refresh priority prevents the footer fade from hiding navigation prematurely. Mobile retains normal vertical flow. Existing glyph morph and sketch film retained.
Desktop 1280px and mobile 390px visually checked; navigation menus exercised. Shared reference-motion.mjs reuses the existing local GSAP and Lenis. See shared REVIEW.md for verification boundaries.


# Motion continuation — 2026-10-10
Horizontal image columns reveal with per-character captions; mobile images reveal while scale and vertical offset settle. Statement terms show decorative project previews on pointer or keyboard focus. See shared REVIEW.md for actual browser checks and remaining verification limits.
