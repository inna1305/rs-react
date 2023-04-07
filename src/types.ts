import React from 'react';
import { FieldValues, UseFormRegister } from 'react-hook-form';

export interface ICard {
  name: string;
  birthday: Date | null;
  tactility: Tactility | null;
  features: Features[];
  type: AnimalType | '';
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

export interface FileInputProps {
  refForwardImage?: React.RefObject<HTMLInputElement>;
}

export interface IState {
  cards: ICard[];
  nameValue: string | null;
  dateValue: Date | null;
  tactilityValue: Tactility | null;
  featuresValues: Features[] | null;
  typeValue: AnimalType | '';
  photoValue: string | null;
  nameWarning: boolean;
  dateWarning: boolean;
  refForwardImage: React.RefObject<HTMLInputElement>;
}

export type Inputs = {
  name: string;
  date: Date;
  tactility: Tactility;
  animalType: AnimalType;
  features: Features[];
  photo: string;
};

export interface IInputProps {
  register: UseFormRegister<FieldValues>;
}

export interface IMovie {
  posterPath: string;
  adult: boolean;
  overview: string;
  release_date: string;
  genre_ids: number[];
  id: number;
  original_title: string;
  original_language: string;
  title: string;
  backdrop_path: string;
  popularity: string;
  vote_count: number;
  video: boolean;
  vote_average: string;
}
