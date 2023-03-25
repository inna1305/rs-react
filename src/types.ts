export interface Card {
  name: string;
  birthday: Date;
  tactility: Tactility;
  features: Features[];
  // dimensions: string;
  type: AnimalType;
  photo: string;
}

export enum Tactility {
  LoveToHug = 'Love To Hug',
  HardToGet = 'Hard To Get',
}

export enum Features {
  FluffyCheeks = 'FluffyCheeks',
  FatBelly = 'FatBelly',
  BoomingVoice = 'BoomingVoice',
  LongMoustache = 'LongMoustache',
}

export enum AnimalType {
  'Cat' = 'Cat',
  'Dog' = 'Dog',
  'Bird' = 'Bird',
  'Rodent' = 'Rodent',
}
