import { IMovie } from '../types';

const requestOptions = {
  method: 'GET',
  redirect: 'follow',
};
const key = '1e16d31f74bf1a1c5d381e59416e1ef6';
const host = 'https://api.themoviedb.org';

const findById = (id: number) => {
  fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=1e16d31f74bf1a1c5d381e59416e1ef6`)
    .then((response) => response.text())
    .then((result) => console.log(result))
    .catch((error) => console.log('error', error));
};

// export const searchByTitle = (title: string) => {
//   fetch(
//     `https://api.themoviedb.org/3/search/movie?api_key=1e16d31f74bf1a1c5d381e59416e1ef6&query=${title}`
//   )
//     .then((response) => response.text())
//     .then((result) => console.log(result))
//     .catch((error) => console.log('error', error));
// };
