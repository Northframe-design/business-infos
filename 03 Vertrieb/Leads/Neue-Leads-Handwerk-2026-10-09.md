# Neue Leads Handwerk (09.10.2026)

Vier Nischen mit hohem Auftragswert und vielen Suchanfragen, jeweils eine Firma im Raum DFW. Gefunden über die Websuche, danach jede Website auf dem Handy (375 px) angesehen. Aufgenommen nur mit E-Mail-Adresse auf der eigenen Website und sichtbarem Mangel. Alle Daten stammen von den eigenen Websites. Details im gleichnamigen `.tsv`.

| Nische | Firma | Stadt | Website | Telefon | E-Mail | Mangel (Handy) | Vorlage |
|---|---|---|---|---|---|---|---|
| Klempner | Royal Flush Plumbing and Drain Cleaning | Fort Worth | royalflushplumbers.net | (817) 716-1853 | rfplumber@yahoo.com | Tippfehler direkt im Hero („residentail“), weitere Tippfehler, „Leave A Review“ führt ins Leere, doppelte Menüs | `just-right-air-heat` |
| Elektriker | KPS Electric LLC | Arlington | kpselectric.com | (817) 682-4788 | kpselectricllc@yahoo.com | oben nur eine große graue Fläche mit Rohr-Grafik, keine Telefonnummer und kein Knopf sichtbar; Copyright 2019; Kontaktformular evtl. nicht sichtbar | `ac-service-repairs` |
| Garagentore | Independent Overhead Doors | Arlington | independentoverheaddoors.com | (817) 680-5169 | iodoors@sbcglobal.net | Seite breiter als das Display: Bilder und Überschriften seitlich abgeschnitten | `hector-torres-hvac` |
| Dachdecker | Stevan Buren Roofing, Windows & Flooring | Cleburne | stevanburen.com | 817-558-6997 | office@stevanburen.com | dunkles, verschwommenes Hero-Bild ohne Dach, gequetschte Versalien; Copyright 2023, Tippfehler, leere Abschnitte | `roofing-template` (Lone Star) |

Geprüft und verworfen: Heritage Roofing (keine E-Mail), Texas Tough Roofing (Domain geparkt), Davis Garage Door Service (Website nicht erreichbar).
Royal Flush ist auf dem Handy insgesamt noch ordentlich; der Mangel ist vor allem Text (Tippfehler) und Unordnung. Vor dem Mailen einmal abwägen.

## Vorlagen statt Neubau
Die vier HVAC-Seiten und die Lone-Star-Seite trennen Inhalt (`site/src/content.js`) und Design (`App.jsx`, `index.css` mit Farb-Variablen). Neue Firma = Ordner kopieren, `content.js` mit den echten Daten füllen, Farben auf das Logo anpassen, eigene Fotos der Firma einsetzen. HVAC-spezifische Effekte (Thermostat-Ring, Kühl/Heiß-Wipe) werden pro Nische ersetzt oder weggelassen.
