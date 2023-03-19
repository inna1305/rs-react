class Card {
  _name: string;
  _birthday: Date;
  _placeOfBirth: Place;
  _dimersions: Dimension[];
  _type: Type;
  _photo: string;

  constructor(name: string, birthday: Date, placeOfBirth: Place, dimersions: Dimension[], type: Type, photo: string) {
    this._name = name;
    this._birthday = birthday;
    this._placeOfBirth = placeOfBirth;
    this._dimersions = dimersions;
    this._type = type;
    this._photo = photo;
  }
}

enum Place {
  Earth = 'Earth',
  Gromflom = 'Gromflom',
  Miniverse = 'Miniverse',
  Space = 'Space',
  Unknown = 'Unknown'
}

enum Dimension {
  DimensionC137,
  DimensionC500A,
  Dimension1984,
}

type Type = 'human' | 'alien';