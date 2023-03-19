export interface Card {
  name: string;
  birthday: Date;
  placeOfBirth: Place;
  dimensions: Dimension[];
  // dimensions: string;
  type: Type;
  photo: string;
}

export enum Place {
  Earth = 'Earth',
  Gromflom = 'Gromflom',
  Miniverse = 'Miniverse',
  Space = 'Space',
  Unknown = 'Unknown',
}

export enum Dimension {
  DimensionC137 = 'DimensionC137',
  DimensionC500A = 'DimensionC500A',
  Dimension1984 = 'Dimension1984',
}

export type Type = 'human' | 'alien';
