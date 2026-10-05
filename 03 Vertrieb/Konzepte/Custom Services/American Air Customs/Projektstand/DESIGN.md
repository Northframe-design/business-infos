---
name: American Air Customs — Home of the Cool
colors:
  navy: '#002D4B'
  red: '#B0272E'
  paper: '#F5F4EE'
  scene: '#E8ECE9'
typography:
  display: Cabinet Grotesk Bold
  body: Satoshi
spacing:
  desktopGutter: 4vw
  mobileGutter: 5vw
  sectionDesktop: 100px
  sectionMobile: 65px
components:
  primaryCTA: solid red rectangle, white text, minimum 52px height
  services: numbered editorial rows
  hero: large headline and procedural Three.js HVAC scene
---

An American home-comfort identity for Irving homeowners: navy, red, warm paper, a real waving 13-stripe/50-star flag and a dimensional condenser. No stock card grid or decorative gradients. Original concept wordmark, not the official logo.

Inspiration: Averlo for headline scale and CTA clarity; Ordinary Folk / Introducing Spline for spatial product presentation; Niccolò Miranda for editorial hierarchy. Colorsinspo informed the restrained neutral pairing with verified company colors. Fontshare fonts are locally hosted; license copied to public/fonts/FFL.txt.

Static multipage HTML + Vite + dynamically loaded Three.js. Motion can be paused and respects reduced-motion. Navigation, phone links and all service copy work independently of WebGL. Contact opens an email draft; no submission server is connected.

## Filmic scroll revision
The opening now uses an original Higgsfield image-to-video camera move rather than the rejected procedural model. The film depicts spatial camera motion and an exploded HVAC assembly; it is pre-rendered imagery, not a live CAD simulation. Native scroll controls video time in both directions. Current production jobs: image ff50077d-c76e-4ff9-85d8-3364c211f5e8, video e1178ace-ea0d-4225-aaa9-083f16e482fb (Kling 3 standard, silent, 8s). Source inspiration and web background candidates are recorded only in the central resources README.

Hero typography: General Sans 400/500/600, Instrument Serif Italic in #ff747b, Geist Mono labels. Three stationary phrases crossfade automatically every four seconds, independently of scroll. Motion control, reduced-motion preference, hidden tab and offscreen hero pause the rotation. Mobile contact copy sits 82px above the bottom edge.

Phrase transitions: 650ms opacity/blur, 800ms vertical 18px entrance/exit; reduced motion disables transitions. Four-second rotation remains independent of scroll.
