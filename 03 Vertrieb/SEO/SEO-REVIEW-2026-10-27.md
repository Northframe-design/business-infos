# Northframe SEO-Prüfung · 27.10.2026

## Belegte Ausgangslage
Autorisierter Search-Console-Abruf über Collect: OBS-000061, abgerufen 27.10.2026. Im angeforderten ca. 30-Tage-Fenster wurden acht Tageszeilen für 17.-24.10. geliefert: insgesamt 11 Impressionen und 2 Klicks. Fehlende Tage gelten als unbekannt. Der vorhandene Import liefert nur Tagesdaten, keine Suchbegriffe, Landingpages oder Indexierungsdetails. Keine Auswahl eines bewiesenen Gewinner-Keywords oder einer Gewinner-Seite möglich. Browserzugang mit dem aktuell angemeldeten Google-Konto verweigert; keine Konto- oder Berechtigungsänderung vorgenommen.

Öffentliche HTTP-Prüfung aller 18 bisher in der Sitemap genannten URLs: Status 200, Canonicals vorhanden, jeweils eine H1. Vier URLs haben bewusst noindex: /privacy, /terms, /imprint und /tools/hours-bar/. Letzterer ist laut monitor/README.md ein Kunden-Testeditor, keine zur Indexierung freizugebende Landingpage. Vorhandener Collect-Technikscore ist kein Google-Rankingwert.

## Priorisierte tatsächliche Befunde und Korrekturen
1. Sitemap enthält vier ausgeschlossene URLs: entfernt; noindex unverändert. Jetzt 14 indexierbare URLs, keine neuen Seiten.
2. Startseitentitel beschreibt Website-Design nur indirekt: klarer Titel Small Business Website Design & Development | Northframe; Open Graph und WebPage-Schema konsistent. Keine behaupteten Rankings oder lokalen Standorte.
3. Generator-H1 Tell Google who you are benennt das Tool nicht direkt: Local business schema generator. Kürzerer genauer Titel, vorhandene Gestaltung und Nutzungshinweise erhalten.
4. Interne Tool-Links heißen Local SEO code: auf Homepage und Tools-Übersicht präzisiert zu Local business schema generator.

Es wurden vier relevante SEO-Befunde behoben, keine zehn künstlichen Designfehler ergänzt. Keine neue Palette, Schrift, Effekte oder Bibliotheken eingeführt. Bisherige Gestaltung und Anbieterfakten erhalten.

## Prüfung
- node scripts/check-seo.mjs: alle 14 Sitemap-Ziele vorhanden und indexierbar, eindeutige URLs, passende Canonicals, eine H1, JSON-LD parsebar; bestehende noindex-Regeln erhalten.
- npm run build erfolgreich.
- Produktions-Build lokal bei 1440 und 390 px geprüft: Startseite, Schema-Generator und Tools-Übersicht; sechs Screenshots, kein seitlicher Überlauf oder JavaScript-Seitenfehler. Generator reagiert weiter auf Firmenname, Website und Telefon. Testwerte wurden nur lokal eingegeben, nicht gespeichert oder übermittelt.
- git diff --check erfolgreich.
- Bilder und Messdaten unter tmp/seo-2026-10-27/. Keine Messung von Core Web Vitals oder Änderung von Google-Indexstatus behauptet.

## Veröffentlichung und nächste Messung
Änderungen ausschließlich lokal; kein Commit, Push oder Deployment. Northframe-Hauptseite wird nach einem Push über Cloudflare veröffentlicht. AGENTS.md verlangt einen ausdrücklichen Auftrag für Commit/Push. Nach Veröffentlichung prüfen, dass die Live-Sitemap 14 URLs enthält und die Titel aktualisiert sind. Dann Search-Console-Entwicklung über mehrere Wochen vergleichen; bei ausreichendem Zugang Seiten- und Suchbegriffsdaten separat auswerten. Keine Rankinggarantie.

Fachliche Grundlage: bereits in _ressourcen/README.md katalogisierter Google SEO Starter Guide (Seitentitel, hilfreiche Inhalte, Links). Datum in Sitemap nur an tatsächlich geänderten öffentlichen Seiten aktualisiert.
