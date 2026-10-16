# China-Reiseplaner

Zwei Wochen China mit dem Zug und dem Flugzeug: **Peking → Shanghai → Zhangjiajie (Avatar-Berge, 999 Stufen am Tianmen-Berg) → Chongqing**, ab Frankfurt.

**Live:** https://jbderleuchtturm.github.io/ChinaPlanning/

## Was die Seite kann

- **Route** – Strecke als Linienplan, Fahrkarten für jede Etappe, Infos zu jeder Stadt (wo schlafen, Hotelpreise, Anreise) und ein Budget-Rechner.
- **Tage** – fertiger 15-Tage-Vorschlag. Aktivitäten sortieren, verschieben, löschen, eigene anlegen, Hotel und Notizen pro Tag eintragen. Warnt bei Ruhetagen (z. B. Verbotene Stadt montags zu) und zu vollen Tagen.
- **Ideen** – über 90 Aktivitäten von klassisch bis verrückt, filterbar nach Stadt, Art und Verrückt-Faktor. Mit einem Klick in einen Tag einplanen.
- **Taxi-Karte** – zeigt den chinesischen Namen groß auf dem Display, zum Vorzeigen beim Taxifahrer.
- **Tipps** – Visum, Bezahlen (Alipay), Internet (Great Firewall), Züge, Hotels, Essen, Sicherheit, Wetter, Notfall, Sprachführer.
- **Checkliste** – Buchungsfristen (berechnet aus dem Abflugdatum) und Packliste.

## Plan teilen

Der Plan wird nur im eigenen Browser gespeichert. „Plan teilen“ erzeugt einen Link, in dem der komplette Plan steckt – den schickt man dem Mitreisenden, der übernimmt ihn mit einem Klick. Es gibt keinen Server und kein Konto.

## Offline

Nach dem ersten Öffnen funktioniert die Seite auch ohne Internet (Service Worker). Praktisch in China, wo GitHub ohne VPN oder Roaming-eSIM manchmal nicht lädt: vor der Reise einmal komplett öffnen.

## Inhalte ändern

Alle Texte, Aktivitäten, der Standardplan und die Tipps stehen in [`data.js`](data.js). Die Logik steckt in [`app.js`](app.js), das Aussehen in [`style.css`](style.css). Kein Build-Schritt nötig – Datei ändern, committen, pushen.

Preise und Öffnungszeiten sind Richtwerte (Stand 2025/26) und sollten vor der Reise geprüft werden.
