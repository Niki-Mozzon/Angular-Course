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
  new Type('ground', '133, 68, 25', '255, 153, 0'),
  new Type('flying', '97b8ff', '547dd6'),
  new Type('rock', 'cac09d', 'a38020'),
  new Type('ice', 'bff5ff', '27e6ff'),
  new Type('bug', 'cce464', 'beff27'),
  new Type('psychic', 'e7b5ca', 'c06592'),
  new Type('electric', 'f7eb47', 'fbff00'),
  new Type('fire', 'ff7300', 'ffa600'),
  new Type('dark', '6d6d6d', '291d33'),
  new Type('poison', 'ab76c0', '562083'),
  new Type('fighting', 'd84a4a', '70352b'),
  new Type('water', '00a2ff', '142955'),
  new Type('metal', '#364e4b', '#406e6a', '#3a4952'),
  new Type('fairy', 'd84a4a', '70352b'),
  new Type('normal', 'd84a4a', '70352b'),
  new Type('grass', 'd84a4a', '70352b'),
  new Type('dragon', 'd84a4a', '70352b'),
  new Type('ghost', 'd84a4a', '70352b')
];
