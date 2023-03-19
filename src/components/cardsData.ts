import { Card, Dimension, Place } from '../types';

export const persons: Card[] = [
  {
    name: 'Rick',
    birthday: new Date(1960, 12, 30),
    placeOfBirth: Place.Space,
    dimensions: [Dimension.DimensionC500A, Dimension.Dimension1984, Dimension.DimensionC137],
    type: 'human',
    photo: './public/rick.webp'
  },
  {
    name: 'Morty',
    birthday: new Date(2010, 7, 13),
    placeOfBirth: Place.Earth,
    dimensions: [Dimension.DimensionC500A, Dimension.Dimension1984, Dimension.DimensionC137],
    type: 'human',
    photo: './public/morty.webp'
  },
  {
    name: 'Mr.Poopybutthole',
    birthday: new Date(1800, 10, 3),
    placeOfBirth: Place.Space,
    dimensions: [Dimension.DimensionC500A],
    type: 'alien',
    photo: './public/poopybutthole.webp'
  },
  {
    name: 'Talking Cat',
    birthday: new Date(1995, 5, 13),
    placeOfBirth: Place.Miniverse,
    dimensions: [Dimension.DimensionC500A],
    type: 'alien',
    photo: './public/cat.webp'
  },
  {
    name: 'Birdperson',
    birthday: new Date(1985, 2, 5),
    placeOfBirth: Place.Miniverse,
    dimensions: [Dimension.DimensionC500A, Dimension.Dimension1984, Dimension.DimensionC137],
    type: 'alien',
    photo: './public/birdperson.webp'
  },
  {
    name: 'Pencilvester',
    birthday: new Date(1000, 8, 18),
    placeOfBirth: Place.Space,
    dimensions: [Dimension.DimensionC500A, Dimension.DimensionC137],
    type: 'alien',
    photo: './public/pencil.webp'
  },
  {
    name: 'Mrs.Pancakes',
    birthday: new Date(1994, 1, 28),
    placeOfBirth: Place.Earth,
    dimensions: [Dimension.DimensionC500A],
    type: 'human',
    photo: './public/pancake.webp'
  },
  {
    name: 'Mr.Meeseeks',
    birthday: new Date(1001, 10, 10),
    placeOfBirth: Place.Gromflom,
    dimensions: [Dimension.DimensionC500A],
    type: 'alien',
    photo: './public/meeseks.webp'
  },
  {
    name: 'Sleepy Gary',
    birthday: new Date(1980, 3, 1),
    placeOfBirth: Place.Space,
    dimensions: [Dimension.DimensionC137],
    type: 'alien',
    photo: './public/sleepyGary.webp'
  },
]