# Northframe — Antwortvorlagen für Rückmeldungen auf Akquise-Mails

Stand 17.10.2026. Für die Runden ab dem 20.10. (21 bis 24). Immer **im selben Verlauf** antworten, kurz, ohne neue Anhänge außer dort, wo es steht.
Preis und Umfang nur so, wie sie auf northframesites.com (#pricing) und in [[05 Angebot/Angebot|Angebot]] stehen. Platzhalter: `[FIRST_NAME]`, `[COMPANY]`, `[PREVIEW_LINK]` (steht in der Projektnotiz der Firma), `[THEIR_POINT]`.

Nach jeder Antwort: in `northframe-outreach/outcomes.jsonl` eintragen lassen (positive_reply, negative_reply, unsubscribe, question, auto_reply) und den Tracker aktualisieren.

**Signatur für alle Antworten:**
```text
Best,
Nathanael Gutperl
Northframe | Website design
hello@northframesites.com · northframesites.com
Adalbert-Stifter-Straße 31b, 65232 Taunusstein, Germany
```

---

## 1. „Ja, zeig mal“ / „Send me the link“
Bei den Runden mit Anhang (23, 24) ist das der Moment für den Vorschau-Link.
```text
Hi [FIRST_NAME],

Thanks for getting back to me. Here is the live concept for [COMPANY]:
[PREVIEW_LINK]

It works on a phone or a computer. All texts and photos come from your current website, and everything would be confirmed with you before anything goes live.

What would you keep or change?
```

## 2. „Was kostet das?“
```text
Hi [FIRST_NAME],

Good question. It's $999 once plus $99 a month. That covers five pages (Home, Services, About, Projects or Reviews, Contact) built from the concept, click-to-call and a quote form, a basic local SEO setup, one round of changes, hosting, SSL, and small content edits every month.

Delivery takes one to four weeks, and the monthly plan runs for 12 months. Online shops, customer logins and ongoing SEO campaigns are not included.

Would you like me to send a one-page proposal for [COMPANY]?
```
→ Bei „Ja“: Angebots-PDF nach dem Muster von [[Angebot J.A.C. Welding]] erstellen lassen.

## 3. „Kann man X ändern?“
```text
Hi [FIRST_NAME],

Yes. [THEIR_POINT] is easy to change. Once we start, you get one full round of changes on the finished draft, so feel free to collect everything you'd like different.

Anything else that stood out?
```

## 4. „Wer seid ihr? Ist das seriös?“ / Misstrauen
```text
Hi [FIRST_NAME],

Fair question. Northframe is my small web design studio, based in Germany, working with local businesses in Texas. I built the concept from your public website as an independent proposal. There's no obligation, and nothing goes live without your approval.

You can see the studio at northframesites.com. Happy to answer anything else.
```

## 5. „Ihr sitzt in Deutschland?“
```text
Hi [FIRST_NAME],

Yes, I'm based in Germany and work with clients in Texas by email and phone. Texas mornings overlap with my afternoon, so replies usually come the same day.
```

## 6. „Lass uns telefonieren“
Zeitverschiebung: Texas (Central Time) = Deutschland minus 7 Stunden (ab 25.10. in Deutschland Winterzeit: minus 6 Stunden bis zum 1.11., dann wieder minus 7).
```text
Hi [FIRST_NAME],

Sure. Would [DAY] at [TIME] Central Time work for you? I can call you at [THEIR_NUMBER], or send me a time that suits you better.
```

## 7. „Kein Interesse“ / „Wir haben schon jemanden“
```text
Hi [FIRST_NAME],

Thanks for letting me know, and all the best with [COMPANY]. Feel free to keep the PDF. I won't follow up.
```
→ Keine Nachfass-Mail mehr. In `outcomes.jsonl` als negative_reply eintragen.

## 8. „Bitte keine Mails mehr“ / „no thanks“ / Abmeldung
```text
Understood, I've removed you from my list. Sorry for the bother.
```
→ Sofort in `northframe-outreach/suppression.jsonl` eintragen lassen. Kein Follow-up.

## 9. Abwesenheitsnotiz / Auto-Reply
Nicht antworten. Zählt nicht als Antwort; das geplante Follow-up bleibt (nach der Rückkehr, falls ein Datum genannt ist).

## 10. Bounce / unzustellbar
Nicht erneut senden. Als bounce eintragen lassen und prüfen, ob auf der Firmenseite eine andere Adresse steht.

## 11. „Ja, machen wir“ (Auftrag)
```text
Hi [FIRST_NAME],

Great, thank you! I've attached a short onboarding form for your address, services, photos and domain. Short answers are fine. Please don't send passwords; if access is needed, we'll set up an invitation.

Once it's back, I'll finish the site and send it to you for your round of changes.
```
→ Anhang: `05 Angebot/Formulare/Northframe-Website-Onboarding.pdf`. Lieferzeit 1–4 Wochen, Monatsvertrag 12 Monate (entschieden 17.10.). Noch offen: Rechnung bzw. Auftragsbestätigung (siehe [[Angebot J.A.C. Welding]]).
