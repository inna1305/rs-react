import { Card, Features, Tactility } from '../types';

export const persons: Card[] = [
  {
    name: 'Pumpkin',
    birthday: new Date(2010, 7, 13),
    tactility: Tactility.LoveToHug,
    features: [Features.FatBelly],
    type: 'rodent',
    photo: './public/pumpkin.jpg',
  },
  {
    name: 'Burger',
    birthday: new Date(2015, 5, 13),
    tactility: Tactility.LoveToHug,
    features: [Features.FatBelly, Features.LongMoustache],
    type: 'cat',
    photo: './public/burger.jpg',
  },
  {
    name: 'Birdperson',
    birthday: new Date(2016, 2, 5),
    tactility: Tactility.HardToGet,
    features: [Features.BoomingVoice],
    type: 'bird',
    photo: './public/birdperson.jpg',
  },
  {
    name: 'Dr. Cuddles',
    birthday: new Date(2019, 12, 30),
    tactility: Tactility.HardToGet,
    features: [Features.LongMoustache],
    type: 'rodent',
    photo: './public/cuddles.jpg',
  },
  {
    name: 'Dr. Smart',
    birthday: new Date(2020, 10, 3),
    tactility: Tactility.LoveToHug,
    features: [Features.BoomingVoice],
    type: 'dog',
    photo: './public/smart.jpg',
  },
  {
    name: 'Gacek',
    birthday: new Date(2020, 8, 18),
    tactility: Tactility.LoveToHug,
    features: [Features.FatBelly, Features.FluffyCheeks, Features.LongMoustache],
    type: 'cat',
    photo: './public/gacek.jpeg',
  },
  {
    name: 'Mrs.Pancakes',
    birthday: new Date(2017, 1, 28),
    tactility: Tactility.LoveToHug,
    features: [Features.FatBelly, Features.LongMoustache],
    type: 'cat',
    photo: './public/pancake.jpg',
  },
  {
    name: 'Mabel',
    birthday: new Date(2020, 10, 10),
    tactility: Tactility.HardToGet,
    features: [Features.BoomingVoice],
    type: 'bird',
    photo: './public/mabel.jpg',
  },
  {
    name: 'Sleepy Gary',
    birthday: new Date(2019, 3, 1),
    tactility: Tactility.HardToGet,
    features: [Features.FluffyCheeks, Features.FatBelly],
    type: 'dog',
    photo: './public/gary.jpg',
  },
];
