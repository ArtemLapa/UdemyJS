'use strict';

let numberOfFilms;

function start() {
  while(numberOfFilms === '' || numberOfFilms === null || isNaN(numberOfFilms)) {
    numberOfFilms = Number( prompt('Сколько фильмов вы уже посмотрели?', '') );
  }
  return numberOfFilms;
};
start();

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
};

function rememberMyFilms() {
  for(let i = 0; i < 2; i++) {
    const a = prompt('Ваш последний просмотренный фильм', ''),
          b = prompt('Во сколько оценете его от 1 до 10', '');
    if(a != null && b != null && a != '' && b != '' && a.length < 50) {
      personalMovieDB.movies[a] = b;
    } else {
      i--;
    }
  };
};
rememberMyFilms();

function detectPersonalLevel() {
  if(personalMovieDB.count < 10) {
    alert('Просмотрено довольно мало фильмов')
  } else if(personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
    alert('Вы классический зритель');
  } else if(personalMovieDB.count >= 30) {
    alert('Вы киноман');
  } else {
    alert('Произошла ошибка');
  }
};
detectPersonalLevel();

let yourGenre;
function writeYourGenres() {
  let j = 1;
  for(let i = 0; i < 3; i++) {
    yourGenre = prompt(`Ваш любимый жанр под номером ${j}`, '');
    j++;
    personalMovieDB.genres.push(yourGenre);
  }
};
writeYourGenres();

function showMyDB(isPrivat) {
  if(!isPrivat) {
    return console.log(personalMovieDB);
  } else {
    return console.log('Acces error');
  }
};
showMyDB(personalMovieDB.privat);