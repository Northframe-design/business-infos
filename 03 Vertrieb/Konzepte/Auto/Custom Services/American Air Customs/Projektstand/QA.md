# Review — 2026-10-01

Browser reviewed at desktop 1440×900 and mobile 390×844. Build passes. npm run check validates all six local page links and brand CTA contrast. The Three.js chunk is 134 KB gzip and is loaded only on the homepage; Vite warns about its uncompressed size.

Prioritized first-pass issues and fixes:
1. Mobile flag clipped at right edge: increased camera distance for portrait viewports.
2. Model competed with scene captions: camera reframed and centered higher.
3. Lit ground became glaring white: replaced with transparent shadow catcher.
4. Contact hero offered no immediate primary action: added direct call button.
5. Service heroes delayed explanation until below fold: moved specific service description into intro.
6. Duplicate hero/detail headlines: detail headings now introduce the service scope.
7. No current-page navigation indicator: added aria-current and red underline.
8. Motion control too small for touch: minimum 44px target.
9. Fine-print estimate condition too small: increased to 12px desktop / 11px mobile.
10. Subpage identity lost the patriotic styling: red vertical rule and subdued star added.

Also fixed removed Three.js PCFSoftShadowMap API warning using PCFShadowMap. Old console entries persist; no newer error entries observed after reload. Mobile menu opens; motion toggle changes pressed state. Native required form fields are present. Email client launch and actual delivery are not tested or performed. Reduced-motion logic and WebGL fallback are implemented but not browser-emulated. Concept is not published.

## Exploded scroll film validation
Higgsfield video completed and reviewed at the final frame: lid/fan above the unit, side panels separated, compressor and copper tubing visible. Optimized to H.264 with a 6-frame keyframe interval for bidirectional seeking. Mobile browser 390×844 verified scroll progress 0.856 corresponds to film time 6.82/8.04 seconds; full assembly fits mobile lower composition. Native scroll remains available without autoplay. Film is illustrative, not a mechanically exact service procedure. Static poster is provided for reduced motion/failure. Prior Three.js source is retained but no longer loaded.
