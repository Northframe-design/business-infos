---
version: alpha
name: Magee Architects concept
description: Full-image architecture hero with a vector loader and a curved spatial project gallery.
colors:
  ink: "#0c0c0c"
  peach: "#ffcc99"
  red: "#e3262a"
  gray: "#a3abb0"
typography:
  display:
    fontFamily: "Playfair Display"
    fontWeight: 400
  body:
    fontFamily: "Roboto Condensed"
    fontWeight: 400
rounded:
  none: "0px"
spacing:
  gutter: "clamp(20px, 4vw, 64px)"
---

# Overview
333 South Wabash supplies the immersive opening; Sobha supplies the curved image surfaces, camera approach and image reveals. Original motion modules were inspected. Magee retains its own centred logo and real project photographs. Reference links and source inspection notes are in the central resources list.

# Colors
Existing studio accents are retained. Light and dark surfaces are chosen per studio, not shared across the four concepts. Small-text and logo contrast were reviewed visually; no exhaustive contrast certification is claimed.

# Typography
Playfair Display for display and Roboto Condensed for body text. Existing font assets/providers retained; Gambetta uses the local Fontshare file, the other families are OFL fonts. No new font purchase.

# Layout
A vector logo assembles on the opening screen. Desktop: segmented Three.js planes bend around a radius-15 circle, rotate with scroll, then the camera approaches and three project images reveal in sequence. The existing Natura Three.js modules are reused. Rendering occurs on updates rather than a perpetual animation loop. Mobile, reduced motion and unavailable WebGL use a native horizontal photo gallery. The eight project categories remain native details accordions.

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
Rebuilt the previously jagged traced logo with geometric symbol paths and smooth Roboto Condensed glyph outlines. This is a faithful concept redraw, not a supplied official vector master. OFL-logo.txt records the font license. Added a separate compact header lockup, generous transparent desktop navigation, dark scrolled state, entrance choreography and curved-gallery progress ring.
Desktop 1280px and mobile 390px visually checked; navigation menus exercised. Shared reference-motion.mjs reuses the existing local GSAP and Lenis. See shared REVIEW.md for verification boundaries.


# Motion continuation — 2026-10-10
Three-image cylindrical gallery with staged camera focal-length change and two shader image reveals. Initial arc is framed within the view. Mobile remains a native swipe gallery. See shared REVIEW.md for actual browser checks and remaining verification limits.
