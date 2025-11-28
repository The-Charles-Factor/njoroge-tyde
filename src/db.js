import Dexie from 'dexie';

// create DB
export const db = new Dexie('TydeWatchDB');

db.version(1).stores({
  items: '++id, code, name, category, section, price, lowerPrice, color, qty'
});

// Actual items data (replaced sample items)
export const SAMPLE_ITEMS = [
  {
    "code": "1180X",
    "name": "Brimix normal basin tap ",
    "color": "Black ",
    "price": 2500,
    "lowerPrice": 2300,
    "qty": 0,
    "category": "Basin tap",
    "section": "Left side",
    "id": 18
  },
  {
    "code": "N299",
    "name": "Nemsi double toothbrush holder ",
    "color": "Silver ",
    "price": 1700,
    "lowerPrice": 1600,
    "qty": 0,
    "category": "Toothbrush holder ",
    "section": "Centre ",
    "id": 19
  },
  {
    "code": "N299B",
    "name": "Nemsi double toothbrush holder ",
    "color": "Black ",
    "price": 1800,
    "lowerPrice": 1700,
    "qty": 0,
    "category": "Toothbrush holder ",
    "section": "Central",
    "id": 20
  },
  {
    "code": "6800K-64",
    "name": "White glass & gold toothbrush holder ",
    "color": "Gold and white ",
    "price": 2500,
    "lowerPrice": 2400,
    "qty": 2,
    "category": "Toothbrush holder ",
    "section": "Central ",
    "id": 21
  },
  {
    "code": "N300",
    "name": "Toilet brush ",
    "color": "Gray",
    "price": 2100,
    "lowerPrice": 2000,
    "qty": 1,
    "category": "Toilet cleaner brush ",
    "section": "Centre block ",
    "id": 22
  },
  {
    "code": "N205B",
    "name": "Toilet brush ",
    "color": "Black ",
    "price": 1800,
    "lowerPrice": 1500,
    "qty": 1,
    "category": "Toilet brush ",
    "section": "Centre block ",
    "id": 23
  },
  {
    "code": "N205 ",
    "name": "Toilet brush ",
    "color": "Silver ",
    "price": 1700,
    "lowerPrice": 1500,
    "qty": 2,
    "category": "Toilet brush ",
    "section": "",
    "id": 24
  },
  {
    "code": "N146G",
    "name": "Toilet brush ",
    "color": "Gold ",
    "price": 1500,
    "lowerPrice": 1500,
    "qty": 1,
    "category": "Toliet brush ",
    "section": "Centre block ",
    "id": 25
  },
  {
    "code": "N332B",
    "name": "Nemsi floor drain ",
    "color": "Black",
    "price": 2500,
    "lowerPrice": 2000,
    "qty": 2,
    "category": "Floor drain ",
    "section": "Centre block ",
    "id": 26
  },
  {
    "code": "N151B",
    "name": "Square floor drain ",
    "color": "Black ",
    "price": 850,
    "lowerPrice": 830,
    "qty": 0,
    "category": "Floor drain ",
    "section": "Floor drain ",
    "id": 27
  },
  {
    "code": "N148",
    "name": "Square side outlet floor drain ",
    "color": "Silver ",
    "price": 650,
    "lowerPrice": 600,
    "qty": 2,
    "category": "Floor drain ",
    "section": "Centre block ",
    "id": 28
  },
  {
    "code": "N330B",
    "name": "Double square floor drain ",
    "color": "Black ",
    "price": 1000,
    "lowerPrice": 950,
    "qty": 1,
    "category": "Floor drain ",
    "section": "Centre block ",
    "id": 29
  },
  {
    "code": "N331",
    "name": "Rectabgle floor drain ",
    "color": "Silver shiny ",
    "price": 1000,
    "lowerPrice": 950,
    "qty": 1,
    "category": "Floor drain ",
    "section": "Centre block ",
    "id": 30
  },
  {
    "code": "N294",
    "name": "Rectangle + circle floor drain ",
    "color": "Shiny silver ",
    "price": 2200,
    "lowerPrice": 1800,
    "qty": 1,
    "category": "Floor drain ",
    "section": "Centre block ",
    "id": 31
  },
  {
    "code": "N313M",
    "name": "Single toothbrush holder ",
    "color": "Silver tough ",
    "price": 900,
    "lowerPrice": null,
    "qty": 0,
    "category": "Toothbrush holder ",
    "section": "Centre block ",
    "id": 32
  },
  {
    "code": "N313B",
    "name": "Single toothbrush holder ",
    "color": "Black ",
    "price": 900,
    "lowerPrice": 850,
    "qty": 0,
    "category": "Toothbrush holder ",
    "section": "",
    "id": 33
  },
  {
    "code": "N036",
    "name": "Lined rectangular soapdish ",
    "color": "Silver ",
    "price": 1300,
    "lowerPrice": 1100,
    "qty": 1,
    "category": "Soap dish ",
    "section": "",
    "id": 34
  },
  {
    "code": "N334AB",
    "name": "Nemsi carved soap dish ",
    "color": "Dark gold ",
    "price": 1200,
    "lowerPrice": 1150,
    "qty": 1,
    "category": "Soap dish ",
    "section": "",
    "id": 35
  },
  {
    "code": "N147",
    "name": "Matt soap dish ",
    "color": "Silver rough ",
    "price": 500,
    "lowerPrice": 450,
    "qty": 1,
    "category": "Soap dish ",
    "section": "",
    "id": 36
  },
  {
    "code": "N294",
    "name": "Nemsi Bottle-like Soap dispenser ",
    "color": "Black ",
    "price": 2200,
    "lowerPrice": 2000,
    "qty": 1,
    "category": "Soap dispenser ",
    "section": "",
    "id": 37
  },
  {
    "code": "N277",
    "name": "Nemsi lined Saop dish ",
    "color": "Black & gold ",
    "price": 1100,
    "lowerPrice": null,
    "qty": 0,
    "category": "Soap dish ",
    "section": "",
    "id": 38
  },
  {
    "code": "N233",
    "name": "Nemsi soap dish ",
    "color": "Silver shiny ",
    "price": 1400,
    "lowerPrice": null,
    "qty": 0,
    "category": "Soap dish ",
    "section": "",
    "id": 39
  },
  {
    "code": "6100k-69",
    "name": "Pure Gold soap dish ",
    "color": "Gold pure ",
    "price": 1500,
    "lowerPrice": null,
    "qty": 0,
    "category": "Soap dish ",
    "section": "",
    "id": 40
  },
  {
    "code": "GJS6004G",
    "name": "Huma rectangular soap dish ",
    "color": "Silver shiny ",
    "price": 900,
    "lowerPrice": null,
    "qty": 0,
    "category": "Soap dish ",
    "section": "",
    "id": 41
  },
  {
    "code": "null",
    "name": "Lirlee automatic soap dispenser ",
    "color": "White",
    "price": 3000,
    "lowerPrice": 2500,
    "qty": 0,
    "category": "Soap dispenser ",
    "section": "",
    "id": 42
  },
  {
    "code": "N287B",
    "name": "Nemsi soap dispenser ",
    "color": "Black ",
    "price": 2500,
    "lowerPrice": null,
    "qty": 0,
    "category": "Soap dispenser ",
    "section": "",
    "id": 43
  },
  {
    "code": "N288",
    "name": "Nemsi soap dispenser ",
    "color": "White pure ",
    "price": 2500,
    "lowerPrice": 2400,
    "qty": 0,
    "category": "Soap dispenser ",
    "section": "",
    "id": 44
  },
  {
    "code": "N319",
    "name": "Nemsi circular tissue holder ",
    "color": "White & black ",
    "price": 2500,
    "lowerPrice": null,
    "qty": 0,
    "category": "Tissue holder ",
    "section": "",
    "id": 45
  },
  {
    "code": "N287",
    "name": "Nemsi soap dispenser ",
    "color": "White ",
    "price": 1600,
    "lowerPrice": null,
    "qty": 0,
    "category": "Soap dispenser ",
    "section": "",
    "id": 46
  },
  {
    "code": "N026B",
    "name": "Nemsi double toothbrush holder with round glass ",
    "color": "Black and silver ",
    "price": 1200,
    "lowerPrice": null,
    "qty": 0,
    "category": "Toothbrush holder ",
    "section": "",
    "id": 47
  },
  {
    "code": "null ",
    "name": "Brimix opaque glass single T.B.H",
    "color": "Silver and opaque glass ",
    "price": 800,
    "lowerPrice": null,
    "qty": 0,
    "category": "Toothbrush holder ",
    "section": "",
    "id": 48
  },
  {
    "code": "1-1320",
    "name": "Nemsi Hand dryer ",
    "color": "White pure ",
    "price": 7500,
    "lowerPrice": null,
    "qty": 0,
    "category": "Hand dryer ",
    "section": "",
    "id": 49
  },
  {
    "code": "N068",
    "name": "Nemsi metal saviet holder ",
    "color": "Silver ",
    "price": 3000,
    "lowerPrice": null,
    "qty": 0,
    "category": "Saviet holder ",
    "section": "",
    "id": 50
  },
  {
    "code": "6020K",
    "name": "Huma kitchen mixer ",
    "color": "Black ",
    "price": 7500,
    "lowerPrice": 7300,
    "qty": 0,
    "category": "Kitchen mixer",
    "section": "",
    "id": 51
  },
  {
    "code": "6019C",
    "name": "Huma one-way kitchen mixer ",
    "color": "Silver pure ",
    "price": 7500,
    "lowerPrice": 7000,
    "qty": 0,
    "category": "Kitchen mixer ",
    "section": "",
    "id": 52
  },
  {
    "code": "null",
    "name": "Nemsi pull down ",
    "color": "Silver rough ",
    "price": 6800,
    "lowerPrice": 6500,
    "qty": 0,
    "category": "Kitchen mixer ",
    "section": "",
    "id": 53
  },
  {
    "code": "6141",
    "name": "Brimix pull out kitchen mixer ",
    "color": "Silver shiny ",
    "price": 9500,
    "lowerPrice": 9000,
    "qty": 0,
    "category": "Kitchen mixer ",
    "section": "",
    "id": 54
  },
  {
    "code": "R501",
    "name": "Ezuri pull out kitchen mixer ",
    "color": "Chrome ",
    "price": 5500,
    "lowerPrice": 5000,
    "qty": 0,
    "category": "Kitchen mixer ",
    "section": "",
    "id": 55
  },
  {
    "code": "KM2051",
    "name": "Nemsi flex mixer faucet ",
    "color": "Antique ",
    "price": 5000,
    "lowerPrice": 4500,
    "qty": 0,
    "category": "Kitchen mixer ",
    "section": "",
    "id": 56
  },
  {
    "code": "WD-pt-2004",
    "name": "Ezuri non mixer kitchen tap ",
    "color": "Silver shiny ",
    "price": 2000,
    "lowerPrice": null,
    "qty": 0,
    "category": "Kitchen nonmixer ",
    "section": "",
    "id": 57
  },
  {
    "code": "null",
    "name": "Lab tap black and silver ",
    "color": "Black and silver ",
    "price": 2000,
    "lowerPrice": 1800,
    "qty": 0,
    "category": "Lab tap ",
    "section": "",
    "id": 58
  },
  {
    "code": "Lr6225",
    "name": "Lirlee basin push tap",
    "color": "Silver shiny ",
    "price": 1800,
    "lowerPrice": null,
    "qty": 0,
    "category": "Basin tap ",
    "section": "",
    "id": 59
  },
  {
    "code": "null",
    "name": "Brimix basin push tap ",
    "color": "Silver shiny ",
    "price": 2500,
    "lowerPrice": 2300,
    "qty": 0,
    "category": "Basin tap ",
    "section": "",
    "id": 60
  },
  {
    "code": "LR6202",
    "name": "Lirlee long lever basin tap ",
    "color": "Silver shiny ",
    "price": 2500,
    "lowerPrice": null,
    "qty": 0,
    "category": "Basin tap ",
    "section": "",
    "id": 61
  },
  {
    "code": "BM2050",
    "name": "Nemsi large mixer basin tap ",
    "color": "Antique ",
    "price": 4000,
    "lowerPrice": 3500,
    "qty": 0,
    "category": "Basin tap ",
    "section": "",
    "id": 62
  },
  {
    "code": "KS1009",
    "name": "Nemsi large basin mixer tap ",
    "color": "Black ",
    "price": 3500,
    "lowerPrice": null,
    "qty": 0,
    "category": "Basin tap ",
    "section": "",
    "id": 63
  },
  {
    "code": "LR6602B",
    "name": "Lirlee basin tap - mixer ",
    "color": "Black ",
    "price": 3000,
    "lowerPrice": null,
    "qty": 0,
    "category": "Basin tap ",
    "section": "",
    "id": 64
  },
  {
    "code": "7815X",
    "name": "Brimix basin mixer tap ",
    "color": "Black ",
    "price": 4500,
    "lowerPrice": null,
    "qty": 0,
    "category": "Basin tap ",
    "section": "",
    "id": 65
  },
  {
    "code": "EG6024",
    "name": "Largest nemsi basin mixer tap ",
    "color": "Antique large ",
    "price": 5000,
    "lowerPrice": 4500,
    "qty": 0,
    "category": "Basin tap ",
    "section": "",
    "id": 66
  },
  {
    "code": "3002K",
    "name": "Huma Mixer basin tap ",
    "color": "Black ",
    "price": 4000,
    "lowerPrice": 3800,
    "qty": 0,
    "category": "Basin tap ",
    "section": "",
    "id": 67
  },
  {
    "code": "GT015",
    "name": "Centamily long neck basin mixer tap ",
    "color": "Gold champagne ",
    "price": 6500,
    "lowerPrice": 6000,
    "qty": 0,
    "category": "Basin tap ",
    "section": "",
    "id": 68
  },
  {
    "code": "3002H",
    "name": "Huma small basin mixer ",
    "color": "Antique ",
    "price": 4000,
    "lowerPrice": 3500,
    "qty": 0,
    "category": "Basin tap ",
    "section": "",
    "id": 69
  },
  {
    "code": "null",
    "name": "Nemsi Three way shower mixer ",
    "color": "Silver shiny ",
    "price": 12000,
    "lowerPrice": 11000,
    "qty": 0,
    "category": "Shower mixer ",
    "section": "",
    "id": 70
  },
  {
    "code": "KS1058B",
    "name": "Nemsi piano Shower mixer ",
    "color": "Black ",
    "price": 12000,
    "lowerPrice": 11000,
    "qty": 0,
    "category": "Shower mixer ",
    "section": "",
    "id": 71
  },
  {
    "code": "KS003",
    "name": "Small circular shower head ",
    "color": "Silver shiny ",
    "price": 2000,
    "lowerPrice": 1800,
    "qty": 0,
    "category": "Shower head ",
    "section": "",
    "id": 72
  },
  {
    "code": "KS009B",
    "name": "Nemsi square shower head ",
    "color": "Black ",
    "price": 3800,
    "lowerPrice": 3500,
    "qty": 0,
    "category": "Shower head ",
    "section": "",
    "id": 73
  },
  {
    "code": "Ks009",
    "name": "Square nemsi shower head ",
    "color": "Silver shiny ",
    "price": 3700,
    "lowerPrice": 3500,
    "qty": 0,
    "category": "Shower head ",
    "section": "",
    "id": 74
  },
  {
    "code": "Ks005",
    "name": "Square thick square ",
    "color": "Silver & white ",
    "price": 2800,
    "lowerPrice": 2500,
    "qty": 0,
    "category": "Shower head ",
    "section": "",
    "id": 75
  },
  {
    "code": "R-4009",
    "name": "Ezuri shower head ",
    "color": "Silver dull ",
    "price": 1800,
    "lowerPrice": 1500,
    "qty": 0,
    "category": "Shower head ",
    "section": "",
    "id": 76
  },
  {
    "code": "null original ",
    "name": "Enershower instant shower ",
    "color": "Blue &. White ",
    "price": 3500,
    "lowerPrice": 3400,
    "qty": 0,
    "category": "Instant shower ",
    "section": "",
    "id": 77
  },
  {
    "code": "null / aftermarket ",
    "name": "Enershower generic instant shower ",
    "color": "Blue & white ",
    "price": 2700,
    "lowerPrice": null,
    "qty": 0,
    "category": "Instant shower ",
    "section": "",
    "id": 78
  },
  {
    "code": "null ",
    "name": "Enerforas",
    "color": "White plain ",
    "price": 3000,
    "lowerPrice": null,
    "qty": 0,
    "category": "Instant shower ",
    "section": "",
    "id": 79
  },
  {
    "code": "null ",
    "name": "Nemsi water pump for shower ",
    "color": "Black & white ",
    "price": 5000,
    "lowerPrice": null,
    "qty": 0,
    "category": "Pump ",
    "section": "",
    "id": 80
  },
  {
    "code": "PB207",
    "name": "Nemsi basin push tap",
    "color": "Silver shiny ",
    "price": 2500,
    "lowerPrice": 2300,
    "qty": 0,
    "category": "Basin tap ",
    "section": "",
    "id": 81
  },
  {
    "code": "WB9041",
    "name": "Frencia oval countertop basin ",
    "color": "White ",
    "price": 7500,
    "lowerPrice": 6500,
    "qty": 0,
    "category": "Countertop basin ",
    "section": "",
    "id": 82
  },
  {
    "code": "WB9156",
    "name": "Frencia square WB countertop ",
    "color": "White ",
    "price": 6000,
    "lowerPrice": 5500,
    "qty": 0,
    "category": "Countertop basin",
    "section": "",
    "id": 83
  },
  {
    "code": "null",
    "name": "Circular centamily WB countertop ",
    "color": "White ",
    "price": 9000,
    "lowerPrice": 8500,
    "qty": 0,
    "category": "Countertop basin ",
    "section": "",
    "id": 84
  },
  {
    "code": "null",
    "name": "Centamily gold WB countertop ",
    "color": "Champagne gold & white ",
    "price": 14000,
    "lowerPrice": null,
    "qty": 0,
    "category": "Countertop basin ",
    "section": "",
    "id": 85
  },
  {
    "code": "null",
    "name": "Lirlee Arabic shower & Royal ",
    "color": "Antique ",
    "price": 1300,
    "lowerPrice": 1200,
    "qty": 0,
    "category": "Arabic shower ",
    "section": "",
    "id": 86
  },
  {
    "code": "2113XT",
    "name": "Bathtub mixer and telephone shower ",
    "color": "Silver ",
    "price": 7500,
    "lowerPrice": null,
    "qty": 0,
    "category": "Shower mixer ",
    "section": "",
    "id": 87
  },
  {
    "code": "LL3009C",
    "name": "Huma concealed bathroom tap mixer ",
    "color": "Orange & silver ",
    "price": 6000,
    "lowerPrice": null,
    "qty": 0,
    "category": "Bathroom tap ",
    "section": "",
    "id": 88
  },
  {
    "code": "null",
    "name": "PPR Union 63mm (2 inch size) ",
    "color": "Green ",
    "price": 240,
    "lowerPrice": null,
    "qty": 0,
    "category": "Union",
    "section": "",
    "id": 89
  },
  {
    "code": "null",
    "name": "PPR Union 32mm 1 inch size ",
    "color": "Green ",
    "price": 100,
    "lowerPrice": null,
    "qty": 0,
    "category": "Union ",
    "section": "",
    "id": 90
  },
  {
    "code": "null",
    "name": "PPR Union 20mm (1/2 inch size) ",
    "color": "Green ",
    "price": 40,
    "lowerPrice": null,
    "qty": 0,
    "category": "Union ",
    "section": "",
    "id": 91
  },
  {
    "code": "null ",
    "name": "PPR female adapter Tee (25mm)",
    "color": "Green",
    "price": 70,
    "lowerPrice": null,
    "qty": 0,
    "category": "Tee",
    "section": "",
    "id": 92
  },
  {
    "code": "null ",
    "name": "PPR plain tee (25mm)",
    "color": "Green ",
    "price": 40,
    "lowerPrice": null,
    "qty": 0,
    "category": "Tee ",
    "section": "",
    "id": 93
  },
  {
    "code": "null ",
    "name": "PPR plain socket - 25mm ",
    "color": "Green ",
    "price": 20,
    "lowerPrice": null,
    "qty": 0,
    "category": "Socket ",
    "section": "",
    "id": 94
  },
  {
    "code": " null",
    "name": "PPR reducer 40x32",
    "color": "Green ",
    "price": 80,
    "lowerPrice": null,
    "qty": 0,
    "category": "Reducer ",
    "section": "",
    "id": 95
  },
  {
    "code": "null",
    "name": "Small PPR reducer (32x25) ",
    "color": "Green",
    "price": 70,
    "lowerPrice": null,
    "qty": 0,
    "category": "Reducer ",
    "section": "",
    "id": 96
  },
  {
    "code": "null",
    "name": "Ezuri angle valve ",
    "color": "Silver ",
    "price": 350,
    "lowerPrice": null,
    "qty": 0,
    "category": "Angle valve ",
    "section": "",
    "id": 97
  },
  {
    "code": "null ",
    "name": "Paigela angle valve ",
    "color": "Silver ",
    "price": 250,
    "lowerPrice": null,
    "qty": 0,
    "category": "Angle valve ",
    "section": "",
    "id": 98
  },
  {
    "code": "null",
    "name": "Lirlee angle valve ",
    "color": "Silver ",
    "price": 300,
    "lowerPrice": null,
    "qty": 0,
    "category": "Angle valve ",
    "section": "",
    "id": 99
  },
  {
    "code": "null ",
    "name": "Brimix angle valve ",
    "color": "Silver ",
    "price": 550,
    "lowerPrice": null,
    "qty": 0,
    "category": "Angle valve ",
    "section": "",
    "id": 100
  },
  {
    "code": "null ",
    "name": "Brimix angle valve ",
    "color": "Black ",
    "price": 600,
    "lowerPrice": null,
    "qty": 0,
    "category": "Angle valve ",
    "section": "",
    "id": 101
  },
  {
    "code": "null ",
    "name": "Carpe Diem angle valve ",
    "color": "Silver ",
    "price": 350,
    "lowerPrice": null,
    "qty": 0,
    "category": "Angle valve ",
    "section": "",
    "id": 102
  },
  {
    "code": "null",
    "name": "Nemsi plastic angle valve ",
    "color": "White ",
    "price": 350,
    "lowerPrice": null,
    "qty": 0,
    "category": "Angle valve ",
    "section": "",
    "id": 103
  },
  {
    "code": "null ",
    "name": "Ezuri Cross angle valve ",
    "color": "",
    "price": 550,
    "lowerPrice": null,
    "qty": 0,
    "category": "Angle valve ",
    "section": "",
    "id": 104
  },
  {
    "code": "null",
    "name": "Brimix cross angle valve ",
    "color": "Silver & black ",
    "price": 600,
    "lowerPrice": null,
    "qty": 0,
    "category": "Angle valve ",
    "section": "",
    "id": 105
  },
  {
    "code": "null",
    "name": "Chrome flex tube (lirlee) ",
    "color": "Antique ",
    "price": 250,
    "lowerPrice": null,
    "qty": 0,
    "category": "Flex ",
    "section": "",
    "id": 106
  },
  {
    "code": "null ",
    "name": "White flex tube ",
    "color": "White ",
    "price": 150,
    "lowerPrice": null,
    "qty": 0,
    "category": "Flex ",
    "section": "",
    "id": 107
  },
  {
    "code": "null",
    "name": "Yellow flex tube ",
    "color": "Yellow ",
    "price": 150,
    "lowerPrice": null,
    "qty": 0,
    "category": "Flex ",
    "section": "",
    "id": 108
  },
  {
    "code": "R37L",
    "name": "Ezuri kitchen mixer ",
    "color": "Antique ",
    "price": 5000,
    "lowerPrice": 4500,
    "qty": 0,
    "category": "Kitchen mixer ",
    "section": "",
    "id": 109
  },
  {
    "code": "null ",
    "name": "WK big size cabinet ",
    "color": "White & gray ",
    "price": 23000,
    "lowerPrice": 20500,
    "qty": 0,
    "category": "Bathroom cabinet ",
    "section": "",
    "id": 110
  },
  {
    "code": "null",
    "name": "Round LED mirror ",
    "color": "Gray & white lighting ",
    "price": 6500,
    "lowerPrice": 6000,
    "qty": 1,
    "category": "LED light ",
    "section": "",
    "id": 111
  },
  {
    "code": "null",
    "name": "Rectangular LED light ",
    "color": "Gray & white lighting ",
    "price": 4500,
    "lowerPrice": 4000,
    "qty": 0,
    "category": "LED light ",
    "section": "",
    "id": 112
  },
  {
    "code": "null",
    "name": "Centamily Single bowl + drain (large) ",
    "color": "Gray",
    "price": 7500,
    "lowerPrice": 7000,
    "qty": 0,
    "category": "Kitchen sink",
    "section": "",
    "id": 113
  },
  {
    "code": "null",
    "name": "Centamily Double bowl + drain ",
    "color": "Gray ",
    "price": 7500,
    "lowerPrice": 7200,
    "qty": 0,
    "category": "Kitchen sink ",
    "section": "",
    "id": 114
  },
  {
    "code": "null",
    "name": "Centamily Double bowl without drain ",
    "color": "Gray",
    "price": 9000,
    "lowerPrice": 8500,
    "qty": 0,
    "category": "Kitchen sink",
    "section": "",
    "id": 115
  },
  {
    "code": "null",
    "name": "Large size mirror ",
    "color": "Black ",
    "price": 8500,
    "lowerPrice": 8300,
    "qty": 0,
    "category": "Mirror",
    "section": "",
    "id": 116
  },
  {
    "code": "null",
    "name": "WK medium size cabinet ",
    "color": "White ",
    "price": 7500,
    "lowerPrice": 7000,
    "qty": 0,
    "category": "Cabinet ",
    "section": "",
    "id": 117
  },
  {
    "code": "null",
    "name": "Huma single bowl small sink ",
    "color": "Gray",
    "price": 3500,
    "lowerPrice": 3000,
    "qty": 0,
    "category": "Kitchen sink ",
    "section": "",
    "id": 118
  },
  {
    "code": "null",
    "name": "Frencia single bowl + bowl sink ",
    "color": "Silver ",
    "price": 3500,
    "lowerPrice": 3000,
    "qty": 0,
    "category": "Kitchen sink ",
    "section": "",
    "id": 119
  },
  {
    "code": "KS1005",
    "name": "Nemsi normal kitchen tap",
    "color": "Silver ",
    "price": 2500,
    "lowerPrice": null,
    "qty": 0,
    "category": "Kitchen tap ",
    "section": "",
    "id": 120
  },
  {
    "code": "6152H",
    "name": "Brimix two-way, pull-out kit. mixer ",
    "color": "Black ",
    "price": 9500,
    "lowerPrice": 9000,
    "qty": 0,
    "category": "Kitchen mixer ",
    "section": "",
    "id": 121
  },
  {
    "code": "4822L",
    "name": "Brimix flexible kit mixer ",
    "color": "Antique ",
    "price": 5500,
    "lowerPrice": 4500,
    "qty": 0,
    "category": "Kitchen mixer ",
    "section": "",
    "id": 122
  },
  {
    "code": "6...",
    "name": "Nemsi pull-out waterfall mixer ",
    "color": "Gray antique ",
    "price": 7500,
    "lowerPrice": 7000,
    "qty": 0,
    "category": "Kitchen mixer ",
    "section": "",
    "id": 123
  },
  {
    "code": "N312",
    "name": "Nemsi glass single bathroom shelve ",
    "color": "Gray ",
    "price": 2000,
    "lowerPrice": 1800,
    "qty": 0,
    "category": "Bathroom shelve ",
    "section": "",
    "id": 124
  },
  {
    "code": "N333B",
    "name": "Nemsi mirror shelve with stand ",
    "color": "Black ",
    "price": 1200,
    "lowerPrice": 1000,
    "qty": 0,
    "category": "Bathroom shelve ",
    "section": "",
    "id": 125
  },
  {
    "code": "N302",
    "name": "Nemsi double mirror shelve ",
    "color": "Silver ",
    "price": 2200,
    "lowerPrice": 2000,
    "qty": 0,
    "category": "Bathroom shelve ",
    "section": "",
    "id": 126
  },
  {
    "code": "N-32",
    "name": "Nemsi star wall kitchen tap ",
    "color": "Silver ",
    "price": 3500,
    "lowerPrice": 3000,
    "qty": 1,
    "category": "Kitchen Tap ",
    "section": "",
    "id": 127
  }
];

// Initialize DB with actual items if empty
export async function ensureSeeded() {
  await db.items.clear();        // remove all old items
  await db.items.bulkAdd(SAMPLE_ITEMS); // add fresh items
}





// export async function ensureSeeded() {
//   const count = await db.items.count();
//   if (count === 0) {
//     await db.items.bulkAdd(SAMPLE_ITEMS);
//   }
// }
