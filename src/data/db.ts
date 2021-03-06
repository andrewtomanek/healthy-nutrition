const data : {
  bílkoviny: number;
  cena: number;
  id: number;
  image: string;
  kalorie: number;
  množství: number;
  picked: boolean;
  sacharidy: number;
  tuky: number;
  vláknina: number;
}[] = [
  {
    bílkoviny: 1,
    cena: 6,
    id: 1,
    image: "rajčata",
    kalorie: 19,
    množství: 1,
    picked: false,
    sacharidy: 2.9,
    tuky: 0.2,
    vláknina: 1
  },
  {
    bílkoviny: 2.5,
    cena: 6,
    id: 2,
    image: "špenát",
    kalorie: 15,
    množství: 1,
    picked: false,
    sacharidy: 0.6,
    tuky: 0.3,
    vláknina: 2
  },
  {
    bílkoviny: 0.7,
    cena: 15,
    id: 3,
    image: "mandarinky",
    kalorie: 49,
    množství: 1,
    picked: false,
    sacharidy: 10.1,
    tuky: 0.3,
    vláknina: 1.9
  },
  {
    bílkoviny: 26,
    cena: 15,
    id: 4,
    image: "arašídy",
    kalorie: 623,
    množství: 1,
    picked: false,
    sacharidy: 11.2,
    tuky: 52,
    vláknina: 7
  },
  {
    bílkoviny: 1.4,
    cena: 30,
    id: 5,
    image: "meruňky",
    kalorie: 60,
    množství: 1,
    picked: false,
    sacharidy: 11.5,
    tuky: 0.4,
    vláknina: 2.3
  },
  {
    bílkoviny: 11.5,
    cena: 50,
    id: 28,
    image: "párky",
    kalorie: 305,
    množství: 1,
    picked: false,
    sacharidy: 0.7,
    tuky: 29,
    vláknina: 0
  },
  {
    bílkoviny: 0.6,
    cena: 5,
    id: 29,
    image: "tykev",
    kalorie: 17,
    množství: 1,
    picked: false,
    sacharidy: 2.6,
    tuky: 0.3,
    vláknina: 1.2
  },
  {
    bílkoviny: 0.6,
    cena: 7,
    id: 6,
    image: "okurky",
    kalorie: 17,
    množství: 1,
    picked: false,
    sacharidy: 3,
    tuky: 0.1,
    vláknina: 0.5
  },
  {
    bílkoviny: 11.5,
    cena: 50,
    id: 7,
    image: "pizza",
    kalorie: 232,
    množství: 1,
    picked: false,
    sacharidy: 24.5,
    tuky: 9.5,
    vláknina: 1.5
  },
  {
    bílkoviny: 14.2,
    cena: 40,
    id: 8,
    image: "líska",
    kalorie: 667,
    množství: 1,
    picked: false,
    sacharidy: 10.6,
    tuky: 62.5,
    vláknina: 7.5
  },
  {
    bílkoviny: 27,
    cena: 10,
    id: 9,
    image: "slunečnice",
    kalorie: 629,
    množství: 1,
    picked: false,
    sacharidy: 10.5,
    tuky: 53,
    vláknina: 4.5
  },
  {
    bílkoviny: 18.5,
    cena: 60,
    id: 10,
    image: "kešu",
    kalorie: 591,
    množství: 1,
    picked: false,
    sacharidy: 22.5,
    tuky: 46.5,
    vláknina: 7.5
  },
  {
    bílkoviny: 19.5,
    cena: 40,
    id: 11,
    image: "mandle",
    kalorie: 583,
    množství: 1,
    picked: false,
    sacharidy: 6.2,
    tuky: 52,
    vláknina: 10.6
  },
  {
    bílkoviny: 26,
    cena: 20,
    id: 12,
    image: "arašídy",
    kalorie: 623,
    množství: 1,
    picked: false,
    sacharidy: 11.2,
    tuky: 52,
    vláknina: 7
  },
  {
    bílkoviny: 2.5,
    cena: 10,
    id: 13,
    image: "rýže",
    kalorie: 96,
    množství: 1,
    picked: false,
    sacharidy: 20,
    tuky: 0.4,
    vláknina: 0.8
  },
  {
    bílkoviny: 4.5,
    cena: 20,
    id: 14,
    image: "těstoviny",
    kalorie: 99,
    množství: 1,
    picked: false,
    sacharidy: 17.5,
    tuky: 1,
    vláknina: 0.8
  },
  {
    bílkoviny: 4.2,
    cena: 30,
    id: 15,
    image: "špagety",
    kalorie: 117,
    množství: 1,
    picked: false,
    sacharidy: 11.9,
    tuky: 5.9,
    vláknina: 0.5
  },
  {
    bílkoviny: 6,
    cena: 20,
    id: 16,
    image: "wafle",
    kalorie: 459,
    množství: 1,
    picked: false,
    sacharidy: 56,
    tuky: 23.5,
    vláknina: 0.1
  },
  {
    bílkoviny: 9.2,
    cena: 15,
    id: 17,
    image: "croissant",
    kalorie: 478,
    množství: 1,
    picked: false,
    sacharidy: 50.3,
    tuky: 26.3,
    vláknina: 2.3
  },
  {
    bílkoviny: 8.2,
    cena: 5,
    id: 18,
    image: "chleba",
    kalorie: 266,
    množství: 1,
    picked: false,
    sacharidy: 48.8,
    tuky: 3,
    vláknina: 4.7
  },
  {
    bílkoviny: 21,
    cena: 10,
    id: 19,
    image: "hamburger",
    kalorie: 272,
    množství: 1,
    picked: false,
    sacharidy: 2.5,
    tuky: 20,
    vláknina: 0
  },
  {
    bílkoviny: 5.2,
    cena: 20,
    id: 20,
    image: "cupcake",
    kalorie: 484,
    množství: 1,
    picked: false,
    sacharidy: 57.5,
    tuky: 25.8,
    vláknina: 1
  },
  {
    bílkoviny: 4,
    cena: 30,
    id: 21,
    image: "dort",
    kalorie: 384,
    množství: 1,
    picked: false,
    sacharidy: 41,
    tuky: 22.5,
    vláknina: 1.4
  },
  {
    bílkoviny: 5.3,
    cena: 20,
    id: 22,
    image: "čokoláda",
    kalorie: 513,
    množství: 1,
    picked: false,
    sacharidy: 49,
    tuky: 33,
    vláknina: 1.1
  },
  {
    bílkoviny: 4.5,
    cena: 20,
    id: 23,
    image: "koblihy",
    kalorie: 440,
    množství: 1,
    picked: false,
    sacharidy: 50,
    tuky: 24.5,
    vláknina: 1.5
  },
  {
    bílkoviny: 0.1,
    cena: 30,
    id: 24,
    image: "lízatka",
    kalorie: 385,
    množství: 1,
    picked: false,
    sacharidy: 95,
    tuky: 0,
    vláknina: 0
  },
  {
    bílkoviny: 26.1,
    cena: 20,
    id: 25,
    image: "sýr",
    kalorie: 313,
    množství: 1,
    picked: false,
    sacharidy: 0,
    tuky: 23.4,
    vláknina: 0
  },
  {
    bílkoviny: 9.4,
    cena: 15,
    id: 26,
    image: "vejce",
    kalorie: 144,
    množství: 1,
    picked: false,
    sacharidy: 2.2,
    tuky: 11.1,
    vláknina: 0
  },
  {
    bílkoviny: 3.8,
    cena: 5,
    id: 27,
    image: "jogurt",
    kalorie: 65,
    množství: 1,
    picked: false,
    sacharidy: 4.5,
    tuky: 3.5,
    vláknina: 0
  },
  {
    bílkoviny: 3.5,
    cena: 15,
    id: 28,
    image: "kukuřice",
    kalorie: 121,
    množství: 1,
    picked: false,
    sacharidy: 22.5,
    tuky: 1,
    vláknina: 3.5
  },
  {
    bílkoviny: 19.5,
    cena: 70,
    id: 29,
    image: "pistácie",
    kalorie: 649,
    množství: 1,
    picked: false,
    sacharidy: 24,
    tuky: 51.5,
    vláknina: 9.4
  },
  {
    bílkoviny: 2,
    cena: 5,
    id: 30,
    image: "brambory",
    kalorie: 82,
    množství: 1,
    picked: false,
    sacharidy: 17,
    tuky: 0.1,
    vláknina: 2.5
  },
  {
    bílkoviny: 7.6,
    cena: 8,
    id: 31,
    image: "fazole",
    kalorie: 110,
    množství: 1,
    picked: false,
    sacharidy: 18.1,
    tuky: 0.7,
    vláknina: 8.9
  },
  {
    bílkoviny: 19.5,
    cena: 40,
    id: 32,
    image: "salám",
    kalorie: 375,
    množství: 1,
    picked: false,
    sacharidy: 0.1,
    tuky: 33,
    vláknina: 0
  }
];

export default data;
