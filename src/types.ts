import React from 'react';
export interface ICard {
  name: string;
  birthday: Date;
  tactility: Tactility;
  features: Features[];
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
  'Different' = 'Different',
}

export interface InputProps {
  inputRef?: React.RefObject<HTMLInputElement>;
  style?: React.CSSProperties;
}

export interface IState {
  cards: ICard[];
  nameValue: string | null;
  dateValue: Date | null;
  tactilityValue: Tactility | null;
  featuresValues: Features[] | null;
  typeValue: AnimalType | null;
  photoValue: string | null;
  nameWarning: boolean;
  dateWarning: boolean;
}
