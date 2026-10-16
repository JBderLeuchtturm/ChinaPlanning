/* Reise: Kirgistan. Preise sind Richtwerte pro Person in Som (Stand 2025/26) – vor Ort prüfen. */
(window.TRIPS = window.TRIPS || []).push({
  id: 'kyrgyzstan',
  name: 'Kirgistan',
  title: 'Zwei Wochen Kirgistan',
  lede: 'Jurten am Bergsee Song-Kul, Ausritte über Almen, rote Canyons und der riesige Issyk-Kul vor schneebedeckten Gipfeln – mit Fahrer durchs Tian-Shan-Gebirge. Unter „Tage“ liegt schon ein fertiger Plan. Ihr tauscht nur noch aus, was euch nicht passt, und schickt ihn euch per Link.',
  routeLede: 'Mit Umstieg in Istanbul nach Bischkek, dann eine Runde mit Fahrer: Song-Kul, Tash Rabat, Issyk-Kul und Karakol. Personenzüge spielen in Kirgistan praktisch keine Rolle.',
  seal: 'Ж',
  sealFmt: 'Күн {n}',
  lang: 'ky',
  script: 'alpha',
  font: { family: 'Noto Serif Display', weight: 900, fallback: "'Noto Serif', Georgia, serif" },
  locFont: "system-ui, 'Segoe UI', Roboto, 'Noto Sans', sans-serif",
  taxiAsk: 'Отвезите меня сюда, пожалуйста',
  currency: { label: 'Som', rate: 100, rateLabel: '1 € in Som' },
  maps: [
    { label: 'Google Maps', url: 'https://www.google.com/maps/search/?api=1&query={q}' },
    { label: '2GIS', url: 'https://2gis.kg/bishkek/search/{q}' }
  ],
  theme: {
    light: { ticket: '#D2ECEE', ink: '#145B63', line: '#9FD0D5' },
    dark: { ticket: '#173539', ink: '#9EDCE2', line: '#2C575C' }
  },
  budget: {
    flight: [450, 850], flightLabel: 'Flug Frankfurt – Bischkek mit Umstieg, hin und zurück',
    hotel: [['Budget', 25], ['Mittelklasse', 50], ['Komfort', 100]],
    food: [['Sparsam', 15], ['Normal', 25], ['Schlemmen', 40]],
    extra: 120, extraLabel: 'Taxi, SIM, Trinkgeld, Souvenirs',
    transportLabel: 'Fahrer und Transfers aus eurem Plan'
  },
  warnings: {
    after: [],
    holidays: [],
    seasons: [
      { months: [10, 11, 12, 1, 2, 3, 4, 5], text: 'Song-Kul und Tash Rabat sind nur im Sommer erreichbar – die Jurtencamps öffnen etwa Mitte Juni und schließen Mitte September. Im Winter lockt dafür Skifahren bei Karakol.' },
      { months: [7, 8], text: 'Hochsaison: warm im Tal, kühl auf 3.000 m. Jurten und Fahrer früh reservieren.' }
    ]
  },

  cities: {
    fra: { name: 'Unterwegs', loc: 'Франкфурт', py: 'Frankfurt' },
    bis: {
      name: 'Bischkek', loc: 'Бишкек', py: 'Bishkek', color: ['#B03A2E', '#EE7A6C'],
      why: `Grüne, entspannte Hauptstadt mit sowjetischen Prachtbauten, Mosaiken, Märkten und Cafés – und Viertausendern direkt vor der Tür.`,
      stay: `Im Zentrum zwischen Ala-Too-Platz und Philharmonie.`,
      stayTip: `Bischkek ist kein Ort für viele Tage, aber perfekt zum Ankommen, Geldwechseln und um den Fahrer zu treffen.`,
      move: `Taxi per App (Yandex Go) kostet wenige Euro. Marschrutkas (Minibusse) für Abenteuerlustige.`,
      arrive: `Der Flughafen Manas liegt ca. 30 km außerhalb, mit dem App-Taxi ca. 40 Min.`,
      prices: [['Budget', '20–40 €'], ['Mittelklasse', '45–80 €'], ['Komfort', 'ab 100 €']]
    },
    sk: {
      name: 'Song-Kul', loc: 'Соң-Көл', py: 'Song-Köl', color: ['#1E6FA0', '#6EB8E6'],
      why: `Ein Bergsee auf über 3.000 m, umgeben von Weiden, auf denen Nomaden im Sommer ihre Herden halten. Nachts liegen Millionen Sterne über den Jurten.`,
      stay: `Jurtencamps von Familien am Seeufer, mit Abendessen und Frühstück.`,
      stayTip: `Nachts kann es selbst im August um 0 °C kalt werden – die Jurten haben Öfen und dicke Decken.`,
      move: `Zu Pferd (ab Kyzart in 2 Tagen) oder mit dem Geländewagen über Bergpässe.`,
      arrive: `Ab Bischkek ca. 6–7 Std. über Kochkor, die letzten 2 Std. auf Schotter.`,
      prices: [['Jurte', '15–25 €'], ['Jurte mit Essen', '25–40 €'], ['Komfort-Jurte', 'ab 50 €']],
      priceNote: 'pro Person und Nacht'
    },
    nar: {
      name: 'Tash Rabat', loc: 'Таш-Рабат', py: 'Tash Rabat', color: ['#8A5A1E', '#D9A766'],
      why: `Eine steinerne Karawanserei aus dem 15. Jahrhundert in einem einsamen Hochtal an der alten Seidenstraße, nah an der Grenze zu China.`,
      stay: `Jurtencamps direkt neben der Karawanserei.`,
      stayTip: `Auf gut 3.000 m: langsam machen, viel trinken. Unterwegs liegt die Stadt Naryn zum Einkaufen.`,
      move: `Mit Fahrer. Ausritte und Wanderungen direkt ab dem Camp.`,
      arrive: `Vom Song-Kul über Naryn ca. 5–6 Std.`,
      prices: [['Jurte', '15–25 €'], ['Jurte mit Essen', '25–40 €'], ['Gästehaus Naryn', '20–40 €']],
      priceNote: 'pro Person und Nacht'
    },
    ik: {
      name: 'Issyk-Kul', loc: 'Ыссык-Көл', py: 'Issyk-Köl', color: ['#127A86', '#4FC4CF'],
      why: `Einer der größten Bergseen der Welt, so groß, dass man das andere Ufer kaum sieht. Er friert nie zu – der Name bedeutet „heißer See“.`,
      stay: `Am Südufer im Jurtencamp bei Bokonbaevo oder Tamga, am Nordufer in Cholpon-Ata.`,
      stayTip: `Das Südufer ist wild und ruhig, das Nordufer touristisch mit Stränden und Hotels.`,
      move: `Mit Fahrer oder Marschrutka entlang der Uferstraße.`,
      arrive: `Von Tash Rabat ca. 6 Std., von Bischkek ca. 4 Std.`,
      prices: [['Budget', '20–40 €'], ['Mittelklasse', '40–80 €'], ['Komfort', 'ab 90 €']]
    },
    kar: {
      name: 'Karakol', loc: 'Каракол', py: 'Karakol', color: ['#4E7A2B', '#9BCB6E'],
      why: `Basis für die besten Wanderungen des Landes: heiße Quellen in Altyn Arashan, rote Felsen in Jeti-Oguz, Gletscherseen. Dazu eine Holzmoschee im chinesischen Pagodenstil.`,
      stay: `Guesthouses im Zentrum, viele mit Garten und großem Frühstück.`,
      stayTip: `Im Ort gibt es Ausrüstungsverleih und Trekking-Infos – fragt im Guesthouse.`,
      move: `Taxi und Marschrutka ins Umland, zu den Wanderwegen mit Geländewagen.`,
      arrive: `Am Ostende des Issyk-Kul, ab Bischkek ca. 6–7 Std.`,
      prices: [['Budget', '15–30 €'], ['Mittelklasse', '35–60 €'], ['Komfort', 'ab 70 €']]
    },
    any: { name: 'Überall', loc: '', py: '' }
  },

  /* c = Ort, cat = Kategorien, v = Verrückt-Faktor 0–3, d = Dauer in Std., p = Preis p. P. in Som,
     pt = Preistext, w = übliche Tageszeit (0 Früh … 5 Ganztags), closed/only = Wochentage (0 = So) */
  activities: [
    // ---------- Transfers ----------
    { id: 't-fra-bis', c: 'fra', t: 'Flug Frankfurt → Bischkek', cat: ['transport'], v: 0, d: 12, p: 0, pt: 'hin und zurück ca. 450–850 €', w: 4, mode: 'flug', dshort: '12 Std.', taxi: false,
      desc: `Kein Direktflug: mit Umstieg in Istanbul (z. B. Turkish Airlines oder Pegasus), insgesamt ca. 12 Std. Ankunft oft frühmorgens. Kirgistan ist 4 Std. (Sommerzeit) bzw. 5 Std. (Winterzeit) voraus.`,
      tip: `Nach dem Nachtflug erst schlafen – frühen Check-in beim Guesthouse vorher anfragen.` },
    { id: 't-bis-sk', c: 'sk', t: 'Fahrt Bischkek → Song-Kul', loc: 'Кочкор', cat: ['transport'], v: 1, d: 7, p: 6000, pt: 'Fahrer ca. 10.000–14.000 Som pro Auto', w: 1, mode: 'auto', dshort: '7 Std.',
      desc: `Durch die Boom-Schlucht nach Kochkor und dann über Schotterpässe auf 3.400 m hinauf zum See.`,
      tip: `In Kochkor Pause machen: Filzteppiche bei der Frauenkooperative ansehen.` },
    { id: 't-sk-nar', c: 'nar', t: 'Fahrt Song-Kul → Tash Rabat', loc: 'Нарын', cat: ['transport'], v: 0, d: 6, p: 6000, pt: 'Fahrer ca. 10.000–14.000 Som pro Auto', w: 1, mode: 'auto', dshort: '6 Std.',
      desc: `Über Serpentinen nach Naryn und weiter Richtung chinesische Grenze.`,
      tip: `In Naryn tanken, Geld abheben, einkaufen – danach kommt lange nichts.` },
    { id: 't-nar-ik', c: 'ik', t: 'Fahrt Tash Rabat → Issyk-Kul', loc: 'Боконбаев', cat: ['transport'], v: 0, d: 6, p: 7000, pt: 'Fahrer ca. 12.000–15.000 Som pro Auto', w: 1, mode: 'auto', dshort: '6 Std.',
      desc: `Zurück über Naryn und den Dolon-Pass an das Südufer des Issyk-Kul.`,
      tip: `Der Skazka-Canyon liegt direkt an der Uferstraße – gleich mitnehmen.` },
    { id: 't-ik-kar', c: 'kar', t: 'Fahrt Südufer → Karakol', loc: 'Каракол', cat: ['transport'], v: 0, d: 3, p: 3000, pt: 'Fahrer ca. 5.000–7.000 Som pro Auto', w: 1, mode: 'auto', dshort: '3 Std.',
      desc: `Am Südufer entlang nach Osten bis Karakol.`,
      tip: `Marschrutkas fahren die Strecke auch, sind aber voll und langsam.` },
    { id: 't-kar-cho', c: 'ik', t: 'Marschrutka Karakol → Cholpon-Ata', loc: 'Чолпон-Ата', cat: ['transport'], v: 1, d: 2.5, p: 400, pt: 'ca. 300–500 Som', w: 1, mode: 'bus', dshort: '2½ Std.',
      desc: `Am Nordufer entlang in den Urlaubsort Cholpon-Ata.`,
      tip: `Abfahrt am Busbahnhof Karakol. Sammeltaxis fahren los, sobald sie voll sind.` },
    { id: 't-cho-bis', c: 'bis', t: 'Fahrt Cholpon-Ata → Bischkek', loc: 'Бишкек', cat: ['transport'], v: 0, d: 4.5, p: 2500, pt: 'Sammeltaxi ca. 800–1.200 Som, Privatfahrer ca. 5.000 Som', w: 1, mode: 'auto', dshort: '4 Std.',
      desc: `Durch die Boom-Schlucht zurück in die Hauptstadt.`,
      tip: `Mit Privatfahrer lohnt der Halt am Burana-Turm bei Tokmok.` },
    { id: 't-bis-fra', c: 'fra', t: 'Rückflug Bischkek → Frankfurt', cat: ['transport'], v: 0, d: 12, p: 0, pt: 'im Flugpreis enthalten', w: 0, mode: 'flug', dshort: '12 Std.', taxi: false,
      desc: `Mit Umstieg in Istanbul. Viele Flüge starten nachts oder frühmorgens.`,
      tip: `3 Std. vorher am Flughafen Manas sein.` },

    // ---------- Bischkek ----------
    { id: 'bis-alatoo', c: 'bis', t: 'Ala-Too-Platz & Wachwechsel', loc: 'Ала-Тоо аянты', cat: ['klassiker'], v: 0, d: 1, p: 0, w: 3,
      desc: `Zentraler Platz mit Manas-Reiterdenkmal und Fahnenmast, an dem stündlich die Wache wechselt.`,
      tip: `Abends spielen hier Familien, Wasserspiele laufen im Sommer.` },
    { id: 'bis-museum', c: 'bis', t: 'Historisches Nationalmuseum', loc: 'Улуттук тарых музейи', cat: ['kultur'], v: 0, d: 1.5, p: 400, pt: 'ca. 300–500 Som', w: 3,
      desc: `Von Nomaden und Seidenstraße bis zur Sowjetzeit, in einem markanten Marmorbau am Ala-Too-Platz.`,
      tip: `Die Sowjet-Wandbilder im Obergeschoss sind allein den Besuch wert.` },
    { id: 'bis-panfilov', c: 'bis', t: 'Panfilov-Park & Sowjet-Mosaike', loc: 'Панфилов паркы', cat: ['verrueckt', 'chill'], v: 1, d: 1.5, p: 0, w: 3,
      desc: `Alter Vergnügungspark mit rostigem Riesenrad, dazu überall in der Stadt sowjetische Mosaike an Hauswänden.`,
      tip: `Mosaik-Spaziergang: die Fassaden rund um die Tschui-Straße ablaufen.` },
    { id: 'bis-chaihana', c: 'bis', t: 'Teehaus mit Schaschlik', loc: 'Чайхана', cat: ['essen'], v: 0, d: 1.5, p: 1200, w: 4,
      desc: `Auf Kissen sitzen, Tee aus Schalen, Schaschlik vom Holzkohlegrill und frisches Fladenbrot (Lepjoschka).`,
      tip: `Brot niemals auf den Boden legen oder wegwerfen – es ist heilig.` },
    { id: 'bis-osh', c: 'bis', t: 'Osch-Basar', loc: 'Ош базары', cat: ['klassiker', 'essen'], v: 1, d: 2, p: 0, w: 1,
      desc: `Riesiger Markt mit Bergen von Trockenfrüchten, Nüssen, Gewürzen, Kalpak-Hüten und Fleisch.`,
      tip: `Auf Taschendiebe achten. Probieren: Kurut (salzige Quarkbällchen) und frische Samsa.` },
    { id: 'bis-dordoi', c: 'bis', t: 'Dordoi-Basar', loc: 'Дордой базары', cat: ['verrueckt'], v: 1, d: 2, p: 0, w: 3,
      desc: `Einer der größten Märkte Zentralasiens – eine Stadt aus Tausenden gestapelten Schiffscontainern.`,
      tip: `Leicht verlaufen: Orientierungspunkt merken, Handy-Akku voll.` },
    { id: 'bis-alaarcha', c: 'bis', t: 'Ala-Archa-Nationalpark', loc: 'Ала-Арча', cat: ['natur', 'ausflug'], v: 0, d: 7, p: 700, pt: 'Eintritt ca. 300–700 Som + Taxi', w: 5,
      desc: `40 Min. von der Stadt: Schlucht mit Wanderwegen zu Wasserfall und Gletscher, ringsum Viertausender.`,
      tip: `Zum Wasserfall ca. 2–3 Std. hin und zurück. Taxi für den ganzen Tag mieten und Rückfahrt vereinbaren.` },
    { id: 'bis-banya', c: 'bis', t: 'Russische Banja', loc: 'Баня', cat: ['chill', 'verrueckt'], v: 2, d: 2, p: 1000, w: 4,
      desc: `Dampfsauna mit Birkenzweigen, mit denen man sich abklopfen lässt – danach ins kalte Becken.`,
      tip: `Viele Banjas vermieten private Räume stundenweise.` },
    { id: 'bis-burana', c: 'bis', t: 'Burana-Turm', loc: 'Бурана мунарасы', cat: ['kultur'], v: 0, d: 2, p: 300, w: 1,
      desc: `Minarett aus dem 11. Jahrhundert, letzter Rest der Seidenstraßen-Stadt Balasagun, umgeben von Balbals – steinernen Grabfiguren.`,
      tip: `Liegt bei Tokmok, auf dem Weg zum Issyk-Kul. Durch das enge Treppenhaus kann man hochklettern.` },
    { id: 'bis-navat', c: 'bis', t: 'Beshbarmak & Plov', loc: 'Бешбармак', cat: ['essen', 'klassiker'], v: 0, d: 2, p: 1500, w: 4,
      desc: `Beshbarmak heißt „fünf Finger“: Nudeln mit Hammel, traditionell mit der Hand gegessen. Dazu Plov, Lagman und Manti.`,
      tip: `Ketten wie Navat oder Faiza sind gut und günstig.` },

    // ---------- Song-Kul ----------
    { id: 'sk-felt', c: 'sk', t: 'Filzteppich-Werkstatt in Kochkor', loc: 'Шырдак', cat: ['kultur'], v: 0, d: 1.5, p: 0, w: 2,
      desc: `Frauen fertigen Shyrdaks – bunte Filzteppiche mit Widderhorn-Mustern. Man kann zuschauen und mitmachen.`,
      tip: `Die Frauenkooperative Altyn Kol in Kochkor ist die bekannteste.` },
    { id: 'sk-yurt', c: 'sk', t: 'Nacht in der Jurte', loc: 'Боз үй', cat: ['klassiker', 'kultur'], v: 1, d: 2, p: 0, pt: 'im Übernachtungspreis', w: 4, taxi: false,
      desc: `Filzjurte mit Ofen, Teppichen und dicken Decken. Abends Milchtee, frisches Brot und Lagerfeuer.`,
      tip: `Jurten werden oft geteilt – nach einer eigenen fragen.` },
    { id: 'sk-ride', c: 'sk', t: 'Ausritt am Song-Kul', loc: 'Ат минүү', cat: ['klassiker', 'natur'], v: 1, d: 3, p: 1500, pt: 'ca. 1.000–1.500 Som pro Stunde', w: 1,
      desc: `Auf kirgisischen Pferden über Almen voller Edelweiß zu den Herden der Nomaden.`,
      tip: `Auch Anfänger kommen zurecht, die Pferde sind ruhig. Lange Hose und Sonnencreme.` },
    { id: 'sk-trek', c: 'sk', t: 'Reittour Kyzart → Song-Kul', loc: 'Кызарт', cat: ['verrueckt', 'natur'], v: 2, d: 48, p: 8000, pt: 'ca. 6.000–10.000 Som p. P. mit Guide', w: 5,
      desc: `Zwei Tage im Sattel über einen Pass zum See statt mit dem Auto – für viele das Highlight der Reise.`,
      tip: `Über CBT Kochkor buchen. Der Sattel ist hart – Polster-Radhose hilft.` },
    { id: 'sk-stars', c: 'sk', t: 'Sternenhimmel auf 3.000 m', loc: 'Жылдыздар', cat: ['natur', 'chill'], v: 0, d: 1, p: 0, w: 4, taxi: false,
      desc: `Keine Straßenlaterne im Umkreis von 50 km – die Milchstraße spiegelt sich im See.`,
      tip: `Daunenjacke anziehen, es wird nachts empfindlich kalt.` },

    // ---------- Tash Rabat ----------
    { id: 'nar-naryn', c: 'nar', t: 'Stopp in Naryn', loc: 'Нарын', cat: ['kultur'], v: 0, d: 1, p: 0, w: 2,
      desc: `Lange Straßenstadt am Fluss vor kahlen Bergen – Versorgungsstopp mit Markt und Moschee.`,
      tip: `Letzte Chance auf Geldautomat und Supermarkt.` },
    { id: 'nar-caravan', c: 'nar', t: 'Karawanserei Tash Rabat', loc: 'Таш-Рабат', cat: ['klassiker', 'kultur'], v: 0, d: 1.5, p: 300, pt: 'ca. 200–300 Som', w: 3,
      desc: `Steinerner Bau mit Kuppel und über 30 Räumen, versteckt im Tal – hier rasteten Karawanen auf dem Weg nach China.`,
      tip: `Mit Taschenlampe in die dunklen Kammern.` },
    { id: 'nar-chatyr', c: 'nar', t: 'Wanderung mit Blick auf den Chatyr-Kul', loc: 'Чатыр-Көл', cat: ['natur', 'verrueckt'], v: 2, d: 7, p: 0, w: 5,
      desc: `Steiler Aufstieg über einen fast 4.000 m hohen Pass mit Blick auf den Bergsee Chatyr-Kul an der chinesischen Grenze. Auch zu Pferd möglich.`,
      tip: `Für den See selbst braucht ihr ein Grenzzonen-Permit – vorher über eine Agentur organisieren.` },

    // ---------- Issyk-Kul ----------
    { id: 'ik-skazka', c: 'ik', t: 'Märchen-Canyon Skazka', loc: 'Жомок капчыгайы', cat: ['klassiker', 'natur'], v: 1, d: 1.5, p: 300, pt: 'ca. 200–300 Som', w: 3,
      desc: `Rote und gelbe Sandsteinfelsen, vom Wind zu Drachen, Burgen und Türmen geformt.`,
      tip: `Zum späten Nachmittag leuchten die Farben am stärksten.` },
    { id: 'ik-eagle', c: 'ik', t: 'Adlerjäger in Bokonbaevo', loc: 'Бүркүтчү', cat: ['verrueckt', 'kultur'], v: 2, d: 1.5, p: 2500, pt: 'ca. 2.000–3.000 Som p. P.', w: 3,
      desc: `Ein Berkutchi zeigt, wie er mit seinem Steinadler jagt – der Vogel stürzt aus dem Himmel auf seine Beute.`,
      tip: `Über das Jurtencamp buchen. Nichts für Zartbesaitete: Manchmal wird ein lebendes Tier als Beute eingesetzt.` },
    { id: 'ik-beltam', c: 'ik', t: 'Jurtencamp am Südufer', loc: 'Бел-Там', cat: ['chill'], v: 0, d: 2, p: 0, pt: 'im Übernachtungspreis', w: 4,
      desc: `Jurten direkt am Strand, Blick auf See und Berge, abends Lagerfeuer.`,
      tip: `Bei Sonnenuntergang ins kühle Wasser – dann vor den Ofen.` },
    { id: 'ik-swim', c: 'ik', t: 'Baden im Issyk-Kul', loc: 'Ыссык-Көл', cat: ['chill', 'natur'], v: 0, d: 2, p: 0, w: 0, taxi: false,
      desc: `Klares, leicht salziges Wasser auf 1.600 m Höhe. Im Juli und August ca. 20 °C.`,
      tip: `Die ruhigsten Strände liegen am Südufer bei Tamga und Kaji-Say.` },
    { id: 'ik-barskoon', c: 'ik', t: 'Wasserfälle von Barskoon', loc: 'Барскоон', cat: ['natur'], v: 0, d: 4, p: 0, w: 1,
      desc: `Schlucht am Südufer mit Wasserfällen und einem Denkmal für Juri Gagarin, der hier Urlaub machte.`,
      tip: `Die Straße führt weiter zur Goldmine – nur bis zu den Wasserfällen fahren.` },
    { id: 'ik-petroglyphs', c: 'ik', t: 'Felszeichnungen von Cholpon-Ata', loc: 'Петроглифтер', cat: ['kultur'], v: 0, d: 1.5, p: 300, w: 3,
      desc: `Freilichtmuseum mit Hunderten Felsritzungen von Steinböcken und Jägern, bis zu 3.000 Jahre alt, mit Blick über den See.`,
      tip: `Am späten Nachmittag, wenn das Licht flach steht, sieht man die Ritzungen am besten.` },
    { id: 'ik-rukh', c: 'ik', t: 'Rukh Ordo', loc: 'Рух Ордо', cat: ['kultur'], v: 0, d: 1.5, p: 500, pt: 'ca. 500 Som', w: 3,
      desc: `Park mit Kapellen aller Weltreligionen am Seeufer, zum Gedenken an den Schriftsteller Tschingis Aitmatow.`,
      tip: `Gut mit den Felszeichnungen am selben Nachmittag kombinierbar.` },

    // ---------- Karakol ----------
    { id: 'kar-altyn', c: 'kar', t: 'Wanderung nach Altyn Arashan', loc: 'Алтын-Арашан', cat: ['klassiker', 'natur'], v: 1, d: 7, p: 500, pt: 'Nationalpark ca. 500 Som', w: 5,
      desc: `Durch ein Tal mit Tannen hinauf zu heißen Quellen auf 2.600 m, mit Blick auf den Gipfel Palatka. Übernachtung im Guesthouse oben.`,
      tip: `Ca. 5–6 Std. zu Fuß hoch. Wer nicht laufen will, fährt im alten Sowjet-Lkw mit.` },
    { id: 'kar-hotspring', c: 'kar', t: 'Bad in den heißen Quellen', loc: 'Арашан', cat: ['chill'], v: 0, d: 1, p: 300, w: 4,
      desc: `Einfache Holzhütten mit Becken voller heißem Quellwasser – nach der Wanderung perfekt.`,
      tip: `Badehose und Handtuch in den Rucksack.` },
    { id: 'kar-jetioguz', c: 'kar', t: 'Jeti-Oguz: Sieben Bullen', loc: 'Жети-Өгүз', cat: ['klassiker', 'natur'], v: 0, d: 3, p: 0, w: 3,
      desc: `Rote Felsformationen wie eine Herde Bullen und der gespaltene Fels „Gebrochenes Herz“. Dahinter ein Tal mit Pferdeweiden.`,
      tip: `Mit dem Taxi ca. 40 Min. ab Karakol.` },
    { id: 'kar-dungan', c: 'kar', t: 'Dunganen-Moschee', loc: 'Дунган мечити', cat: ['kultur', 'verrueckt'], v: 1, d: 1, p: 100, w: 3,
      desc: `Holzmoschee, 1910 von chinesischstämmigen Muslimen ganz ohne Nägel gebaut – sie sieht aus wie ein buddhistischer Tempel.`,
      tip: `Schultern und Knie bedecken.` },
    { id: 'kar-cathedral', c: 'kar', t: 'Holzkathedrale der Dreifaltigkeit', loc: 'Ыйык Үч Бирдик собору', cat: ['kultur'], v: 0, d: 0.5, p: 0, w: 3,
      desc: `Russisch-orthodoxe Kirche ganz aus Holz mit goldenen Zwiebeltürmen.`,
      tip: `Liegt nur ein paar Straßen von der Moschee entfernt.` },
    { id: 'kar-ashlyanfu', c: 'kar', t: 'Ashlyan-Fu am Basar', loc: 'Ашлянфу', cat: ['essen', 'verrueckt'], v: 2, d: 1, p: 100, pt: 'ca. 60–100 Som', w: 4,
      desc: `Karakols Kultgericht: kalte Nudeln mit Stärkegelee in scharf-saurer Brühe. Für ein paar Cent.`,
      tip: `In der Ashlyan-Fu-Gasse am Basar dorthin gehen, wo die meisten sitzen.` },
    { id: 'kar-animal', c: 'kar', t: 'Tiermarkt am Sonntag', loc: 'Мал базары', cat: ['verrueckt', 'kultur'], v: 2, d: 2, p: 0, w: 0, only: [0],
      desc: `Jeden Sonntagmorgen handeln Bauern mit Schafen, Pferden und Kühen – Probereiten auf dem Parkplatz inklusive.`,
      tip: `Nur sonntags, früh hin (ca. 6–9 Uhr).` },
    { id: 'kar-przhevalsky', c: 'kar', t: 'Przewalski-Gedenkstätte', loc: 'Пржевальский музейи', cat: ['kultur'], v: 0, d: 1.5, p: 300, w: 3,
      desc: `Museum über den Entdecker Nikolai Przewalski, nach dem die Wildpferde benannt sind – er starb hier 1888.`,
      tip: `Liegt am See bei Pristan, kurz vor Karakol.` },
    { id: 'kar-alakol', c: 'kar', t: 'Treck zum Ala-Kul-See', loc: 'Ала-Көл', cat: ['natur', 'verrueckt'], v: 2, d: 72, pt: 'Zelt oder Hütten, Guide optional', w: 5,
      desc: `Der Klassiker unter den Treks: drei Tage über einen 3.900-m-Pass zu einem türkisblauen Gletschersee, dann hinab nach Altyn Arashan.`,
      tip: `Nur mit guter Kondition und Ausrüstung. In Karakol gibt es Verleih und Infos.` },
    { id: 'kar-ski', c: 'kar', t: 'Skifahren in Karakol', loc: 'Каракол лыжная база', cat: ['ausflug'], v: 1, d: 7, p: 3000, pt: 'Skipass ca. 2.500–3.500 Som', w: 5,
      desc: `Im Winter eines der besten Skigebiete Zentralasiens, mit Pulverschnee und kleinen Preisen.`,
      tip: `Saison etwa Dezember bis März.` },

    // ---------- Überall ----------
    { id: 'any-kumys', c: 'any', t: 'Kymys probieren', loc: 'Кымыз', cat: ['essen', 'verrueckt'], v: 3, d: 0.5, p: 100, w: 3, taxi: false,
      desc: `Vergorene Stutenmilch, leicht alkoholisch und säuerlich – das Nationalgetränk. Im Sommer am Straßenrand in Plastikflaschen.`,
      tip: `Erst wenig, der Magen muss sich gewöhnen.` },
    { id: 'any-kokboru', c: 'any', t: 'Kok-Boru: Polo mit Ziege', loc: 'Көк бөрү', cat: ['verrueckt', 'kultur'], v: 3, d: 2, p: 0, w: 3, taxi: false,
      desc: `Das Nationalspiel: Reiter kämpfen um einen kopflosen Ziegenkadaver und werfen ihn ins gegnerische Tor. Brutal und spektakulär.`,
      tip: `Spiele gibt es zu Festen und im Sommer – Fahrer oder Guesthouse fragen.` },
    { id: 'any-marshrutka', c: 'any', t: 'Mit der Marschrutka fahren', loc: 'Маршрутка', cat: ['verrueckt'], v: 1, d: 1, p: 50, w: 3, taxi: false,
      desc: `Minibusse sind Kirgistans Nahverkehr: Das Ziel steht vorne auf einem Schild, zum Aussteigen ruft man „Ostanowitje!“.`,
      tip: `Bezahlt wird beim Aussteigen beim Fahrer, passendes Kleingeld bereithalten.` },
    { id: 'any-tea', c: 'any', t: 'Teeritual mit halbvoller Schale', loc: 'Чай', cat: ['kultur', 'chill'], v: 0, d: 0.5, p: 0, w: 3, taxi: false,
      desc: `Gastgeber schenken Tee immer nur halb voll ein und füllen ständig nach – eine volle Schale hieße: Zeit zu gehen.`,
      tip: `Schale mit der Hand abdecken, wenn ihr nichts mehr wollt.` }
  ],

  /* Vorgeschlagener Plan: [Aktivität, Tageszeit] */
  defaultPlan: [
    { city: 'fra', items: [['t-fra-bis', 4]] },
    { city: 'bis', items: [['bis-alatoo', 3], ['bis-panfilov', 3], ['bis-chaihana', 4]] },
    { city: 'bis', items: [['bis-alaarcha', 5], ['bis-banya', 4]] },
    { city: 'sk', items: [['t-bis-sk', 1], ['sk-felt', 2], ['sk-yurt', 4]] },
    { city: 'sk', items: [['sk-ride', 1], ['any-kumys', 3], ['sk-stars', 4]] },
    { city: 'nar', items: [['t-sk-nar', 1], ['nar-naryn', 2], ['nar-caravan', 3]] },
    { city: 'ik', items: [['t-nar-ik', 1], ['ik-skazka', 3], ['ik-eagle', 3], ['ik-beltam', 4]] },
    { city: 'kar', items: [['ik-swim', 0], ['t-ik-kar', 1], ['kar-dungan', 3], ['kar-cathedral', 3], ['kar-ashlyanfu', 4]] },
    { city: 'kar', items: [['kar-altyn', 5], ['kar-hotspring', 4]] },
    { city: 'kar', items: [['kar-jetioguz', 3], ['any-tea', 4]] },
    { city: 'kar', items: [['kar-animal', 0], ['kar-przhevalsky', 3]] },
    { city: 'ik', items: [['t-kar-cho', 1], ['ik-rukh', 3], ['ik-petroglyphs', 3]] },
    { city: 'bis', items: [['t-cho-bis', 1], ['bis-burana', 1], ['bis-dordoi', 3]] },
    { city: 'bis', items: [['bis-osh', 1], ['bis-museum', 3], ['bis-navat', 4]] },
    { city: 'fra', items: [['t-bis-fra', 0]] }
  ],

  tickets: {
    't-fra-bis': { from: ['Франкфурт', 'Frankfurt (FRA)'], to: ['Бишкек', 'Manas (FRU)'], label: 'Flug, 1 Umstieg' },
    't-bis-sk': { from: ['Бишкек', 'Bischkek'], to: ['Соң-Көл', 'Song-Kul'], label: 'Fahrer' },
    't-sk-nar': { from: ['Соң-Көл', 'Song-Kul'], to: ['Таш-Рабат', 'Tash Rabat'], label: 'Fahrer' },
    't-nar-ik': { from: ['Таш-Рабат', 'Tash Rabat'], to: ['Боконбаев', 'Bokonbaevo'], label: 'Fahrer' },
    't-ik-kar': { from: ['Боконбаев', 'Bokonbaevo'], to: ['Каракол', 'Karakol'], label: 'Fahrer' },
    't-kar-cho': { from: ['Каракол', 'Karakol'], to: ['Чолпон-Ата', 'Cholpon-Ata'], label: 'Marschrutka' },
    't-cho-bis': { from: ['Чолпон-Ата', 'Cholpon-Ata'], to: ['Бишкек', 'Bischkek'], label: 'Sammeltaxi' },
    't-bis-fra': { from: ['Бишкек', 'Manas (FRU)'], to: ['Франкфурт', 'Frankfurt (FRA)'], label: 'Flug, 1 Umstieg' }
  },

  /* Ø Tageshöchstwerte in °C, gerundet */
  weather: {
    bis: [3, 5, 12, 19, 24, 29, 32, 31, 26, 18, 10, 4],
    sk: [-14, -12, -6, 1, 7, 12, 15, 15, 10, 3, -5, -11],
    nar: [-12, -10, -4, 3, 8, 13, 16, 16, 11, 4, -4, -10],
    ik: [2, 3, 7, 13, 18, 23, 26, 26, 21, 14, 7, 3],
    kar: [-2, 0, 6, 13, 18, 22, 25, 25, 20, 13, 5, 0]
  },

  prep: [
    { id: 'p-pass', off: -120, t: 'Reisepass prüfen', d: 'Am besten 6 Monate über die Reise hinaus gültig. Deutsche dürfen bis zu 60 Tage ohne Visum bleiben.' },
    { id: 'p-flug', off: -120, t: 'Flug nach Bischkek buchen', d: 'Mit Umstieg, z. B. über Istanbul. Auf Ankunftszeiten mitten in der Nacht achten.' },
    { id: 'p-driver', off: -90, t: 'Fahrer und Jurten reservieren', d: 'Über CBT (Community Based Tourism) oder Guesthouses. Im Juli und August früh.' },
    { id: 'p-vacc', off: -60, t: 'Impfungen checken', d: 'Standardimpfungen, Hepatitis A, für Reiter und Wanderer Tollwut erwägen.' },
    { id: 'p-ins', off: -30, t: 'Auslandskrankenversicherung mit Rücktransport', d: 'In den Bergen ist medizinische Hilfe weit weg.' },
    { id: 'p-permit', off: -30, t: 'Grenzzonen-Permit (nur für Chatyr-Kul)', d: 'Wer an den See an der chinesischen Grenze will, braucht ein Permit über eine Agentur.' },
    { id: 'p-esim', off: -14, t: 'SIM oder eSIM', d: 'O!, MegaCom oder Beeline am Flughafen, sehr günstig. In den Bergen oft kein Netz.' },
    { id: 'p-apps', off: -14, t: 'Apps installieren', d: 'Yandex Go (Taxi), 2GIS (Stadtpläne), Organic Maps oder Maps.me (Wanderwege offline), Übersetzer mit Russisch.' },
    { id: 'p-elefand', off: -10, t: 'In Elefand eintragen', d: 'Die Krisenvorsorgeliste des Auswärtigen Amts.' },
    { id: 'p-cash', off: -7, t: 'Bargeld mitnehmen', d: 'Saubere Euro- oder Dollar-Scheine. Außerhalb von Bischkek und Karakol gibt es kaum Automaten.' },
    { id: 'p-addr', off: -2, t: 'Adressen auf Russisch speichern', d: 'Unter „Tage“ beim Hotel eintragen – dann gibt es dafür eine Taxi-Karte.' }
  ],

  packing: [
    'Reisepass (plus Foto davon in der Cloud)',
    'Bargeld in Euro oder Dollar, saubere Scheine',
    'Warme Kleidung: Nächte in den Jurten um 0 °C',
    'Eingelaufene Wanderschuhe',
    'Regenjacke',
    'Stirnlampe',
    'Powerbank – in Jurten oft kein Strom',
    'Leichter Schlafsack oder Inlett',
    'Sonnencreme und Sonnenbrille – die Höhensonne ist stark',
    'Mütze und Handschuhe',
    'Reiseapotheke: Magen, Höhenkopfschmerz, Pflaster',
    'Feuchttücher und Toilettenpapier',
    'Wasserfilterflasche',
    'Badehose für Issyk-Kul und heiße Quellen',
    'Lange Hose zum Reiten'
  ],

  phrases: [
    ['Здравствуйте', 'sdrawstwujtje', 'Guten Tag (Russisch)'],
    ['Салам!', 'salam!', 'Hallo (Kirgisisch)'],
    ['Спасибо', 'spassiba', 'Danke (Russisch)'],
    ['Рахмат', 'rachmat', 'Danke (Kirgisisch)'],
    ['Сколько стоит?', 'skolka stoit?', 'Was kostet das?'],
    ['Это, пожалуйста', 'eta, paschalusta', 'Das hier, bitte'],
    ['Счёт, пожалуйста', 'schtschot, paschalusta', 'Die Rechnung, bitte'],
    ['Где туалет?', 'gdje tualjet?', 'Wo ist die Toilette?'],
    ['Остановите здесь', 'astanawitje sdjes', 'Bitte hier anhalten (Marschrutka)'],
    ['Отвезите меня сюда, пожалуйста', 'atwesitje minja sjuda, paschalusta', 'Bitte fahren Sie mich hierhin'],
    ['Мы из Германии', 'my is germanii', 'Wir kommen aus Deutschland'],
    ['Очень вкусно!', 'otschen wkusna!', 'Sehr lecker!'],
    ['За здоровье!', 'sa sdarowje!', 'Prost!'],
    ['Жакшы', 'dschakschy', 'Gut (Kirgisisch)']
  ],

  tips: [
    { id: 'visum', title: 'Einreise & Visum', html: `
      <p>Deutsche dürfen <strong>bis zu 60 Tage ohne Visum</strong> nach Kirgistan (innerhalb von 120 Tagen). Eine Registrierung ist dafür nicht nötig.</p>
      <ul>
        <li>Pass am besten 6 Monate über die Reise hinaus gültig.</li>
        <li>Für Grenzgebiete (z. B. Chatyr-Kul, Inyltschek-Gletscher) braucht ihr ein Permit.</li>
        <li>Das Auswärtige Amt rät von Reisen ins Grenzgebiet zu Tadschikistan (Region Batken) ab – das liegt nicht auf dieser Route.</li>
      </ul>
      <p><a href="https://www.auswaertiges-amt.de" target="_blank" rel="noopener">Auswärtiges Amt</a> – dort unter „Reise- und Sicherheitshinweise“ Kirgisistan wählen.</p>` },
    { id: 'geld', title: 'Geld & Bezahlen', html: `
      <ul>
        <li>Die Währung ist der Som. Faustregel: 1 € ≈ 100 Som. Den Kurs könnt ihr unter „Route“ anpassen.</li>
        <li>Bargeld ist König. Automaten gibt es in Bischkek, Karakol, Cholpon-Ata und Naryn.</li>
        <li>Wechselstuben in Bischkek haben gute Kurse für saubere Euro- und Dollarscheine.</li>
        <li>Karten gehen in Bischkek in Restaurants und Supermärkten, auf dem Land kaum.</li>
        <li>Alles ist günstig. Trinkgeld ca. 10 % in Restaurants, für Fahrer und Guides am Ende der Tour.</li>
      </ul>` },
    { id: 'unterwegs', title: 'Unterwegs', html: `
      <ul>
        <li>Am bequemsten: ein <strong>Fahrer für die ganze Runde</strong>, gebucht über CBT oder Guesthouses. Rechnet mit ca. 60–90 € pro Tag fürs Auto.</li>
        <li>Günstig: Sammeltaxis und Marschrutkas zwischen den Orten – sie fahren, wenn sie voll sind.</li>
        <li>Bergstraßen sind teils Schotter, Pässe über 3.000 m. Bei Reisekrankheit vorne sitzen.</li>
        <li>Fahrer fahren gern schnell – sagt Bescheid, wenn es euch zu viel ist, und schnallt euch an.</li>
      </ul>` },
    { id: 'internet', title: 'Internet & Apps', html: `
      <ul>
        <li>Nichts ist gesperrt. SIM-Karten (O!, MegaCom, Beeline) sind spottbillig.</li>
        <li><strong>Yandex Go</strong> für Taxis, <strong>2GIS</strong> für Stadtpläne mit Adressen.</li>
        <li>Wanderwege offline mit <strong>Organic Maps</strong> oder Maps.me.</li>
        <li>Russisch hilft überall, Englisch sprechen vor allem junge Leute und Guides.</li>
      </ul>
      <p>Diese Seite funktioniert nach dem ersten Öffnen auch offline.</p>` },
    { id: 'unterkunft', title: 'Unterkünfte', html: `
      <ul>
        <li>Guesthouses und Homestays sind die Regel – mit großem Frühstück und Familienanschluss.</li>
        <li>Jurtencamps im Sommer: einfache Betten, Plumpsklo, manchmal eine Solardusche.</li>
        <li>Zu zweit nach zwei Betten fragen: „две кровати“ (dwje krawati).</li>
      </ul>` },
    { id: 'essen', title: 'Essen & Trinken', html: `
      <ul>
        <li>Beshbarmak, Plov, Lagman (Nudeln), Manti (Teigtaschen), Samsa, Schaschlik – viel Hammel.</li>
        <li>Brot ist heilig: nie auf den Boden legen, nicht wegwerfen.</li>
        <li>Tee wird halbvoll eingeschenkt – Zeichen von Gastfreundschaft.</li>
        <li>Kymys (vergorene Stutenmilch) und Kurut (salzige Quarkbällchen) probieren.</li>
        <li>Leitungswasser nicht trinken.</li>
      </ul>` },
    { id: 'knigge', title: 'Alltag & Knigge', html: `
      <ul>
        <li>Überwiegend muslimisch, aber sehr locker. In Moscheen Schultern und Knie bedecken.</li>
        <li>Schuhe aus in Wohnungen und Jurten.</li>
        <li>Männer begrüßen sich mit Handschlag, oft mit beiden Händen.</li>
        <li>Vor Fotos von Menschen fragen.</li>
      </ul>` },
    { id: 'sicherheit', title: 'Sicherheit', html: `
      <ul>
        <li>Kirgistan ist für Reisende sicher. In Bischkek auf Basaren auf Taschendiebe achten.</li>
        <li>Nachts Gruppen betrunkener Männer meiden.</li>
        <li>Der Straßenverkehr ist das größte Risiko: Fahrer mit gutem Ruf wählen, anschnallen.</li>
        <li>In den Bergen: Höhe ernst nehmen, Wetter wechselt schnell, Wanderungen beim Guesthouse ankündigen.</li>
      </ul>` },
    { id: 'wetter', title: 'Reisezeit & Wetter', html: `
      <p><strong>Beste Zeit: Mitte Juni bis Mitte September.</strong> Nur dann sind Song-Kul und die Hochweiden erreichbar und die Jurten aufgebaut.</p>
      <ul>
        <li>Bischkek und Issyk-Kul sind im Juli und August heiß und sonnig.</li>
        <li>Auf 3.000 m kann es auch im Sommer schneien – immer eine warme Schicht dabeihaben.</li>
        <li>Im Winter: Skifahren in Karakol, aber Hochtäler sind gesperrt.</li>
      </ul>
      <div id="weather-table"></div>` },
    { id: 'notfall', title: 'Notfall', html: `
      <ul>
        <li>Allgemeiner Notruf <strong>112</strong>, Polizei <strong>102</strong>, Rettung <strong>103</strong>, Feuerwehr <strong>101</strong>.</li>
        <li>Deutsche Botschaft Bischkek: <a href="tel:+996312905000">+996 312 905000</a>.</li>
        <li><a href="https://krisenvorsorgeliste.diplo.de" target="_blank" rel="noopener">Elefand – Krisenvorsorgeliste</a> des Auswärtigen Amts.</li>
      </ul>` }
  ]
});
