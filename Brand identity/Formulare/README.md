# Northframe — Formulare

Kundentexte in amerikanischem Englisch, passend zur freigegebenen Tonalität: freundlich, direkt und konkret. Die Dateien enthalten vollständige Textentwürfe mit Feldern, Hilfetexten, Buttons und Rückmeldungen. Noch keine Onlineformulare oder Datenübermittlung.

## Jetzt verwenden

1. [Projektanfrage](01-Projektanfrage.md): auf der Northframe-Website für Interessenten vor dem ersten Gespräch. Kurze Qualifizierung mit optionaler Telefonnummer.
2. [Kunden-Onboarding](02-Kunden-Onboarding.md): nach Auftragserteilung zum Sammeln von Unternehmensdaten, Inhalten und Angaben zu Domain und Freigabe. In drei Abschnitte gegliedert.

## Ablauf

Anfrage → persönliches Gespräch und Auftrag → Onboarding → Website-Entwurf → eine gesammelte Revisionsrunde → ausdrückliche Freigabe vor Veröffentlichung.

Feedback und Veröffentlichungsfreigabe können zunächst per E-Mail dokumentiert werden; dafür ist jetzt kein zusätzliches Formular nötig.

## Gestaltung bei der Umsetzung

- Cabinet Grotesk für Überschriften; Satoshi für Texte, Felder und Buttons.
- Anthrazit/Charcoal als Basis, Mist für Text, Koralle für primäre Aktionen mit dunkler Beschriftung.
- Sichtbare Labels, klar markierte Pflichtfelder, Fehlermeldungen am Feld und erhaltene Eingaben bei Übermittlungsfehlern.
- Datenschutzhinweis und tatsächlichen Versand vor Veröffentlichung einrichten und prüfen.

## Ausfüllbare PDFs

- [Projektanfrage als PDF](Northframe-Project-Inquiry.pdf): eine Seite, acht Felder.
- [Kunden-Onboarding als PDF](Northframe-Website-Onboarding.pdf): vier Seiten, 27 Felder.

Die PDFs können digital ausgefüllt oder ausgedruckt werden. Datei lokal speichern, ausfüllen, erneut speichern und zur Kontrolle wieder öffnen. Danach als Anhang zurücksenden. Kein automatischer Versand oder serverseitige Speicherung. Pflichtmarkierungen sind Hinweise; PDF-Reader erzwingen sie beim Speichern nicht zuverlässig. Für längere Antworten eine ergänzende E-Mail nutzen, damit beim Drucken keine scrollenden Inhalte fehlen.

Die Seiten verwenden eingebettete Cabinet Grotesk und Satoshi. Eingabefelder verwenden Helvetica für breite PDF-Reader-Kompatibilität. `create_pdfs.py` erstellt die Dateien erneut und prüft Feldstruktur, Positionen und das Speichern eines Testwertes. Originalfonts samt Lizenz liegen unter `../Fonts/`.

Passende [E-Mail-Vorlage](../E-Mail/Onboarding.md) und [HTML-Design](../E-Mail/Onboarding.html).
