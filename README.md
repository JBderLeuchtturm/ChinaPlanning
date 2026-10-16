# Reiseplaner

Reiseplaner für mehrere Ziele, jeweils zwei Wochen ab Frankfurt:

| Reise | Route |
| --- | --- |
| [China](https://jbderleuchtturm.github.io/ChinaPlanning/#china/route) | Peking → Shanghai → Zhangjiajie (Avatar-Berge, 999 Stufen) → Chongqing |
| [Südkorea](https://jbderleuchtturm.github.io/ChinaPlanning/#korea/route) | Seoul → Gyeongju → Busan → Jeju → Seoul |
| [Japan](https://jbderleuchtturm.github.io/ChinaPlanning/#japan/route) | Tokio (8 Nächte) → Hakone (Ryokan) → Kyoto → Osaka → Tokio |
| [Mongolei](https://jbderleuchtturm.github.io/ChinaPlanning/#mongolia/route) | Ulaanbaatar → Terelj → Gobi → Orkhon-Tal → Khustai → Ulaanbaatar |
| [Kirgistan](https://jbderleuchtturm.github.io/ChinaPlanning/#kyrgyzstan/route) | Bischkek → Song-Kul → Tash Rabat → Issyk-Kul → Karakol → Bischkek |
| [Aserbaidschan](https://jbderleuchtturm.github.io/ChinaPlanning/#azerbaijan/route) | Baku → Quba & Xınalıq → Scheki → Gəncə → Baku |
| [Chile](https://jbderleuchtturm.github.io/ChinaPlanning/#chile/route) | Santiago → Valparaíso → Atacama → Torres del Paine → Seenregion → Santiago |
| [Argentinien & Uruguay](https://jbderleuchtturm.github.io/ChinaPlanning/#argentina/route) | Buenos Aires → Iguazú → El Calafate → Colonia → Montevideo → Buenos Aires |

**Live:** https://jbderleuchtturm.github.io/ChinaPlanning/

## Was jede Reise kann

- **Route** – Strecke als Linienplan, Fahrkarten für jede Etappe, Infos zu jeder Station (wo schlafen, Hotelpreise, Anreise) und ein Budget-Rechner. Mit Abflugdatum warnt sie vor Feiertagen, Einreisefristen und schwierigem Wetter.
- **Tage** – fertiger 15-Tage-Vorschlag. Aktivitäten sortieren, verschieben, löschen, eigene anlegen, Hotel und Notizen pro Tag eintragen. Warnt bei Ruhetagen und zu vollen Tagen.
- **Ideen** – 40 bis 90 Aktivitäten pro Reise von klassisch bis verrückt, filterbar nach Ort, Art und Verrückt-Faktor.
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

Reserviert sind die Ortsschlüssel `fra` (unterwegs) und `any` (überall). Für Reisen in lateinischer oder kyrillischer Schrift `script: 'alpha'` setzen – dann laufen Ortsnamen seitlich statt gestapelt. Verkehrsmittel (`mode`): `flug`, `zug`, `auto`, `bus`, `schiff`. Die App-Logik steckt in [`app.js`](app.js), das Aussehen in [`style.css`](style.css). Kein Build-Schritt nötig: Datei ändern, committen, auf `main` und `gh-pages` pushen.

Preise und Öffnungszeiten sind Richtwerte (Stand 2025/26) und sollten vor der Reise geprüft werden.
