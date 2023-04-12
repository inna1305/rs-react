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

export interface IMovie {
  poster_path: string;
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

export interface ICardsProps {
  movies: IMovie[];
}

export interface IConfigResponse {
  images: IImageOptions;
  change_keys: string[];
}

interface IImageOptions {
  base_url: string;
  secure_base_url: string;
  background_sizes: string[];
  logo_sizes: string[];
  poster_sizes: string[];
  profile_sizes: string[];
  still_sizes: string[];
}

export interface IMovieModal {
  title: string;
  overview: string;
  release_date: string;
  image?: string | null;
  onClick: () => void;
}

export interface ICardsProps {
  movies: IMovie[];
}

export interface ModalContextValue {
  showModal: boolean;
  setShowModal: (show: boolean) => void;
}
