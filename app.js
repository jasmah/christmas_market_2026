// Christmas Markets 2026 Family Trip Interactive App
// Cities: Munich, Nuremberg (Dec 21 Day Trip), Prague, Vienna

const CITY_CONFIG = {
  all: {
    name: "All 4 Cities Overview",
    center: [49.15, 13.8],
    zoom: 6,
    gmapQuery: "Munich+Nuremberg+Prague+Vienna+Christmas+Markets"
  },
  munich: {
    name: "Munich (Dec 20 & Dec 22 + Dec 21 Eve)",
    center: [48.1385, 11.5680],
    zoom: 14,
    gmapQuery: "Marienplatz+Christkindlmarkt+Munich",
    walkingLoops: [
      {
        title: "Sun Dec 20 Arrival Loop: Ruby Rosi Hotel → Kripperlmarkt → Marienplatz",
        url: "https://www.google.com/maps/dir/?api=1&origin=Ruby+Rosi+Hotel+Munich,Bayerstrasse+21,80335+Muenchen&destination=Marienplatz,80331+Muenchen&waypoints=Karlsplatz+Stachus,Muenchen|St.+Peter+Kripperlmarkt,Muenchen&travelmode=walking"
      },
      {
        title: "Tue Dec 22 Full Loop: Viktualienmarkt → Marienplatz → Residenz (Last Day!) → Medieval Market → Isartor Feuerzangenbowle",
        url: "https://www.google.com/maps/dir/?api=1&origin=Viktualienmarkt,Muenchen&destination=Isartor,Muenchen&waypoints=Marienplatz,Muenchen|Weihnachtsdorf+im+Kaiserhof+der+Residenz,Muenchen|Wittelsbacherplatz,Muenchen&travelmode=walking"
      },
      {
        title: "Mon Dec 21 Evening Walk: Ruby Rosi Hotel → Tollwood Winterfestival (Theresienwiese)",
        url: "https://www.google.com/maps/dir/?api=1&origin=Ruby+Rosi+Hotel+Munich,Bayerstrasse+21,80335+Muenchen&destination=Theresienwiese+Tollwood,Muenchen&travelmode=walking"
      }
    ],
    routeCoords: [
      [48.1398, 11.5588], // Ruby Rosi Hotel
      [48.1391, 11.5658], // Karlsplatz Stachus
      [48.1365, 11.5755], // Kripperlmarkt / St. Peter
      [48.1374, 11.5755], // Marienplatz
      [48.1353, 11.5763], // Viktualienmarkt
      [48.1412, 11.5782], // Residenz Kaiserhof
      [48.1433, 11.5762]  // Wittelsbacherplatz Medieval Market
    ]
  },
  nuremberg: {
    name: "Nuremberg Day Trip (Mon, Dec 21)",
    center: [49.4515, 11.0775],
    zoom: 15,
    gmapQuery: "Nuernberger+Christkindlesmarkt+Hauptmarkt+Nuremberg",
    walkingLoops: [
      {
        title: "Mon Dec 21 Full Nuremberg Spine: Hbf → Handwerkerhof → St. Lorenz → Museumsbrücke → Hauptmarkt → Sister Cities → Kinderweihnacht → Feuerzangenbowle",
        url: "https://www.google.com/maps/dir/?api=1&origin=Nuernberg+Hauptbahnhof&destination=Fleischbruecke,Nuernberg&waypoints=Handwerkerhof+Nuernberg|Lorenzkirche+Nuernberg|Museumsbruecke+Nuernberg|Hauptmarkt+Nuernberg|Schoener+Brunnen+Nuernberg|Rathausplatz+Nuernberg|Hans-Sachs-Platz+Nuernberg&travelmode=walking"
      },
      {
        title: "Train Route: München Hbf → Nürnberg Hbf (ICE High-Speed 1h 05m)",
        url: "https://www.google.com/maps/dir/?api=1&origin=Muenchen+Hauptbahnhof&destination=Nuernberg+Hauptbahnhof&travelmode=transit"
      }
    ],
    routeCoords: [
      [49.4456, 11.0829], // Nürnberg Hbf
      [49.4472, 11.0812], // Handwerkerhof
      [49.4510, 11.0788], // St. Lorenz
      [49.4527, 11.0778], // Museumsbrücke
      [49.4539, 11.0773], // Hauptmarkt
      [49.4545, 11.0770], // Schöner Brunnen
      [49.4552, 11.0777], // Rathausplatz (Sister Cities)
      [49.4536, 11.0795], // Hans-Sachs-Platz (Kinderweihnacht)
      [49.4528, 11.0764]  // Fleischbrücke (Feuerzangenbowle)
    ]
  },
  prague: {
    name: "Prague (Wed, Dec 23 – Fri, Dec 25)",
    center: [50.0845, 14.4185],
    zoom: 14,
    gmapQuery: "Old+Town+Square+Christmas+Market+Prague",
    walkingLoops: [
      {
        title: "Wed Dec 23 Arrival Loop: Almanac X Alcron → Charles Bridge (4:05 PM Gas Lamplighter!) → Old Town Square → Wenceslas Square",
        url: "https://www.google.com/maps/dir/?api=1&origin=Almanac+X+Alcron+Prague,Stepanska+40,Prague&destination=Wenceslas+Square,Prague&waypoints=Charles+Bridge,Prague|Old+Town+Square,Prague&travelmode=walking"
      },
      {
        title: "Wed/Thu Local Market Walk: Almanac X Alcron → Náměstí Míru (Closes Dec 24!)",
        url: "https://www.google.com/maps/dir/?api=1&origin=Almanac+X+Alcron+Prague,Stepanska+40,Prague&destination=Namesti+Miru,Prague&travelmode=walking"
      },
      {
        title: "Thu Dec 24 / Fri Dec 25 Castle-to-Old-Town Walk: Prague Castle → Malá Strana → Kampa Island → Charles Bridge → Old Town Square",
        url: "https://www.google.com/maps/dir/?api=1&origin=St.+George's+Square+Prague+Castle&destination=Old+Town+Square,Prague&waypoints=Na+Kampe,Prague|Charles+Bridge,Prague&travelmode=walking"
      }
    ],
    routeCoords: [
      [50.0755, 14.4370], // Náměstí Míru
      [50.0803, 14.4263], // Almanac X Alcron Prague
      [50.0819, 14.4266], // Wenceslas Square Lower
      [50.0846, 14.4205], // Havel's Market
      [50.0875, 14.4213], // Old Town Square
      [50.0865, 14.4114], // Charles Bridge
      [50.0858, 14.4084], // Kampa Island
      [50.0911, 14.4016]  // Prague Castle (St. George's Square)
    ]
  },
  vienna: {
    name: "Vienna (Sat, Dec 26 – Sun, Dec 27)",
    center: [48.2020, 16.3650],
    zoom: 13,
    gmapQuery: "Rathausplatz+Christkindlmarkt+Vienna",
    walkingLoops: [
      {
        title: "🚨 SAT DEC 26 URGENT FINAL-DAY LOOP: Stephansplatz (closes 7 PM) → Graben → Maria-Theresien-Platz (closes 7 PM) → Rathausplatz (closes 10 PM)",
        url: "https://www.google.com/maps/dir/?api=1&origin=Stephansplatz,Vienna&destination=Rathausplatz,Vienna&waypoints=Graben,Vienna|Hofburg,Vienna|Maria-Theresien-Platz,Vienna&travelmode=walking"
      },
      {
        title: "SUN DEC 27 IMPERIAL LOOP: Novotel Wien Hbf → Belvedere Palace Market (11 AM–5 PM) → Schönbrunn Palace (until 7 PM) → Prater Riesenradplatz (until 10 PM)",
        url: "https://www.google.com/maps/dir/?api=1&origin=Novotel+Wien+Hauptbahnhof,Canettistrasse+6,1100+Wien&destination=Riesenradplatz,1020+Wien&waypoints=Upper+Belvedere,Wien|Schoenbrunn+Palace,Wien&travelmode=transit"
      },
      {
        title: "Quick U1 Metro Hop: Novotel Wien Hbf → Stephansplatz (6 mins)",
        url: "https://www.google.com/maps/dir/?api=1&origin=Novotel+Wien+Hauptbahnhof,Canettistrasse+6,1100+Wien&destination=Stephansplatz,1010+Wien&travelmode=transit"
      }
    ],
    routeCoords: [
      [48.2085, 16.3732], // Stephansplatz
      [48.2088, 16.3694], // Graben / Kohlmarkt
      [48.2045, 16.3607], // Maria-Theresien-Platz
      [48.2108, 16.3573]  // Rathausplatz
    ]
  }
};

const POIS = [
  // MUNICH
  {
    id: "muc-hotel",
    city: "munich",
    name: "Ruby Rosi Hotel Munich by IHG",
    type: "hotel",
    typeLabel: "Hotel Base",
    coords: [48.1398, 11.5588],
    dates: "Check-in Sun Dec 20 – Check-out Wed Dec 23",
    hours: "Bayerstraße 21, 80335 München (Across from Hauptbahnhof)",
    alert: "2-min walk to München Hbf for Mon Dec 21 Nuremberg ICE train",
    gmapSearch: "Ruby+Rosi+Hotel+Munich+Bayerstrasse+21",
    dirFromHotel: "https://www.google.com/maps/search/?api=1&query=Ruby+Rosi+Hotel+Munich+Bayerstrasse+21"
  },
  {
    id: "muc-marienplatz",
    city: "munich",
    name: "Münchner Christkindlmarkt (Marienplatz)",
    type: "market",
    typeLabel: "Flagship Market",
    coords: [48.1374, 11.5755],
    dates: "Nov 20 – Dec 24, 2026",
    hours: "Mon–Sat 10:00 AM – 9:00 PM | Sun 10:00 AM – 8:00 PM",
    alert: "Live Rathaus Balcony Advent music at 5:30 PM on Sun Dec 20 & Tue Dec 22!",
    gmapSearch: "Christkindlmarkt+Marienplatz+Munich",
    dirFromHotel: "https://www.google.com/maps/dir/?api=1&origin=Ruby+Rosi+Hotel+Munich&destination=Marienplatz+Munich&travelmode=walking"
  },
  {
    id: "muc-residenz",
    city: "munich",
    name: "Weihnachtsdorf im Kaiserhof der Residenz",
    type: "market",
    typeLabel: "🚨 Closes Dec 22",
    coords: [48.1412, 11.5782],
    dates: "Nov 16 – Dec 22, 2026 (FINAL DAY TUE DEC 22!)",
    hours: "Daily 11:00 AM – 9:00 PM",
    alert: "CRITICAL: Closes permanently for the season on Tuesday, Dec 22 at 9:00 PM!",
    gmapSearch: "Weihnachtsdorf+im+Kaiserhof+der+Residenz+Munich",
    dirFromHotel: "https://www.google.com/maps/dir/?api=1&origin=Ruby+Rosi+Hotel+Munich&destination=Weihnachtsdorf+im+Kaiserhof+der+Residenz+Munich&travelmode=transit"
  },
  {
    id: "muc-medieval",
    city: "munich",
    name: "Mittelaltermarkt (Wittelsbacherplatz)",
    type: "market",
    typeLabel: "Medieval Market",
    coords: [48.1433, 11.5762],
    dates: "Nov 20 – Dec 23, 2026",
    hours: "Daily 11:00 AM – 9:00 PM",
    alert: "3-min walk from Residenz! Famous for Drachenblut hot mead & Feuerzangenbowle",
    gmapSearch: "Mittelaltermarkt+Wittelsbacherplatz+Munich",
    dirFromHotel: "https://www.google.com/maps/dir/?api=1&origin=Ruby+Rosi+Hotel+Munich&destination=Wittelsbacherplatz+Munich&travelmode=transit"
  },
  {
    id: "muc-tollwood",
    city: "munich",
    name: "Tollwood Winterfestival (Theresienwiese)",
    type: "market",
    typeLabel: "Heated Tents",
    coords: [48.1342, 11.5497],
    dates: "Nov 24 – Dec 23, 2026",
    hours: "Mon–Fri from 2:00 PM | Sat–Sun from 11:00 AM – ~10:30 PM",
    alert: "12-min walk or 1 stop (U4/U5) from Ruby Rosi Hotel—ideal after Nuremberg on Dec 21!",
    gmapSearch: "Tollwood+Winterfestival+Theresienwiese+Munich",
    dirFromHotel: "https://www.google.com/maps/dir/?api=1&origin=Ruby+Rosi+Hotel+Munich&destination=Theresienwiese+Munich&travelmode=walking"
  },
  {
    id: "muc-kripperl",
    city: "munich",
    name: "Kripperlmarkt & Rindermarkt Sternenplatzl",
    type: "market",
    typeLabel: "Nativity & Chalets",
    coords: [48.1362, 11.5746],
    dates: "Nov 20 – Dec 24, 2026",
    hours: "Mon–Sat 10:00 AM – 9:00 PM | Sun 10:00 AM – 8:00 PM",
    alert: "Right next to St. Peter's Church (climb Alter Peter tower for best view!)",
    gmapSearch: "Rindermarkt+Munich",
    dirFromHotel: "https://www.google.com/maps/dir/?api=1&origin=Ruby+Rosi+Hotel+Munich&destination=Rindermarkt+Munich&travelmode=walking"
  },
  {
    id: "muc-isartor",
    city: "munich",
    name: "Münchner Feuerzangenbowle at Isartor",
    type: "market",
    typeLabel: "Giant Cauldron",
    coords: [48.1352, 11.5820],
    dates: "Nov 23, 2026 – Jan 6, 2027",
    hours: "Daily 11:00 AM – 10:00 PM",
    alert: "Massive steaming cauldron of flaming rum-soaked sugarcone mulled wine",
    gmapSearch: "Muenchner+Feuerzangenbowle+Isartor",
    dirFromHotel: "https://www.google.com/maps/dir/?api=1&origin=Marienplatz+Munich&destination=Isartor+Munich&travelmode=walking"
  },
  {
    id: "muc-sendlinger",
    city: "munich",
    name: "Sendlinger Tor Christkindlmarkt",
    type: "market",
    typeLabel: "🚨 Closes Dec 22",
    coords: [48.1340, 11.5676],
    dates: "Nov 20 – Dec 22, 2026 (Closes Tue Dec 22!)",
    hours: "Daily 10:30 AM – 9:30 PM",
    alert: "Historic medieval gate market 10 mins from Ruby Rosi Hotel; closes Dec 22!",
    gmapSearch: "Sendlinger+Tor+Munich",
    dirFromHotel: "https://www.google.com/maps/dir/?api=1&origin=Ruby+Rosi+Hotel+Munich&destination=Sendlinger+Tor+Munich&travelmode=walking"
  },

  // NUREMBERG
  {
    id: "nue-hbf",
    city: "nuremberg",
    name: "Nürnberg Hauptbahnhof (Train Arrival)",
    type: "transit",
    typeLabel: "ICE Rail Hub",
    coords: [49.4456, 11.0829],
    dates: "Mon, Dec 21 Day Trip",
    hours: "1 hr 05 min nonstop ICE from München Hbf",
    alert: "Cross straight north through Frauentor gate into Handwerkerhof!",
    gmapSearch: "Nuernberg+Hauptbahnhof",
    dirFromHotel: "https://www.google.com/maps/dir/?api=1&origin=Muenchen+Hauptbahnhof&destination=Nuernberg+Hauptbahnhof&travelmode=transit"
  },
  {
    id: "nue-handwerkerhof",
    city: "nuremberg",
    name: "Handwerkerhof Nürnberg (Artisans' Yard)",
    type: "market",
    typeLabel: "Stop 1 (10:00 AM)",
    coords: [49.4472, 11.0812],
    dates: "Nov 27 – Dec 23, 2026",
    hours: "Crafts 10:00 AM – 3:30 PM | Taverns open late",
    alert: "Visit FIRST at 10:00 AM! Artisan craft shops close around 3:30 PM.",
    gmapSearch: "Handwerkerhof+Nuernberg",
    dirFromHotel: "https://www.google.com/maps/dir/?api=1&origin=Nuernberg+Hauptbahnhof&destination=Handwerkerhof+Nuernberg&travelmode=walking"
  },
  {
    id: "nue-hauptmarkt",
    city: "nuremberg",
    name: "Nürnberger Christkindlesmarkt (Hauptmarkt)",
    type: "market",
    typeLabel: "World Famous",
    coords: [49.4539, 11.0773],
    dates: "Nov 27 – Dec 24, 2026",
    hours: "Daily 10:00 AM – 9:00 PM",
    alert: "Watch Frauenkirche Männleinlaufen clock at 12:00 Noon sharp & spin Schöner Brunnen brass ring!",
    gmapSearch: "Nuernberger+Christkindlesmarkt+Hauptmarkt",
    dirFromHotel: "https://www.google.com/maps/dir/?api=1&origin=Nuernberg+Hauptbahnhof&destination=Hauptmarkt+Nuernberg&travelmode=walking"
  },
  {
    id: "nue-sister",
    city: "nuremberg",
    name: "Markt der Partnerstädte (Sister Cities Market)",
    type: "market",
    typeLabel: "International Stalls",
    coords: [49.4552, 11.0777],
    dates: "Nov 27 – Dec 23, 2026",
    hours: "Daily 10:00 AM – 9:00 PM",
    alert: "Located on Rathausplatz right behind Schöner Brunnen (includes Glasgow Scottish booth!)",
    gmapSearch: "Rathausplatz+Nuernberg",
    dirFromHotel: "https://www.google.com/maps/dir/?api=1&origin=Hauptmarkt+Nuernberg&destination=Rathausplatz+Nuernberg&travelmode=walking"
  },
  {
    id: "nue-kinder",
    city: "nuremberg",
    name: "Kinderweihnacht (Hans-Sachs-Platz)",
    type: "market",
    typeLabel: "Carousel & Stagecoach",
    coords: [49.4536, 11.0795],
    dates: "Nov 27 – Dec 24, 2026",
    hours: "Daily 10:00 AM – 9:00 PM",
    alert: "2-min walk east of Hauptmarkt; vintage 2-tier carousel & yellow horse-drawn Postkutsche",
    gmapSearch: "Hans-Sachs-Platz+Nuernberg",
    dirFromHotel: "https://www.google.com/maps/dir/?api=1&origin=Hauptmarkt+Nuernberg&destination=Hans-Sachs-Platz+Nuernberg&travelmode=walking"
  },
  {
    id: "nue-feuer",
    city: "nuremberg",
    name: "World's Largest Feuerzangenbowle (Fleischbrücke)",
    type: "market",
    typeLabel: "3.4m Giant Cauldron",
    coords: [49.4528, 11.0764],
    dates: "Nov 27 – Dec 31, 2026",
    hours: "Daily 10:00 AM – 9:30 PM",
    alert: "Right on the Pegnitz River bridge—perfect final warm drink before walking back to Hbf!",
    gmapSearch: "Fleischbruecke+Nuernberg",
    dirFromHotel: "https://www.google.com/maps/dir/?api=1&origin=Hauptmarkt+Nuernberg&destination=Fleischbruecke+Nuernberg&travelmode=walking"
  },

  // PRAGUE
  {
    id: "prg-hotel",
    city: "prague",
    name: "Almanac X Alcron Prague",
    type: "hotel",
    typeLabel: "5★ Art Deco Base",
    coords: [50.0803, 14.4263],
    dates: "Check-in Wed Dec 23 – Check-out Sat Dec 26",
    hours: "Štěpánská 40, 110 00 Nové Město (Steps from Wenceslas Square)",
    alert: "Walkable to every major square when trams reduce frequency on Christmas Eve!",
    gmapSearch: "Almanac+X+Alcron+Prague",
    dirFromHotel: "https://www.google.com/maps/search/?api=1&query=Almanac+X+Alcron+Prague"
  },
  {
    id: "prg-oldtown",
    city: "prague",
    name: "Old Town Square Market (Staroměstské náměstí)",
    type: "market",
    typeLabel: "Open All Holidays",
    coords: [50.0875, 14.4213],
    dates: "Nov 28, 2026 – Jan 6, 2027",
    hours: "Daily 10:00 AM – 10:00 PM (Food huts until midnight)",
    alert: "Tree light show every hour at :30 (4:30–9:30 PM) + Live Czech Christmas Mass Dec 24 at 9:00 PM!",
    gmapSearch: "Old+Town+Square+Christmas+Market+Prague",
    dirFromHotel: "https://www.google.com/maps/dir/?api=1&origin=Almanac+X+Alcron+Prague&destination=Old+Town+Square+Prague&travelmode=walking"
  },
  {
    id: "prg-wenceslas",
    city: "prague",
    name: "Wenceslas Square Market (Václavské náměstí)",
    type: "market",
    typeLabel: "Steps from Hotel",
    coords: [50.0819, 14.4266],
    dates: "Nov 28, 2026 – Jan 6, 2027",
    hours: "Daily 10:00 AM – 10:00 PM (Food huts until midnight)",
    alert: "2-min walk from Almanac X Alcron; blacksmith demonstrations & late-night Klobása",
    gmapSearch: "Wenceslas+Square+Prague",
    dirFromHotel: "https://www.google.com/maps/dir/?api=1&origin=Almanac+X+Alcron+Prague&destination=Wenceslas+Square+Prague&travelmode=walking"
  },
  {
    id: "prg-miru",
    city: "prague",
    name: "Náměstí Míru (Peace Square Local Market)",
    type: "market",
    typeLabel: "🚨 Closes Dec 24",
    coords: [50.0755, 14.4370],
    dates: "Nov 20 – Dec 24, 2026 (Closes Thu Dec 24!)",
    hours: "Daily 10:00 AM – 8:00 PM",
    alert: "Prague locals' favorite market in Vinohrady (25–30% cheaper); visit Wed Dec 23 or Thu morning Dec 24!",
    gmapSearch: "Namesti+Miru+Prague",
    dirFromHotel: "https://www.google.com/maps/dir/?api=1&origin=Almanac+X+Alcron+Prague&destination=Namesti+Miru+Prague&travelmode=walking"
  },
  {
    id: "prg-castle",
    city: "prague",
    name: "Prague Castle Market (St. George's Square)",
    type: "market",
    typeLabel: "Open Dec 24 & 25",
    coords: [50.0911, 14.4016],
    dates: "Late Nov 2026 – Jan 2, 2027",
    hours: "Dec 23: 9 AM–6 PM | Dec 24: 10 AM–4 PM | Dec 25: 10 AM–6 PM",
    alert: "Take Tram 22 up to Pražský hrad, then walk downhill through Malá Strana & Charles Bridge!",
    gmapSearch: "St.+George's+Square+Prague+Castle",
    dirFromHotel: "https://www.google.com/maps/dir/?api=1&origin=Almanac+X+Alcron+Prague&destination=St.+George's+Square+Prague+Castle&travelmode=transit"
  },
  {
    id: "prg-bridge",
    city: "prague",
    name: "Charles Bridge & Kampa Island Market (Na Kampě)",
    type: "landmark",
    typeLabel: "🚨 Dec 23 Lamp Lighter",
    coords: [50.0865, 14.4114],
    dates: "Gas Lamplighter Final Day: Wed, Dec 23 at 4:05 PM",
    hours: "Kampa Market: Daily 10:00 AM – 8:00 PM",
    alert: "CRITICAL: Wed Dec 23 (4:05–4:15 PM) is the FINAL DAY the historic gas-lamp lighter walks Charles Bridge!",
    gmapSearch: "Charles+Bridge+Prague",
    dirFromHotel: "https://www.google.com/maps/dir/?api=1&origin=Almanac+X+Alcron+Prague&destination=Charles+Bridge+Prague&travelmode=walking"
  },

  // VIENNA
  {
    id: "vie-hotel",
    city: "vienna",
    name: "Novotel Wien Hauptbahnhof",
    type: "hotel",
    typeLabel: "Hotel Base",
    coords: [48.1846, 16.3782],
    dates: "Check-in Sat Dec 26 – Check-out Mon Dec 28",
    hours: "Canettistraße 6, 1100 Wien (Right outside Wien Hbf exit)",
    alert: "Drop bags in 3 mins on Sat Dec 26 and take U1 Metro 3 stops (6 mins) to Stephansplatz!",
    gmapSearch: "Novotel+Wien+Hauptbahnhof",
    dirFromHotel: "https://www.google.com/maps/search/?api=1&query=Novotel+Wien+Hauptbahnhof"
  },
  {
    id: "vie-stephansplatz",
    city: "vienna",
    name: "Stephansplatz Christmas Market (St. Stephen's Cathedral)",
    type: "market",
    typeLabel: "🚨 Closes Sat Dec 26 (7 PM)",
    coords: [48.2085, 16.3732],
    dates: "Nov 6 – Dec 26, 2026 (FINAL DAY SAT DEC 26!)",
    hours: "Sat Dec 26 Final Day: 11:00 AM – 7:00 PM (CLOSED Sun Dec 27!)",
    alert: "STOP #1 on Sat Dec 26! Closes permanently at 7:00 PM on Saturday, Dec 26.",
    gmapSearch: "Stephansplatz+Vienna",
    dirFromHotel: "https://www.google.com/maps/dir/?api=1&origin=Novotel+Wien+Hauptbahnhof&destination=Stephansplatz+Vienna&travelmode=transit"
  },
  {
    id: "vie-mariatheresien",
    city: "vienna",
    name: "Weihnachtsdorf Maria-Theresien-Platz",
    type: "market",
    typeLabel: "🚨 Closes Sat Dec 26 (7 PM)",
    coords: [48.2045, 16.3607],
    dates: "Nov 20 – Dec 26, 2026 (FINAL DAY SAT DEC 26!)",
    hours: "Sat Dec 26 Final Day: 11:00 AM – 7:00 PM (CLOSED Sun Dec 27!)",
    alert: "STOP #2 on Sat Dec 26! Framed by twin Imperial Museums; closes permanently at 7:00 PM Dec 26.",
    gmapSearch: "Maria-Theresien-Platz+Vienna",
    dirFromHotel: "https://www.google.com/maps/dir/?api=1&origin=Stephansplatz+Vienna&destination=Maria-Theresien-Platz+Vienna&travelmode=walking"
  },
  {
    id: "vie-rathaus",
    city: "vienna",
    name: "Wiener Christkindlmarkt (Rathausplatz)",
    type: "market",
    typeLabel: "🚨 Closes Sat Dec 26 (10 PM)",
    coords: [48.2108, 16.3573],
    dates: "Nov 13 – Dec 26, 2026 (FINAL DAY SAT DEC 26!)",
    hours: "Sat Dec 26 Final Day: 10:00 AM – 10:00 PM (Stalls CLOSED Dec 27; Ice Dream stays open)",
    alert: "STOP #3 on Sat Dec 26! Spend Saturday evening until 10:00 PM here (Tree of Hearts & 97 stalls close tonight!).",
    gmapSearch: "Wiener+Christkindlmarkt+Rathausplatz+Vienna",
    dirFromHotel: "https://www.google.com/maps/dir/?api=1&origin=Maria-Theresien-Platz+Vienna&destination=Rathausplatz+Vienna&travelmode=walking"
  },
  {
    id: "vie-belvedere",
    city: "vienna",
    name: "Belvedere Palace K&K Market",
    type: "market",
    typeLabel: "✅ Open Sun Dec 27",
    coords: [48.1915, 16.3809],
    dates: "Nov 20 – Dec 31, 2026",
    hours: "Dec 26 & Sun Dec 27 Holiday Hours: 11:00 AM – 5:00 PM",
    alert: "STOP #1 on Sun Dec 27 (11:00 AM)! Only a 10-minute walk from Novotel Wien Hbf; note 5:00 PM closing!",
    gmapSearch: "Upper+Belvedere+Vienna",
    dirFromHotel: "https://www.google.com/maps/dir/?api=1&origin=Novotel+Wien+Hauptbahnhof&destination=Upper+Belvedere+Vienna&travelmode=walking"
  },
  {
    id: "vie-schoenbrunn",
    city: "vienna",
    name: "Schönbrunn Palace Christmas & New Year Market",
    type: "market",
    typeLabel: "✅ Open Sun Dec 27",
    coords: [48.1858, 16.3128],
    dates: "Nov 6, 2026 – Jan 6, 2027",
    hours: "Dec 25 – Jan 6: Daily 10:00 AM – 7:00 PM",
    alert: "STOP #2 on Sun Dec 27 (2:30–6:30 PM)! Walk up to the Gloriette before 3:45 PM sunset.",
    gmapSearch: "Schoenbrunn+Palace+Vienna",
    dirFromHotel: "https://www.google.com/maps/dir/?api=1&origin=Upper+Belvedere+Vienna&destination=Schoenbrunn+Palace+Vienna&travelmode=transit"
  },
  {
    id: "vie-prater",
    city: "vienna",
    name: "Wintermarkt am Riesenradplatz (Prater)",
    type: "market",
    typeLabel: "✅ Open Sun Dec 27 (10 PM)",
    coords: [48.2167, 16.3959],
    dates: "Nov 20, 2026 – Jan 6, 2027",
    hours: "Sun Dec 27: 11:00 AM – 10:00 PM (Live Music at 7:00 PM)",
    alert: "STOP #3 on Sun Dec 27 (7:00–10:00 PM)! Under the 1897 Giant Ferris Wheel with live music.",
    gmapSearch: "Riesenradplatz+Prater+Vienna",
    dirFromHotel: "https://www.google.com/maps/dir/?api=1&origin=Schoenbrunn+Palace+Vienna&destination=Riesenradplatz+Vienna&travelmode=transit"
  }
];

const CHECKLIST_ITEMS = [
  { id: "chk-1", city: "Munich", title: "Rahmfleck at Marienplatz", desc: "Bavarian wood-fired flatbread topped with sour cream, bacon & chives." },
  { id: "chk-2", city: "Munich", title: "5:30 PM Rathaus Balcony Music", desc: "Stand in Marienplatz (Sun Dec 20 or Tue Dec 22) for live Alpine brass & choir music." },
  { id: "chk-3", city: "Munich", title: "Residenz Village Before Dec 22 Close", desc: "Visit Kaiserhof der Residenz on Tuesday Dec 22 (its final day of 2026!)." },
  { id: "chk-4", city: "Munich", title: "Drachenblut at Medieval Market", desc: "Hot spiced cherry-and-honey mead in a clay goblet at Wittelsbacherplatz." },
  { id: "chk-5", city: "Nuremberg", title: "Drei im Weggla", desc: "Three marjoram-seasoned Nürnberger sausages in a crusty roll with mustard." },
  { id: "chk-6", city: "Nuremberg", title: "Original Elisenlebkuchen", desc: "Flourless nut-rich gingerbread baked on thin wafers (Wicklein or Lebkuchen-Schmidt)." },
  { id: "chk-7", city: "Nuremberg", title: "Heidelbeer-Glühwein", desc: "Nuremberg's signature blueberry mulled wine at Hauptmarkt." },
  { id: "chk-8", city: "Nuremberg", title: "Spin the Schöner Brunnen Brass Ring", desc: "Spin the seamless brass ring 3 times for luck + watch 12:00 PM Männleinlaufen clock." },
  { id: "chk-9", city: "Nuremberg", title: "Zwetschgenmännla Souvenir", desc: "Traditional handmade chimney-sweep or figure crafted from dried prunes & walnuts." },
  { id: "chk-10", city: "Prague", title: "Charles Bridge Gas Lamplighter (Dec 23)", desc: "Catch the final performance of the season on Wed, Dec 23 around 4:05 PM!" },
  { id: "chk-11", city: "Prague", title: "Svařák & Hot Medovina", desc: "Czech citrus-spiced mulled wine and hot honey mead on Old Town Square." },
  { id: "chk-12", city: "Prague", title: "Bramboráky & Charcoal-Spit Trdelník", desc: "Crispy garlic-marjoram potato pancakes & piping-hot cinnamon walnut chimney cake." },
  { id: "chk-13", city: "Prague", title: "Hourly Tree Light Show (:30)", desc: "Watch the choreographed Old Town Square tree light show from the viewing bridge." },
  { id: "chk-14", city: "Vienna", title: "Sat Dec 26 Triple Market Blitz", desc: "Hit Stephansplatz & Maria-Theresien-Platz before 7 PM, then Rathausplatz until 10 PM!" },
  { id: "chk-15", city: "Vienna", title: "Käsekrainer & Maroni", desc: "Cheese-stuffed smoked sausage & hot roasted chestnuts in a two-pocket paper cone." },
  { id: "chk-16", city: "Vienna", title: "Kaiserschmarren at Belvedere / Schönbrunn", desc: "Fluffy shredded caramelized emperor's pancake with warm plum compote on Sun Dec 27." }
];

let map;
let markersLayer;
let routeLayer;
let currentCity = "all";
let currentMapMode = "leaflet";

document.addEventListener("DOMContentLoaded", () => {
  initCountdown();
  initMap();
  renderCitySidebar("all");
  initDayFilters();
  initPfandCalculator();
  initChecklist();
});

// 1. Countdown Timer to Dec 20, 2026
function initCountdown() {
  const target = new Date("2026-12-20T08:00:00").getTime();
  const update = () => {
    const now = Date.now();
    const diff = Math.max(0, target - now);
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const mins = Math.floor((diff / (1000 * 60)) % 60);
    const elDays = document.getElementById("cd-days");
    const elHours = document.getElementById("cd-hours");
    const elMins = document.getElementById("cd-mins");
    if (elDays) elDays.textContent = days;
    if (elHours) elHours.textContent = hours;
    if (elMins) elMins.textContent = mins;
  };
  update();
  setInterval(update, 30000);
}

// 2. Interactive Leaflet + Google Map Hub
function initMap() {
  const mapEl = document.getElementById("leaflet-map");
  if (!mapEl || typeof L === "undefined") return;

  map = L.map("leaflet-map").setView(CITY_CONFIG.all.center, CITY_CONFIG.all.zoom);

  const osmLayer = L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    maxZoom: 19
  });

  const esriStreetLayer = L.tileLayer(
    "https://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}",
    {
      attribution: "Tiles &copy; Esri",
      maxZoom: 19
    }
  );

  const esriSatLayer = L.tileLayer(
    "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}",
    {
      attribution: "Tiles &copy; Esri",
      maxZoom: 19
    }
  );

  osmLayer.addTo(map);
  L.control.layers(
    {
      "🗺️ Street Map (OpenStreetMap)": osmLayer,
      "🏙️ Detailed Atlas (Esri)": esriStreetLayer,
      "🛰️ Satellite View": esriSatLayer
    },
    null,
    { position: "topright" }
  ).addTo(map);

  markersLayer = L.layerGroup().addTo(map);
  routeLayer = L.layerGroup().addTo(map);

  updateMapMarkers("all");

  // City filter tabs
  document.querySelectorAll(".city-tab-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      document.querySelectorAll(".city-tab-btn").forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      const city = btn.getAttribute("data-city");
      currentCity = city;
      renderCitySidebar(city);
      updateMapMarkers(city);
      updateGoogleMapEmbed(CITY_CONFIG[city].gmapQuery);
    });
  });

  // Map mode toggle (Leaflet vs Embedded Google Map)
  document.querySelectorAll(".map-toggle-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      document.querySelectorAll(".map-toggle-btn").forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      const mode = btn.getAttribute("data-mode");
      switchMapMode(mode);
    });
  });
}

function switchMapMode(mode) {
  currentMapMode = mode;
  const leafletEl = document.getElementById("leaflet-map");
  const gmapEl = document.getElementById("gmap-frame-container");
  if (mode === "gmap") {
    leafletEl.style.display = "none";
    gmapEl.style.display = "block";
  } else {
    leafletEl.style.display = "block";
    gmapEl.style.display = "none";
    if (map) {
      setTimeout(() => map.invalidateSize(), 100);
    }
  }
}

function updateGoogleMapEmbed(query) {
  const iframe = document.getElementById("gmap-iframe");
  if (iframe) {
    iframe.src = `https://www.google.com/maps?q=${encodeURIComponent(query.replace(/\+/g, " "))}&output=embed`;
  }
}

function getMarkerColor(type) {
  switch (type) {
    case "hotel": return "#1d4ed8";
    case "transit": return "#d97706";
    case "landmark": return "#15803d";
    default: return "#9b2226";
  }
}

function updateMapMarkers(city) {
  if (!map || !markersLayer || !routeLayer) return;
  markersLayer.clearLayers();
  routeLayer.clearLayers();

  const filtered = city === "all" ? POIS : POIS.filter((p) => p.city === city);
  const bounds = [];

  filtered.forEach((poi) => {
    const color = getMarkerColor(poi.type);
    const iconHtml = `<div style="
      background:${color};
      color:#fff;
      width:28px;
      height:28px;
      border-radius:50%;
      border:3px solid #fff;
      box-shadow:0 2px 8px rgba(0,0,0,0.35);
      display:flex;
      align-items:center;
      justify-content:center;
      font-size:13px;
      font-weight:bold;
    ">${poi.type === "hotel" ? "🏨" : poi.type === "transit" ? "🚆" : "🎄"}</div>`;

    const customIcon = L.divIcon({
      html: iconHtml,
      className: "custom-map-pin",
      iconSize: [28, 28],
      iconAnchor: [14, 14],
      popupAnchor: [0, -14]
    });

    const marker = L.marker(poi.coords, { icon: customIcon });
    marker.bindPopup(`
      <div style="min-width:210px;font-family:'Inter',sans-serif;">
        <div style="font-size:11px;font-weight:700;color:${color};text-transform:uppercase;margin-bottom:2px;">${poi.typeLabel}</div>
        <div style="font-size:14px;font-weight:700;margin-bottom:4px;color:#102820;">${poi.name}</div>
        <div style="font-size:12px;color:#57534e;margin-bottom:4px;"><strong>Hours:</strong> ${poi.hours}</div>
        <div style="font-size:12px;color:#9b2226;font-weight:600;margin-bottom:8px;">${poi.alert}</div>
        <div style="display:flex;gap:6px;flex-wrap:wrap;">
          <a href="${poi.dirFromHotel}" target="_blank" rel="noopener" style="background:#9b2226;color:#fff;padding:4px 8px;border-radius:4px;text-decoration:none;font-size:11px;font-weight:600;">🚶 Directions</a>
          <a href="https://www.google.com/maps/search/?api=1&query=${poi.gmapSearch}" target="_blank" rel="noopener" style="background:#1b4332;color:#fff;padding:4px 8px;border-radius:4px;text-decoration:none;font-size:11px;font-weight:600;">📍 Open in Google Maps</a>
        </div>
      </div>
    `);
    markersLayer.addLayer(marker);
    bounds.push(poi.coords);
  });

  // Draw walking loop polyline if single city is selected
  if (city !== "all" && CITY_CONFIG[city] && CITY_CONFIG[city].routeCoords) {
    const polyline = L.polyline(CITY_CONFIG[city].routeCoords, {
      color: "#9b2226",
      weight: 4,
      opacity: 0.8,
      dashArray: "8, 8"
    });
    routeLayer.addLayer(polyline);
  }

  if (city === "all") {
    map.setView(CITY_CONFIG.all.center, CITY_CONFIG.all.zoom);
  } else if (bounds.length > 0) {
    map.fitBounds(bounds, { padding: [35, 35], maxZoom: 15 });
  }
}

function renderCitySidebar(city) {
  const listEl = document.getElementById("poi-list");
  const routesEl = document.getElementById("walking-routes-list");
  if (!listEl || !routesEl) return;

  const filtered = city === "all" ? POIS : POIS.filter((p) => p.city === city);
  listEl.innerHTML = filtered
    .map((poi) => {
      const tagClass =
        poi.type === "hotel"
          ? "tag-hotel"
          : poi.type === "transit"
          ? "tag-transit"
          : poi.type === "landmark"
          ? "tag-landmark"
          : "tag-market";
      return `
        <div class="poi-item" data-id="${poi.id}">
          <div class="poi-item-header">
            <h4>${poi.name}</h4>
            <span class="poi-type-tag ${tagClass}">${poi.typeLabel}</span>
          </div>
          <div class="poi-meta">${poi.hours}</div>
          <div class="poi-meta" style="color:#9b2226;font-weight:600;">${poi.alert}</div>
          <div class="poi-actions">
            <button type="button" class="btn-map" onclick="focusPoi('${poi.id}')">🎯 Focus on Map</button>
            <a href="${poi.dirFromHotel}" target="_blank" rel="noopener" class="btn-directions">🚶 Google Maps Directions</a>
          </div>
        </div>
      `;
    })
    .join("");

  // Walking routes box
  const loops =
    city === "all"
      ? [
          ...CITY_CONFIG.munich.walkingLoops.slice(0, 1),
          ...CITY_CONFIG.nuremberg.walkingLoops.slice(0, 1),
          ...CITY_CONFIG.prague.walkingLoops.slice(0, 1),
          ...CITY_CONFIG.vienna.walkingLoops.slice(0, 2)
        ]
      : CITY_CONFIG[city].walkingLoops;

  routesEl.innerHTML = loops
    .map(
      (loop) => `
      <a href="${loop.url}" target="_blank" rel="noopener" class="route-link-card">
        <span>🗺️ ${loop.title}</span>
        <span>↗</span>
      </a>
    `
    )
    .join("");
}

window.focusPoi = function (poiId) {
  const poi = POIS.find((p) => p.id === poiId);
  if (!poi) return;

  updateGoogleMapEmbed(poi.gmapSearch);

  if (currentMapMode === "leaflet" && map) {
    map.setView(poi.coords, 16);
    markersLayer.eachLayer((layer) => {
      const latLng = layer.getLatLng();
      if (
        Math.abs(latLng.lat - poi.coords[0]) < 0.0001 &&
        Math.abs(latLng.lng - poi.coords[1]) < 0.0001
      ) {
        layer.openPopup();
      }
    });
  }

  const mapSection = document.getElementById("maps-section");
  if (mapSection) {
    mapSection.scrollIntoView({ behavior: "smooth", block: "nearest" });
  }
};

window.selectCityOnMap = function (cityKey) {
  const btn = document.querySelector(`.city-tab-btn[data-city="${cityKey}"]`);
  if (btn) btn.click();
  const mapSection = document.getElementById("maps-section");
  if (mapSection) {
    mapSection.scrollIntoView({ behavior: "smooth" });
  }
};

// 3. Day-by-Day Itinerary Filter
function initDayFilters() {
  const buttons = document.querySelectorAll(".day-btn");
  const cards = document.querySelectorAll(".day-card");
  buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
      buttons.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      const filter = btn.getAttribute("data-day");
      cards.forEach((card) => {
        if (filter === "all" || card.getAttribute("data-day") === filter) {
          card.style.display = "block";
        } else {
          card.style.display = "none";
        }
      });
    });
  });
}

// 4. Interactive Pfand (Mug Deposit) & Cash Calculator for 4 Adults
function initPfandCalculator() {
  const roundsInput = document.getElementById("calc-rounds");
  const snacksInput = document.getElementById("calc-snacks");
  const keepMugsInput = document.getElementById("calc-keep");
  if (!roundsInput || !snacksInput || !keepMugsInput) return;

  const updateCalc = () => {
    const rounds = parseInt(roundsInput.value, 10);
    const snacks = parseInt(snacksInput.value, 10);
    const keepMugs = parseInt(keepMugsInput.value, 10);

    document.getElementById("val-rounds").textContent = `${rounds} round${rounds > 1 ? "s" : ""} (4 mugs/round)`;
    document.getElementById("val-snacks").textContent = `${snacks} snack/food stop${snacks > 1 ? "s" : ""}`;
    document.getElementById("val-keep").textContent = `${keepMugs} souvenir mug${keepMugs === 1 ? "" : "s"}`;

    const drinkCost = rounds * 4 * 5.5; // ~€5.50 per Glühwein
    const pfandFloat = 4 * 4.5; // €4.50 deposit per mug needed in pocket for a round
    const keptMugCost = keepMugs * 4.5;
    const foodCost = snacks * 4 * 6.5; // ~€6.50 per person per snack stop
    const totalDaily = Math.round(drinkCost + foodCost + keptMugCost);
    const upfrontPocketCash = Math.round(totalDaily + pfandFloat);

    document.getElementById("res-drinks").textContent = `€${drinkCost.toFixed(0)} EUR`;
    document.getElementById("res-pfand").textContent = `€${pfandFloat.toFixed(0)} EUR (refundable float)`;
    document.getElementById("res-food").textContent = `€${foodCost.toFixed(0)} EUR`;
    document.getElementById("res-total").textContent = `€${upfrontPocketCash} EUR in pocket (Net spent: €${totalDaily})`;
  };

  roundsInput.addEventListener("input", updateCalc);
  snacksInput.addEventListener("input", updateCalc);
  keepMugsInput.addEventListener("input", updateCalc);
  updateCalc();
}

// 5. Interactive Must-Eat & Souvenir Checklist (Saved to localStorage)
function initChecklist() {
  const container = document.getElementById("checklist-container");
  if (!container) return;

  let saved = {};
  try {
    saved = JSON.parse(localStorage.getItem("xmas2026_checklist") || "{}");
  } catch (e) {
    saved = {};
  }

  const render = () => {
    container.innerHTML = CHECKLIST_ITEMS.map((item) => {
      const isChecked = !!saved[item.id];
      return `
        <label class="check-card ${isChecked ? "checked" : ""}" for="${item.id}">
          <input type="checkbox" id="${item.id}" ${isChecked ? "checked" : ""} onchange="toggleCheck('${item.id}')" />
          <div class="check-card-text">
            <span style="font-size:0.7rem;font-weight:700;text-transform:uppercase;color:#9b2226;">${item.city}</span>
            <h4>${item.title}</h4>
            <p>${item.desc}</p>
          </div>
        </label>
      `;
    }).join("");

    const count = Object.values(saved).filter(Boolean).length;
    const counterEl = document.getElementById("checklist-progress");
    if (counterEl) {
      counterEl.textContent = `${count} / ${CHECKLIST_ITEMS.length} Completed`;
    }
  };

  window.toggleCheck = function (id) {
    saved[id] = !saved[id];
    try {
      localStorage.setItem("xmas2026_checklist", JSON.stringify(saved));
    } catch (e) {}
    render();
  };

  render();
}
