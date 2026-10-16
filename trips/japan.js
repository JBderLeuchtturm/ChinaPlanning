/* Reise: Japan. Preise sind Richtwerte pro Person in Yen (Stand 2025/26) – vor Ort prüfen. */
(window.TRIPS = window.TRIPS || []).push({
  id: 'japan',
  name: 'Japan',
  title: 'Zwei Wochen Japan',
  lede: 'Acht Nächte Tokio mit Ausflügen zum Fuji und nach Kamakura, eine Nacht im Ryokan in Hakone, dann mit dem Shinkansen nach Kyoto und Osaka. Unter „Tage“ liegt schon ein fertiger Plan. Ihr tauscht nur noch aus, was euch nicht passt, und schickt ihn euch per Link.',
  routeLede: 'Hin und zurück über Tokio-Haneda. Dazwischen fahrt ihr mit Romancecar und Shinkansen nach Hakone, Kyoto und Osaka und am Ende zurück nach Tokio.',
  seal: '旅',
  sealFmt: '{n}日目',
  lang: 'ja',
  font: { family: 'Noto Serif JP', weight: 900, fallback: "'Hiragino Mincho ProN', 'Yu Mincho', serif" },
  locFont: "'Hiragino Sans', 'Hiragino Kaku Gothic ProN', 'Yu Gothic', 'Meiryo', 'Noto Sans JP', 'Noto Sans CJK JP', sans-serif",
  taxiAsk: 'ここまでお願いします',
  currency: { label: 'Yen', rate: 180, rateLabel: '1 € in Yen' },
  maps: [
    { label: 'Google Maps', url: 'https://www.google.com/maps/search/?api=1&query={q}' },
    { label: 'Apple Karten', url: 'https://maps.apple.com/?q={q}' }
  ],
  theme: {
    light: { ticket: '#E6E0F0', ink: '#47386E', line: '#C7BCDD' },
    dark: { ticket: '#2A2440', ink: '#D3C8F0', line: '#4A3F6B' }
  },
  budget: {
    flight: [750, 1200], flightLabel: 'Flug Frankfurt – Tokio, hin und zurück',
    hotel: [['Budget', 55], ['Mittelklasse', 110], ['Komfort', 220]],
    food: [['Sparsam', 25], ['Normal', 40], ['Schlemmen', 70]],
    extra: 180, extraLabel: 'U-Bahn, IC-Karte, eSIM, Souvenirs'
  },
  warnings: {
    after: [{ date: '2028-03-31', text: 'Japan will bis spätestens März 2029 eine elektronische Reisegenehmigung (JESTA) einführen. Prüft vor der Reise, ob ihr sie schon braucht.' }],
    holidays: [
      { name: 'die Golden Week (29. April bis 5. Mai)', from: '04-29', to: '05-06' },
      { name: 'Obon (Mitte August)', from: '08-11', to: '08-16' },
      { name: 'die Neujahrstage', from: '12-28', to: '01-04', text: 'Viele Restaurants, Museen und Geschäfte haben dann geschlossen, Züge sind voll.' },
      { name: 'die Kirschblüte (ca. Ende März bis Mitte April)', from: '03-24', to: '04-12', text: 'Wunderschön, aber Hotels sind dann teuer und früh ausgebucht. Jetzt buchen!' }
    ],
    holidayText: 'Dann ist halb Japan unterwegs – Hotels sind teuer und früh ausgebucht, Züge und Sehenswürdigkeiten voll.',
    seasons: [
      { months: [6, 7], text: 'Regenzeit (Tsuyu) etwa Juni bis Mitte Juli: oft grau und nass, dazu schwül.' },
      { months: [7, 8], text: 'Hochsommer: 33 °C und mehr bei hoher Luftfeuchtigkeit, Kyoto ist ein Backofen. Viel trinken.' },
      { months: [8, 9, 10], text: 'Taifunsaison: Züge und Flüge können kurzfristig ausfallen – Puffer einplanen.' },
      { months: [12, 1, 2], text: 'Winter: In Tokio meist sonnig um 10 °C, in Hakone kann Schnee liegen. Dafür sieht man den Fuji jetzt am besten.' }
    ]
  },

  cities: {
    fra: { name: 'Unterwegs', loc: 'フランクフルト', py: 'Frankfurt' },
    tyo: {
      name: 'Tokio', loc: '東京', py: 'Tōkyō', color: ['#1F5FA8', '#7FAEE8'],
      why: `Die größte Stadt der Welt und trotzdem sauber, leise und pünktlich: Neon in Shinjuku, Tempel in Asakusa, Anime in Akihabara, Sushi um sechs Uhr morgens. Man wird nie fertig.`,
      stay: `Shinjuku oder Shibuya (alles erreichbar, abends viel los) – oder Ueno und Asakusa (günstiger, ruhiger).`,
      stayTip: `Japanische Hotelzimmer sind klein. Für zwei Leute „Twin“ buchen und auf die Quadratmeter achten: Unter 18 m² wird es mit zwei Koffern eng.`,
      move: `U-Bahn und die JR-Ringlinie Yamanote bringen euch überall hin. Mit Suica oder PASMO (auch im iPhone-Wallet) einfach durch die Sperre.`,
      arrive: `Von Haneda mit Keikyu oder Monorail in 20–30 Min. in die Stadt, ca. 300–600 Yen. Taxis sind teuer.`,
      prices: [['Budget', '50–80 €'], ['Mittelklasse', '100–180 €'], ['Komfort', 'ab 250 €']]
    },
    hak: {
      name: 'Hakone', loc: '箱根', py: 'Hakone', color: ['#2E7D5B', '#6CC79E'],
      why: `Heiße Quellen, ein dampfender Vulkankrater, ein Piratenschiff auf dem See – und an klaren Tagen der Fuji. Hier schlaft ihr eine Nacht im Ryokan.`,
      stay: `Ein Ryokan mit eigenem Onsen in Hakone-Yumoto, Gora oder am Ashi-See. Abendessen (Kaiseki) und Frühstück sind meist dabei.`,
      stayTip: `Großes Gepäck könnt ihr per Takkyubin (Gepäckservice) direkt nach Kyoto schicken und nur mit Rucksack nach Hakone fahren.`,
      move: `Mit dem Hakone Freepass fahrt ihr Bergbahn, Standseilbahn, Seilbahn, Schiff und Busse in einer Runde.`,
      arrive: `Romancecar ab Shinjuku nach Hakone-Yumoto, ca. 85 Min.`,
      prices: [['Pension', '60–110 €'], ['Ryokan', '150–300 €'], ['Luxus-Ryokan', 'ab 350 €']],
      priceNote: 'pro Person und Nacht, im Ryokan inklusive Abendessen und Frühstück'
    },
    kyo: {
      name: 'Kyoto', loc: '京都', py: 'Kyōto', color: ['#B2441E', '#F08A64'],
      why: `Über 1.600 Tempel, rote Torii-Tunnel, Bambuswald, Geishas in Gion. Das alte Japan – aber auch sehr voll. Wer früh aufsteht, hat es fast für sich.`,
      stay: `Rund um Kyoto Station (praktisch) oder Gion und Kawaramachi (schöner, abends Restaurants).`,
      stayTip: `Ein Machiya – ein altes Stadthaus aus Holz – ist eine besondere Unterkunft. Die Busse sind überfüllt, deshalb nah an U-Bahn oder Keihan-Linie wohnen.`,
      move: `Viel zu Fuß, dazu U-Bahn, JR und Busse. Leihräder sind praktisch, die Innenstadt ist flach.`,
      arrive: `Shinkansen bis Kyoto Station, von dort Bus, U-Bahn oder Taxi.`,
      prices: [['Budget', '50–80 €'], ['Mittelklasse', '100–180 €'], ['Komfort', 'ab 250 €']]
    },
    osa: {
      name: 'Osaka', loc: '大阪', py: 'Ōsaka', color: ['#8A3BA0', '#CE8BE2'],
      why: `Japans Küche: Takoyaki, Okonomiyaki, Kushikatsu – „Kuidaore“, essen bis zum Umfallen. Lauter, lustiger und direkter als Tokio.`,
      stay: `Namba oder Shinsaibashi direkt bei Dotonbori. Umeda ist praktischer für den Bahnhof.`,
      stayTip: `Osaka ist günstiger als Tokio und Kyoto – hier lohnt sich ein etwas größeres Zimmer.`,
      move: `Die U-Bahn-Linie Midosuji verbindet Shin-Osaka, Umeda und Namba. Auf Rolltreppen steht man hier rechts!`,
      arrive: `Von Kyoto mit dem JR Special Rapid in ca. 30 Min. zur Osaka Station.`,
      prices: [['Budget', '45–75 €'], ['Mittelklasse', '90–160 €'], ['Komfort', 'ab 220 €']]
    },
    any: { name: 'Überall', loc: '', py: '' }
  },

  /* c = Ort, cat = Kategorien, v = Verrückt-Faktor 0–3, d = Dauer in Std., p = Preis p. P. in Yen,
     pt = Preistext, w = übliche Tageszeit (0 Früh … 5 Ganztags), closed/only = Wochentage (0 = So) */
  activities: [
    // ---------- Transfers ----------
    { id: 't-fra-hnd', c: 'fra', t: 'Flug Frankfurt → Tokio', cat: ['transport'], v: 0, d: 13, p: 0, pt: 'hin und zurück ca. 750–1.200 €', w: 4, mode: 'flug', dshort: '13 Std.', taxi: false,
      desc: `Direktflug ca. 13 Std. nach Haneda (z. B. Lufthansa oder ANA). Abends los, am nächsten Nachmittag da. Japan ist 7 Std. (Sommerzeit) bzw. 8 Std. (Winterzeit) voraus.`,
      tip: `Haneda liegt viel näher an der Stadt als Narita – beim Buchen darauf achten. Visit Japan Web vorher ausfüllen, dann reicht bei Einreise und Zoll ein QR-Code.` },
    { id: 't-tyo-hak', c: 'hak', t: 'Romancecar Tokio → Hakone', loc: '新宿駅', cat: ['transport'], v: 1, d: 2, p: 2500, pt: 'ca. 2.500 Yen, mit Hakone Freepass günstiger', w: 1, mode: 'zug', dshort: '85 Min.',
      desc: `Der Aussichtszug der Odakyu-Bahn fährt von Shinjuku nach Hakone-Yumoto. In den vordersten Reihen sitzt ihr über dem Lokführer mit Panoramablick.`,
      tip: `Die Panorama-Plätze vorne früh reservieren. Den Koffer per Takkyubin am Vortag vom Hotel nach Kyoto schicken.` },
    { id: 't-hak-kyo', c: 'kyo', t: 'Shinkansen Hakone → Kyoto', loc: '小田原駅', cat: ['transport'], v: 0, d: 3, p: 12000, pt: 'ca. 11.000–12.000 Yen', w: 1, mode: 'zug', dshort: '2 Std.',
      desc: `Mit der Bahn runter nach Odawara (ca. 15 Min.), dann mit dem Shinkansen Hikari in gut 2 Std. nach Kyoto.`,
      tip: `Auf der rechten Seite (Platz E) seht ihr bei klarem Wetter den Fuji. Der schnellere Nozomi hält in Odawara meist nicht.`,
      book: 'smartEX-App oder Automat im Bahnhof' },
    { id: 't-kyo-osa', c: 'osa', t: 'Zug Kyoto → Osaka', loc: '京都駅', cat: ['transport'], v: 0, d: 1, p: 580, pt: 'ca. 580 Yen', w: 1, mode: 'zug', dshort: '30 Min.',
      desc: `JR Special Rapid von Kyoto zur Osaka Station in ca. 30 Min. – kein Shinkansen nötig.`,
      tip: `Einfach mit Suica durch die Sperre, keine Reservierung nötig.` },
    { id: 't-osa-tyo', c: 'tyo', t: 'Shinkansen Osaka → Tokio', loc: '新大阪駅', cat: ['transport'], v: 0, d: 3, p: 14700, pt: 'ca. 14.700 Yen', w: 1, mode: 'zug', dshort: '2½ Std.',
      desc: `Nozomi von Shin-Osaka nach Tokyo Station in ca. 2,5 Std., bis zu 285 km/h.`,
      tip: `Ekiben (Bahnhofs-Bento) kaufen und im Zug essen – ganz normal. Den Fuji seht ihr diesmal links (Platz A).`,
      book: 'smartEX-App oder Automat im Bahnhof' },
    { id: 't-hnd-fra', c: 'fra', t: 'Rückflug Tokio → Frankfurt', cat: ['transport'], v: 0, d: 14, p: 0, pt: 'im Flugpreis enthalten', w: 1, mode: 'flug', dshort: '14 Std.', taxi: false,
      desc: `Direktflug ab Haneda, ca. 13,5–14,5 Std. Dank Zeitverschiebung landet ihr am selben Tag.`,
      tip: `Die Ausreisesteuer (3.000 Yen seit Juli 2026) steckt meist schon im Ticket. Tax-free-Einkäufe vor dem Check-in beim Zoll zeigen.` },

    // ---------- Tokio ----------
    { id: 'tyo-sensoji', c: 'tyo', t: 'Senso-ji in Asakusa', loc: '浅草寺', cat: ['klassiker', 'kultur'], v: 0, d: 2, p: 0, w: 0,
      desc: `Tokios ältester Tempel mit dem riesigen roten Laternentor Kaminarimon und der Einkaufsgasse Nakamise.`,
      tip: `Vor 8 Uhr ist es fast leer, abends beleuchtet. Ein Omikuji-Orakel ziehen: Schlechte Zettel bindet man an das Gestell.` },
    { id: 'tyo-shibuya', c: 'tyo', t: 'Shibuya Crossing', loc: '渋谷スクランブル交差点', cat: ['klassiker', 'verrueckt'], v: 1, d: 1, p: 0, w: 3,
      desc: `Die berühmteste Kreuzung der Welt: Bei Grün laufen Tausende Menschen gleichzeitig aus allen Richtungen los.`,
      tip: `Erst selbst mitlaufen, dann von oben zuschauen – zum Beispiel vom Dach des Magnet by Shibuya 109.` },
    { id: 'tyo-shibuyasky', c: 'tyo', t: 'Shibuya Sky zum Sonnenuntergang', loc: '渋谷スカイ', cat: ['klassiker'], v: 1, d: 1.5, p: 3000, pt: 'ca. 2.500–3.400 Yen', w: 4,
      desc: `Offene Dachterrasse in 230 m Höhe über Shibuya – bei klarem Wetter mit Fuji.`,
      tip: `Die Slots zum Sonnenuntergang sind schnell weg. Taschen kommen ins Schließfach, Handys nur mit Band.`,
      book: 'Zeitslot ca. 4 Wochen vorher online' },
    { id: 'tyo-meiji', c: 'tyo', t: 'Meiji-Schrein', loc: '明治神宮', cat: ['klassiker', 'kultur', 'chill'], v: 0, d: 1.5, p: 0, w: 0,
      desc: `Shinto-Schrein in einem Wald mitten in der Stadt, erreichbar durch riesige Holz-Torii. Mit etwas Glück zieht eine Hochzeitsprozession vorbei.`,
      tip: `Am Eingang Hände und Mund am Brunnen reinigen. Danach direkt nach Harajuku.` },
    { id: 'tyo-harajuku', c: 'tyo', t: 'Harajuku & Takeshita-dori', loc: '竹下通り', cat: ['verrueckt'], v: 1, d: 2, p: 0, w: 1,
      desc: `Bunte Teenager-Mode, Regenbogen-Zuckerwatte, Crêpes mit Käsekuchen. Nebenan das edle Omotesando.`,
      tip: `Am Wochenende kommt man kaum durch. Unter der Woche vormittags hin.` },
    { id: 'tyo-akiba', c: 'tyo', t: 'Akihabara: Anime & Spielhallen', loc: '秋葉原', cat: ['verrueckt'], v: 2, d: 3, p: 2000, w: 3,
      desc: `Elektronik, Anime-Läden über sieben Stockwerke, Retro-Games und laute Spielhallen voller Greifautomaten.`,
      tip: `Super Potato für Retro-Spiele. In der Spielhalle ein paar Münzen beim Trommelspiel Taiko no Tatsujin lassen.` },
    { id: 'tyo-maid', c: 'tyo', t: 'Maid-Café', loc: 'メイドカフェ', cat: ['verrueckt'], v: 3, d: 1.5, p: 3000, pt: 'ca. 2.500–4.000 Yen mit Getränk', w: 3, taxi: false,
      desc: `Kellnerinnen im Dienstmädchen-Kostüm nennen euch „Master“ und sprechen Zaubersprüche über das Omurice. Absurd und sehr japanisch.`,
      tip: `Fotos meist nur gegen Aufpreis. Das @home café in Akihabara ist das bekannteste.` },
    { id: 'tyo-goldengai', c: 'tyo', t: 'Golden Gai', loc: '新宿ゴールデン街', cat: ['nacht', 'verrueckt'], v: 2, d: 2.5, p: 3000, pt: 'Drink ca. 800 Yen + Sitzgebühr', w: 4,
      desc: `Sechs schmale Gassen mit über 200 Mini-Bars, in die oft nur fünf bis acht Leute passen. Jede hat ihr eigenes Thema.`,
      tip: `Viele Bars verlangen eine Sitzgebühr – Schild an der Tür lesen. Manche sind nur für Stammgäste.` },
    { id: 'tyo-omoide', c: 'tyo', t: 'Omoide Yokocho: Yakitori-Gasse', loc: '思い出横丁', cat: ['essen', 'nacht'], v: 1, d: 1.5, p: 3000, w: 4,
      desc: `Rauchige Gasse neben dem Bahnhof Shinjuku mit winzigen Grillständen: Hühnerspieße, Bier, Büroleute direkt neben euch.`,
      tip: `Nicht nur zum Fotografieren stehenbleiben – reinsetzen und bestellen.` },
    { id: 'tyo-kabukicho', c: 'tyo', t: 'Kabukicho & der Godzilla-Kopf', loc: '歌舞伎町', cat: ['nacht', 'verrueckt'], v: 1, d: 1.5, p: 0, w: 4,
      desc: `Tokios Vergnügungsviertel, über dem ein lebensgroßer Godzilla vom Hotel Gracery herunterschaut.`,
      tip: `Nie Schleppern in Bars folgen – dort drohen Abzocke und horrende Rechnungen.` },
    { id: 'tyo-teamlab', c: 'tyo', t: 'teamLab Planets', loc: 'チームラボプラネッツ', cat: ['verrueckt', 'kultur'], v: 2, d: 2, p: 4500, pt: 'ca. 4.000–5.000 Yen', w: 1,
      desc: `Digitale Kunst, durch die man barfuß läuft – teils knietief im Wasser, zwischen Lichtern und schwebenden Blumen.`,
      tip: `Hosen, die man hochkrempeln kann. Alternativ teamLab Borderless in Azabudai Hills.`,
      book: 'Zeitslot online buchen' },
    { id: 'tyo-tsukiji', c: 'tyo', t: 'Frühstück am Tsukiji-Außenmarkt', loc: '築地場外市場', cat: ['essen', 'klassiker'], v: 1, d: 2, p: 3000, w: 0,
      desc: `Der alte Fischmarkt lebt weiter: frisches Sushi, Tamagoyaki am Spieß, Austern und Thunfisch in allen Varianten.`,
      tip: `Früh kommen, viele Stände schließen am frühen Nachmittag. Sonntags und an manchen Mittwochen haben viele zu.` },
    { id: 'tyo-toyosu', c: 'tyo', t: 'Thunfisch-Auktion in Toyosu', loc: '豊洲市場', cat: ['verrueckt'], v: 2, d: 2, p: 0, w: 0,
      desc: `Ab etwa 5:30 Uhr werden riesige Thunfische versteigert. Zuschauen vom Besucherdeck, danach Sushi zum Frühstück.`,
      tip: `Sonntags, an Feiertagen und an manchen Mittwochen gibt es keine Auktion – Marktkalender prüfen.`,
      book: 'Plätze am unteren Deck per Losverfahren' },
    { id: 'tyo-skytree', c: 'tyo', t: 'Tokyo Skytree', loc: '東京スカイツリー', cat: ['klassiker'], v: 0, d: 1.5, p: 3000, pt: 'ca. 2.100–3.500 Yen', w: 1,
      desc: `Mit 634 m der höchste Fernsehturm der Welt. Oben ein Glasboden und Blick über die endlose Stadt.`,
      tip: `Liegt nahe Asakusa – gut kombinierbar. Bei Dunst lieber verschieben.` },
    { id: 'tyo-tokyotower', c: 'tyo', t: 'Tokyo Tower bei Nacht', loc: '東京タワー', cat: ['klassiker', 'nacht'], v: 0, d: 1.5, p: 1200, pt: 'ca. 1.200 Yen', w: 4,
      desc: `Der orange-weiße Verwandte des Eiffelturms leuchtet nachts – am schönsten ist er von außen.`,
      tip: `Fotospot: vom Tempel Zojo-ji oder vom Shiba-Park aus.` },
    { id: 'tyo-gundam', c: 'tyo', t: 'Odaiba & der Riesen-Gundam', loc: 'お台場', cat: ['verrueckt'], v: 1, d: 3, p: 0, w: 3,
      desc: `Künstliche Insel mit einem fast 20 m hohen Gundam-Roboter, Strand und Blick auf die Rainbow Bridge.`,
      tip: `Der Gundam steht vor DiverCity Tokyo Plaza, abends gibt es Lichtshows.` },
    { id: 'tyo-monja', c: 'tyo', t: 'Monjayaki in Tsukishima', loc: '月島もんじゃストリート', cat: ['essen'], v: 1, d: 2, p: 2500, w: 4,
      desc: `Tokios Antwort auf Okonomiyaki: flüssiger Teig, auf der Tischplatte gebraten und mit Mini-Spachteln gegessen.`,
      tip: `Die Monja Street hat Dutzende Lokale. Das Personal zeigt euch meist, wie es geht.` },
    { id: 'tyo-izakaya', c: 'tyo', t: 'Abend in der Izakaya', loc: '居酒屋', cat: ['essen', 'nacht', 'klassiker'], v: 0, d: 2.5, p: 5000, w: 4, taxi: false,
      desc: `Japanische Kneipe: kleine Teller zum Teilen, Highballs, Bier und Sake. Laut, gemütlich, typisch.`,
      tip: `Ein kleiner Snack, den man nicht bestellt hat („Otoshi“), wird als Sitzgebühr berechnet. Das ist normal.` },
    { id: 'tyo-sushi', c: 'tyo', t: 'Sushi vom Fließband', loc: '回転寿司', cat: ['essen'], v: 0, d: 1, p: 2500, w: 2, taxi: false,
      desc: `Bestellt wird per Tablet, das Sushi fährt auf Schienen an euren Platz. Bei Kura Sushi gewinnt man mit Glück kleine Spielzeuge.`,
      tip: `Sushiro und Kura sind günstig und gut. Für Highend-Sushi am Tresen vorab reservieren.` },
    { id: 'tyo-ramen', c: 'tyo', t: 'Ramen in der Einzelkabine', loc: '一蘭', cat: ['essen', 'verrueckt'], v: 1, d: 1, p: 1500, w: 2,
      desc: `Bei Ichiran isst man allein in einer Holzkabine, bestellt per Zettel und sieht vom Koch nur die Hände.`,
      tip: `Am Automaten zahlen, dann Schärfe und Nudelhärte ankreuzen. Viele Filialen haben rund um die Uhr offen.` },
    { id: 'tyo-karaoke', c: 'tyo', t: 'Karaoke-Box', loc: 'カラオケ', cat: ['verrueckt', 'nacht'], v: 2, d: 2, p: 2000, pt: 'ca. 1.000–3.000 Yen pro Person', w: 4, taxi: false,
      desc: `Eigener Raum, Getränke per Telefon bestellen, Tausende Songs – auch auf Englisch und Deutsch.`,
      tip: `Ketten wie Big Echo oder Karaoke Kan. „Nomihodai“ heißt Getränke-Flatrate.` },
    { id: 'tyo-sento', c: 'tyo', t: 'Sento: öffentliches Bad', loc: '銭湯', cat: ['chill', 'verrueckt'], v: 1, d: 1.5, p: 550, pt: 'ca. 550 Yen', w: 4, taxi: false,
      desc: `Nachbarschaftsbad mit heißen Becken und oft einem Fuji-Gemälde an der Wand. So entspannen die Tokioter nach der Arbeit.`,
      tip: `Nackt baden, vorher gründlich waschen, das Handtuch kommt nicht ins Wasser. Tattoos sind im Sento meist okay.` },
    { id: 'tyo-ghibli', c: 'tyo', t: 'Ghibli-Museum', loc: '三鷹の森ジブリ美術館', cat: ['kultur', 'verrueckt'], v: 1, d: 3, p: 1000, pt: '1.000 Yen', w: 1, closed: [2],
      desc: `Das verspielte Museum von Studio Ghibli in Mitaka: Totoro, Katzenbus und Kurzfilme, die es nur hier gibt.`,
      tip: `Dienstags geschlossen. Tickets sind in Minuten weg – genau am 10. des Vormonats um 10 Uhr japanischer Zeit kaufen.`,
      book: 'Ab dem 10. des Vormonats online' },
    { id: 'tyo-shimokita', c: 'tyo', t: 'Shimokitazawa: Vintage & Plattenläden', loc: '下北沢', cat: ['chill'], v: 0, d: 3, p: 0, w: 3,
      desc: `Tokios Vintage-Viertel mit Second-Hand-Mode, Plattenläden, Cafés und kleinen Live-Clubs.`,
      tip: `Abends spielen in den kleinen Clubs lokale Bands.` },
    { id: 'tyo-ueno', c: 'tyo', t: 'Ueno-Park & Ameyoko-Markt', loc: 'アメ横', cat: ['chill', 'essen'], v: 0, d: 2.5, p: 0, w: 1,
      desc: `Großer Park mit Museen und Teich, daneben der laute Ameyoko-Markt unter den Bahngleisen.`,
      tip: `Das Nationalmuseum im Park hat montags geschlossen.` },
    { id: 'tyo-imperial', c: 'tyo', t: 'Ostgarten des Kaiserpalasts', loc: '皇居東御苑', cat: ['kultur', 'chill'], v: 0, d: 1.5, p: 0, w: 1, closed: [1, 5],
      desc: `Ruhige Gärten mit Mauerresten der alten Edo-Burg mitten zwischen Bürotürmen.`,
      tip: `Montags und freitags geschlossen. Eintritt frei.` },
    { id: 'tyo-yanaka', c: 'tyo', t: 'Yanaka: das alte Tokio', loc: '谷中銀座', cat: ['kultur', 'chill'], v: 0, d: 2, p: 0, w: 3,
      desc: `Ein Viertel, das Krieg und Erdbeben überstanden hat: Holzhäuser, Tempel, Katzen und die Einkaufsstraße Yanaka Ginza.`,
      tip: `Zum Sonnenuntergang an die Treppe „Yuyake Dandan“ stellen.` },
    { id: 'tyo-gacha', c: 'tyo', t: 'Gachapon-Halle in Ikebukuro', loc: 'ガシャポンのデパート', cat: ['verrueckt'], v: 2, d: 1, p: 1500, w: 3,
      desc: `Rund 3.000 Kapselautomaten mit absurden Mini-Figuren: Sushi-Katzen, Mini-Toiletten, Büromöbel.`,
      tip: `100-Yen-Münzen mitnehmen, Wechselautomaten gibt es vor Ort.` },
    { id: 'tyo-purikura', c: 'tyo', t: 'Purikura-Fotoautomat', loc: 'プリクラ', cat: ['verrueckt'], v: 2, d: 0.5, p: 500, w: 3, taxi: false,
      desc: `Fotokabinen, die euch riesige Augen, Glitzer und Puppenhaut verpassen. Danach mit Stickern verzieren.`,
      tip: `In jeder größeren Spielhalle. Manche Etagen sind für Männergruppen gesperrt – Schilder beachten.` },
    { id: 'tyo-pokemon', c: 'tyo', t: 'Nintendo Tokyo & Pokémon Center', loc: '渋谷パルコ', cat: ['verrueckt'], v: 1, d: 1.5, p: 0, w: 3,
      desc: `Im Shibuya Parco liegen der offizielle Nintendo-Laden und das Pokémon Center Tür an Tür.`,
      tip: `Das Pokémon Café in Nihonbashi braucht eine Reservierung, die meist 31 Tage vorher aufgeht.` },
    { id: 'tyo-sumo', c: 'tyo', t: 'Sumo live', loc: '両国国技館', cat: ['verrueckt', 'kultur'], v: 2, d: 4, p: 5000, pt: 'ca. 3.800–15.000 Yen', w: 3,
      desc: `Turniere in Tokio im Januar, Mai und September im Ryogoku Kokugikan. Sonst: morgens beim Training in einem Sumo-Stall zuschauen.`,
      tip: `Ohne Turnier Morgentraining-Touren (Asageiko) buchen. Danach Chanko-Nabe essen, den Eintopf der Ringer.`,
      book: 'Turniertickets früh buchen' },
    { id: 'tyo-gyoen', c: 'tyo', t: 'Shinjuku Gyoen', loc: '新宿御苑', cat: ['chill', 'natur'], v: 0, d: 2, p: 500, w: 1, closed: [1],
      desc: `Großer Garten mit japanischem, englischem und französischem Teil – zur Kirschblüte der schönste Park der Stadt.`,
      tip: `Montags geschlossen, Alkohol ist verboten.` },
    { id: 'tyo-don', c: 'tyo', t: 'Nachts bei Don Quijote', loc: 'ドン・キホーテ', cat: ['verrueckt'], v: 1, d: 1, p: 0, w: 4,
      desc: `Chaotischer Ramschladen über mehrere Etagen, oft rund um die Uhr offen: KitKat in Dutzenden Sorten, Kostüme, Kosmetik, Elektronik.`,
      tip: `Tax-free mit Pass ab 5.000 Yen – seit 1.11.2026 als Erstattung bei der Ausreise.` },
    { id: 'tyo-capsule', c: 'tyo', t: 'Eine Nacht im Kapselhotel', loc: 'カプセルホテル', cat: ['verrueckt'], v: 2, d: 1, p: 5500, pt: 'ca. 4.000–7.000 Yen pro Person', w: 4, taxi: false,
      desc: `Schlafen in einer Röhre mit Licht, Steckdose und Vorhang, dazu Badebereich und Lounge. Gute Häuser sind sauberer als viele Hotels.`,
      tip: `Oft nach Geschlecht getrennt, Koffer kommen ins Schließfach. Eine Nacht reicht.` },
    { id: 'tyo-kamakura', c: 'tyo', t: 'Ausflug Kamakura & Enoshima', loc: '鎌倉大仏', cat: ['ausflug', 'kultur', 'natur'], v: 0, d: 9, p: 1500, w: 5,
      desc: `Der 13 m große Bronze-Buddha, Tempel im Wald, danach mit der Enoden-Bahn an der Küste entlang zur Insel Enoshima.`,
      tip: `Ca. 1 Std. ab Tokio. Die Enoden fährt am Bahnübergang aus dem Anime „Slam Dunk“ vorbei – ein Pilgerort für Fans.` },
    { id: 'tyo-fuji', c: 'tyo', t: 'Ausflug zum Fuji (Kawaguchiko)', loc: '新倉山浅間公園', cat: ['ausflug', 'natur'], v: 1, d: 10, p: 5000, pt: 'Bus ca. 2.000–2.500 Yen pro Strecke', w: 5,
      desc: `Der Klassiker-Blick: die rote Chureito-Pagode vor dem Fuji. Dazu Seen, Seilbahn und dicke Hoto-Nudeln.`,
      tip: `Früh losfahren, nachmittags versteckt sich der Fuji oft in Wolken. Busse ab Shinjuku vorab reservieren.` },
    { id: 'tyo-nikko', c: 'tyo', t: 'Ausflug Nikko', loc: '日光東照宮', cat: ['ausflug', 'kultur', 'natur'], v: 0, d: 10, p: 1600, w: 5,
      desc: `Prächtig überladene Schreinanlage im Bergwald, die rote Brücke Shinkyo und Wasserfälle.`,
      tip: `Ca. 2 Std. ab Asakusa mit der Tobu-Bahn. Im Herbst spektakuläres Laub.` },
    { id: 'tyo-yokohama', c: 'tyo', t: 'Yokohama & Cup-Noodles-Museum', loc: 'カップヌードルミュージアム', cat: ['ausflug', 'verrueckt'], v: 1, d: 5, p: 1000, pt: 'ca. 500 Yen + 500 Yen eigene Nudeln', w: 5,
      desc: `Eigenen Cup-Noodle-Becher bemalen und die Zutaten selbst wählen. Dazu Chinatown und Hafen.`,
      tip: `Für die „My Cup Noodles Factory“ gleich nach Ankunft ein Zeitticket holen.` },
    { id: 'tyo-disney', c: 'tyo', t: 'Tokyo DisneySea', loc: '東京ディズニーシー', cat: ['ausflug', 'verrueckt'], v: 1, d: 10, p: 9500, pt: 'ca. 7.900–10.900 Yen', w: 5,
      desc: `Gilt als schönster Disney-Park der Welt – mit Vulkan, venezianischen Kanälen und dem Bereich Fantasy Springs.`,
      tip: `Unter der Woche hin. Premier Access (kostenpflichtig) spart Stunden.`,
      book: 'Tickets mit Datum online' },
    { id: 'tyo-takao', c: 'tyo', t: 'Wanderung auf den Takao-san', loc: '高尾山', cat: ['natur', 'ausflug'], v: 0, d: 5, p: 0, w: 5,
      desc: `Der Hausberg der Tokioter, 1 Std. ab Shinjuku: Waldwege, ein Tempel mit Tengu-Figuren und bei klarem Wetter Fuji-Blick.`,
      tip: `Direkt am Bahnhof unten gibt es ein Onsen für danach.` },

    // ---------- Hakone ----------
    { id: 'hak-loop', c: 'hak', t: 'Hakone-Rundfahrt', loc: '大涌谷', cat: ['klassiker', 'natur'], v: 1, d: 6, p: 0, pt: 'im Hakone Freepass', w: 5,
      desc: `Bergbahn, Standseilbahn, Seilbahn über den dampfenden Krater Owakudani und mit dem Piratenschiff über den Ashi-See.`,
      tip: `In Owakudani schwarze Eier essen, die in den Schwefelquellen gekocht werden – jedes soll sieben Jahre Leben schenken.` },
    { id: 'hak-ryokan', c: 'hak', t: 'Ryokan mit Kaiseki-Dinner', loc: '旅館', cat: ['klassiker', 'kultur', 'chill'], v: 1, d: 3, p: 0, pt: 'im Übernachtungspreis', w: 4, taxi: false,
      desc: `Im Yukata zum mehrgängigen Abendessen, danach ins heiße Quellbad, schlafen auf dem Futon auf Tatami.`,
      tip: `Pünktlich zum Essen sein. Mit eigenem Außenbad am Zimmer (Rotenburo) könnt ihr auch mit Tattoos baden.` },
    { id: 'hak-torii', c: 'hak', t: 'Torii im See (Hakone-Schrein)', loc: '箱根神社', cat: ['klassiker', 'kultur'], v: 0, d: 1.5, p: 0, w: 0,
      desc: `Das rote Tor steht direkt im Wasser des Ashi-Sees, dahinter ein Schrein im Zedernwald.`,
      tip: `Für das Foto am Tor bildet sich eine Schlange – früh kommen.` },
    { id: 'hak-openair', c: 'hak', t: 'Hakone Open-Air Museum', loc: '彫刻の森美術館', cat: ['kultur'], v: 0, d: 2, p: 2000, w: 3,
      desc: `Skulpturen im Grünen, ein Picasso-Pavillon und ein warmes Fußbad mitten im Museum.`,
      tip: `Liegt an der Bergbahn und passt gut in die Rundfahrt.` },
    { id: 'hak-yunessun', c: 'hak', t: 'Yunessun: Bad in Wein und Kaffee', loc: 'ユネッサン', cat: ['verrueckt', 'chill'], v: 3, d: 3, p: 3000, w: 3,
      desc: `Badepark mit Becken voller Rotwein, Kaffee, grünem Tee und Sake – in Badehose.`,
      tip: `Badehose mitnehmen. Der Wein ist natürlich verdünnt.` },
    { id: 'hak-onsen', c: 'hak', t: 'Tages-Onsen im Wald', loc: '天山湯治郷', cat: ['chill'], v: 0, d: 2, p: 1500, w: 3,
      desc: `Öffentliche Thermalbäder mit Außenbecken zwischen Bäumen, zum Beispiel Tenzan in Hakone-Yumoto.`,
      tip: `Tattoos sind in vielen Onsen verboten – vorher prüfen oder abdecken.` },

    // ---------- Kyoto ----------
    { id: 'kyo-inari', c: 'kyo', t: 'Fushimi Inari: tausend rote Tore', loc: '伏見稲荷大社', cat: ['klassiker', 'kultur'], v: 1, d: 3, p: 0, w: 0,
      desc: `Tausende orangefarbene Torii bilden Tunnel den Berg hinauf. Je höher, desto leerer.`,
      tip: `Vor 8 Uhr oder nach Sonnenuntergang kommen. Bis ganz nach oben und zurück ca. 2–3 Std.` },
    { id: 'kyo-arashiyama', c: 'kyo', t: 'Bambuswald Arashiyama', loc: '嵐山竹林', cat: ['klassiker', 'natur'], v: 0, d: 3, p: 0, w: 0,
      desc: `Der berühmte Pfad zwischen hohen Bambusstangen, dazu der Zen-Garten von Tenryu-ji und die Affen auf dem Iwatayama.`,
      tip: `Um 7 Uhr ist der Bambus menschenleer, ab 10 Uhr überfüllt.` },
    { id: 'kyo-kinkakuji', c: 'kyo', t: 'Goldener Pavillon', loc: '金閣寺', cat: ['klassiker', 'kultur'], v: 0, d: 1.5, p: 500, w: 1,
      desc: `Ein mit Blattgold überzogener Pavillon, der sich im Teich spiegelt.`,
      tip: `Liegt im Norden und lässt sich gut mit dem Steingarten von Ryoan-ji verbinden.` },
    { id: 'kyo-kiyomizu', c: 'kyo', t: 'Kiyomizu-dera & Higashiyama', loc: '清水寺', cat: ['klassiker', 'kultur'], v: 0, d: 3, p: 500, w: 0,
      desc: `Tempel mit riesiger Holzterrasse über dem Hang, darunter die alten Gassen Sannenzaka und Ninenzaka.`,
      tip: `Früh morgens hin, ab 10 Uhr ist es voll. Danach bergab Richtung Gion laufen.` },
    { id: 'kyo-gion', c: 'kyo', t: 'Abendspaziergang in Gion', loc: '祇園', cat: ['klassiker', 'nacht', 'kultur'], v: 0, d: 2, p: 0, w: 4,
      desc: `Holzhäuser, Laternen und Teehäuser – mit etwas Glück huscht eine Geiko oder Maiko vorbei.`,
      tip: `Geishas niemals bedrängen oder ungefragt fotografieren. In den Privatgassen gilt Fotoverbot mit Bußgeld.` },
    { id: 'kyo-pontocho', c: 'kyo', t: 'Abendessen in Pontocho', loc: '先斗町', cat: ['essen', 'nacht'], v: 0, d: 2, p: 6000, w: 4,
      desc: `Schmale Gasse am Fluss voller Restaurants, im Sommer mit Terrassen über dem Wasser.`,
      tip: `Viele Lokale nehmen Reservierungen an – am Wochenende nötig.` },
    { id: 'kyo-nishiki', c: 'kyo', t: 'Nishiki-Markt', loc: '錦市場', cat: ['essen'], v: 1, d: 1.5, p: 2000, w: 2,
      desc: `„Kyotos Küche“: 400 m überdachter Markt mit Pickles, Tofu, Matcha-Süßem und Baby-Oktopus mit Wachtelei am Spieß.`,
      tip: `Nicht im Gehen essen – am Stand stehenbleiben.` },
    { id: 'kyo-nara', c: 'kyo', t: 'Ausflug Nara', loc: '東大寺', cat: ['ausflug', 'kultur', 'verrueckt'], v: 1, d: 5, p: 800, w: 3,
      desc: `Über 1.000 freilaufende Hirsche, die sich vor euch verbeugen, und ein 15 m hoher Bronze-Buddha im Todai-ji.`,
      tip: `Hirschkekse kaufen und zügig verteilen – die Hirsche werden ungeduldig und zwicken.` },
    { id: 'kyo-tea', c: 'kyo', t: 'Teezeremonie', loc: '茶道', cat: ['kultur', 'chill'], v: 0, d: 1.5, p: 4000, w: 3, taxi: false,
      desc: `Eine Teemeisterin bereitet Matcha in einem jahrhundertealten Ritual zu – ihr lernt, wie man die Schale hält und dreht.`,
      tip: `Kurse auf Englisch gibt es in kleinen Teehäusern rund um Gion.` },
    { id: 'kyo-philosopher', c: 'kyo', t: 'Philosophenweg', loc: '哲学の道', cat: ['chill', 'natur'], v: 0, d: 2, p: 0, w: 1,
      desc: `2 km Kanalweg zwischen Ginkaku-ji und Nanzen-ji, gesäumt von Kirschbäumen.`,
      tip: `Am Südende liegt Nanzen-ji mit seinem Aquädukt aus Backstein.` },
    { id: 'kyo-sake', c: 'kyo', t: 'Sake-Probe in Fushimi', loc: '月桂冠大倉記念館', cat: ['essen', 'kultur'], v: 1, d: 2, p: 600, w: 3,
      desc: `Fushimi ist ein altes Brauerviertel. Im Gekkeikan-Museum gibt es Sake zum Probieren.`,
      tip: `Lässt sich gut mit Fushimi Inari verbinden, das gleich in der Nähe liegt.` },

    // ---------- Osaka ----------
    { id: 'osa-dotonbori', c: 'osa', t: 'Dotonbori bei Nacht', loc: '道頓堀', cat: ['klassiker', 'nacht', 'essen'], v: 1, d: 2.5, p: 3000, w: 4,
      desc: `Neon, Riesenkrabben über den Läden, das Glico-Männchen – und Streetfood an jeder Ecke.`,
      tip: `Takoyaki an einem Stand mit Schlange, danach Okonomiyaki. Am Kanal ist es abends am schönsten.` },
    { id: 'osa-castle', c: 'osa', t: 'Burg Osaka', loc: '大阪城', cat: ['klassiker', 'kultur'], v: 0, d: 2, p: 1200, pt: 'ca. 600–1.200 Yen', w: 1,
      desc: `Weiß-goldener Burgturm auf mächtigen Steinmauern, drumherum ein großer Park.`,
      tip: `Von außen ist sie am schönsten – innen ist ein modernes Museum.` },
    { id: 'osa-kuromon', c: 'osa', t: 'Kuromon-Markt', loc: '黒門市場', cat: ['essen'], v: 1, d: 1.5, p: 3000, w: 2,
      desc: `Marktgasse mit gegrillten Jakobsmuscheln, Wagyu-Spießen, Seeigel und Erdbeer-Mochi.`,
      tip: `Touristisch und teurer als früher, aber zum Probieren super.` },
    { id: 'osa-shinsekai', c: 'osa', t: 'Shinsekai & Kushikatsu', loc: '新世界', cat: ['essen', 'verrueckt'], v: 1, d: 2, p: 2500, w: 3,
      desc: `Retro-Viertel mit dem Tsutenkaku-Turm, Spielhallen und frittierten Spießen.`,
      tip: `Wichtigste Regel: nie zweimal in den gemeinsamen Soßentopf dippen!` },
    { id: 'osa-usj', c: 'osa', t: 'Universal Studios Japan', loc: 'ユニバーサル・スタジオ・ジャパン', cat: ['ausflug', 'verrueckt'], v: 2, d: 10, p: 10000, pt: 'ca. 8.600–10.900 Yen', w: 5,
      desc: `Mit Super Nintendo World: Mario Kart in echt, Fragezeichenblöcke schlagen, die Donkey-Kong-Achterbahn.`,
      tip: `Für Super Nintendo World braucht ihr ein Zeitticket oder einen Express Pass – sonst kommt ihr eventuell nicht rein.`,
      book: 'Eintritt und Zeitticket online' },
    { id: 'osa-umeda', c: 'osa', t: 'Umeda Sky Building', loc: '梅田スカイビル', cat: ['klassiker', 'nacht'], v: 0, d: 1.5, p: 2000, w: 4,
      desc: `Zwei Türme, oben verbunden durch ein offenes Runddeck in 173 m Höhe.`,
      tip: `Zum Sonnenuntergang hoch. Im Untergeschoss liegt eine nachgebaute Gasse aus den 1950ern mit Restaurants.` },
    { id: 'osa-okonomiyaki', c: 'osa', t: 'Okonomiyaki selbst braten', loc: 'お好み焼き', cat: ['essen'], v: 0, d: 1.5, p: 1500, w: 4, taxi: false,
      desc: `Kohl-Pfannkuchen mit Schweinebauch, Mayo und Bonitoflocken, die auf der heißen Platte tanzen.`,
      tip: `In vielen Lokalen brät man selbst am Tisch, das Personal hilft beim Wenden.` },

    // ---------- Überall ----------
    { id: 'any-konbini', c: 'any', t: 'Konbini-Dinner', loc: 'コンビニ', cat: ['essen', 'verrueckt'], v: 1, d: 0.5, p: 1000, w: 4, taxi: false,
      desc: `7-Eleven, Lawson und FamilyMart sind kleine Feinkostläden: Onigiri, Eiersandwich, Karaage, Desserts. Viele Japaner essen hier täglich.`,
      tip: `Das Eiersandwich von 7-Eleven und das Famichiki-Hähnchen von FamilyMart probieren.` },
    { id: 'any-vending', c: 'any', t: 'Getränkeautomaten-Safari', loc: '自動販売機', cat: ['verrueckt'], v: 1, d: 0.5, p: 300, w: 3, taxi: false,
      desc: `Automaten an jeder Ecke: heißer Kaffee aus der Dose, Maissuppe, Brühe, manchmal sogar Ramen oder Bananen.`,
      tip: `Rot beschriftet heißt heiß, blau heißt kalt.` },
    { id: 'any-pachinko', c: 'any', t: 'Pachinko-Halle', loc: 'パチンコ', cat: ['verrueckt'], v: 2, d: 0.5, p: 1000, w: 3, taxi: false,
      desc: `Ohrenbetäubend laute Hallen voller Flipperautomaten, an denen Menschen stundenlang Stahlkugeln versenken.`,
      tip: `Einmal reinschauen reicht. Ohrstöpsel helfen.` },
    { id: 'any-kimono', c: 'any', t: 'Im Kimono durch die Altstadt', loc: '着物レンタル', cat: ['verrueckt', 'kultur'], v: 2, d: 4, p: 4000, pt: 'ca. 3.000–6.000 Yen', w: 1, taxi: false,
      desc: `Kimono oder Yukata leihen und damit durch Asakusa oder Kyoto laufen. Gibt es auch für Männer.`,
      tip: `Die meisten Verleihe liegen in Asakusa und rund um Kiyomizu-dera.` },
    { id: 'any-depachika', c: 'any', t: 'Depachika: Feinkost im Kaufhauskeller', loc: 'デパ地下', cat: ['essen'], v: 0, d: 1.5, p: 2000, w: 2, taxi: false,
      desc: `Die Lebensmittelabteilungen der großen Kaufhäuser: perfekte Melonen zum Preis eines Kleinwagens, Bento, Gebäck, Probierhäppchen.`,
      tip: `Kurz vor Ladenschluss gibt es Bento und Sushi oft reduziert.` },
    { id: 'any-catcafe', c: 'any', t: 'Katzen-Café', loc: '猫カフェ', cat: ['chill'], v: 1, d: 1, p: 1500, w: 3, taxi: false,
      desc: `Kaffee trinken, während Katzen auf euch herumklettern – in Tokio gibt es sie an jeder Ecke.`,
      tip: `Seriöse Cafés haben Ruhezonen für die Tiere. Eulen- oder Igelcafés lieber meiden.` },
    { id: 'any-highball', c: 'any', t: 'Japanischer Whisky & Highball', loc: 'ハイボール', cat: ['essen', 'nacht'], v: 0, d: 1.5, p: 2000, w: 4, taxi: false,
      desc: `Japan liebt den Highball: Whisky mit Soda auf Eis, oft für wenige Hundert Yen. In Bars gibt es seltene japanische Whiskys.`,
      tip: `Der Kaku-Highball vom Fass ist der Klassiker in jeder Izakaya.` }
  ],

  /* Vorgeschlagener Plan: [Aktivität, Tageszeit] */
  defaultPlan: [
    { city: 'fra', items: [['t-fra-hnd', 4]] },
    { city: 'tyo', items: [['tyo-omoide', 4], ['tyo-goldengai', 4]] },
    { city: 'tyo', items: [['tyo-sensoji', 0], ['tyo-skytree', 1], ['tyo-akiba', 3], ['tyo-maid', 3], ['tyo-izakaya', 4]] },
    { city: 'tyo', items: [['tyo-meiji', 0], ['tyo-harajuku', 1], ['tyo-shibuya', 3], ['tyo-pokemon', 3], ['tyo-shibuyasky', 4], ['tyo-karaoke', 4]] },
    { city: 'tyo', items: [['tyo-tsukiji', 0], ['tyo-teamlab', 1], ['tyo-gundam', 3], ['tyo-monja', 4]] },
    { city: 'tyo', items: [['tyo-kamakura', 5], ['tyo-sento', 4]] },
    { city: 'tyo', items: [['tyo-ghibli', 1], ['tyo-shimokita', 3], ['tyo-sushi', 4], ['tyo-don', 4]] },
    { city: 'tyo', items: [['tyo-fuji', 5], ['tyo-ramen', 4]] },
    { city: 'hak', items: [['t-tyo-hak', 1], ['hak-loop', 3], ['hak-ryokan', 4]] },
    { city: 'kyo', items: [['t-hak-kyo', 1], ['kyo-inari', 3], ['kyo-gion', 4], ['kyo-pontocho', 4]] },
    { city: 'kyo', items: [['kyo-arashiyama', 0], ['kyo-kinkakuji', 1], ['kyo-nishiki', 2], ['kyo-tea', 3]] },
    { city: 'kyo', items: [['kyo-kiyomizu', 0], ['kyo-nara', 3]] },
    { city: 'osa', items: [['t-kyo-osa', 1], ['osa-castle', 1], ['osa-kuromon', 2], ['osa-shinsekai', 3], ['osa-dotonbori', 4]] },
    { city: 'tyo', items: [['t-osa-tyo', 1], ['any-depachika', 3], ['tyo-tokyotower', 4]] },
    { city: 'fra', items: [['t-hnd-fra', 1]] }
  ],

  tickets: {
    't-fra-hnd': { from: ['フランクフルト', 'Frankfurt (FRA)'], to: ['羽田', 'Tokio-Haneda (HND)'], label: 'Flug' },
    't-tyo-hak': { from: ['新宿', 'Shinjuku'], to: ['箱根湯本', 'Hakone-Yumoto'], label: 'Romancecar' },
    't-hak-kyo': { from: ['小田原', 'Odawara'], to: ['京都', 'Kyoto'], label: 'Shinkansen' },
    't-kyo-osa': { from: ['京都', 'Kyoto'], to: ['大阪', 'Osaka'], label: 'JR-Zug' },
    't-osa-tyo': { from: ['新大阪', 'Shin-Osaka'], to: ['東京', 'Tokio'], label: 'Shinkansen' },
    't-hnd-fra': { from: ['羽田', 'Tokio-Haneda (HND)'], to: ['フランクフルト', 'Frankfurt (FRA)'], label: 'Flug' }
  },

  /* Ø Tageshöchstwerte in °C, gerundet */
  weather: {
    tyo: [10, 10, 14, 19, 23, 26, 30, 31, 27, 22, 17, 12],
    hak: [6, 7, 10, 15, 19, 22, 26, 27, 23, 18, 13, 8],
    kyo: [9, 10, 14, 20, 25, 28, 32, 34, 29, 23, 17, 12],
    osa: [10, 10, 14, 20, 25, 28, 32, 33, 29, 23, 17, 12]
  },

  prep: [
    { id: 'p-pass', off: -120, t: 'Reisepass prüfen', d: 'Muss für die ganze Reise gültig sein. Deutsche dürfen bis zu 90 Tage ohne Visum bleiben.' },
    { id: 'p-flug', off: -120, t: 'Flug Frankfurt – Tokio buchen', d: 'Auf Haneda (HND) achten, nicht Narita – Haneda liegt viel näher an der Stadt.' },
    { id: 'p-hotel', off: -90, t: 'Hotels und Ryokan buchen', d: 'Japan ist sehr gefragt – früh buchen. Für zwei Betten „Twin“, „Double“ ist ein Bett.' },
    { id: 'p-ghibli', off: -35, t: 'Ghibli-Tickets kaufen', d: 'Verkauf am 10. des Vormonats um 10 Uhr japanischer Zeit (3 Uhr deutscher Sommerzeit, 2 Uhr Winterzeit).' },
    { id: 'p-ins', off: -30, t: 'Auslandskrankenversicherung', d: 'Die gesetzliche Kasse zahlt in Japan nichts. Kostet meist ca. 10–25 € im Jahr.' },
    { id: 'p-sky', off: -28, t: 'Shibuya Sky buchen', d: 'Die Slots zum Sonnenuntergang gehen ca. 4 Wochen vorher online.' },
    { id: 'p-teamlab', off: -21, t: 'teamLab-Zeitslot buchen', d: 'Am Wochenende früh ausverkauft.' },
    { id: 'p-shinkansen', off: -14, t: 'Shinkansen-Tickets kaufen', d: 'Über die smartEX-App ab ca. 1 Monat vorher oder am Automaten im Bahnhof. Ein JR Pass lohnt sich für diese Route nicht.' },
    { id: 'p-esim', off: -14, t: 'eSIM besorgen', d: 'In Japan ist nichts gesperrt. Kostenloses WLAN ist eher selten – eine Daten-eSIM lohnt sich.' },
    { id: 'p-apps', off: -14, t: 'Apps installieren', d: 'Google Maps, Google Übersetzer mit Kamera, GO oder Uber (Taxi), Tabelog (Restaurants), smartEX.' },
    { id: 'p-elefand', off: -10, t: 'In Elefand eintragen', d: 'Die Krisenvorsorgeliste des Auswärtigen Amts, damit die Botschaft euch im Notfall erreicht.' },
    { id: 'p-suica', off: -7, t: 'Suica einrichten', d: 'Mit dem iPhone Suica in Apple Wallet anlegen. Android-Handys aus Europa können meist kein Suica – dann die Karte am Flughafen kaufen.' },
    { id: 'p-vjw', off: -5, t: 'Visit Japan Web ausfüllen', d: 'Einreise und Zoll vorab online, am Flughafen nur noch den QR-Code zeigen.' },
    { id: 'p-cash', off: -2, t: 'Yen in bar besorgen', d: '20.000–30.000 Yen für kleine Restaurants, Tempel und Automaten. Die Automaten bei 7-Eleven nehmen deutsche Karten.' },
    { id: 'p-addr', off: -2, t: 'Hoteladressen auf Japanisch speichern', d: 'Unter „Tage“ beim Hotel eintragen – dann gibt es dafür eine Taxi-Karte.' }
  ],

  packing: [
    'Reisepass – in Japan Pflicht, ihn immer dabeizuhaben',
    'Zwei Kreditkarten (Visa und Mastercard)',
    'Reiseadapter Typ A (flache Stifte, 100 V) – Ladegeräte vertragen das meist',
    'Geldbörse mit Münzfach (viele Münzen!)',
    'Bequeme Schuhe zum schnellen Ausziehen (Tempel, Ryokan, Restaurants)',
    'Socken ohne Löcher',
    'Kleines Handtuch – auf Toiletten gibt es oft keine Handtrockner',
    'Beutel für den eigenen Müll (kaum Mülleimer)',
    'Regenschirm oder günstig vor Ort im Konbini kaufen',
    'Reiseapotheke – Achtung: Mittel mit Pseudoephedrin (manche Erkältungsmittel) sind in Japan verboten',
    'Badehose für Yunessun',
    'Ohrstöpsel und Schlafmaske',
    'Kleiner Tagesrucksack',
    'Platz im Koffer für Einkäufe'
  ],

  phrases: [
    ['こんにちは', 'konnichiwa', 'Hallo'],
    ['ありがとうございます', 'arigatō gozaimasu', 'Vielen Dank'],
    ['すみません', 'sumimasen', 'Entschuldigung – auch um jemanden anzusprechen'],
    ['これをください', 'kore o kudasai', 'Das hier, bitte'],
    ['いくらですか？', 'ikura desu ka?', 'Was kostet das?'],
    ['二人です', 'futari desu', 'Wir sind zwei Personen'],
    ['お会計お願いします', 'okaikei onegaishimasu', 'Die Rechnung, bitte'],
    ['トイレはどこですか？', 'toire wa doko desu ka?', 'Wo ist die Toilette?'],
    ['ここまでお願いします', 'koko made onegaishimasu', 'Bitte bringen Sie mich hierhin'],
    ['カードは使えますか？', 'kādo wa tsukaemasu ka?', 'Kann ich mit Karte zahlen?'],
    ['英語のメニューはありますか？', 'eigo no menyū wa arimasu ka?', 'Gibt es eine englische Speisekarte?'],
    ['生ビール二つ', 'nama bīru futatsu', 'Zwei Bier vom Fass'],
    ['乾杯！', 'kanpai!', 'Prost!'],
    ['おいしい！', 'oishii!', 'Lecker!']
  ],

  tips: [
    { id: 'visum', title: 'Einreise & Visum', html: `
      <p>Deutsche dürfen <strong>bis zu 90 Tage ohne Visum</strong> nach Japan. Eine elektronische Reisegenehmigung (JESTA) ist geplant, aber erst bis spätestens März 2029.</p>
      <ul>
        <li>Pass mindestens für die ganze Reise gültig. Ausländer müssen ihn in Japan immer dabeihaben.</li>
        <li><strong>Visit Japan Web</strong> vorher ausfüllen – dann reicht bei Einreise und Zoll ein QR-Code.</li>
        <li>Bei der Einreise werden Fingerabdrücke und ein Foto genommen.</li>
        <li>Die Ausreisesteuer beträgt seit Juli 2026 3.000 Yen und steckt meist schon im Flugticket.</li>
      </ul>
      <p><a href="https://www.vjw.digital.go.jp" target="_blank" rel="noopener">Visit Japan Web</a></p>` },
    { id: 'geld', title: 'Geld & Bezahlen', html: `
      <p>Japan ist nicht mehr nur Bargeldland: Hotels, Ketten, Konbini und die meisten Restaurants nehmen Karte. Kleine Lokale, Tempel und Märkte wollen aber oft Bargeld.</p>
      <ul>
        <li><strong>Suica</strong> oder <strong>PASMO</strong>: IC-Karte für Bahn, Bus, Konbini und Automaten. Auf dem iPhone direkt in Apple Wallet.</li>
        <li>Die Automaten bei 7-Eleven und der Post nehmen deutsche Karten.</li>
        <li>Faustregel: 1 € ≈ 180 Yen. Den Kurs könnt ihr unter „Route“ anpassen.</li>
        <li><strong>Tax-free</strong> mit Pass ab 5.000 Yen. Seit 1.11.2026 zahlt ihr im Laden den vollen Preis und bekommt die Steuer bei der Ausreise zurück – die Waren vor dem Check-in beim Zoll zeigen.</li>
        <li>Trinkgeld ist unüblich und kann sogar irritieren.</li>
      </ul>` },
    { id: 'internet', title: 'Internet & Apps', html: `
      <p>In Japan ist nichts gesperrt. Kostenloses WLAN gibt es aber seltener als gedacht.</p>
      <ul>
        <li><strong>Google Maps</strong> ist in Japan perfekt: Gleis, Wagennummer, sogar der beste Ausgang.</li>
        <li><strong>Google Übersetzer</strong> mit Kamera für Speisekarten und Schilder.</li>
        <li><strong>GO</strong> oder <strong>Uber</strong> fürs Taxi.</li>
        <li><strong>Tabelog</strong> für Restaurants: Ab 3,5 Punkten ist es richtig gut.</li>
        <li><strong>smartEX</strong> für Shinkansen-Tickets.</li>
      </ul>
      <p>Diese Seite funktioniert nach dem ersten Öffnen auch offline.</p>` },
    { id: 'zug', title: 'Bahn & Shinkansen', html: `
      <ul>
        <li>In der Stadt einfach mit Suica durch die Sperre – kein Ticketkauf nötig.</li>
        <li>Der <strong>Japan Rail Pass</strong> (7 Tage ca. 50.000–53.000 Yen) lohnt sich für diese Route nicht. Die Einzeltickets kosten zusammen eher 30.000 Yen.</li>
        <li>Shinkansen-Tickets über smartEX ab ca. 1 Monat vorher oder am Automaten. Reservierte Wagen sind entspannter als die freien.</li>
        <li>Großes Gepäck (über 160 cm Summe aus Länge, Breite und Höhe) braucht im Tokaido-Shinkansen einen Platz mit Gepäckbereich – beim Buchen mitreservieren.</li>
        <li><strong>Takkyubin</strong>: Koffer vom Hotel zum nächsten Hotel schicken, ca. 2.000–3.000 Yen, am nächsten Tag da. Genial für Hakone.</li>
        <li>Im Zug leise sein, nicht telefonieren. Am Bahnsteig ordentlich in der Schlange anstellen.</li>
        <li>Rushhour von 8 bis 9 Uhr meiden. Die letzten Bahnen fahren um Mitternacht.</li>
      </ul>` },
    { id: 'hotel', title: 'Hotels & Ryokan', html: `
      <ul>
        <li>Zimmer sind klein. Zu zweit <strong>Twin</strong> buchen, auf die Quadratmeter achten.</li>
        <li><strong>Ryokan</strong> kosten pro Person und schließen meist Abendessen und Frühstück ein. Essenszeiten einhalten.</li>
        <li>Kapselhotels und Love Hotels sind günstige, verrückte Alternativen für eine Nacht.</li>
        <li>In Tokio und Kyoto kommt eine Übernachtungssteuer dazu, meist ein paar Hundert Yen pro Nacht.</li>
        <li>Check-in meist ab 15 Uhr, Check-out um 10 oder 11 Uhr. Gepäck darf man fast immer abgeben.</li>
        <li>Die Hoteladresse auf Japanisch unter „Tage“ eintragen. Dann zeigt ihr sie dem Taxifahrer als Karte.</li>
      </ul>
      <p>Die besten Gegenden pro Stadt stehen unter „Route“.</p>` },
    { id: 'essen', title: 'Essen & Trinken', html: `
      <ul>
        <li>Bei Ramen und Fast Food zahlt man vorher am Automaten und gibt das Ticket ab.</li>
        <li>Schlürfen ist okay. Stäbchen nicht senkrecht in den Reis stecken und kein Essen von Stäbchen zu Stäbchen reichen.</li>
        <li>Nicht im Gehen essen – am Stand oder im Laden stehenbleiben.</li>
        <li>Gute Restaurants sind oft ausgebucht: über Tabelog oder das Hotel reservieren.</li>
        <li>Leitungswasser ist trinkbar, Wasser und Tee gibt es im Restaurant gratis.</li>
        <li>Vegetarisch ist schwierig: Fischbrühe (Dashi) steckt fast überall drin.</li>
        <li><strong>Tokio</strong>: Sushi, Ramen, Monjayaki, Yakitori. <strong>Kyoto</strong>: Kaiseki, Tofu, Matcha. <strong>Osaka</strong>: Takoyaki, Okonomiyaki, Kushikatsu.</li>
      </ul>` },
    { id: 'knigge', title: 'Alltag & Knigge', html: `
      <ul>
        <li>Schuhe aus in Ryokan, Tempeln und manchen Restaurants. Für die Toilette gibt es eigene Schlappen.</li>
        <li>Kaum Mülleimer: Müll mitnehmen und im Hotel oder Konbini entsorgen.</li>
        <li>Rolltreppe: In Tokio links stehen, in Osaka rechts.</li>
        <li>Tattoos sind in vielen Onsen und Fitnessstudios verboten. Sento sind meist entspannter.</li>
        <li>Rauchen auf der Straße ist in Tokio vielerorts verboten – nur in Raucherbereichen.</li>
        <li>Leise sein in Bahn und Bus, nicht telefonieren.</li>
      </ul>` },
    { id: 'sicherheit', title: 'Sicherheit & Erdbeben', html: `
      <p>Japan ist extrem sicher. Verlorene Geldbörsen landen oft samt Inhalt im Fundbüro.</p>
      <ul>
        <li>In Kabukicho und Roppongi nie Schleppern in Bars folgen – dort gibt es Abzocke mit überhöhten Rechnungen.</li>
        <li><strong>Erdbeben</strong> sind normal. Bei einem starken Beben unter einen Tisch, Kopf schützen und den Durchsagen folgen.</li>
        <li>Die App <strong>Safety tips</strong> der japanischen Tourismusbehörde warnt auf Englisch vor Erdbeben, Tsunamis und Unwettern.</li>
      </ul>` },
    { id: 'wetter', title: 'Reisezeit & Wetter', html: `
      <p><strong>Beste Zeit: Ende März bis Mai und Oktober bis November.</strong> Kirschblüte in Tokio und Kyoto etwa Ende März bis Anfang April – traumhaft, aber teuer und voll. Herbstlaub im November. Meiden: Golden Week, Obon und die Neujahrstage.</p>
      <ul>
        <li>Regenzeit (Tsuyu) etwa Juni bis Mitte Juli.</li>
        <li>Juli und August sind heiß und schwül, dazu Taifune von August bis Oktober.</li>
        <li>Winter ist klar und sonnig, der Fuji ist dann am besten zu sehen.</li>
      </ul>
      <div id="weather-table"></div>` },
    { id: 'notfall', title: 'Notfall', html: `
      <ul>
        <li>Polizei <strong>110</strong>, Feuerwehr und Rettung <strong>119</strong>.</li>
        <li>Japan Visitor Hotline der Tourismusbehörde: <a href="tel:+815038162787">050-3816-2787</a>, rund um die Uhr auf Englisch.</li>
        <li>Deutsche Botschaft Tokio: <a href="tel:+81357917700">+81 3 5791 7700</a>. Generalkonsulat in Osaka-Kobe.</li>
        <li><a href="https://krisenvorsorgeliste.diplo.de" target="_blank" rel="noopener">Elefand – Krisenvorsorgeliste</a> des Auswärtigen Amts.</li>
        <li>Apotheke heißt 薬局 (yakkyoku), Drogerien heißen „Drugstore“ und sind überall.</li>
      </ul>` }
  ]
});
