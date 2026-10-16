# Reiseplaner

Reiseplaner für mehrere Ziele, jeweils zwei Wochen ab Frankfurt:

- **China**: Peking → Shanghai → Zhangjiajie (Avatar-Berge, 999 Stufen am Tianmen-Berg) → Chongqing
- **Südkorea**: Seoul → Gyeongju → Busan → Jeju → Seoul
- **Japan**: Tokio (8 Nächte, mit Ausflügen zum Fuji und nach Kamakura) → Hakone (Ryokan) → Kyoto → Osaka → Tokio

**Live:** https://jbderleuchtturm.github.io/ChinaPlanning/

Direktlinks: [China](https://jbderleuchtturm.github.io/ChinaPlanning/#china/route) · [Südkorea](https://jbderleuchtturm.github.io/ChinaPlanning/#korea/route) · [Japan](https://jbderleuchtturm.github.io/ChinaPlanning/#japan/route)

## Was jede Reise kann

- **Route** – Strecke als Linienplan, Fahrkarten für jede Etappe, Infos zu jeder Station (wo schlafen, Hotelpreise, Anreise) und ein Budget-Rechner. Mit Abflugdatum warnt sie vor Feiertagen, Einreisefristen und schwierigem Wetter.
- **Tage** – fertiger 15-Tage-Vorschlag. Aktivitäten sortieren, verschieben, löschen, eigene anlegen, Hotel und Notizen pro Tag eintragen. Warnt bei Ruhetagen und zu vollen Tagen.
- **Ideen** – 75 bis 90 Aktivitäten pro Reise von klassisch bis verrückt, filterbar nach Ort, Art und Verrückt-Faktor.
- **Taxi-Karte** – zeigt den Namen in Landesschrift groß auf dem Display, zum Vorzeigen beim Taxifahrer.
- **Tipps** – Einreise, Bezahlen, Internet, Bahn, Hotels, Essen, Knigge, Sicherheit, Wetter, Notfall, Sprachführer.
- **Checkliste** – Buchungsfristen (berechnet aus dem Abflugdatum) und Packliste.

## Plan teilen

Jeder Plan wird nur im eigenen Browser gespeichert, getrennt pro Reise. „Plan teilen“ erzeugt einen Link, in dem der komplette Plan steckt. Den schickt man dem Mitreisenden, der übernimmt ihn mit einem Klick. Es gibt keinen Server und kein Konto. Alte China-Links funktionieren weiter.

## Offline

Nach dem ersten Öffnen funktioniert die Seite auch ohne Internet (Service Worker). Vor der Reise einmal komplett durchklicken.

## Neues Reiseziel anlegen

1. Eine bestehende Datei in [`trips/`](trips) kopieren, z. B. `trips/japan.js` → `trips/vietnam.js`.
2. `id`, Name, Texte, Währung, Kartendienst, Schrift, Farben, Städte, Aktivitäten, Tagesplan, Tipps und Checkliste anpassen. Die Kommentare in den Dateien erklären die Kürzel.
3. Die Datei in [`index.html`](index.html) als `<script>` und in [`sw.js`](sw.js) in der `ASSETS`-Liste eintragen. Dort auch die Cache-Version erhöhen.

Reserviert sind die Ortsschlüssel `fra` (unterwegs) und `any` (überall). Die App-Logik steckt in [`app.js`](app.js), das Aussehen in [`style.css`](style.css). Kein Build-Schritt nötig: Datei ändern, committen, auf `main` und `gh-pages` pushen.

Preise und Öffnungszeiten sind Richtwerte (Stand 2025/26) und sollten vor der Reise geprüft werden.
