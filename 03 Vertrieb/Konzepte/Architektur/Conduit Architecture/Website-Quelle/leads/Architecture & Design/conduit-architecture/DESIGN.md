---
version: alpha
name: conduit architecture + design concept
description: Thin lowercase logo plus strong civic photography: the logo itself is the hero, the photos do the talking.
colors:
  ink: "#191919"
  ink-2: "#131313"
  paper: "#f2f1ed"
  mute: "#9b9a95"
typography:
  display:
    fontFamily: "Hanken"
    fontWeight: 400
rounded:
  none: "0px"
spacing:
  gutter: "clamp(20px, 4vw, 64px)"
---

# Overview
Thin lowercase logo plus strong civic photography: the logo itself is the hero, the photos do the talking. Reference sites used: M3 Planungsgruppe (logo as a window onto the work, then solid, then into the header) and TARQ Studio (horizontal project track, bracket captions). Only the idea is used, no code is copied from the reference sites.

# Colors
- **ink** `#191919`: page, taken from the logo background
- **ink-2** `#131313`: project section
- **paper** `#f2f1ed`: text
- **mute** `#9b9a95`: labels

Contrast of body text on the page background was set up for AA (large text and labels were not measured one by one). Not validated with the designmd CLI.

# Typography
Hanken Grotesk 200–600 (OFL). Light weights echo the thin logo.

# Layout
Single page, one idea per section. Desktop uses the full width with a fluid gutter; below 900px the portfolio uses ordinary vertical flow. The full-screen introduction remains pinned through the photo-to-mark sequence and header docking.

# Components
The opening viewport is a scroll-controlled seven-photo composition. Image strips contract into the line symbol; smooth Satoshi-derived vector outlines enter as the conduit wordmark. The symbol follows the source logo, while the two-line lockup is a concept reconstruction for legibility. The header starts hidden and enters only while the assembled logo docks into it. Intro content follows underneath; the desktop portfolio keeps its horizontal track.

# Do's and Don'ts
- Do keep the logo as the main brand element.
- Do keep all copy from the firm's own site and mark missing data `[placeholder]`.
- Don't add projects, awards, reviews or numbers that the source site does not show.
- Don't reuse this page structure for another lead.

# Review — 2026-10-06
The opening viewport is a scroll-controlled seven-photo composition. Image strips contract into the line symbol; smooth Satoshi-derived vector outlines enter as the conduit wordmark. The symbol follows the source logo, while the two-line lockup is a concept reconstruction for legibility. The header starts hidden and enters only while the assembled logo docks into it. Intro content follows underneath; the desktop portfolio keeps its horizontal track.

Shared interaction CSS/JS provides mobile navigation, visible focus states, minimum touch targets and native image dialogs. Layouts and palettes remain studio-specific. Desktop and 390px mobile views inspected in the running browser. See ../_shared/REVIEW.md for ranked findings, verification and limitations. No designmd CLI validation claimed.

Hero photo strips use grayscale throughout the assembly animation; the portfolio photos retain their original colour.
