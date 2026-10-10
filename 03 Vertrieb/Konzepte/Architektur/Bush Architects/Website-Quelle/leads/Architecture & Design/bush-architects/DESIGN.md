---
version: alpha
name: Bush Architects concept
description: Technical drawing-board composition with animated rulers and red architectural annotations.
colors:
  paper: "#eeeee7"
  ink: "#222620"
  red: "#b93022"
  mute: "#55594f"
typography:
  display:
    fontFamily: "DM Sans"
    fontWeight: 400
  body:
    fontFamily: "DM Sans"
    fontWeight: 400
rounded:
  none: "0px"
spacing:
  gutter: "clamp(20px, 4vw, 64px)"
---

# Overview
Heron supplies the drafting-board visual language, drawn lines, cursor crosshair and staged labels. Its obfuscated source was only partially resolved; our implementation is independent. Reference links and source inspection notes are in the central resources list.

# Colors
Existing studio accents are retained. Light and dark surfaces are chosen per studio, not shared across the four concepts. Small-text and logo contrast were reviewed visually; no exhaustive contrast certification is claimed.

# Typography
DM Sans for display and DM Sans for body text. Existing font assets/providers retained; Gambetta uses the local Fontshare file, the other families are OFL fonts. No new font purchase.

# Layout
SVG perimeter and measuring guides draw in, the existing project rendering reveals, then labels and the information row enter. Mouse movement positions coordinate lines; touch retains normal page scrolling. The colour toggle is a labelled native button. Project captions reveal once. Projects form a two-column grid, one column on phones.

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
Refined the technical header into a readable bordered grid with a red contact cell. Increased logo contrast and optical spacing; added panel contraction, content reveals and image/title hover treatment. Existing SVG rulers, pointer crosshair and colour control retained. Full obfuscated Heron timeline remains unverified.
Desktop 1280px and mobile 390px visually checked; navigation menus exercised. Shared reference-motion.mjs reuses the existing local GSAP and Lenis. See shared REVIEW.md for verification boundaries.


# Motion continuation — 2026-10-10
Four-project pinned sequence, sticky image/text project pairs and native single-open project index. Selection rectangle resets on resize; independent divider animation token avoids the border-colour collision. See shared REVIEW.md for actual browser checks and remaining verification limits.
