export class Type {
  name: string = '';
  primaryColor: string = '';
  secondaryColor: string = '';
  mainColor: string = '';
  constructor(
    name: string,
    mainColor: string,
    primaryColor: string,
    secondaryColor: string
  ) {
    this.name = name;
    this.mainColor = mainColor;
    this.primaryColor = primaryColor;
    this.secondaryColor = secondaryColor;
  }
}

export const types: Type[] = [
  new Type('ground', 'c59000', 'ffbb00', '854419'),
  new Type('flying', '7e9ee3', '4574d8', 'b7ceff'),
  new Type('rock', 'bc9f50', 'cac09d', '917118'),
  new Type('ice', 'a0edf7', 'bff5ff', '27e6ff'),
  new Type('bug', 'abc248', 'cddf7c', '72a200'),
  new Type('psychic', 'df76a2', 'e7b5ca', 'c06592'),
  new Type('electric', 'ffee00', 'f7eb47', 'c9cd00'),
  new Type('fire', 'ff8c00', 'ffa600', 'ff7300'),
  new Type('dark', '525252', '6d6d6d', '291d33'),
  new Type('poison', '8a3ca9', 'ab76c0', '562083'),
  new Type('fighting', '933434', 'd84a4a', '70352b'),
  new Type('water', '2065bf', '00a2ff', '142955'),
  new Type('steel', '475654', '5b6d8c', '3a4643'),
  new Type('fairy', 'f2a3d5', 'ebb6d8', 'e278bb'),
  new Type('normal', 'b8b8b8', 'c6c6c6', '868686'),
  new Type('grass', '58c824', '54e510', '4f8935'),
  new Type('dragon', '260c98', '4f2de3', '220a8d'),
  new Type('ghost', '4b1f72', '612e8d', '2d074f'),
];
