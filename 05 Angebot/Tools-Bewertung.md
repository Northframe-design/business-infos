# Northframe Tools — Test und Bewertung (11.10.2026)

Sechs Tools als Test gebaut (ohne Konkurrenz-Vergleich, Punkt 5). **Stand 12.10.: in die Website eingebaut** unter `northframe-site/public/tools/` (wird mit der Seite gebaut, Link "Free tools" in Navigation und Footer). Live, sobald du committest und pushst. Das Monitor-Skript liegt privat in `northframe-site/monitor/`. Daneben baut Codex den Website-Check (`northframe-site/scanner/`).

## Ergebnis auf einen Blick

| Tool | Kostenlos oder bezahlt | Warum | Was fürs Livegehen fehlt |
|---|---|---|---|
| **Google Review Kit** (QR-Karte + 3 Bitte-um-Bewertung-Texte) | **Kostenlos** | Einmaliger Nutzen, keine laufenden Kosten, gut zum Weitergeben. Bringt Kontakte (PDF gegen E-Mail). Taugt als Geschenk in Akquise-Mails. | Versand des Druck-PDFs per Mail (Formular + kleiner Mail-Dienst), Seite öffentlich schalten |
| **Mail-Zustell-Check** (SPF, DKIM, DMARC) | **Kostenlos**, die **Behebung kostet** | Die Diagnose zieht Leute an; das Einrichten ist eine Dienstleistung ("Email setup done for you", Einmalpreis). | Seite öffentlich, Sicherheitsregel (CSP) für Cloudflare-DNS freigeben |
| **Local SEO Generator** | **Kostenlos** | Standardwissen, schnell kopiert. Auf Northframe-Seiten ist das ohnehin eingebaut. | Nur öffentlich schalten |
| **"Was entgeht deiner Website?"-Rechner** | **Kostenlos** | Verkaufswerkzeug, kein eigener Wert zum Bezahlen. Zahlen sind ausdrücklich die Annahmen des Besuchers. | Nur öffentlich schalten |
| **Site Monitor** (Monatsbericht) | **Bezahlt: im 99-$-Paket enthalten** | Laufender Nutzen, laufender Betrieb. Macht die Monatsgebühr sichtbar ("jeden Monat ein Bericht"). Später evtl. einzeln für Nicht-Kunden. | Cloudflare Worker mit Zeitplan, Speicher, Mailversand des Berichts |
| **Öffnungszeiten-/Feiertags-Leiste** | **Bezahlt: im 99-$-Paket enthalten** | Braucht Speicher und ein Login für den Kunden; der Nutzen ist "ich ändere es selbst in 10 Sekunden". Bindet Kunden. | Speichern auf Northframe-Seite (z. B. Cloudflare KV) + einfacher Zugang für den Kunden |

**Faustregel dahinter:** Kostenlos ist alles, was einmal genutzt wird und nichts kostet. Bezahlt ist alles, was jeden Monat Arbeit oder Technik braucht.

## Einzeln getestet (im Browser)
- **Review Kit:** QR-Code wird erzeugt, Karte 4×6 Zoll druckbar, vier Farben, drei Texte mit Kopieren-Knopf. Der Link wird geprüft (Google-Link ja/nein).
- **Mail-Check mit echten Domains:**
  - northframesites.com: alles grün (Zoho, SPF, DKIM, DMARC quarantine). **Die Zustellung bei euch ist technisch richtig eingerichtet.**
  - farmhouse1905.com: kein DMARC.
  - weatherl.net: kein DMARC.
  - bannisterplumbing.com: in Ordnung.
  - rgfinsag@yahoo.com: als Gratis-Postfach erkannt.
- **Local SEO:** Der erzeugte Code ist gültig, die Prüfungen (Telefon, PLZ, Öffnungszeiten) greifen.
- **Rechner:** Mit 600 Besuchern, 60 % Handy, 1,5 % → 3 % Anfragen, 40 % Abschluss und 450 $ pro Auftrag ergibt sich: 5,4 Anfragen und 2,2 Aufträge mehr, 972 $ im Monat, Amortisation in etwa 5 Wochen.
- **Leiste:** "Open now", "Closing soon", "Closed · opens tomorrow", Wochenende und Thanksgiving werden richtig erkannt.
- **Monitor:** Lief auf northframesites.com und der Lone-Star-Demo. Er prüft SSL (79 Tage), Domain (354 Tage) und Weiterleitung auf https. Seiten, die erst per JavaScript entstehen, kennzeichnet er als nur eingeschränkt prüfbar.

## Idee für die Akquise
Der Mail-Check findet bei Leads oft einen fehlenden DMARC-Eintrag (Farmhouse 1905, Weatherl). Das wäre ein ehrlicher, konkreter zweiter Gesprächsanlass, z. B. im Follow-up: "Your domain has no DMARC record, here's the free check".

## Nächste Schritte (Vorschlag)
1. Die vier kostenlosen Tools öffentlich schalten unter northframesites.com/tools/ (Hauptseite: Sicherheitsregel für Cloudflare-DNS ergänzen, Link im Footer).
2. Review Kit mit PDF-Versand per E-Mail → erstes Werkzeug, das Kontakte sammelt.
3. Site Monitor als Cloudflare Worker, sobald der erste Kunde da ist.
