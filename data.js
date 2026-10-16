/* Inhalte des Reiseplaners. Preise sind Richtwerte pro Person in CNY (Stand 2025/26) – vor Ort prüfen. */
window.TRIP = {
  categories: {
    klassiker: 'Klassiker',
    verrueckt: 'Verrückt',
    essen: 'Essen & Trinken',
    natur: 'Natur',
    kultur: 'Kultur',
    nacht: 'Abends & Nachts',
    chill: 'Entspannt',
    ausflug: 'Tagesausflug',
    transport: 'Anreise & Transfers',
    eigene: 'Eigene'
  },

  cities: {
    fra: {
      name: 'Unterwegs', zh: '法兰克福', py: 'Frankfurt',
    },
    bj: {
      name: 'Peking', zh: '北京', py: 'Běijīng',
      why: `Kaiserpaläste, Hutong-Gassen und die Große Mauer vor der Haustür. Die Hauptstadt ist riesig, geordnet und voller Geschichte.`,
      stay: `Dongcheng: rund um Wangfujing, Dongsi oder Nanluoguxiang. Zentral, mehrere Metrolinien, Hutong-Flair vor der Tür.`,
      stayTip: `Mindestens einmal im Hofhaus-Hotel (Siheyuan) mitten im Hutong schlafen. Auf Trip.com nach „courtyard hotel Dongcheng“ suchen.`,
      move: `Die Metro ist billig (3–10 CNY) und auf Englisch beschildert, die Wege sind aber lang. Für die Mauer lieber DiDi oder einen Fahrer buchen.`,
      arrive: `Flughafen Capital (PEK): Airport Express bis Dongzhimen, ca. 25 CNY. Flughafen Daxing (PKX): Daxing Airport Express, ca. 35 CNY.`,
      prices: [['Budget', '35–60 €'], ['Mittelklasse', '70–140 €'], ['Komfort', 'ab 180 €']]
    },
    sh: {
      name: 'Shanghai', zh: '上海', py: 'Shànghǎi',
      why: `Art-déco am Bund, Neon-Skyline in Pudong, Platanenalleen in der Französischen Konzession. Das moderne, schnelle China.`,
      stay: `People's Square oder Nanjing Road Ost (zu Fuß zum Bund). Oder Jing'an und die Französische Konzession für Cafés und Bars.`,
      stayTip: `Hotels in Pudong haben die Skyline vor dem Fenster, abends ist dort aber wenig los.`,
      move: `Metro hervorragend. Leihräder per Alipay für die Französische Konzession. Bahnhof und Flughafen Hongqiao liegen direkt nebeneinander.`,
      arrive: `Mit dem Zug aus Peking kommt ihr in Hongqiao an, von dort Metro Linie 2 oder 10 in die Innenstadt (ca. 30 Min.).`,
      prices: [['Budget', '40–70 €'], ['Mittelklasse', '80–150 €'], ['Komfort', 'ab 200 €']]
    },
    zjj: {
      name: 'Zhangjiajie', zh: '张家界', py: 'Zhāngjiājiè',
      why: `Die Avatar-Berge und die 999 Stufen zum Himmelstor. Felstürme, die im Nebel schweben – so etwas gibt es nirgendwo sonst.`,
      stay: `Eine Nacht in Zhangjiajie-Stadt nahe der Tianmen-Seilbahnstation, dann zwei Nächte in Wulingyuan nahe dem Eingang zum Nationalpark.`,
      stayTip: `In Wulingyuan gibt es viele familiengeführte Gästehäuser. Frühes Frühstück und Gepäckaufbewahrung direkt mit anfragen.`,
      move: `Stadt ↔ Wulingyuan ca. 40 Min. per Bus oder DiDi. Im Nationalpark fahren Shuttlebusse, die im Ticket enthalten sind.`,
      arrive: `Der Flughafen Hehua (DYG) liegt 15 Min. von der Stadt. Der Bahnhof Zhangjiajie West ca. 20 Min.`,
      prices: [['Budget', '25–45 €'], ['Mittelklasse', '50–90 €'], ['Komfort', 'ab 120 €']]
    },
    cq: {
      name: 'Chongqing', zh: '重庆', py: 'Chóngqìng',
      why: `Cyberpunk in echt: Hochhäuser an Steilhängen, eine Bahn, die durch ein Wohnhaus fährt, zwei Flüsse und der schärfste Hotpot Chinas.`,
      stay: `Yuzhong-Halbinsel rund um Jiefangbei, Hongyadong oder Chaotianmen. Fast alles ist zu Fuß oder mit 1–2 Metrostationen erreichbar.`,
      stayTip: `Ein Zimmer weit oben mit Flussblick buchen. Und nicht wundern: Das Erdgeschoss kann hier der 20. Stock sein.`,
      move: `Metro und Monorail sind ein Erlebnis für sich. Das Navi zeigt oft die falsche Ebene – Zeitpuffer einplanen.`,
      arrive: `Je nach Zug Chongqing Ost, Nord oder West. Von dort Metro oder DiDi auf die Halbinsel (20–40 Min.).`,
      prices: [['Budget', '30–50 €'], ['Mittelklasse', '55–100 €'], ['Komfort', 'ab 130 €']]
    },
    any: { name: 'Überall', zh: '', py: '' }
  },

  /* c = Stadt, cat = Kategorien, v = Verrückt-Faktor 0–3, d = Dauer in Std., p = Preis p. P. in CNY,
     pt = Preistext, w = übliche Tageszeit (0 Früh … 5 Ganztags), closed/only = Wochentage (0 = So) */
  activities: [
    // ---------- Transfers ----------
    { id: 't-fra-pek', c: 'fra', t: 'Flug Frankfurt → Peking', cat: ['transport'], v: 0, d: 10, p: 0, pt: 'Gabelflug ca. 600–1.000 €', w: 4, mode: 'flug', dshort: '10 Std.', taxi: false,
      desc: `Direktflug ca. 9,5–10 Std. (z. B. Lufthansa oder Air China). Abends los, am nächsten Vormittag da. Peking ist 6 Std. (Sommerzeit) bzw. 7 Std. (Winterzeit) voraus.`,
      tip: `Als Gabelflug (Multi-City) suchen: hin Frankfurt → Peking, zurück Chongqing → Frankfurt. Im Flieger schlafen und am Ankunftstag bis abends durchhalten.` },
    { id: 't-pek-sha', c: 'sh', t: 'Schnellzug Peking → Shanghai', zh: '北京南站', cat: ['transport'], v: 1, d: 5, p: 600, pt: 'ca. 550–700 CNY (2. Klasse)', w: 1, mode: 'zug', dshort: '4½ Std.',
      desc: `G-Zug von Beijing South nach Shanghai Hongqiao mit bis zu 350 km/h. Die schnellsten Züge brauchen ca. 4 Std. 20 Min.`,
      tip: `Der Pass ist euer Ticket. 45–60 Min. vorher am Bahnhof sein (Sicherheitskontrolle, riesige Hallen). Sitz A oder F = Fenster.`,
      book: 'Verkauf ca. 15 Tage vorher (12306 oder Trip.com)' },
    { id: 't-sha-zjj', c: 'zjj', t: 'Flug Shanghai → Zhangjiajie', cat: ['transport'], v: 0, d: 4, p: 900, pt: 'ca. 600–1.200 CNY', w: 1, mode: 'flug', dshort: '2½ Std.', taxi: false,
      desc: `Ca. 2 Std. 30 Min. nach Zhangjiajie Hehua (DYG). Der Flughafen liegt nur 15 Min. von der Stadt und der Tianmen-Seilbahn entfernt.`,
      tip: `Alternative: direkter G-Zug ab Hongqiao, ca. 7–9 Std., nur wenige Verbindungen am Tag. Powerbank nur mit 3C-Logo ins Handgepäck!` },
    { id: 't-zjj-wly', c: 'zjj', t: 'Transfer Stadt → Wulingyuan', zh: '武陵源', cat: ['transport'], v: 0, d: 1, p: 50, pt: 'Taxi ca. 80–120 CNY, Bus ca. 15 CNY', w: 4, mode: 'auto', dshort: '40 Min.',
      desc: `Ca. 40 Min. von Zhangjiajie-Stadt nach Wulingyuan am Haupteingang des Nationalparks. Dort schlaft ihr für die Avatar-Berge.`,
      tip: `DiDi funktioniert hier gut. Ein Hotel nah am Wulingyuan-Eingang bringt euch morgens vor den Reisegruppen in den Park.` },
    { id: 't-zjj-cq', c: 'cq', t: 'Zug Zhangjiajie → Chongqing', zh: '张家界西站', cat: ['transport'], v: 0, d: 3, p: 220, pt: 'ca. 190–260 CNY (2. Klasse)', w: 3, mode: 'zug', dshort: '2–3 Std.',
      desc: `Ab Zhangjiajie West, die schnellsten Züge brauchen gut 2 Std. Ankunftsbahnhof prüfen: Chongqing Ost, Nord oder West.`,
      tip: `Vor dem Buchen schauen, welcher Chongqing-Bahnhof näher am Hotel liegt – die Stadt ist riesig.`,
      book: 'Verkauf ca. 15 Tage vorher (12306 oder Trip.com)' },
    { id: 't-cq-fra', c: 'fra', t: 'Rückflug Chongqing → Frankfurt', cat: ['transport'], v: 0, d: 16, p: 0, pt: 'im Gabelflug enthalten', w: 1, mode: 'flug', dshort: '15–20 Std.', taxi: false,
      desc: `Es gibt keinen Direktflug. Mit einem Umstieg (z. B. Peking, Shanghai oder ein anderes Drehkreuz) ca. 15–20 Std. Dank Zeitverschiebung landet ihr oft am selben Tag.`,
      tip: `Mindestens 2 Std. Umsteigezeit einplanen. Beim Wechsel auf den internationalen Flug in China muss das Gepäck evtl. neu eingecheckt werden – beim Buchen prüfen.` },

    // ---------- Peking ----------
    { id: 'bj-tiananmen', c: 'bj', t: 'Platz des Himmlischen Friedens', zh: '天安门广场', cat: ['klassiker', 'kultur'], v: 0, d: 1, p: 0, pt: 'frei (mit Reservierung)', w: 0,
      desc: `Riesiger Platz vor dem Tor mit dem Mao-Porträt – der Startpunkt zur Verbotenen Stadt.`,
      tip: `Vorab mit Pass reservieren (WeChat-Mini-Programm, Hotel oder Trip.com). Sicherheitskontrollen dauern.`,
      book: 'Reservierung mit Pass nötig' },
    { id: 'bj-flag', c: 'bj', t: 'Flaggenzeremonie zum Sonnenaufgang', zh: '天安门广场', cat: ['verrueckt', 'kultur'], v: 1, d: 2, p: 0, w: 0,
      desc: `Soldaten im Stechschritt hissen bei Sonnenaufgang die Flagge. Tausende Chinesen stehen dafür ab 4 Uhr morgens an.`,
      tip: `Die Uhrzeit wandert mit dem Sonnenaufgang. Danach direkt weiter zur Verbotenen Stadt, die um 8:30 öffnet.`,
      book: 'Platz-Reservierung nötig' },
    { id: 'bj-forbidden', c: 'bj', t: 'Verbotene Stadt', zh: '故宫博物院', cat: ['klassiker', 'kultur'], v: 0, d: 4, p: 60, pt: '60 CNY (Nov–März 40)', w: 1, closed: [1],
      desc: `Der Kaiserpalast mit fast 1.000 Gebäuden. Rein im Süden durchs Mittagstor, raus im Norden – direkt gegenüber vom Jingshan-Park.`,
      tip: `Montags geschlossen. Tickets sind schnell weg: Sie werden 7 Tage vorher freigeschaltet (meist 20 Uhr Pekinger Zeit). Der Audioguide lohnt sich.`,
      book: '7 Tage vorher mit Pass buchen' },
    { id: 'bj-jingshan', c: 'bj', t: 'Jingshan-Park zum Sonnenuntergang', zh: '景山公园', cat: ['klassiker', 'chill'], v: 0, d: 1, p: 2, w: 3,
      desc: `Kleiner Hügel direkt hinter der Verbotenen Stadt. Von oben der beste Blick über die goldenen Dächer.`,
      tip: `Kurz vor Sonnenuntergang hochgehen. Eintritt 2 CNY, Pass mitnehmen.` },
    { id: 'bj-mutianyu', c: 'bj', t: 'Große Mauer Mutianyu mit Rodelbahn', zh: '慕田峪长城', cat: ['klassiker', 'natur', 'verrueckt'], v: 1, d: 7, p: 200, pt: 'ca. 180–220 CNY inkl. Lift & Rodel', w: 5,
      desc: `Restaurierter, grüner Abschnitt mit weniger Gedränge als Badaling. Hoch mit dem Sessellift, runter mit der Sommerrodelbahn.`,
      tip: `Früh los, die Mauer ist 1,5 Std. entfernt. Am einfachsten mit DiDi oder Fahrer hin und zurück, oder als Bustour über Trip.com. Bei Regen ist die Rodelbahn zu.` },
    { id: 'bj-simatai', c: 'bj', t: 'Große Mauer bei Nacht (Simatai)', zh: '司马台长城', cat: ['verrueckt', 'natur', 'nacht'], v: 2, d: 8, p: 300, pt: 'ca. 250–350 CNY', w: 5,
      desc: `Einer der wenigen Mauerabschnitte, die man abends besuchen kann – beleuchtet über dem Wasserdorf Gubei. Steil und spektakulär.`,
      tip: `Ca. 2 Std. von Peking. Am besten mit Übernachtung in der Gubei Water Town. Die Nachtöffnung ist saisonal, vorher prüfen.`,
      book: 'Nachtticket vorab buchen' },
    { id: 'bj-jinshanling', c: 'bj', t: 'Mauer-Wanderung Jinshanling', zh: '金山岭长城', cat: ['natur', 'ausflug'], v: 1, d: 9, p: 65, w: 5,
      desc: `Halb restaurierte Mauer mit Wachtürmen bis zum Horizont. Liebling der Fotografen und ruhiger als Mutianyu.`,
      tip: `Ca. 2,5 Std. Anfahrt, feste Schuhe. Lohnt sich, wenn euch Mutianyu zu touristisch ist.` },
    { id: 'bj-temple-heaven', c: 'bj', t: 'Himmelstempel am Morgen', zh: '天坛公园', cat: ['klassiker', 'kultur'], v: 1, d: 2.5, p: 34, pt: '34 CNY Kombiticket', w: 0,
      desc: `Der runde Gebetstempel ist ikonisch. Das Beste sind aber die Rentner im Park: Tai-Chi, Tanzen, Federfußball, Chorsingen.`,
      tip: `Vor 9 Uhr kommen und einfach mitmachen – die Locals freuen sich meistens.` },
    { id: 'bj-summer-palace', c: 'bj', t: 'Sommerpalast', zh: '颐和园', cat: ['klassiker', 'kultur', 'chill'], v: 0, d: 3.5, p: 60, pt: '60 CNY Kombiticket', w: 3,
      desc: `Kaiserlicher Garten am Kunming-See mit Wandelgang, Pagoden und Marmorboot.`,
      tip: `Mit dem Drachenboot über den See fahren. Liegt im Nordwesten, mit der Metro Linie 4 ca. 45 Min.` },
    { id: 'bj-lama', c: 'bj', t: 'Lama-Tempel', zh: '雍和宫', cat: ['kultur'], v: 0, d: 1.5, p: 25, w: 1,
      desc: `Aktiver tibetisch-buddhistischer Tempel mit einem 18 m hohen Buddha aus einem einzigen Sandelholzstamm.`,
      tip: `Räucherstäbchen gibt's gratis am Eingang. Danach durch die Wudaoying-Hutong mit ihren Cafés schlendern.` },
    { id: 'bj-hutong', c: 'bj', t: 'Hutong-Tour durch die Altstadt', zh: '南锣鼓巷', cat: ['klassiker', 'kultur', 'chill'], v: 0, d: 2.5, p: 100, pt: 'zu Fuß gratis, Rikscha ca. 100–200 CNY', w: 3,
      desc: `Enge Gassen mit Hofhäusern rund um Nanluoguxiang, Shichahai und die Trommel- und Glockentürme.`,
      tip: `Rikscha-Preis vorher fest aushandeln (pro Person oder pro Fahrt?). Leihräder per Alipay sind billiger und freier.` },
    { id: 'bj-houhai', c: 'bj', t: 'Houhai-Bars am See', zh: '后海酒吧街', cat: ['nacht'], v: 1, d: 2.5, p: 120, w: 4,
      desc: `Bars und Livemusik direkt am Wasser – etwas kitschig, aber stimmungsvoll mit den Lichtern auf dem See.`,
      tip: `Schlepper winken überall rein, Preise vorher checken. Die ruhigeren Bars liegen in den Seitengassen.` },
    { id: 'bj-duck', c: 'bj', t: 'Peking-Ente essen', zh: '四季民福烤鸭店', cat: ['essen', 'klassiker'], v: 0, d: 2, p: 180, pt: 'ca. 150–300 CNY', w: 4,
      desc: `Knusprige Haut, dünne Pfannkuchen, Gurke, süße Soße. Beliebt: Siji Minfu (gut und bezahlbar) oder Da Dong (edel).`,
      tip: `Bei Siji Minfu gibt es lange Schlangen – Nummer ziehen und die Wartezeit mit einem Bier überbrücken. Eine ganze Ente reicht für zwei.` },
    { id: 'bj-guijie', c: 'bj', t: 'Guijie: Flusskrebse bis spät', zh: '簋街', cat: ['essen', 'nacht'], v: 1, d: 2, p: 150, w: 4,
      desc: `Die „Geisterstraße“ mit Hunderten roten Laternen und scharfen Flusskrebsen (Mala Xiaolongxia), offen bis tief in die Nacht.`,
      tip: `Hu Da (胡大) ist das bekannteste Lokal. Wartenummern gibt es per QR-Code.` },
    { id: 'bj-wangfujing', c: 'bj', t: 'Skorpione am Spieß (Wangfujing)', zh: '王府井小吃街', cat: ['essen', 'verrueckt'], v: 2, d: 1.5, p: 80, w: 4,
      desc: `Touristische Snackstraße mit Skorpionen, Seepferdchen und Seidenraupen am Spieß – eher Mutprobe als Delikatesse.`,
      tip: `Teuer und für Fotos gemacht. Echte Streetfood-Stimmung gibt's eher in Guijie.` },
    { id: 'bj-lamb', c: 'bj', t: 'Kupfertopf mit Hammelfleisch', zh: '东来顺', cat: ['essen'], v: 0, d: 2, p: 130, w: 4,
      desc: `Das Pekinger Fondue: hauchdünnes Lammfleisch im Kupfertopf mit Sesamsoße. Nicht scharf!`,
      tip: `Der Klassiker ist Dong Lai Shun mit mehreren Filialen.` },
    { id: 'bj-jianbing', c: 'bj', t: 'Frühstück: Jianbing vom Straßenstand', zh: '煎饼果子', cat: ['essen'], v: 0, d: 0.5, p: 10, w: 0, taxi: false,
      desc: `Crêpe mit Ei, Knusperteig, Chili und Soße – das Pekinger Frühstück schlechthin.`,
      tip: `Einfach an einen Stand mit Schlange stellen, draufzeigen, per Alipay zahlen.` },
    { id: 'bj-kungfu', c: 'bj', t: 'Kung-Fu- oder Akrobatik-Show', zh: '红剧场', cat: ['kultur', 'nacht'], v: 1, d: 1.5, p: 280, pt: 'ca. 180–680 CNY', w: 4,
      desc: `„The Legend of Kung Fu“ im Red Theatre oder Akrobatik im Chaoyang Theatre – laut, bunt, beeindruckend.`,
      tip: `Tickets online oder am selben Tag an der Kasse. Die billigen Plätze reichen.` },
    { id: 'bj-798', c: 'bj', t: '798 Art District', zh: '798艺术区', cat: ['kultur', 'chill'], v: 0, d: 3, p: 0, w: 3,
      desc: `Bauhaus-Fabriken, mit Hilfe der DDR gebaut, heute voller Galerien, Street-Art und Cafés.`,
      tip: `Montags haben viele Galerien geschlossen.` },
    { id: 'bj-olympic', c: 'bj', t: 'Vogelnest & Olympiapark bei Nacht', zh: '国家体育场', cat: ['klassiker', 'nacht'], v: 0, d: 2, p: 50, w: 4,
      desc: `Das Stadion von 2008 und der Water Cube leuchten abends in Farbe.`,
      tip: `Von außen gratis, Innenbesichtigung ca. 50 CNY.` },
    { id: 'bj-museum', c: 'bj', t: 'Nationalmuseum', zh: '中国国家博物馆', cat: ['kultur'], v: 0, d: 2.5, p: 0, pt: 'frei (mit Reservierung)', w: 3, closed: [1],
      desc: `Eins der größten Museen der Welt, direkt am Tiananmen-Platz: 5.000 Jahre chinesische Geschichte.`,
      tip: `Montags geschlossen. Gratis, aber nur mit Online-Reservierung.`,
      book: 'Reservierung mit Pass nötig' },
    { id: 'bj-universal', c: 'bj', t: 'Universal Studios Beijing', zh: '北京环球度假区', cat: ['verrueckt', 'ausflug'], v: 1, d: 10, p: 600, pt: 'ca. 420–750 CNY', w: 5,
      desc: `Harry Potter, Transformers, Kung Fu Panda – Freizeitpark mit Achterbahnen.`,
      tip: `Unter der Woche deutlich leerer. Tickets vorab online kaufen.` },
    { id: 'bj-panda', c: 'bj', t: 'Pandas im Pekinger Zoo', zh: '北京动物园', cat: ['chill'], v: 0, d: 2, p: 20, w: 1,
      desc: `Riesenpandas beim Bambus-Frühstück. Morgens sind sie am aktivsten.`,
      tip: `Auch der Zoo in Chongqing hat Pandas.` },

    // ---------- Shanghai ----------
    { id: 'sh-bund', c: 'sh', t: 'The Bund bei Nacht', zh: '外滩', cat: ['klassiker', 'nacht'], v: 0, d: 1.5, p: 0, w: 4,
      desc: `Kolonialbauten auf der einen Seite, die Neon-Skyline von Pudong auf der anderen – Shanghais Postkartenblick.`,
      tip: `Die Beleuchtung läuft meist bis ca. 22 Uhr. Am Wochenende brechend voll.` },
    { id: 'sh-tower', c: 'sh', t: 'Shanghai Tower, 118. Stock', zh: '上海中心大厦', cat: ['klassiker'], v: 1, d: 1.5, p: 180, w: 4,
      desc: `632 m hoch, einer der höchsten Wolkenkratzer der Welt. Der Aufzug schafft die 118 Stockwerke in unter einer Minute.`,
      tip: `Kurz vor Sonnenuntergang hoch, dann gibt's Tag- und Nachtblick. Bei Smog lieber verschieben.` },
    { id: 'sh-yu', c: 'sh', t: 'Yu-Garten & Altstadt', zh: '豫园', cat: ['klassiker', 'kultur'], v: 0, d: 2, p: 40, w: 1,
      desc: `Klassischer Garten aus der Ming-Zeit mit Teichen und Felsen, drumherum ein quirliger Basar mit Teehaus auf Stelzen.`,
      tip: `Zur Öffnung kommen. Der Basar außenrum kostet nichts und ist abends beleuchtet.` },
    { id: 'sh-xiaolongbao', c: 'sh', t: 'Xiaolongbao: Suppenteigtaschen', zh: '佳家汤包', cat: ['essen', 'klassiker'], v: 0, d: 1, p: 50, w: 2,
      desc: `Teigtaschen mit heißer Brühe drin. Jia Jia Tang Bao ist günstig und lokal, Din Tai Fung die schicke Variante.`,
      tip: `Erst anbeißen, Suppe schlürfen, dann essen – sonst ist die Zunge verbrannt.` },
    { id: 'sh-french', c: 'sh', t: 'Französische Konzession', zh: '武康路', cat: ['chill', 'kultur'], v: 0, d: 3, p: 0, w: 3,
      desc: `Platanenalleen, Villen, Cafés und kleine Läden rund um Wukang Road und Anfu Road.`,
      tip: `Mit Leihrädern (per Alipay) durchfahren. Das Wukang Mansion ist der Fotospot.` },
    { id: 'sh-tianzifang', c: 'sh', t: 'Tianzifang', zh: '田子坊', cat: ['chill'], v: 0, d: 1.5, p: 0, w: 3,
      desc: `Labyrinth aus alten Shikumen-Gassen mit Bars, Kunst und Souvenirs.`,
      tip: `Touristisch, aber nett für einen Drink am Nachmittag.` },
    { id: 'sh-nanjing', c: 'sh', t: 'Nanjing Road', zh: '南京东路步行街', cat: ['klassiker'], v: 0, d: 1, p: 0, w: 3,
      desc: `Neon-Einkaufsmeile vom People's Square bis zum Bund, Menschenmassen inklusive.`,
      tip: `Hier sind die Tee-Scammer unterwegs: Wer euch zum „Teetrinken“ einlädt, will euer Geld.` },
    { id: 'sh-rooftop', c: 'sh', t: 'Rooftop-Bar mit Skyline-Blick', zh: '外滩十八号', cat: ['nacht'], v: 0, d: 2, p: 180, pt: 'ca. 100–200 CNY pro Drink', w: 4,
      desc: `Drinks über dem Bund mit Blick auf Pudong, z. B. Bar Rouge (Bund 18) oder Flair im Ritz-Carlton Pudong.`,
      tip: `Oft Dresscode (keine Shorts oder Flipflops) und am Wochenende Mindestverzehr.` },
    { id: 'sh-cruise', c: 'sh', t: 'Bootsfahrt auf dem Huangpu', zh: '十六铺码头', cat: ['klassiker', 'nacht', 'chill'], v: 0, d: 1, p: 120, w: 4,
      desc: `Die beleuchtete Skyline vom Wasser aus – beide Ufer in einer Stunde.`,
      tip: `Ab Shiliupu-Pier. Spartipp: Die Fähre über den Fluss kostet 2 CNY und bietet fast denselben Blick.` },
    { id: 'sh-tunnel', c: 'sh', t: 'Bund Sightseeing Tunnel', zh: '外滩观光隧道', cat: ['verrueckt'], v: 2, d: 0.5, p: 60, pt: 'ca. 50–70 CNY', w: 4,
      desc: `In einer Kapsel unter dem Fluss durch einen Tunnel voller Laser, Neon und Soundeffekte. Herrlich trashig.`,
      tip: `Kult oder Geldverschwendung – entscheidet selbst. Nur einfach fahren, zurück mit der Fähre.` },
    { id: 'sh-marriage', c: 'sh', t: 'Heiratsmarkt im Volkspark', zh: '人民公园相亲角', cat: ['verrueckt', 'kultur'], v: 2, d: 1, p: 0, w: 3, only: [0, 6],
      desc: `Eltern hängen Steckbriefe ihrer Single-Kinder auf: Größe, Gehalt, Wohnung. Surreal und faszinierend.`,
      tip: `Nur samstags und sonntags am Nachmittag. Respektvoll bleiben, Fotos nur dezent.` },
    { id: 'sh-fakemarket', c: 'sh', t: 'Feilschen im Fake-Markt', zh: '上海科技馆站', cat: ['verrueckt'], v: 1, d: 2, p: 0, w: 3,
      desc: `Unterirdischer Markt an der Metrostation Science & Technology Museum: Taschen, Uhren, Elektronik und Schneider für Maßanzüge.`,
      tip: `Mit einem Fünftel des ersten Preises einsteigen, lächeln, gehen – meist wird man zurückgerufen. Achtung: Markenfälschungen machen beim deutschen Zoll Ärger.` },
    { id: 'sh-acrobatics', c: 'sh', t: 'Akrobatik-Show „ERA“', zh: '上海马戏城', cat: ['kultur', 'nacht'], v: 1, d: 1.5, p: 280, w: 4,
      desc: `Weltklasse-Akrobatik mit dem berühmten Motorrad-Globus, in dem mehrere Fahrer gleichzeitig kreisen.`,
      tip: `Im Shanghai Circus World (Metro Linie 1). Die günstigen Plätze reichen völlig.` },
    { id: 'sh-jingan', c: 'sh', t: 'Jing\'an-Tempel', zh: '静安寺', cat: ['kultur'], v: 0, d: 1, p: 50, w: 1,
      desc: `Goldener Tempel mitten zwischen Wolkenkratzern – der schönste Kontrast der Stadt.`,
      tip: `Gut mit einem Bummel über die West Nanjing Road kombinierbar.` },
    { id: 'sh-museum-east', c: 'sh', t: 'Shanghai Museum East', zh: '上海博物馆东馆', cat: ['kultur'], v: 0, d: 2.5, p: 0, pt: 'frei (mit Reservierung)', w: 1,
      desc: `Das neue Riesenmuseum in Pudong (seit 2024) mit Bronzen, Porzellan und Kalligrafie.`,
      tip: `Online mit Pass reservieren.`,
      book: 'Reservierung mit Pass nötig' },
    { id: 'sh-propaganda', c: 'sh', t: 'Propaganda-Poster-Museum', zh: '宣传画年华艺术中心', cat: ['kultur', 'verrueckt'], v: 1, d: 1, p: 25, w: 3,
      desc: `Private Sammlung von Mao-Plakaten im Keller eines Wohnblocks – skurril und spannend.`,
      tip: `Schwer zu finden: dem Wachmann am Tor einfach die Taxi-Karte zeigen.` },
    { id: 'sh-maglev', c: 'sh', t: 'Transrapid zum Flughafen', zh: '磁浮龙阳路站', cat: ['verrueckt'], v: 1, d: 0.5, p: 50, pt: '50 CNY (40 mit Flugticket)', w: 0,
      desc: `Die deutsche Magnetschwebebahn: 30 km in rund 8 Minuten zum Flughafen Pudong, bis 300 km/h.`,
      tip: `Lohnt sich, wenn euer Flug nach Zhangjiajie ab Pudong (PVG) geht. Abfahrt an der Station Longyang Road.` },
    { id: 'sh-zhujiajiao', c: 'sh', t: 'Wasserstadt Zhujiajiao', zh: '朱家角古镇', cat: ['ausflug', 'kultur', 'chill'], v: 0, d: 5, p: 0, w: 5,
      desc: `Kanäle, Steinbrücken und Gondeln – Venedig auf Chinesisch, mit der Metro Linie 17 erreichbar.`,
      tip: `Unter der Woche viel ruhiger. Bootsfahrt ca. 60–100 CNY.` },
    { id: 'sh-suzhou', c: 'sh', t: 'Tagesausflug Suzhou', zh: '拙政园', cat: ['ausflug', 'kultur'], v: 0, d: 9, p: 120, pt: 'Zug ca. 40 CNY + Gärten ca. 70–90 CNY', w: 5,
      desc: `Rund 30 Min. per Schnellzug: UNESCO-Gärten wie der Garten des bescheidenen Beamten und die Kanalstraße Pingjiang Lu.`,
      tip: `Gartentickets vorab reservieren, am Wochenende sehr voll. Abends zurück und an den Bund.` },
    { id: 'sh-hangzhou', c: 'sh', t: 'Tagesausflug Hangzhou', zh: '杭州西湖', cat: ['ausflug', 'natur'], v: 0, d: 10, p: 150, w: 5,
      desc: `Rund 1 Std. per Schnellzug: der Westsee mit Pagoden, Teeplantagen in Longjing und Bootsfahrten.`,
      tip: `Mit dem Leihrad um den See und Longjing-Tee direkt bei den Bauern probieren.` },
    { id: 'sh-disney', c: 'sh', t: 'Shanghai Disneyland', zh: '上海迪士尼乐园', cat: ['verrueckt', 'ausflug'], v: 1, d: 10, p: 550, pt: 'ca. 475–800 CNY', w: 5,
      desc: `Disney mit der TRON-Achterbahn auf Motorrad-Sitzen – eine der besten Achterbahnen überhaupt.`,
      tip: `Unter der Woche hin, Tickets vorab online. Wartezeiten in der Disney-App.` },

    // ---------- Zhangjiajie ----------
    { id: 'zjj-tianmen', c: 'zjj', t: 'Tianmen-Berg: 999 Stufen zum Himmelstor', zh: '天门山国家森林公园', cat: ['klassiker', 'natur', 'verrueckt'], v: 2, d: 7, p: 288, pt: 'ca. 288 CNY inkl. Bahnen', w: 5,
      desc: `Die berühmte Treppe: 999 Stufen hinauf zum riesigen Felsloch „Himmelstor“. Oben warten Glaswege an der Steilwand und die Straße mit 99 Kurven.`,
      tip: `Route B wählen, wenn ihr die 999 Stufen hochsteigen wollt (30–45 Min., anstrengend). Die obere Seilbahn ist seit Ende 2025 im Umbau, hoch geht's dann über Rolltreppen im Berg – Routen beim Buchen prüfen. Überschuhe für den Glasweg ca. 5 CNY.`,
      book: 'Zeitslot mit Pass vorab buchen' },
    { id: 'zjj-avatar', c: 'zjj', t: 'Avatar-Berge in Yuanjiajie', zh: '袁家界', cat: ['klassiker', 'natur'], v: 1, d: 5, p: 225, pt: 'Parkticket ca. 225 CNY (mehrere Tage gültig)', w: 1,
      desc: `Hunderte Sandsteinsäulen im Nebel – das Vorbild für die schwebenden Hallelujah-Berge in „Avatar“. Hier steht auch der Felsen „Avatar Hallelujah Mountain“.`,
      tip: `Vor 8 Uhr rein, bevor die Reisegruppen kommen. Die Parkbusse sind im Ticket. Am Eingang werden Pass und teils Fingerabdruck geprüft, das Ticket gilt mehrere Tage.`,
      book: 'Parkticket online vorab' },
    { id: 'zjj-bailong', c: 'zjj', t: 'Bailong-Aufzug an der Felswand', zh: '百龙天梯', cat: ['verrueckt'], v: 2, d: 1, p: 70, pt: 'ca. 65–75 CNY pro Fahrt', w: 0,
      desc: `326 m Glasaufzug außen an der Klippe – in unter 2 Minuten aus der Schlucht hinauf nach Yuanjiajie.`,
      tip: `Hoch fahren, runter wandern oder Seilbahn. Zur Stoßzeit 1–2 Std. Wartezeit, deshalb früh.` },
    { id: 'zjj-tianzi', c: 'zjj', t: 'Tianzi-Berg', zh: '天子山', cat: ['natur'], v: 0, d: 3, p: 70, pt: 'Seilbahn ca. 70 CNY pro Fahrt', w: 3,
      desc: `Weite Aussichtspunkte über das Säulenmeer, besonders schön bei Sonnenuntergang oder mit Wolken unter euch.`,
      tip: `Mit dem Parkbus von Yuanjiajie rüber, runter per Seilbahn nach Wulingyuan.` },
    { id: 'zjj-golden-whip', c: 'zjj', t: 'Wanderung am Goldpeitschenbach', zh: '金鞭溪', cat: ['natur', 'chill'], v: 0, d: 3, p: 0, pt: 'im Parkticket', w: 1,
      desc: `7,5 km flacher Weg am Bach zwischen den Felstürmen – entspannt und wunderschön.`,
      tip: `Achtung Makaken: Essen und Plastiktüten wegstecken, die klauen alles.` },
    { id: 'zjj-glass-bridge', c: 'zjj', t: 'Glasbrücke im Grand Canyon', zh: '张家界大峡谷玻璃桥', cat: ['verrueckt', 'natur'], v: 2, d: 4, p: 260, pt: 'ca. 220–330 CNY je nach Paket', w: 1,
      desc: `430 m lange Glasbrücke rund 300 m über der Schlucht. Danach durch den Canyon: Rutschen, Seilrutsche, Bootsfahrt.`,
      tip: `Das Paket mit Zusatzaktivitäten (Seilrutsche, Rutschen) lohnt sich. 1–2 Tage vorher online buchen. Am Abreisetag das Gepäck im Hotel lassen.`,
      book: '1–2 Tage vorher online' },
    { id: 'zjj-bungee', c: 'zjj', t: 'Bungee von der Glasbrücke', zh: '张家界大峡谷玻璃桥', cat: ['verrueckt'], v: 3, d: 2, p: 3000, pt: 'ca. 3.000 CNY', w: 1,
      desc: `Einer der höchsten Bungee-Sprünge der Welt – direkt von der Glasbrücke in die Schlucht.`,
      tip: `Separates Ticket, nicht im Brückenpaket enthalten. Wetterabhängig, Verfügbarkeit vorher klären.` },
    { id: 'zjj-huanglong', c: 'zjj', t: 'Gelber-Drache-Höhle', zh: '黄龙洞', cat: ['natur'], v: 0, d: 2, p: 100, w: 3,
      desc: `Riesige Tropfsteinhöhle mit Bootsfahrt auf einem unterirdischen Fluss, bunt beleuchtet.`,
      tip: `Der Plan B für Regentage, wenn die Berge im Nebel verschwinden.` },
    { id: 'zjj-baofeng', c: 'zjj', t: 'Baofeng-See', zh: '宝峰湖', cat: ['natur', 'chill'], v: 0, d: 2, p: 96, w: 3,
      desc: `Smaragdgrüner Bergsee mit Bootsfahrt zwischen Felswänden, vom Ufer singen Tujia-Sängerinnen.`,
      tip: `Kurz und entspannt, gut nach einem anstrengenden Wandertag.` },
    { id: 'zjj-furong', c: 'zjj', t: 'Furong: Dorf am Wasserfall', zh: '芙蓉镇', cat: ['ausflug', 'kultur'], v: 1, d: 6, p: 100, w: 5,
      desc: `Altes Dorf auf einer Klippe, durch das ein Wasserfall stürzt – abends beleuchtet, wie aus einem Ghibli-Film.`,
      tip: `Ca. 1,5 Std. von Zhangjiajie, als halber Tag oder Abendausflug.` },
    { id: 'zjj-fenghuang', c: 'zjj', t: 'Altstadt Fenghuang', zh: '凤凰古城', cat: ['ausflug', 'kultur'], v: 0, d: 10, p: 0, w: 5,
      desc: `Stelzenhäuser am Fluss, rote Laternen, Nachtleben – eine der schönsten Altstädte Chinas.`,
      tip: `Ca. 3–4 Std. entfernt, am besten mit Übernachtung. Nur, wenn ihr einen Tag mehr habt.` },
    { id: 'zjj-foxshow', c: 'zjj', t: 'Open-Air-Show „Tianmen Fox Fairy“', zh: '天门狐仙', cat: ['kultur', 'nacht'], v: 1, d: 2, p: 240, pt: 'ab ca. 240 CNY', w: 4,
      desc: `Musical-Spektakel mit Hunderten Darstellern unter freiem Himmel am Fuß des Tianmen-Bergs.`,
      tip: `Läuft nur in der Saison (etwa Frühling bis Herbst). Spielplan vorher prüfen.` },
    { id: 'zjj-sanxiaguo', c: 'zjj', t: 'Tujia-Küche: Sanxiaguo', zh: '三下锅', cat: ['essen'], v: 1, d: 1.5, p: 70, w: 4, taxi: false,
      desc: `„Drei in einen Topf“: scharfer Eintopf mit Innereien, Räucherfleisch und Gemüse, das Lokalgericht von Zhangjiajie.`,
      tip: `Hunan-Küche ist mindestens so scharf wie die aus Sichuan. „微辣“ (wēi là) heißt leicht scharf.` },
    { id: 'zjj-xibu', c: 'zjj', t: 'Xibu Street am Abend', zh: '溪布街', cat: ['nacht', 'chill'], v: 0, d: 1.5, p: 0, w: 4,
      desc: `Beleuchtete Fußgängerstraße in Wulingyuan mit Snacks, Bars und Tujia-Volksmusik.`,
      tip: `Perfekt am ersten Abend in Wulingyuan.` },

    // ---------- Chongqing ----------
    { id: 'cq-hongyadong', c: 'cq', t: 'Hongyadong bei Nacht', zh: '洪崖洞', cat: ['klassiker', 'nacht'], v: 1, d: 1.5, p: 0, w: 4,
      desc: `Elf Stockwerke Stelzenhäuser an der Felswand, abends golden beleuchtet – sieht aus wie das Badehaus aus „Chihiros Reise“.`,
      tip: `Den besten Blick habt ihr von der Qiansimen-Brücke gegenüber. Ab 19 Uhr extrem voll.` },
    { id: 'cq-liziba', c: 'cq', t: 'Liziba: Die Bahn durchs Hochhaus', zh: '李子坝轻轨站', cat: ['verrueckt', 'klassiker'], v: 2, d: 1, p: 0, w: 1,
      desc: `Die Monorail-Linie 2 fährt mitten durch ein 19-stöckiges Wohnhaus. Unten gibt es eine Plattform zum Zuschauen.`,
      tip: `Erst selbst mit der Linie 2 durchfahren, dann von unten zusehen. Züge kommen alle paar Minuten.` },
    { id: 'cq-eling', c: 'cq', t: 'Eling Park & Eling Er Chang', zh: '鹅岭二厂', cat: ['chill'], v: 0, d: 2, p: 0, w: 1,
      desc: `Alte Druckerei voller Cafés und Fotospots, daneben ein Park mit Blick über beide Flüsse.`,
      tip: `Nur eine Station von Liziba entfernt – perfekt kombinierbar.` },
    { id: 'cq-kuixing', c: 'cq', t: 'Kuixing-Haus: Erdgeschoss im 22. Stock', zh: '魁星楼', cat: ['verrueckt'], v: 1, d: 0.5, p: 0, w: 3,
      desc: `Chongqing ist so steil, dass hier der 22. Stock ein Ausgang auf Straßenhöhe ist. Die „8D-Stadt“ in einem Gebäude.`,
      tip: `Navis verzweifeln hier regelmäßig. Zeitpuffer einplanen.` },
    { id: 'cq-cableway', c: 'cq', t: 'Jangtse-Seilbahn', zh: '长江索道', cat: ['klassiker'], v: 1, d: 1, p: 30, pt: 'ca. 20–30 CNY einfach', w: 3,
      desc: `Historische Gondel über den Jangtse – Blade-Runner-Gefühl in der Abenddämmerung.`,
      tip: `Wartezeit bis 1–2 Std., unter der Woche am Vormittag am kürzesten. Nur eine Richtung fahren, zurück mit der Metro.` },
    { id: 'cq-raffles', c: 'cq', t: 'Raffles City „The Crystal“', zh: '重庆来福士', cat: ['verrueckt'], v: 1, d: 1.5, p: 160, pt: 'ca. 160 CNY', w: 3,
      desc: `Ein liegender Wolkenkratzer in 250 m Höhe auf vier Türmen, mit Glasboden und Blick auf den Zusammenfluss von Jangtse und Jialing.`,
      tip: `Liegt in Chaotianmen, gut mit Seilbahn oder Bootsfahrt kombinierbar.` },
    { id: 'cq-shibati', c: 'cq', t: 'Shibati: die alte Treppengasse', zh: '十八梯', cat: ['kultur', 'chill'], v: 0, d: 1, p: 0, w: 3,
      desc: `Restaurierte Treppen-Altstadt zwischen Ober- und Unterstadt – Chongqing in Stufen.`,
      tip: `Nah an Jiefangbei, abends beleuchtet.` },
    { id: 'cq-jiefangbei', c: 'cq', t: 'Jiefangbei & Bayi-Snackstraße', zh: '八一好吃街', cat: ['essen', 'nacht'], v: 1, d: 2, p: 60, w: 4,
      desc: `Das Neonzentrum der Stadt mit der Snackgasse Bayi: Spieße, scharfe Kartoffeln, Eis mit Reiskuchen.`,
      tip: `Einfach durchprobieren, die Portionen sind klein und billig.` },
    { id: 'cq-hotpot', c: 'cq', t: 'Original Chongqing-Hotpot', zh: '重庆火锅', cat: ['essen', 'klassiker', 'verrueckt'], v: 2, d: 2, p: 120, pt: 'ca. 80–150 CNY', w: 4, taxi: false,
      desc: `Brodelnder Rindertalg-Topf voller Chili und Sichuanpfeffer. Chongqing gilt als Hauptstadt des Hotpot.`,
      tip: `Wer es milder will, bestellt einen Yuanyang-Topf (鸳鸯锅): halb scharf, halb Brühe. Kalte Sojamilch löscht besser als Bier.` },
    { id: 'cq-dare', c: 'cq', t: 'Mutprobe: Innereien im Hotpot', zh: '毛肚 鸭肠 脑花', cat: ['essen', 'verrueckt'], v: 3, d: 1, p: 60, w: 4, taxi: false,
      desc: `Rinderpansen (Maodu), Entendarm und Schweinehirn – für die Chongqinger das Beste am Hotpot.`,
      tip: `Pansen nach der Regel „七上八下“: 7-mal eintauchen, 8-mal raus, dann ist er perfekt knackig.` },
    { id: 'cq-xiaomian', c: 'cq', t: 'Frühstück: Chongqing Xiaomian', zh: '重庆小面', cat: ['essen'], v: 1, d: 0.5, p: 12, w: 0, taxi: false,
      desc: `Scharfe Nudelsuppe zum Frühstück – die Chongqinger essen sie ab 7 Uhr morgens.`,
      tip: `Kleiner Laden mit Plastikhockern = richtig.` },
    { id: 'cq-ciqikou', c: 'cq', t: 'Altstadt Ciqikou', zh: '磁器口古镇', cat: ['kultur'], v: 0, d: 2.5, p: 0, w: 1,
      desc: `Alte Hafenstadt am Jialing mit Teehäusern, Mahua-Gebäck und Sichuan-Oper.`,
      tip: `Vormittags hin, ab Mittag Gedränge. In den hinteren Seitengassen wird es ruhiger.` },
    { id: 'cq-cruise', c: 'cq', t: 'Nachtfahrt auf zwei Flüssen', zh: '朝天门码头', cat: ['klassiker', 'nacht', 'chill'], v: 0, d: 1.5, p: 150, pt: 'ca. 120–200 CNY', w: 4,
      desc: `Bootsfahrt am Zusammenfluss von Jangtse und Jialing, rundherum die beleuchtete Skyline.`,
      tip: `Ab dem Chaotianmen-Pier. Tickets am selben Tag oder online.` },
    { id: 'cq-nanshan', c: 'cq', t: 'Aussichtspunkt Nanshan Yikeshu', zh: '南山一棵树观景台', cat: ['nacht'], v: 0, d: 2, p: 30, w: 4,
      desc: `Der beste Panoramablick auf die Cyberpunk-Skyline bei Nacht, von den Bergen im Süden.`,
      tip: `Mit DiDi hoch, ca. 30 Min. aus der Innenstadt. Danach Hotpot am Nanshan.` },
    { id: 'cq-graffiti', c: 'cq', t: 'Graffiti-Straße Huangjueping', zh: '黄桷坪涂鸦艺术街', cat: ['kultur', 'chill'], v: 1, d: 1, p: 0, w: 3,
      desc: `Ganze Häuserblocks bunt bemalt, rund um die Kunsthochschule.`,
      tip: `Gut für Fotos, Cafés rund um die Akademie.` },
    { id: 'cq-zoo', c: 'cq', t: 'Pandas im Zoo Chongqing', zh: '重庆动物园', cat: ['chill'], v: 0, d: 2, p: 25, w: 1,
      desc: `Riesen- und Rote Pandas, morgens am aktivsten.`,
      tip: `Ca. 30 Min. per Metro aus der Innenstadt.` },
    { id: 'cq-wulong', c: 'cq', t: 'Wulong Karst (Transformers-Drehort)', zh: '武隆天生三桥', cat: ['ausflug', 'natur'], v: 1, d: 10, p: 200, pt: 'ca. 150–250 CNY inkl. Shuttle', w: 5,
      desc: `Drei gigantische Natursteinbrücken in einer Schlucht, Drehort von „Transformers 4“. Dazu Höhlen und Klammen.`,
      tip: `Per Zug ca. 1–1,5 Std. nach Wulong, dann Bus oder Taxi. Früh starten, das Gelände ist groß.` },
    { id: 'cq-dazu', c: 'cq', t: 'Felsskulpturen von Dazu', zh: '大足石刻', cat: ['ausflug', 'kultur'], v: 0, d: 7, p: 135, w: 5,
      desc: `UNESCO-Welterbe: Tausende buddhistische Reliefs aus dem 9. bis 13. Jahrhundert, darunter ein Buddha mit 1.000 Armen.`,
      tip: `Ca. 1,5 Std. Anfahrt. Die Alternative zu Wulong für Kulturfans.` },
    { id: 'cq-threegorges', c: 'cq', t: 'Kreuzfahrt durch die Drei Schluchten', zh: '长江三峡游轮', cat: ['ausflug', 'natur'], v: 1, d: 72, p: 3000, pt: 'ca. 2.000–6.000 CNY', w: 5, taxi: false,
      desc: `3–4 Tage auf dem Jangtse von Chongqing nach Yichang, durch die berühmten Schluchten.`,
      tip: `Braucht mehrere Tage – nur als Ersatz für eine andere Station oder mit Verlängerung.` },

    // ---------- Überall ----------
    { id: 'any-massage', c: 'any', t: 'Fußmassage', zh: '足疗', cat: ['chill'], v: 0, d: 1.5, p: 150, pt: 'ca. 100–200 CNY', w: 4, taxi: false,
      desc: `Nach 25.000 Schritten am Tag das Beste: 60–90 Min. Fußbad und Massage, oft mit Tee und Snacks.`,
      tip: `Läden mit guten Bewertungen auf Dianping wählen. Kann wehtun – „轻一点“ (qīng yìdiǎn) heißt sanfter.` },
    { id: 'any-bath', c: 'any', t: 'Chinesisches Badehaus', zh: '洗浴中心', cat: ['verrueckt', 'chill'], v: 2, d: 4, p: 200, pt: 'ca. 150–300 CNY', w: 4, taxi: false,
      desc: `Riesige 24-Stunden-Wellnesstempel: Pools, Saunen, Buffet, Massage, Liegesessel mit Kino. Man kann dort sogar übernachten.`,
      tip: `Im Bad ist man nackt (nach Geschlecht getrennt), danach gibt's einen Pyjama. Alles läuft übers Armband, gezahlt wird am Ende.` },
    { id: 'any-ktv', c: 'any', t: 'KTV-Karaoke-Abend', zh: 'KTV', cat: ['verrueckt', 'nacht'], v: 2, d: 3, p: 150, w: 4, taxi: false,
      desc: `Eigener Raum, riesige Boxen, eine Songliste mit erstaunlich vielen deutschen und englischen Liedern. Chinesische Ausgehkultur pur.`,
      tip: `Größere Läden haben Pakete mit Getränken. Unter der Woche billiger.` },
    { id: 'any-baijiu', c: 'any', t: 'Baijiu probieren', zh: '白酒', cat: ['verrueckt', 'essen'], v: 2, d: 1, p: 50, w: 4, taxi: false,
      desc: `Chinas Nationalschnaps mit 40–55 % – riecht nach Ananas und Lösungsmittel. Wird beim Essen aus kleinen Gläsern gekippt.`,
      tip: `„干杯“ (gānbēi) heißt Glas leer. Beim Anstoßen das eigene Glas tiefer halten als das des Älteren.` },
    { id: 'any-hanfu', c: 'any', t: 'Hanfu-Fotoshooting', zh: '汉服', cat: ['verrueckt', 'kultur'], v: 2, d: 3, p: 300, pt: 'ca. 150–500 CNY', w: 1, taxi: false,
      desc: `In historische Gewänder schlüpfen, schminken lassen, Profi-Fotos – ein riesiger Trend bei jungen Chinesen.`,
      tip: `Studios gibt es rund um die Verbotene Stadt, in Ciqikou oder Fenghuang. Ihr werdet garantiert von Locals fotografiert.` },
    { id: 'any-ear', c: 'any', t: 'Ohrenreinigung im Teehaus', zh: '采耳', cat: ['verrueckt'], v: 3, d: 0.5, p: 50, w: 3, taxi: false,
      desc: `Ein Profi mit Stäbchen, Federn und Stimmgabel räumt eure Ohren auf. Eine Tradition aus Sichuan und Chongqing.`,
      tip: `Klingt schräg, ist aber entspannend. Gibt's in Altstädten wie Ciqikou.` },
    { id: 'any-teahouse', c: 'any', t: 'Teehaus besuchen', zh: '茶馆', cat: ['chill', 'kultur'], v: 0, d: 1.5, p: 80, w: 3, taxi: false,
      desc: `Grün-, Oolong- oder Pu-Erh-Tee in Ruhe, oft mit Snacks und Mahjong-Tischen.`,
      tip: `Das Teehaus selbst aussuchen und nie mit Fremden mitgehen, die euch einladen – das ist der Tee-Scam.` },
    { id: 'any-mahjong', c: 'any', t: 'Mahjong mit Locals', zh: '麻将', cat: ['kultur', 'verrueckt'], v: 1, d: 1.5, p: 0, w: 3, taxi: false,
      desc: `In Parks und Teehäusern klappern überall die Steine. Zuschauen ist erlaubt, mitspielen manchmal auch.`,
      tip: `Vorher die Grundregeln lernen. Gespielt wird oft um Geld, also nur um Kleinbeträge!` },
    { id: 'any-cooking', c: 'any', t: 'Dumpling-Kochkurs', zh: '包饺子', cat: ['essen', 'kultur'], v: 0, d: 3, p: 300, w: 3, taxi: false,
      desc: `Teig kneten, füllen, falten – und danach alles aufessen. In Peking und Shanghai gibt es Kurse auf Englisch.`,
      tip: `Auf Trip.com oder Airbnb Experiences suchen.` },
    { id: 'any-bubble', c: 'any', t: 'Milk Tea & Fruchttee', zh: '奶茶', cat: ['essen', 'chill'], v: 0, d: 0.5, p: 20, w: 3, taxi: false,
      desc: `Heytea, Chagee, Mixue an jeder Ecke – mit Käseschaum, Tapioka oder frischen Früchten.`,
      tip: `Beim Zucker „少糖“ (wenig) oder „无糖“ (ohne) wählen. Standard ist sehr süß.` }
  ],

  /* Vorgeschlagener Plan: [Aktivität, Tageszeit] */
  defaultPlan: [
    { city: 'fra', items: [['t-fra-pek', 4]] },
    { city: 'bj', items: [['bj-hutong', 3], ['bj-duck', 4]] },
    { city: 'bj', items: [['bj-tiananmen', 0], ['bj-forbidden', 1], ['bj-jingshan', 3], ['bj-guijie', 4]] },
    { city: 'bj', items: [['bj-mutianyu', 5], ['bj-houhai', 4]] },
    { city: 'bj', items: [['bj-temple-heaven', 0], ['bj-lama', 1], ['bj-summer-palace', 3], ['bj-kungfu', 4]] },
    { city: 'sh', items: [['t-pek-sha', 1], ['sh-nanjing', 3], ['sh-bund', 4], ['sh-rooftop', 4]] },
    { city: 'sh', items: [['sh-yu', 1], ['sh-xiaolongbao', 2], ['sh-french', 3], ['sh-tower', 4]] },
    { city: 'sh', items: [['sh-suzhou', 5], ['sh-cruise', 4]] },
    { city: 'zjj', items: [['sh-maglev', 0], ['t-sha-zjj', 1], ['zjj-sanxiaguo', 4], ['zjj-foxshow', 4]] },
    { city: 'zjj', items: [['zjj-tianmen', 5], ['t-zjj-wly', 4], ['zjj-xibu', 4]] },
    { city: 'zjj', items: [['zjj-bailong', 0], ['zjj-avatar', 1], ['zjj-tianzi', 3], ['any-massage', 4]] },
    { city: 'cq', items: [['zjj-glass-bridge', 1], ['t-zjj-cq', 3], ['cq-hongyadong', 4]] },
    { city: 'cq', items: [['cq-xiaomian', 0], ['cq-liziba', 1], ['cq-eling', 1], ['cq-cableway', 3], ['cq-shibati', 3], ['cq-hotpot', 4]] },
    { city: 'cq', items: [['cq-wulong', 5], ['cq-cruise', 4]] },
    { city: 'fra', items: [['t-cq-fra', 1]] }
  ],

  /* Fahrkarten-Ansicht für die Strecke */
  tickets: {
    't-fra-pek': { from: ['法兰克福', 'Frankfurt (FRA)'], to: ['北京', 'Peking (PEK/PKX)'], label: 'Flug' },
    't-pek-sha': { from: ['北京南', 'Beijing South'], to: ['上海虹桥', 'Shanghai Hongqiao'], label: 'G-Zug' },
    't-sha-zjj': { from: ['上海', 'Hongqiao / Pudong'], to: ['张家界', 'Hehua (DYG)'], label: 'Flug' },
    't-zjj-cq': { from: ['张家界西', 'Zhangjiajie West'], to: ['重庆', 'Ost / Nord / West'], label: 'G-Zug' },
    't-cq-fra': { from: ['重庆', 'Jiangbei (CKG)'], to: ['法兰克福', 'Frankfurt (FRA)'], label: 'Flug, 1 Umstieg' }
  },

  /* Ø Tageshöchstwerte in °C, gerundet */
  weather: {
    bj: [2, 5, 12, 20, 27, 31, 31, 30, 26, 19, 10, 3],
    sh: [8, 10, 14, 20, 25, 28, 32, 32, 28, 23, 17, 11],
    zjj: [9, 11, 16, 22, 27, 30, 33, 33, 28, 22, 16, 11],
    cq: [10, 13, 18, 23, 27, 30, 34, 35, 29, 22, 16, 11]
  },

  prep: [
    { id: 'p-pass', off: -120, t: 'Reisepass prüfen', d: 'Muss mindestens für die ganze Reise gültig sein, besser noch 6 Monate darüber hinaus.' },
    { id: 'p-flug', off: -120, t: 'Gabelflug buchen', d: 'Hin Frankfurt → Peking, zurück Chongqing → Frankfurt. In der Flugsuche „Gabelflug“ oder „Multi-City“ wählen.' },
    { id: 'p-hotel', off: -60, t: 'Hotels buchen', d: 'Für zwei Betten „Twin Room“ (双床房) wählen. Möglichst kostenlos stornierbar.' },
    { id: 'p-inland', off: -45, t: 'Flug Shanghai → Zhangjiajie buchen', d: 'Über Trip.com oder direkt bei der Airline.' },
    { id: 'p-visa', off: -45, t: 'Einreiseregeln checken', d: 'Visumfrei bis 30 Tage gilt laut aktuellem Stand bis 31.12.2026. Bei späterer Reise prüfen, ob verlängert wurde.' },
    { id: 'p-ins', off: -30, t: 'Auslandskrankenversicherung', d: 'Die gesetzliche Kasse zahlt in China nichts. Kostet meist ca. 10–25 € im Jahr.' },
    { id: 'p-alipay', off: -30, t: 'Alipay und WeChat einrichten', d: 'Kreditkarte verknüpfen, Pass verifizieren, mit einem kleinen Betrag testen.' },
    { id: 'p-train', off: -15, t: 'Zugtickets kaufen', d: 'Peking → Shanghai und Zhangjiajie → Chongqing. Der Verkauf startet ca. 15 Tage vorher.' },
    { id: 'p-esim', off: -14, t: 'eSIM oder VPN besorgen', d: 'Sonst gehen Google, WhatsApp und Instagram nicht. Die eSIM vor dem Abflug installieren.' },
    { id: 'p-apps', off: -14, t: 'Apps installieren', d: 'Trip.com, 12306, Amap oder Apple Karten, DiDi, Übersetzer mit Offline-Chinesisch.' },
    { id: 'p-elefand', off: -10, t: 'In Elefand eintragen', d: 'Die Krisenvorsorgeliste des Auswärtigen Amts, damit die Botschaft euch im Notfall erreicht.' },
    { id: 'p-forbidden', off: -7, t: 'Verbotene Stadt und Tiananmen reservieren', d: 'Freischaltung 7 Tage vorher, meist 20 Uhr Pekinger Zeit (14 Uhr deutscher Sommerzeit, 13 Uhr Winterzeit).' },
    { id: 'p-tianmen', off: -7, t: 'Tianmen-Berg buchen', d: 'Zeitslot und Route wählen. Route B = die 999 Stufen hoch.' },
    { id: 'p-zjj', off: -3, t: 'Nationalpark und Glasbrücke buchen', d: 'Auf Trip.com oder Klook, Namen genau wie im Pass.' },
    { id: 'p-arrival', off: -3, t: 'Digitale Arrival Card ausfüllen', d: 'Vorab online, das spart Zeit am Flughafen.' },
    { id: 'p-addr', off: -2, t: 'Hoteladressen auf Chinesisch speichern', d: 'Unter „Tage“ beim Hotel eintragen – dann gibt es dafür eine Taxi-Karte.' },
    { id: 'p-cash', off: -2, t: 'Etwas Bargeld besorgen', d: '500–1.000 CNY als Reserve, z. B. am Automaten der Bank of China am Flughafen.' }
  ],

  packing: [
    'Reisepass (plus Foto davon in der Cloud)',
    'Zwei Kreditkarten (Visa und Mastercard)',
    'Handy, Ladekabel, Kopfhörer',
    'Reiseadapter Typ A/I (Eurostecker passt oft auch so)',
    'Powerbank mit 3C-Logo – oder vor Ort kaufen',
    'Eingelaufene, bequeme Schuhe (999 Stufen!)',
    'Regenjacke oder Poncho für Zhangjiajie',
    'Taschentücher und Feuchttücher',
    'Desinfektionsgel',
    'Reiseapotheke: Durchfall, Magen, Schmerzmittel, Pflaster',
    'Ohrstöpsel und Schlafmaske',
    'Sonnencreme und Sonnenbrille',
    'Kleiner Tagesrucksack',
    'Trinkflasche',
    'Badehose (für das Badehaus)'
  ],

  phrases: [
    ['你好', 'nǐ hǎo', 'Hallo'],
    ['谢谢', 'xièxie', 'Danke'],
    ['多少钱？', 'duōshao qián?', 'Wie viel kostet das?'],
    ['太贵了', 'tài guì le', 'Zu teuer'],
    ['不要，谢谢', 'bú yào, xièxie', 'Nein danke (an Verkäufer und Schlepper)'],
    ['不辣', 'bú là', 'Nicht scharf'],
    ['微辣', 'wēi là', 'Leicht scharf'],
    ['冰的', 'bīng de', 'Kalt, bitte (Bier kommt sonst oft lauwarm)'],
    ['两个人', 'liǎng gè rén', 'Zwei Personen'],
    ['买单', 'mǎi dān', 'Die Rechnung, bitte'],
    ['厕所在哪里？', 'cèsuǒ zài nǎlǐ?', 'Wo ist die Toilette?'],
    ['请带我去这里', 'qǐng dài wǒ qù zhèlǐ', 'Bitte bringen Sie mich hierhin'],
    ['我们是德国人', 'wǒmen shì déguó rén', 'Wir sind Deutsche'],
    ['干杯！', 'gānbēi!', 'Prost! (Glas leer)']
  ],

  tips: [
    { id: 'visum', title: 'Einreise & Visum', html: `
      <p>Deutsche können <strong>bis zu 30 Tage visumfrei</strong> nach China (Tourismus, Business, Familie, Transit). Diese Regel gilt laut aktuellem Stand bis <strong>31.12.2026</strong>. Reist ihr später, kurz vor dem Buchen prüfen, ob sie verlängert wurde.</p>
      <ul>
        <li>Pass mindestens für die ganze Reise gültig, besser 6 Monate darüber hinaus.</li>
        <li>Rückflug und Hotelbuchungen als Screenshot dabeihaben, danach wird an der Grenze manchmal gefragt.</li>
        <li>Die Arrival Card gibt es seit Ende 2025 digital – vorab online ausfüllen.</li>
        <li>Bei der Einreise werden Fingerabdrücke genommen.</li>
        <li>Hotels melden euch automatisch bei der Polizei an. Bei privaten Unterkünften müsst ihr das binnen 24 Std. selbst erledigen.</li>
        <li>Den Pass immer dabeihaben: Er ist Zugticket, Eintrittskarte und Hotel-Check-in in einem.</li>
      </ul>
      <p><a href="https://www.auswaertiges-amt.de/de/ReiseUndSicherheit/chinasicherheit/200466" target="_blank" rel="noopener">Reise- und Sicherheitshinweise des Auswärtigen Amts</a></p>` },
    { id: 'geld', title: 'Geld & Bezahlen', html: `
      <p>In China zahlt man mit dem Handy. Bargeld nimmt fast jeder noch an, Kreditkarten fast niemand außer großen Hotels.</p>
      <ul>
        <li><strong>Alipay</strong> ist die wichtigste App. Visa oder Mastercard verknüpfen, Pass verifizieren – noch in Deutschland. <strong>WeChat Pay</strong> als Backup.</li>
        <li>Bei ausländischen Karten fällt ab ca. 200 CNY pro Zahlung eine kleine Gebühr an (um 3 %). Darunter meist gratis.</li>
        <li>500–1.000 CNY in bar als Reserve. Automaten der Bank of China oder ICBC nehmen meist deutsche Karten.</li>
        <li>Faustregel: 1 € ≈ 8 CNY. Den Kurs könnt ihr unter „Route“ anpassen.</li>
        <li>Trinkgeld ist in China nicht üblich.</li>
      </ul>` },
    { id: 'internet', title: 'Internet & Apps', html: `
      <p>Google (auch Maps und Gmail), WhatsApp, Instagram, YouTube und viele KI-Dienste sind in China gesperrt.</p>
      <ul>
        <li><strong>eSIM mit Roaming-Daten</strong>: Der Datenverkehr läuft über das Ausland, damit funktionieren Google und WhatsApp meistens ohne VPN. Im Hotel-WLAN klappt das nicht.</li>
        <li>Alternativ ein VPN – vor der Reise installieren, im chinesischen App Store gibt es keine.</li>
        <li><strong>Trip.com</strong>: Züge, Flüge, Hotels, Tickets auf Englisch.</li>
        <li><strong>12306</strong>: offizielle Bahn-App mit englischer Version.</li>
        <li><strong>Amap</strong> (Gaode) oder <strong>Apple Karten</strong> fürs Navigieren. Apple nutzt in China Gaode-Daten und funktioniert gut.</li>
        <li><strong>DiDi</strong> fürs Taxi, auch direkt in Alipay.</li>
        <li>Übersetzer mit Offline-Chinesisch und Kamerafunktion für Speisekarten. <strong>Pleco</strong> als Wörterbuch.</li>
        <li>Museen reservieren oft über WeChat-Mini-Programme. WeChat-Konto früh anlegen, die Verifizierung kann dauern.</li>
      </ul>
      <p>Diese Seite funktioniert nach dem ersten Öffnen auch offline. Vor dem Abflug also einmal komplett durchklicken.</p>` },
    { id: 'zug', title: 'Zug fahren', html: `
      <p>Chinas Schnellzüge (G und D) sind pünktlich, sauber und schnell. Für Peking → Shanghai und Zhangjiajie → Chongqing ideal.</p>
      <ul>
        <li>Buchen über die 12306-App oder Trip.com (kleine Gebühr). Verkaufsstart ca. 15 Tage vorher, Trip.com nimmt früher Vormerkungen an.</li>
        <li>Es gibt kein Papierticket: Der Pass ist das Ticket. Foreigner können am Gate den Pass scannen oder die Schalter mit Personal nehmen.</li>
        <li><strong>45–60 Min. vorher</strong> da sein. Es gibt eine Sicherheitskontrolle und die Bahnhöfe sind riesig. Das Gate schließt ca. 5 Min. vor Abfahrt.</li>
        <li>Auf den Bahnhofsnamen achten: Beijing South, Shanghai Hongqiao, Zhangjiajie West, Chongqing Ost, Nord oder West.</li>
        <li>2. Klasse: Sitze A B C | D F. A und F sind Fensterplätze.</li>
        <li>Heißwasser gibt es in jedem Zug – Instantnudeln wie die Locals. Über die 12306-App kann man Essen an den Platz bestellen.</li>
        <li>Wenig Platz für große Koffer. Lieber Rucksack oder Handgepäck-Trolley.</li>
      </ul>
      <p><a href="https://www.12306.cn/en/index.html" target="_blank" rel="noopener">12306 (offizielle Bahn, Englisch)</a></p>` },
    { id: 'flug', title: 'Inlandsflüge', html: `
      <ul>
        <li>Shanghai → Zhangjiajie lieber fliegen: 2,5 Std. statt 7–9 Std. Zug.</li>
        <li><strong>Powerbanks</strong>: Seit Juni 2025 dürfen auf Inlandsflügen nur Powerbanks mit <strong>3C-Logo</strong> mit. Europäische ohne das Logo werden oft abgenommen. Vor Ort günstig kaufen.</li>
        <li>Feuerzeuge sind im Flugzeug verboten.</li>
        <li>2 Std. vorher am Flughafen. Verspätungen sind häufig (Wetter, Luftraum), daher am Flugtag nichts Festes vorher einplanen.</li>
      </ul>` },
    { id: 'hotel', title: 'Hotels', html: `
      <ul>
        <li>Über Trip.com oder Booking buchen. Fast alle Hotels nehmen inzwischen Ausländer auf. Bei kleinen Gästehäusern vorher nachfragen.</li>
        <li>Zu zweit: <strong>Twin Room</strong> (双床房) = zwei Betten. 大床房 = ein großes Doppelbett!</li>
        <li>Gute chinesische Ketten mit fairen Preisen: Atour (亚朵), Ji Hotel (全季), Orange Hotel (桔子). Günstig: Hanting (汉庭). Dazu alle internationalen Ketten.</li>
        <li>Die Hoteladresse auf Chinesisch unter „Tage“ beim Hotel eintragen. Dann zeigt ihr sie dem Taxifahrer als Karte.</li>
        <li>Frühstück ist oft chinesisch: Reisbrei, Baozi, Nudeln. Meistens lecker.</li>
      </ul>
      <p>Die besten Gegenden pro Stadt stehen unter „Route“.</p>` },
    { id: 'essen', title: 'Essen & Trinken', html: `
      <ul>
        <li><strong>Peking</strong>: Peking-Ente, Jianbing, Zhajiangmian, Kupfertopf mit Lamm.</li>
        <li><strong>Shanghai</strong>: Xiaolongbao, Shengjian Bao, Hongshao Rou (geschmortes Schweinefleisch).</li>
        <li><strong>Zhangjiajie</strong>: Hunan-Küche, richtig scharf. Sanxiaguo, Räucherfleisch.</li>
        <li><strong>Chongqing</strong>: Hotpot, Xiaomian, Suanlafen, gegrillter Fisch, Laziji (Chili-Hähnchen).</li>
      </ul>
      <p>Schärfegrade: 不辣 (nicht) – 微辣 (leicht) – 中辣 (mittel) – 特辣 (sehr). „Leicht“ in Chongqing ist für Deutsche oft schon scharf.</p>
      <ul>
        <li>Kein Leitungswasser trinken. Abgekochtes Wasser gibt es überall.</li>
        <li>Oft bestellt man per QR-Code am Tisch. Übersetzer-App mit Kamera hilft.</li>
        <li>Restaurant voller Einheimischer = gutes Zeichen. Bewertungen auf Dianping.</li>
      </ul>` },
    { id: 'knigge', title: 'Alltag & Knigge', html: `
      <ul>
        <li>Toiletten sind oft Hocktoiletten, Papier gibt es selten. Taschentücher dabeihaben.</li>
        <li>Menschenmassen und Drängeln sind normal. Feiertage möglichst meiden.</li>
        <li>Locals fragen gerne nach Selfies mit Ausländern – einfach mitmachen.</li>
        <li>Politische Themen (Taiwan, Tibet, 1989) im Gespräch lieber meiden.</li>
        <li>Stäbchen nicht senkrecht in den Reis stecken.</li>
        <li>E-Roller fahren lautlos über Gehwege. Augen auf!</li>
      </ul>` },
    { id: 'sicherheit', title: 'Sicherheit & Abzocke', html: `
      <p>China ist sehr sicher, überall hängen Kameras. Achtet trotzdem auf diese Klassiker:</p>
      <ul>
        <li><strong>Tee-Scam</strong>: Freundliche „Studenten“ wollen Englisch üben und nehmen euch mit ins Teehaus. Die Rechnung: mehrere Hundert Euro. Typisch an Wangfujing, Tiananmen, Nanjing Road und am Bund. Freundlich ablehnen.</li>
        <li>Schwarztaxis und Rikschas an Bahnhöfen und Sehenswürdigkeiten: DiDi nutzen oder den Preis vorher fest ausmachen.</li>
        <li>Tickets nur über offizielle Kanäle, Trip.com oder Klook kaufen.</li>
        <li>Taschendiebe in vollen Metros und Altstädten.</li>
      </ul>` },
    { id: 'wetter', title: 'Reisezeit & Wetter', html: `
      <p><strong>Beste Zeit: April bis Mai und September bis Oktober.</strong> Meiden: Golden Week (1.–7. Oktober), Tag der Arbeit (1.–5. Mai) und die Wochen um das Chinesische Neujahr. Dann reist halb China und alles ist ausgebucht.</p>
      <ul>
        <li>Sommer: Chongqing und Shanghai oft 35 °C und mehr, schwül, Regenzeit.</li>
        <li>Zhangjiajie: oft neblig und regnerisch. Nebel sieht mystisch aus, kann aber die Sicht nehmen – ein Puffer-Tag hilft.</li>
        <li>Winter: Peking klar und trocken, aber unter 0 °C. In Zhangjiajie schließen bei Eis manchmal Wege und Seilbahnen.</li>
      </ul>
      <div id="weather-table"></div>` },
    { id: 'notfall', title: 'Notfall', html: `
      <ul>
        <li>Polizei <strong>110</strong>, Krankenwagen <strong>120</strong>, Feuerwehr <strong>119</strong>.</li>
        <li>Deutsche Botschaft Peking: <a href="tel:+861085329000">+86 10 8532 9000</a>. Generalkonsulate gibt es u. a. in Shanghai und Chengdu.</li>
        <li><a href="https://krisenvorsorgeliste.diplo.de" target="_blank" rel="noopener">Elefand – Krisenvorsorgeliste</a> des Auswärtigen Amts.</li>
        <li>Unbedingt eine Auslandskrankenversicherung abschließen. Internationale Kliniken gibt es in Peking und Shanghai.</li>
        <li>Apotheke heißt 药店 (yàodiàn).</li>
      </ul>` }
  ]
};
