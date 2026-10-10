---
version: alpha
name: A.GRUPPO Architects concept
description: Natura-inspired interactive house journey with A.GRUPPO content and orange accents.
colors:
  paper: "#f4f2ee"
  ink: "#141414"
  orange: "#f1582a"
  gray: "#8b8b89"
typography:
  display:
    fontFamily: "Geist"
    fontWeight: 400
rounded:
  none: "0px"
spacing:
  gutter: "clamp(20px, 4vw, 64px)"
---

# Overview
User-selected Natura showcase adapted to A.GRUPPO. Reuse the existing frame-rendered house journey, room navigation, hotspots and native content dialogs. A.GRUPPO's actual logo, orange/ink/paper palette and project photographs provide the studio identity. The source Natura showcase is unchanged.

# Colors
- Paper: #f4f2ee; ink: #141414; brand orange: #f1582a.
- Darker orange #b53513 for small text and focus states on paper.
- The illustrative house retains its original materials. It is explicitly labelled as an illustration rather than an A.GRUPPO project.

# Typography
Geist (OFL), retaining the studio's existing font choice. Large typography is ordinary readable text, not Natura's custom stencil lettering. No new font dependency.

# Layout
Fixed house experience with editorial text on the left and chapter navigation on the right. On mobile: compact introduction, house, horizontal section navigation, thumbnail previews and footer. Content opens in a scrollable native dialog, with a full-height mobile layout.

# Components
- Scroll/touch-controlled frame animation from the existing Natura assets; room buttons and keyboard navigation offer direct access.
- Studio, Projects, Process and Contact panels retain A.GRUPPO's existing source content.
- Seven existing photographs are shown without invented project-name associations; eighteen project names remain in the project index.
- Native image dialog supports previous/next, arrow keys, Escape and focus restoration.
- Both office phone numbers and email addresses remain in Contact.

# Review — 2026-10-06
Desktop and 390px mobile layouts inspected in the running browser. No mobile document overflow found. Project panel and image previews tested. Existing Natura reduced-motion handling retained. No physical iOS device test or designmd CLI validation claimed.

# Constraints
Private concept only. The house is not claimed as an A.GRUPPO project. Do not invent photo-to-project mappings or add unverified firm data. No external publication, commit or push.
