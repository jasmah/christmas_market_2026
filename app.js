// Christmas Markets 2026: published hours and conservative planning estimates.
// Sources and booking caveats are in index.html; checked November 15, 2026.

const CITY_CONFIG = {
  "all": {
    "name": "All 4 Cities Overview",
    "center": [
      49.15,
      13.8
    ],
    "zoom": 6,
    "gmapQuery": "Munich+Nuremberg+Prague+Vienna+Christmas+Markets"
  },
  "munich": {
    "name": "Munich (Dec 20 & Dec 22 + Dec 21 Eve)",
    "center": [
      48.1385,
      11.568
    ],
    "zoom": 14,
    "gmapQuery": "Marienplatz+Christkindlmarkt+Munich",
    "walkingLoops": [
      {
        "title": "Dec 20: Ruby Rosi → Kripperlmarkt → Marienplatz (music 5:15 PM)",
        "url": "https://www.google.com/maps/dir/?api=1&origin=Ruby+Rosi+Hotel+Munich&destination=Marienplatz+Munich&travelmode=walking&waypoints=St+Peter+Munich"
      },
      {
        "title": "Dec 22 afternoon: Viktualienmarkt → Residenz (final close 8 PM) → Medieval Market",
        "url": "https://www.google.com/maps/dir/?api=1&origin=Viktualienmarkt+Munich&destination=Wittelsbacherplatz+Munich&travelmode=walking&waypoints=Marienplatz+Munich%7CWeihnachtsdorf+Kaiserhof+Residenz+Munich"
      },
      {
        "title": "Optional Monday Tollwood: allow 20–30 minutes to entrance",
        "url": "https://www.google.com/maps/dir/?api=1&origin=Ruby+Rosi+Hotel+Munich&destination=Tollwood+Winterfestival+Theresienwiese+Munich&travelmode=walking"
      }
    ],
    "routeCoords": [
      [
        48.1398,
        11.5588
      ],
      [
        48.1391,
        11.5658
      ],
      [
        48.1365,
        11.5755
      ],
      [
        48.1374,
        11.5755
      ],
      [
        48.1353,
        11.5763
      ],
      [
        48.1412,
        11.5782
      ],
      [
        48.1433,
        11.5762
      ]
    ]
  },
  "nuremberg": {
    "name": "Nuremberg Day Trip (Mon, Dec 21)",
    "center": [
      49.4515,
      11.0775
    ],
    "zoom": 15,
    "gmapQuery": "Nuernberger+Christkindlesmarkt+Hauptmarkt+Nuremberg",
    "walkingLoops": [
      {
        "title": "Dec 21 morning: Hbf → St Lorenz → Museumsbrücke → Hauptmarkt (noon clock)",
        "url": "https://www.google.com/maps/dir/?api=1&origin=N%C3%BCrnberg+Hauptbahnhof&destination=Hauptmarkt+N%C3%BCrnberg&travelmode=walking&waypoints=Lorenzkirche+N%C3%BCrnberg%7CMuseumsbr%C3%BCcke+N%C3%BCrnberg"
      },
      {
        "title": "Dec 21 afternoon: Hauptmarkt → Sister Cities → Kinderweihnacht → Fleischbrücke",
        "url": "https://www.google.com/maps/dir/?api=1&origin=Hauptmarkt+N%C3%BCrnberg&destination=Fleischbr%C3%BCcke+N%C3%BCrnberg&travelmode=walking&waypoints=Rathausplatz+N%C3%BCrnberg%7CHans-Sachs-Platz+N%C3%BCrnberg"
      },
      {
        "title": "Dec 21 return: Fleischbrücke → Handwerkerhof (shops until 6 PM) → Hbf",
        "url": "https://www.google.com/maps/dir/?api=1&origin=Fleischbr%C3%BCcke+N%C3%BCrnberg&destination=N%C3%BCrnberg+Hauptbahnhof&travelmode=walking&waypoints=Handwerkerhof+N%C3%BCrnberg"
      },
      {
        "title": "Munich → Nuremberg: check actual ICE booking in DB",
        "url": "https://www.google.com/maps/dir/?api=1&origin=M%C3%BCnchen+Hauptbahnhof&destination=N%C3%BCrnberg+Hauptbahnhof&travelmode=transit"
      }
    ],
    "routeCoords": [
      [
        49.4456,
        11.0829
      ],
      [
        49.451,
        11.0788
      ],
      [
        49.4527,
        11.0778
      ],
      [
        49.4539,
        11.0773
      ],
      [
        49.4552,
        11.0777
      ],
      [
        49.4536,
        11.0795
      ],
      [
        49.4528,
        11.0764
      ],
      [
        49.4472,
        11.0812
      ],
      [
        49.4456,
        11.0829
      ]
    ]
  },
  "prague": {
    "name": "Prague (Wed, Dec 23 – Fri, Dec 25)",
    "center": [
      50.0845,
      14.4185
    ],
    "zoom": 14,
    "gmapQuery": "Old+Town+Square+Christmas+Market+Prague",
    "walkingLoops": [
      {
        "title": "Dec 23: hotel → Old Town Bridge Tower (target 3:45 PM; lamplighter unconfirmed)",
        "url": "https://www.google.com/maps/dir/?api=1&origin=Almanac+X+Alcron+Prague&destination=Old+Town+Bridge+Tower+Prague&travelmode=walking"
      },
      {
        "title": "Dec 23 bridge → Náměstí Míru: allow 35–45 minutes including Metro A",
        "url": "https://www.google.com/maps/dir/?api=1&origin=Old+Town+Bridge+Tower+Prague&destination=N%C3%A1m%C4%9Bst%C3%AD+M%C3%ADru+Prague&travelmode=transit"
      },
      {
        "title": "Hotel → Náměstí Míru: allow 15–20 minutes walking",
        "url": "https://www.google.com/maps/dir/?api=1&origin=Almanac+X+Alcron+Prague&destination=N%C3%A1m%C4%9Bst%C3%AD+M%C3%ADru+Prague&travelmode=walking"
      },
      {
        "title": "Optional Dec 25: Castle → Malá Strana → Charles Bridge → Old Town",
        "url": "https://www.google.com/maps/dir/?api=1&origin=Prague+Castle&destination=Old+Town+Square+Prague&travelmode=walking&waypoints=Malostransk%C3%A9+n%C3%A1m%C4%9Bst%C3%AD+Prague%7CCharles+Bridge+Prague"
      }
    ],
    "routeCoords": [
      [
        50.0803,
        14.4263
      ],
      [
        50.0865,
        14.4138
      ],
      [
        50.0755,
        14.437
      ],
      [
        50.0803,
        14.4263
      ]
    ]
  },
  "vienna": {
    "name": "Vienna (Sat, Dec 26 – Sun, Dec 27)",
    "center": [
      48.202,
      16.365
    ],
    "zoom": 13,
    "gmapQuery": "Rathausplatz+Christkindlmarkt+Vienna",
    "walkingLoops": [
      {
        "title": "Dec 26 FIRST: hotel → Maria-Theresien-Platz (plan before 4 PM; official hours conflict)",
        "url": "https://www.google.com/maps/dir/?api=1&origin=Novotel+Wien+Hauptbahnhof&destination=Maria-Theresien-Platz+Vienna&travelmode=transit"
      },
      {
        "title": "Dec 26: Maria-Theresien-Platz → Hofburg → Stephansplatz (7 PM close)",
        "url": "https://www.google.com/maps/dir/?api=1&origin=Maria-Theresien-Platz+Vienna&destination=Stephansplatz+Vienna&travelmode=walking&waypoints=Hofburg+Vienna%7CGraben+Vienna"
      },
      {
        "title": "Dec 26 evening: Stephansplatz → Rathausplatz (10 PM final close)",
        "url": "https://www.google.com/maps/dir/?api=1&origin=Stephansplatz+Vienna&destination=Rathausplatz+Vienna&travelmode=walking"
      },
      {
        "title": "Dec 27 leg 1: hotel → Upper Belvedere (allow 15–20 minutes)",
        "url": "https://www.google.com/maps/dir/?api=1&origin=Novotel+Wien+Hauptbahnhof&destination=Upper+Belvedere+Vienna&travelmode=walking"
      },
      {
        "title": "Dec 27 leg 2: Belvedere → Schönbrunn (allow 45–60 minutes)",
        "url": "https://www.google.com/maps/dir/?api=1&origin=Upper+Belvedere+Vienna&destination=Sch%C3%B6nbrunn+Palace+Vienna&travelmode=transit"
      },
      {
        "title": "Optional Dec 27 leg 3: Schönbrunn → Prater (allow 45–60 minutes)",
        "url": "https://www.google.com/maps/dir/?api=1&origin=Sch%C3%B6nbrunn+Palace+Vienna&destination=Riesenradplatz+Vienna&travelmode=transit"
      }
    ],
    "routeCoords": [
      [
        48.2045,
        16.3607
      ],
      [
        48.2064,
        16.365
      ],
      [
        48.2088,
        16.3694
      ],
      [
        48.2085,
        16.3732
      ],
      [
        48.2108,
        16.3573
      ]
    ]
  }
};

const POIS = [
  {
    "id": "muc-hotel",
    "city": "munich",
    "name": "Ruby Rosi Hotel Munich by IHG",
    "type": "hotel",
    "typeLabel": "Hotel Base",
    "coords": [
      48.1398,
      11.5588
    ],
    "dates": "Check-in Sun Dec 20 – Check-out Wed Dec 23",
    "hours": "Bayerstraße 21, 80335 München (Across from Hauptbahnhof)",
    "alert": "Allow 10–15 minutes inside München Hbf; confirm platform access during construction.",
    "gmapSearch": "Ruby+Rosi+Hotel+Munich+Bayerstrasse+21",
    "dirFromHotel": "https://www.google.com/maps/search/?api=1&query=Ruby+Rosi+Hotel+Munich+Bayerstrasse+21"
  },
  {
    "id": "muc-marienplatz",
    "city": "munich",
    "name": "Münchner Christkindlmarkt (Marienplatz)",
    "type": "market",
    "typeLabel": "Flagship Market",
    "coords": [
      48.1374,
      11.5755
    ],
    "dates": "Nov 20 – Dec 24, 2026",
    "hours": "Mon–Sat 10:00 AM – 9:00 PM | Sun 10:00 AM – 8:00 PM | Dec 24 closes 2 PM",
    "alert": "Published balcony music Sunday–Thursday from 5:15 PM; arrive by 5 PM.",
    "gmapSearch": "Christkindlmarkt+Marienplatz+Munich",
    "dirFromHotel": "https://www.google.com/maps/dir/?api=1&origin=Ruby+Rosi+Hotel+Munich&destination=Marienplatz+Munich&travelmode=walking"
  },
  {
    "id": "muc-residenz",
    "city": "munich",
    "name": "Weihnachtsdorf im Kaiserhof der Residenz",
    "type": "market",
    "typeLabel": "🚨 Closes Dec 22",
    "coords": [
      48.1412,
      11.5782
    ],
    "dates": "Nov 16 – Dec 22, 2026 (FINAL DAY TUE DEC 22!)",
    "hours": "Usually 11 AM–9 PM; FINAL Dec 22: 11 AM–8 PM",
    "alert": "Visit early afternoon Dec 22. Final-day close is 8 PM; vendor mug policies vary.",
    "gmapSearch": "Weihnachtsdorf+im+Kaiserhof+der+Residenz+Munich",
    "dirFromHotel": "https://www.google.com/maps/dir/?api=1&origin=Ruby+Rosi+Hotel+Munich&destination=Weihnachtsdorf+im+Kaiserhof+der+Residenz+Munich&travelmode=transit"
  },
  {
    "id": "muc-medieval",
    "city": "munich",
    "name": "Mittelaltermarkt (Wittelsbacherplatz)",
    "type": "market",
    "typeLabel": "Medieval Market",
    "coords": [
      48.1433,
      11.5762
    ],
    "dates": "Nov 20 – Dec 23, 2026",
    "hours": "Daily 11:00 AM – 9:00 PM",
    "alert": "Allow 5–10 minutes from the Residenz courtyard entrance; confirm current operator hours.",
    "gmapSearch": "Mittelaltermarkt+Wittelsbacherplatz+Munich",
    "dirFromHotel": "https://www.google.com/maps/dir/?api=1&origin=Ruby+Rosi+Hotel+Munich&destination=Wittelsbacherplatz+Munich&travelmode=transit",
    "sourceUrl": "https://www.mittelaltermarkt-muenchen.de/"
  },
  {
    "id": "muc-tollwood",
    "city": "munich",
    "name": "Tollwood Winterfestival (Theresienwiese)",
    "type": "market",
    "typeLabel": "Heated Tents",
    "coords": [
      48.1342,
      11.5497
    ],
    "dates": "Nov 24 – Dec 23, 2026",
    "hours": "Mon–Fri from 2 PM; Sat–Sun from 11 AM. Monday market/food closes 10:30 PM.",
    "alert": "Optional after Nuremberg. Allow 20–30 minutes on foot to festival entrance.",
    "gmapSearch": "Tollwood+Winterfestival+Theresienwiese+Munich",
    "dirFromHotel": "https://www.google.com/maps/dir/?api=1&origin=Ruby+Rosi+Hotel+Munich&destination=Theresienwiese+Munich&travelmode=walking"
  },
  {
    "id": "muc-kripperl",
    "city": "munich",
    "name": "Kripperlmarkt & Rindermarkt Sternenplatzl",
    "type": "market",
    "typeLabel": "Nativity & Chalets",
    "coords": [
      48.1362,
      11.5746
    ],
    "dates": "Nov 20 – Dec 24, 2026",
    "hours": "Mon–Sat 10:00 AM – 9:00 PM | Sun 10:00 AM – 8:00 PM | Dec 24 closes 2 PM",
    "alert": "Right next to St. Peter's Church (climb Alter Peter tower for best view!)",
    "gmapSearch": "Rindermarkt+Munich",
    "dirFromHotel": "https://www.google.com/maps/dir/?api=1&origin=Ruby+Rosi+Hotel+Munich&destination=Rindermarkt+Munich&travelmode=walking"
  },
  {
    "id": "muc-isartor",
    "city": "munich",
    "name": "Münchner Feuerzangenbowle at Isartor",
    "type": "market",
    "typeLabel": "Giant Cauldron",
    "coords": [
      48.1352,
      11.582
    ],
    "dates": "Nov 23, 2026–Jan 6, 2027",
    "hours": "Mon–Sat noon–10 PM; Sun noon–9 PM; Dec 24: 11 AM–2 PM",
    "alert": "Tal 50, Innenhof Isartor. Optional Dec 22 evening; choose this OR Sendlinger Tor.",
    "gmapSearch": "Muenchner+Feuerzangenbowle+Isartor",
    "dirFromHotel": "https://www.google.com/maps/dir/?api=1&origin=Marienplatz+Munich&destination=Isartor+Munich&travelmode=walking",
    "sourceUrl": "https://www.muenchner-feuerzangenbowle.de/"
  },
  {
    "id": "muc-sendlinger",
    "city": "munich",
    "name": "Sendlinger Tor Market & ChristkindlTram",
    "type": "market",
    "typeLabel": "🚨 Tram Ends Dec 20 / Market Dec 22",
    "coords": [
      48.134,
      11.5676
    ],
    "dates": "Market: Nov 20 – Dec 22 | ChristkindlTram: Final Day Sun Dec 20!",
    "hours": "Market: 10:30 AM–9 PM through Dec 22; ChristkindlTram has separate Dec 20 booking slots",
    "alert": "Tram boards Brunnenschleife special stop; 30-minute ride, separate tickets. Pink Christmas closes Dec 20, so skip it Dec 22.",
    "sourceUrl": "https://www.mvg.de/news/christkindltram.html",
    "gmapSearch": "Sendlinger+Tor+Munich",
    "dirFromHotel": "https://www.google.com/maps/dir/?api=1&origin=Ruby+Rosi+Hotel+Munich&destination=Sendlinger+Tor+Munich&travelmode=walking"
  },
  {
    "id": "muc-stachus",
    "city": "munich",
    "name": "Karlsplatz (Stachus) Münchner Eiszauber",
    "type": "market",
    "typeLabel": "Ice Rink & Chalet",
    "coords": [
      48.1391,
      11.5658
    ],
    "dates": "Nov 13, 2026 – Jan 10, 2027",
    "hours": "Daily 10:30 AM – 10:00 PM",
    "alert": "Right on your 5-min walk from Ruby Rosi Hotel toward Marienplatz! Huge open-air ice rink & 2-story Eiszauber-Alm lodge.",
    "gmapSearch": "Karlsplatz+Stachus+Munich",
    "dirFromHotel": "https://www.google.com/maps/dir/?api=1&origin=Ruby+Rosi+Hotel+Munich&destination=Karlsplatz+Stachus+Munich&travelmode=walking"
  },
  {
    "id": "nue-hbf",
    "city": "nuremberg",
    "name": "Nürnberg Hauptbahnhof (Train Arrival)",
    "type": "transit",
    "typeLabel": "ICE Rail Hub",
    "coords": [
      49.4456,
      11.0829
    ],
    "dates": "Mon, Dec 21 Day Trip",
    "hours": "Faster direct ICE about 1h 05m–1h 20m; check actual booking",
    "alert": "Allow 20–30 minutes before departure; reserve seats for four.",
    "gmapSearch": "Nuernberg+Hauptbahnhof",
    "dirFromHotel": "https://www.google.com/maps/dir/?api=1&origin=Muenchen+Hauptbahnhof&destination=Nuernberg+Hauptbahnhof&travelmode=transit"
  },
  {
    "id": "nue-handwerkerhof",
    "city": "nuremberg",
    "name": "Handwerkerhof Nürnberg (Artisans' Yard)",
    "type": "market",
    "typeLabel": "Shop on return around 5 PM",
    "coords": [
      49.4472,
      11.0812
    ],
    "dates": "Year-round courtyard; shops have holiday exceptions",
    "hours": "Shops Mon–Sat 11 AM–6 PM; courtyard and taverns differ",
    "alert": "The 10 AM–3:30 PM hours apply to tourist information, not artisan shops.",
    "gmapSearch": "Handwerkerhof+Nuernberg",
    "dirFromHotel": "https://www.google.com/maps/dir/?api=1&origin=Nuernberg+Hauptbahnhof&destination=Handwerkerhof+Nuernberg&travelmode=walking"
  },
  {
    "id": "nue-hauptmarkt",
    "city": "nuremberg",
    "name": "Nürnberger Christkindlesmarkt (Hauptmarkt)",
    "type": "market",
    "typeLabel": "World Famous",
    "coords": [
      49.4539,
      11.0773
    ],
    "dates": "Nov 27 – Dec 24, 2026",
    "hours": "Daily 10:00 AM – 9:00 PM | Dec 24 closes 2 PM",
    "alert": "Watch Frauenkirche Männleinlaufen clock at 12:00 Noon sharp & spin Schöner Brunnen brass ring!",
    "gmapSearch": "Nuernberger+Christkindlesmarkt+Hauptmarkt",
    "dirFromHotel": "https://www.google.com/maps/dir/?api=1&origin=Nuernberg+Hauptbahnhof&destination=Hauptmarkt+Nuernberg&travelmode=walking"
  },
  {
    "id": "nue-sister",
    "city": "nuremberg",
    "name": "Markt der Partnerstädte (Sister Cities Market)",
    "type": "market",
    "typeLabel": "International Stalls",
    "coords": [
      49.4552,
      11.0777
    ],
    "dates": "Nov 27 – Dec 23, 2026",
    "hours": "Daily 10:00 AM – 9:00 PM",
    "alert": "Located on Rathausplatz right behind Schöner Brunnen (includes Glasgow Scottish booth!)",
    "gmapSearch": "Rathausplatz+Nuernberg",
    "dirFromHotel": "https://www.google.com/maps/dir/?api=1&origin=Hauptmarkt+Nuernberg&destination=Rathausplatz+Nuernberg&travelmode=walking"
  },
  {
    "id": "nue-kinder",
    "city": "nuremberg",
    "name": "Kinderweihnacht (Hans-Sachs-Platz)",
    "type": "market",
    "typeLabel": "Carousel",
    "coords": [
      49.4536,
      11.0795
    ],
    "dates": "Nov 27 – Dec 24, 2026",
    "hours": "Usually 10 AM–9 PM; Dec 24 shortened hours—check operator",
    "alert": "Hans-Sachs-Platz east of Hauptmarkt. Post coach has its own route and schedule.",
    "gmapSearch": "Hans-Sachs-Platz+Nuernberg",
    "dirFromHotel": "https://www.google.com/maps/dir/?api=1&origin=Hauptmarkt+Nuernberg&destination=Hans-Sachs-Platz+Nuernberg&travelmode=walking"
  },
  {
    "id": "nue-feuer",
    "city": "nuremberg",
    "name": "World's Largest Feuerzangenbowle (Fleischbrücke)",
    "type": "market",
    "typeLabel": "3.4m Giant Cauldron",
    "coords": [
      49.4528,
      11.0764
    ],
    "dates": "Nov 27 – Dec 31, 2026",
    "hours": "Mon Dec 21: 11 AM–9 PM; other days/holidays differ",
    "alert": "Zwischen den Fleischbänken, near Fleischbrücke. Optional on the return to Handwerkerhof and Hbf.",
    "gmapSearch": "Fleischbruecke+Nuernberg",
    "dirFromHotel": "https://www.google.com/maps/dir/?api=1&origin=Hauptmarkt+Nuernberg&destination=Fleischbruecke+Nuernberg&travelmode=walking",
    "sourceUrl": "https://www.nuernberger-feuerzangenbowle.de/"
  },
  {
    "id": "prg-hotel",
    "city": "prague",
    "name": "Almanac X Alcron Prague",
    "type": "hotel",
    "typeLabel": "5★ Art Deco Base",
    "coords": [
      50.0803,
      14.4263
    ],
    "dates": "Check-in Wed Dec 23 – Check-out Sat Dec 26",
    "hours": "Štěpánská 40, 110 00 Nové Město (Steps from Wenceslas Square)",
    "alert": "Allow 15–20 minutes to Old Town Square and 25–35 minutes to Old Town Bridge Tower.",
    "gmapSearch": "Almanac+X+Alcron+Prague",
    "dirFromHotel": "https://www.google.com/maps/search/?api=1&query=Almanac+X+Alcron+Prague"
  },
  {
    "id": "prg-oldtown",
    "city": "prague",
    "name": "Old Town Square Market (Staroměstské náměstí)",
    "type": "market",
    "typeLabel": "Open All Holidays",
    "coords": [
      50.0875,
      14.4213
    ],
    "dates": "Nov 28, 2026 – Jan 6, 2027",
    "hours": "Operator standard 10 AM–10 PM; holiday exceptions to reconfirm",
    "alert": "Tree show and Christmas Eve stage programme not confirmed. Reserve holiday meals.",
    "gmapSearch": "Old+Town+Square+Christmas+Market+Prague",
    "dirFromHotel": "https://www.google.com/maps/dir/?api=1&origin=Almanac+X+Alcron+Prague&destination=Old+Town+Square+Prague&travelmode=walking"
  },
  {
    "id": "prg-wenceslas",
    "city": "prague",
    "name": "Wenceslas Square Market (Václavské náměstí)",
    "type": "market",
    "typeLabel": "Steps from Hotel",
    "coords": [
      50.0819,
      14.4266
    ],
    "dates": "Nov 28, 2026 – Jan 6, 2027",
    "hours": "Operator standard 10 AM–10 PM; holiday exceptions to reconfirm",
    "alert": "Short walk from hotel. Check Christmas Eve service and buy essentials Dec 23.",
    "gmapSearch": "Wenceslas+Square+Prague",
    "dirFromHotel": "https://www.google.com/maps/dir/?api=1&origin=Almanac+X+Alcron+Prague&destination=Wenceslas+Square+Prague&travelmode=walking"
  },
  {
    "id": "prg-miru",
    "city": "prague",
    "name": "Náměstí Míru (Vinohrady Local Market)",
    "type": "market",
    "typeLabel": "🚨 Closes Dec 24",
    "coords": [
      50.0755,
      14.437
    ],
    "dates": "Nov 20 – Dec 24, 2026 (Closes Thu Dec 24!)",
    "hours": "Tourism lists 10 AM–8 PM; operator generic hours differ. Confirm holiday exceptions.",
    "alert": "Dec 23 priority. Optional nearby Tylovo runs Nov 26–Dec 24, with separate hours; allow 5–10 minutes between squares.",
    "sourceUrl": "https://www.vanocnitrhy.cz/prodejni-rad/",
    "gmapSearch": "Namesti+Miru+Prague",
    "dirFromHotel": "https://www.google.com/maps/dir/?api=1&origin=Almanac+X+Alcron+Prague&destination=Namesti+Miru+Prague&travelmode=walking"
  },
  {
    "id": "prg-republiky",
    "city": "prague",
    "name": "Náměstí Republiky (Republic Square Market)",
    "type": "market",
    "typeLabel": "🚨 Closes Dec 24",
    "coords": [
      50.088,
      14.4281
    ],
    "dates": "Nov 25 – Dec 24, 2026",
    "hours": "Operator publishes generic 10 AM–9 PM; confirm venue-specific and Dec 24 hours",
    "alert": "Optional Dec 24 morning alternative near Palladium; not an extra arrival-day requirement. Food offerings vary.",
    "sourceUrl": "https://www.vanocnitrhy.cz/prodejni-rad/",
    "gmapSearch": "Namesti+Republiky+Prague",
    "dirFromHotel": "https://www.google.com/maps/dir/?api=1&origin=Almanac+X+Alcron+Prague&destination=Namesti+Republiky+Prague&travelmode=walking"
  },
  {
    "id": "prg-castle",
    "city": "prague",
    "name": "Prague Castle — optional Christmas Stroll",
    "type": "landmark",
    "typeLabel": "Not a confirmed market",
    "coords": [
      50.0911,
      14.4016
    ],
    "dates": "Optional Dec 25; official Christmas Stroll closed Dec 24",
    "hours": "Stroll lists 10 AM–6 PM around Dec 25; confirm interiors separately",
    "alert": "Use Metro A to Malostranská and tram 22 uphill; no Castle market is promised.",
    "gmapSearch": "St.+George's+Square+Prague+Castle",
    "dirFromHotel": "https://www.google.com/maps/dir/?api=1&origin=Almanac+X+Alcron+Prague&destination=St.+George's+Square+Prague+Castle&travelmode=transit"
  },
  {
    "id": "prg-bridge",
    "city": "prague",
    "name": "Charles Bridge & Kampa outdoor stroll",
    "type": "landmark",
    "typeLabel": "Dusk walk: reconfirm",
    "coords": [
      50.0865,
      14.4138
    ],
    "dates": "Dec 23 customary final Advent lamplighter walk; 2026 arrangements to confirm",
    "hours": "Arrive Old Town Bridge Tower by 3:45 PM only if arrival permits",
    "alert": "Allow 25–35 minutes from hotel. Lamplighter time and Kampa stalls are not guaranteed.",
    "gmapSearch": "Charles+Bridge+Prague",
    "dirFromHotel": "https://www.google.com/maps/dir/?api=1&origin=Almanac+X+Alcron+Prague&destination=Charles+Bridge+Prague&travelmode=walking"
  },
  {
    "id": "vie-hotel",
    "city": "vienna",
    "name": "Novotel Wien Hauptbahnhof",
    "type": "hotel",
    "typeLabel": "Hotel Base",
    "coords": [
      48.1846,
      16.3782
    ],
    "dates": "Check-in Sat Dec 26 – Check-out Mon Dec 28",
    "hours": "Canettistraße 6, 1100 Wien (Right outside Wien Hbf exit)",
    "alert": "Allow 45–60 minutes for station exit, bag drop and U1 access. Rooms may not be ready.",
    "gmapSearch": "Novotel+Wien+Hauptbahnhof",
    "dirFromHotel": "https://www.google.com/maps/search/?api=1&query=Novotel+Wien+Hauptbahnhof"
  },
  {
    "id": "vie-stephansplatz",
    "city": "vienna",
    "name": "Stephansplatz Christmas Market (St. Stephen's Cathedral)",
    "type": "market",
    "typeLabel": "🚨 Closes Sat Dec 26 (7 PM)",
    "coords": [
      48.2085,
      16.3732
    ],
    "dates": "Nov 6 – Dec 26, 2026 (FINAL DAY SAT DEC 26!)",
    "hours": "Sat Dec 26 Final Day: 11:00 AM – 7:00 PM (CLOSED Sun Dec 27!)",
    "alert": "SECOND on Dec 26, after Maria-Theresien-Platz. Published final close 7 PM.",
    "gmapSearch": "Stephansplatz+Vienna",
    "dirFromHotel": "https://www.google.com/maps/dir/?api=1&origin=Maria-Theresien-Platz+Vienna&destination=Stephansplatz+Vienna&travelmode=walking"
  },
  {
    "id": "vie-mariatheresien",
    "city": "vienna",
    "name": "Weihnachtsdorf Maria-Theresien-Platz",
    "type": "market",
    "typeLabel": "FIRST Dec 26: plan before 4 PM",
    "coords": [
      48.2045,
      16.3607
    ],
    "dates": "Nov 20 – Dec 26, 2026 (FINAL DAY SAT DEC 26!)",
    "hours": "Official Dec 26 listings conflict: 11 AM–4 PM versus 11 AM–7 PM",
    "alert": "Visit FIRST around 2–3 PM; use 4 PM as conservative close and reconfirm.",
    "gmapSearch": "Maria-Theresien-Platz+Vienna",
    "dirFromHotel": "https://www.google.com/maps/dir/?api=1&origin=Novotel+Wien+Hauptbahnhof&destination=Maria-Theresien-Platz+Vienna&travelmode=transit"
  },
  {
    "id": "vie-rathaus",
    "city": "vienna",
    "name": "Wiener Christkindlmarkt (Rathausplatz)",
    "type": "market",
    "typeLabel": "🚨 Closes Sat Dec 26 (10 PM)",
    "coords": [
      48.2108,
      16.3573
    ],
    "dates": "Nov 13 – Dec 26, 2026 (FINAL DAY SAT DEC 26!)",
    "hours": "Sat Dec 26 Final Day: 10:00 AM – 10:00 PM (Stalls CLOSED Dec 27; Ice Dream stays open)",
    "alert": "Final market evening Dec 26; prioritize if train is late. Allow 25–35 minutes from cathedral.",
    "gmapSearch": "Wiener+Christkindlmarkt+Rathausplatz+Vienna",
    "dirFromHotel": "https://www.google.com/maps/dir/?api=1&origin=Stephansplatz+Vienna&destination=Rathausplatz+Vienna&travelmode=walking"
  },
  {
    "id": "vie-belvedere",
    "city": "vienna",
    "name": "Belvedere Palace K&K Market",
    "type": "market",
    "typeLabel": "✅ Open Sun Dec 27",
    "coords": [
      48.1915,
      16.3809
    ],
    "dates": "Nov 20 – Dec 31, 2026",
    "hours": "Published Sunday Dec 27 market: 10 AM–9 PM",
    "alert": "Dec 27 morning; allow 15–20 minutes from hotel. Gallery needs a separate timed ticket.",
    "gmapSearch": "Upper+Belvedere+Vienna",
    "dirFromHotel": "https://www.google.com/maps/dir/?api=1&origin=Novotel+Wien+Hauptbahnhof&destination=Upper+Belvedere+Vienna&travelmode=walking"
  },
  {
    "id": "vie-schoenbrunn",
    "city": "vienna",
    "name": "Schönbrunn Palace Christmas & New Year Market",
    "type": "market",
    "typeLabel": "✅ Open Sun Dec 27",
    "coords": [
      48.1858,
      16.3128
    ],
    "dates": "Nov 6, 2026 – Jan 6, 2027",
    "hours": "Dec 25 – Jan 6: Daily 10:00 AM – 7:00 PM",
    "alert": "Dec 27 afternoon. Park closes 5:30 PM; Gloriette rooftop terrace is closed in winter.",
    "gmapSearch": "Schoenbrunn+Palace+Vienna",
    "dirFromHotel": "https://www.google.com/maps/dir/?api=1&origin=Upper+Belvedere+Vienna&destination=Schoenbrunn+Palace+Vienna&travelmode=transit"
  },
  {
    "id": "vie-prater",
    "city": "vienna",
    "name": "Wintermarkt am Riesenradplatz (Prater)",
    "type": "market",
    "typeLabel": "✅ Open Sun Dec 27 (10 PM)",
    "coords": [
      48.2167,
      16.3959
    ],
    "dates": "Nov 20, 2026 – Jan 6, 2027",
    "hours": "Published Sunday market 11 AM–10 PM; check music and Ferris wheel hours separately",
    "alert": "Optional Dec 27 evening. Allow 45–60 minutes from Schönbrunn; skip if tired.",
    "gmapSearch": "Riesenradplatz+Prater+Vienna",
    "dirFromHotel": "https://www.google.com/maps/dir/?api=1&origin=Schoenbrunn+Palace+Vienna&destination=Riesenradplatz+Vienna&travelmode=transit"
  }
];

const CHECKLIST_ITEMS = [
  {
    "id": "chk-1",
    "city": "Munich",
    "title": "Rahmfleck at Marienplatz",
    "desc": "Bavarian wood-fired flatbread topped with sour cream, bacon & chives."
  },
  {
    "id": "chk-2",
    "city": "Munich",
    "title": "5:15 PM Rathaus Balcony Music",
    "desc": "Arrive in Marienplatz by 5 PM on Sun Dec 20 or Tue Dec 22; check the programme."
  },
  {
    "id": "chk-3",
    "city": "Munich",
    "title": "Residenz Village Before Dec 22 Close",
    "desc": "Visit Tuesday early afternoon; final Dec 22 close is 8 PM."
  },
  {
    "id": "chk-4",
    "city": "Munich",
    "title": "Drachenblut at Medieval Market",
    "desc": "Hot spiced cherry-and-honey mead in a clay goblet at Wittelsbacherplatz."
  },
  {
    "id": "chk-5",
    "city": "Nuremberg",
    "title": "Drei im Weggla",
    "desc": "Three marjoram-seasoned Nürnberger sausages in a crusty roll with mustard."
  },
  {
    "id": "chk-6",
    "city": "Nuremberg",
    "title": "Original Elisenlebkuchen",
    "desc": "Nut-rich gingerbread; check flour, wafer and allergen ingredients before ordering."
  },
  {
    "id": "chk-7",
    "city": "Nuremberg",
    "title": "Heidelbeer-Glühwein",
    "desc": "Nuremberg's signature blueberry mulled wine at Hauptmarkt."
  },
  {
    "id": "chk-8",
    "city": "Nuremberg",
    "title": "Spin the Schöner Brunnen Brass Ring",
    "desc": "Spin the seamless brass ring 3 times for luck + watch 12:00 PM Männleinlaufen clock."
  },
  {
    "id": "chk-9",
    "city": "Nuremberg",
    "title": "Zwetschgenmännla Souvenir",
    "desc": "Traditional handmade chimney-sweep or figure crafted from dried prunes & walnuts."
  },
  {
    "id": "chk-10",
    "city": "Prague",
    "title": "Charles Bridge at Dusk",
    "desc": "Dec 23 lamplighter is an optional bonus: reconfirm timing and skip if arrival is delayed."
  },
  {
    "id": "chk-11",
    "city": "Prague",
    "title": "Svařák & Hot Medovina",
    "desc": "Czech citrus-spiced mulled wine and hot honey mead on Old Town Square."
  },
  {
    "id": "chk-12",
    "city": "Prague",
    "title": "Bramboráky & Charcoal-Spit Trdelník",
    "desc": "Crispy garlic-marjoram potato pancakes & piping-hot cinnamon walnut chimney cake."
  },
  {
    "id": "chk-13",
    "city": "Prague",
    "title": "Old Town Square Christmas Tree",
    "desc": "Enjoy the decorations; add a light show only if the 2026 programme confirms it."
  },
  {
    "id": "chk-14",
    "city": "Vienna",
    "title": "Dec 26 Vienna Market Evening",
    "desc": "Maria-Theresien-Platz before conservative 4 PM cutoff, then cathedral and Rathaus if time allows."
  },
  {
    "id": "chk-15",
    "city": "Vienna",
    "title": "Käsekrainer & Maroni",
    "desc": "Cheese-stuffed smoked sausage & hot roasted chestnuts in a two-pocket paper cone."
  },
  {
    "id": "chk-16",
    "city": "Vienna",
    "title": "Kaiserschmarren at Belvedere / Schönbrunn",
    "desc": "Fluffy shredded caramelized emperor's pancake with warm plum compote on Sun Dec 27."
  },
  {
    "id": "chk-17",
    "city": "Munich",
    "title": "Optional ChristkindlTram or Stachus Eiszauber",
    "desc": "Reserve the Dec 20 tram only if arrival permits, instead of another stop; otherwise enjoy the rink lights on your Old Town walk."
  },
  {
    "id": "chk-18",
    "city": "Prague",
    "title": "Vánočka Bread & Czech Cauldron Soup",
    "desc": "Try braided raisin-almond Vánočka & hot garlic (česnečka) or sauerkraut (zelňačka) soup."
  },
  {
    "id": "chk-19",
    "city": "Vienna",
    "title": "Choose a Vienna Souvenir Mug",
    "desc": "Ask about current designs and deposits. MAGMAG advertises a glass red boot at selected huts; Belvedere uses its own K&K mug."
  },
  {
    "id": "chk-20",
    "city": "Vienna",
    "title": "Selchfleischknödel, Bosna, Schaumrollen & Vanillekipferl",
    "desc": "Smoked-meat potato dumplings, spicy Bosna sausage roll, meringue pastry horns & vanilla crescents."
  }
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
  const target = new Date("2026-12-20T00:00:00+01:00").getTime();
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
        ${poi.sourceUrl ? `<p><a href="${poi.sourceUrl}" target="_blank" rel="noopener">Official venue hours ↗</a></p>` : ""}
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
          ${poi.sourceUrl ? `<div class="poi-meta"><a href="${poi.sourceUrl}" target="_blank" rel="noopener">Official venue hours ↗</a></div>` : ""}
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
    const totalDaily = drinkCost + foodCost + keptMugCost;
    const finalRefund = Math.max(0, pfandFloat - keptMugCost);
    const upfrontPocketCash = Math.ceil(drinkCost + foodCost + pfandFloat);

    document.getElementById("res-drinks").textContent = `€${drinkCost.toFixed(0)} EUR`;
    document.getElementById("res-pfand").textContent = `€${pfandFloat.toFixed(0)} EUR upfront (final refund €${finalRefund.toFixed(2)})`;
    document.getElementById("res-food").textContent = `€${foodCost.toFixed(0)} EUR`;
    document.getElementById("res-total").textContent = `€${upfrontPocketCash} EUR in pocket (Net spent: €${totalDaily.toFixed(2)})`;
  };

  roundsInput.addEventListener("input", updateCalc);
  snacksInput.addEventListener("input", updateCalc);
  keepMugsInput.addEventListener("input", updateCalc);
  updateCalc();
}

// 5. Interactive Must-Eat & Souvenir Checklist (Backed by checklist.json + localStorage + GitHub API Sync)
const GITHUB_REPO = "jasmah/christmas_market_2026";
const GITHUB_BRANCH = "main";
const CHECKLIST_FILE_PATH = "checklist.json";

function initChecklist() {
  const container = document.getElementById("checklist-container");
  if (!container) return;

  let itemsList = [...CHECKLIST_ITEMS];
  let saved = {};
  try {
    saved = JSON.parse(localStorage.getItem("xmas2026_checklist") || "{}");
  } catch (e) {
    saved = {};
  }

  // Pre-fill GitHub token input if saved in browser localStorage
  const tokenInput = document.getElementById("gh-token-input");
  if (tokenInput) {
    const existingToken = localStorage.getItem("xmas2026_gh_token") || "";
    if (existingToken) tokenInput.value = existingToken;
  }

  const setStatus = (msg, isError = false) => {
    const statusEl = document.getElementById("checklist-sync-status");
    if (statusEl) {
      statusEl.innerHTML = msg;
      statusEl.style.color = isError ? "#991b1b" : "var(--forest-dark)";
    }
  };

  // Check if URL has ?done=chk-1,chk-2 share parameter
  const urlParams = new URLSearchParams(window.location.search);
  const doneParam = urlParams.get("done");
  if (doneParam !== null) {
    const ids = doneParam.split(",").map((s) => s.trim()).filter(Boolean);
    saved = {};
    ids.forEach((id) => {
      saved[id] = true;
    });
    try {
      localStorage.setItem("xmas2026_checklist", JSON.stringify(saved));
    } catch (e) {}
    setStatus("🔗 Synced checklist from shared family URL link!");
  }

  const render = () => {
    container.innerHTML = itemsList
      .map((item) => {
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
      })
      .join("");

    const count = itemsList.filter((i) => !!saved[i.id]).length;
    const counterEl = document.getElementById("checklist-progress");
    if (counterEl) {
      counterEl.textContent = `${count} / ${itemsList.length} Completed`;
    }
  };

  const buildChecklistPayload = () => {
    return {
      updatedAt: new Date().toISOString(),
      repo: GITHUB_REPO,
      branch: GITHUB_BRANCH,
      items: itemsList.map((item) => ({
        id: item.id,
        city: item.city,
        title: item.title,
        desc: item.desc,
        checked: !!saved[item.id]
      }))
    };
  };

  // Fetch checklist.json from repository (supports both local/GitHub Pages & live GitHub API)
  const loadFromRepoJson = async (forceOverwriteLocal = false) => {
    try {
      setStatus("⏳ Reading <code>checklist.json</code> from repository…");
      const res = await fetch(`./${CHECKLIST_FILE_PATH}?t=${Date.now()}`, { cache: "no-store" });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const data = await res.json();

      if (data && Array.isArray(data.items)) {
        itemsList = data.items.map((item) => ({
          id: item.id,
          city: item.city,
          title: item.title,
          desc: item.desc,
          checked: !!item.checked
        }));

        const hasLocalChanges = localStorage.getItem("xmas2026_checklist_dirty") === "true";
        if (forceOverwriteLocal || (!hasLocalChanges && doneParam === null)) {
          saved = {};
          itemsList.forEach((item) => {
            if (item.checked) saved[item.id] = true;
          });
          localStorage.setItem("xmas2026_checklist", JSON.stringify(saved));
          localStorage.setItem("xmas2026_checklist_dirty", "false");
        }
        const stamp = data.updatedAt ? new Date(data.updatedAt).toLocaleString() : "latest";
        setStatus(
          `✅ Loaded <code>checklist.json</code> (Repo updated: ${stamp})${
            hasLocalChanges && !forceOverwriteLocal ? " • Unsaved local edits on this device" : ""
          }`
        );
        render();
      }
    } catch (err) {
      setStatus("📱 Using local browser checklist (<code>checklist.json</code> offline fallback).");
      render();
    }
  };

  window.toggleCheck = function (id) {
    saved[id] = !saved[id];
    try {
      localStorage.setItem("xmas2026_checklist", JSON.stringify(saved));
      localStorage.setItem("xmas2026_checklist_dirty", "true");
    } catch (e) {}
    setStatus("✏️ Saved on this device • Click <strong>☁️ Save to GitHub (checklist.json)</strong> to update repo for everyone.");
    render();
  };

  window.reloadChecklistFromRepo = function () {
    loadFromRepoJson(true);
  };

  window.downloadChecklistJson = function () {
    const payload = buildChecklistPayload();
    const blob = new Blob([JSON.stringify(payload, null, 2)], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "checklist.json";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    setStatus("📥 Downloaded updated <code>checklist.json</code>! Commit this file to your repo to update the default state.");
  };

  window.copyChecklistShareLink = function () {
    const checkedIds = itemsList.filter((i) => !!saved[i.id]).map((i) => i.id).join(",");
    const shareUrl = `${window.location.origin}${window.location.pathname}?done=${encodeURIComponent(checkedIds)}#checklist-section`;
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(shareUrl).then(() => {
        setStatus("🔗 Copied family sync link to clipboard! Paste it into your family chat.");
      });
    } else {
      window.prompt("Copy this family checklist sync link:", shareUrl);
    }
  };

  window.toggleGithubTokenBox = function () {
    const box = document.getElementById("github-token-box");
    if (box) {
      box.style.display = box.style.display === "none" ? "block" : "none";
    }
  };

  window.saveGithubToken = function () {
    const input = document.getElementById("gh-token-input");
    if (!input || !input.value.trim()) {
      setStatus("⚠️ Please paste a valid GitHub Personal Access Token first.", true);
      return;
    }
    localStorage.setItem("xmas2026_gh_token", input.value.trim());
    setStatus("🔑 GitHub token saved privately in this browser! You can now click <strong>☁️ Save to GitHub (checklist.json)</strong>.");
  };

  window.clearGithubToken = function () {
    localStorage.removeItem("xmas2026_gh_token");
    const input = document.getElementById("gh-token-input");
    if (input) input.value = "";
    setStatus("🗑️ Cleared GitHub token from this browser.");
  };

  window.saveChecklistToGitHub = async function () {
    const token = localStorage.getItem("xmas2026_gh_token");
    if (!token) {
      const box = document.getElementById("github-token-box");
      if (box) box.style.display = "block";
      setStatus("🔑 To save directly to <code>checklist.json</code> on GitHub, paste your GitHub token in the setup box below (or use <strong>📥 Download checklist.json</strong>).", true);
      return;
    }

    try {
      setStatus("☁️ Committing updated <code>checklist.json</code> to GitHub repo…");
      const apiUrl = `https://api.github.com/repos/${GITHUB_REPO}/contents/${CHECKLIST_FILE_PATH}`;
      const headers = {
        Accept: "application/vnd.github+json",
        Authorization: `Bearer ${token}`
      };

      // 1. Get current file SHA from GitHub
      let sha = undefined;
      const getRes = await fetch(`${apiUrl}?ref=${GITHUB_BRANCH}`, { headers, cache: "no-store" });
      if (getRes.ok) {
        const fileMeta = await getRes.json();
        sha = fileMeta.sha;
      }

      // 2. Encode UTF-8 JSON to Base64
      const payloadJson = JSON.stringify(buildChecklistPayload(), null, 2);
      const base64Content = btoa(unescape(encodeURIComponent(payloadJson)));

      const count = itemsList.filter((i) => !!saved[i.id]).length;
      const putBody = {
        message: `Update checklist.json (${count}/${itemsList.length} completed)`,
        content: base64Content,
        branch: GITHUB_BRANCH
      };
      if (sha) putBody.sha = sha;

      const putRes = await fetch(apiUrl, {
        method: "PUT",
        headers: {
          ...headers,
          "Content-Type": "application/json"
        },
        body: JSON.stringify(putBody)
      });

      if (!putRes.ok) {
        const errData = await putRes.json().catch(() => ({}));
        throw new Error(errData.message || `GitHub API returned ${putRes.status}`);
      }

      localStorage.setItem("xmas2026_checklist_dirty", "false");
      setStatus(`✅ Saved directly to <code>checklist.json</code> in <code>${GITHUB_REPO}</code> (${count}/${itemsList.length} checked)!`);
    } catch (err) {
      setStatus(`❌ GitHub save failed: ${err.message}. Check your token permissions (Contents: Read & write).`, true);
    }
  };

  render();
  loadFromRepoJson(false);
}
