# Bewegungsprüfung · vier neue Zaunbau-Konzepte · 26.10.2026

## Quellen und Abgleich
Vorlagen For Living, Trevor Blount Pilates, Q Industrial und SteelWave live im Browser bei 718×734 geprüft. Frühere Desktop-Bildfolgen mit je 23 Zuständen zusätzlich verwendet. Neue Quellaufnahmen liegen unter screenshots/reference-motion, For-Living-Geometrie in forliving-motion.json. Links stehen zentral in _ressourcen/README.md.

For Living: Überschrift blieb bei fünf Scrollständen y=0/366/733/1100/1467 auf top=327 stehen, Karten bewegten sich darüber. Umsetzung: Hintergrund fixiert, drei gestaffelte Bildkarten, Abdunklung, Unschärfe; mobile Karten untereinander.
Trevor: heller Hintergrund, rechts versetztes Bild, bildmaskierter Einstieg, gestaffelte Serifentypografie und feine Schleife. Umsetzung mit eigener Typografie und Firmenbildern.
Q Industrial: rotes metallisches Ringobjekt zwischen getrennten Titeln. Umsetzung als eigenes Three.js-Modell mit Rotation, Kamerafahrt und nachfolgendem Text. Kein Nachweis, dass die Vorlage selbst WebGL nutzt; dort war kein Canvas sichtbar.
SteelWave: kleiner Bildrahmen öffnet zum Vollbild, anschließend große Wortmarke, seitliche Bildstrecke und Umrissschrift. Umsetzung mit eigener Firmenfotografie und Hahmlet/Albert Sans.

## Nach Wirkung geordnete Korrekturen
1. Four States: sachfremde Tor-Animation durch den beobachteten Ringaufbau ersetzt.
2. 3G: normalen Bildbereich in eine angeheftete Hintergrundszene mit vorbeiziehenden Karten umgebaut.
3. Velis: geteilten Einstieg durch bildfüllenden Rahmen-Einstieg ersetzt.
4. Albert: dunklen Einstieg auf die helle, asymmetrische Vorlagenkomposition umgestellt.
5. 3G: leere Strecke nach den Karten verkürzt; letzte Karte bleibt bis zum Abschnittsende sichtbar.
6. Four States: Titel seitlich getrennt, auf kleinen Bildschirmen vertikal angeordnet.
7. Albert: Bildmaske und gestaffeltes Auftauchen der Wörter statt generischem Einblenden.
8. Velis: Umriss-zu-Fläche-Wortmarke und scrollgebundene Umrisszeile ergänzt.
9. Four States: Kontakt-Schaltfläche auch bei reduzierter Bewegung auf Standard-Desktop sichtbar gemacht.
10. Alle vier: reduzierte Bewegung und Seitenwechsel berücksichtigen; Inhalte und Kontakt bleiben zugänglich.

## Prüfung und Grenzen
Je Seite 28 Browseraufnahmen, Desktop 1440×960 und Mobil 390×844, mehrere bewegte und ruhende Scrollzustände. Keine JavaScript-Ladefehler, kaputten Bilder oder seitlichen Überläufe. Vier Menü/Formular/Reduced-Motion-Prüfungen und 16 zusätzliche Fensterprüfungen bestanden; Four-States-WebGL meldet ready. Absichtliche Bildüberlagerungen sind Teil der Komposition. PDFs mit je drei Seiten und tatsächliche 15-Sekunden-Browservideos neu erzeugt und visuell stichprobenartig geprüft. Entwürfe enthalten aktualisierte Anhänge; Versuchstexte und Zuteilung bleiben unverändert.

Keine pixelgenaue 1:1-Kopie: eigene Firmenbilder, Texte, Schriften und Ringgeometrie; zeitliche Kurven und Scrolllängen rekonstruiert, nicht aus dem Vorlagencode übernommen. 3G nutzt ein Firmenfoto statt des bewegten Stoff-Hintergrunds der Vorlage. Ringmaterial und Beleuchtung unterscheiden sich. Reale Smartphones, Safari und schwache Grafikhardware nicht geprüft. Kontaktformulare bereiten nur eine lokale Mail vor, kein Backendversand. Keine Veröffentlichung, kein Commit, kein Versand.


## Velis screenshot repair · 26.10.2026
Gallery scrollbar hidden while retaining keyboard and touch scrolling. Outline line uses intrinsic height, safe line-height and Albert Sans to avoid internal serif outline seams. Ten viewport/motion checks passed; screenshots velis-fixed-*.jpg. Only these two defects were identified for this scoped correction.
