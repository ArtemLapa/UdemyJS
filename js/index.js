'use strict';

// function start() {
//   while(numberOfFilms === '' || numberOfFilms === null || isNaN(numberOfFilms)) {
//     numberOfFilms = Number( prompt('Сколько фильмов вы уже посмотрели?', '') );
//   }
//   return numberOfFilms;
// };
// let numberOfFilms;

const personalMovieDB = {
  count: 0,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
  startFunc: function() {
    while(personalMovieDB.count === '' || personalMovieDB.count === null || isNaN(personalMovieDB.count)) {
      personalMovieDB.count = Number( prompt('Сколько фильмов вы уже посмотрели?', '') );
    }
    return personalMovieDB.count;
  },
  rememberMyFilms: function() {
    for(let i = 0; i < 2; i++) {
      const a = prompt('Ваш последний просмотренный фильм', ''),
            b = prompt('Во сколько оценете его от 1 до 10', '');
      if(a != null && b != null && a != '' && b != '' && a.length < 50) {
        personalMovieDB.movies[a] = b;
      } else {
        i--;
      }
    };
  },
  detectPersonalLevel: function() {
    if(personalMovieDB.count < 10) {
      alert('Просмотрено довольно мало фильмов')
    } else if(personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
      alert('Вы классический зритель');
    } else if(personalMovieDB.count >= 30) {
      alert('Вы киноман');
    } else {
      alert('Произошла ошибка');
    }
  },
  showMyDB: function(isPrivat) {
    if(!isPrivat) {
      console.log(personalMovieDB);
    } else {
      console.log('Acces error');
    }
  },
  toggleVisibleMyDB: function() {
    if(personalMovieDB.privat) {
      personalMovieDB.privat = false;
    } else {
      personalMovieDB.privat = true;
    }
  },
  writeYourGenres: function() {
    for(let i = 1; i <= 3; i++) {
      const yourGenre = prompt(`Ваш любимый жанр под номером ${i}`, '');
      if(yourGenre === '' || yourGenre === null) {
        console.log('Not correct data');
        i--;
      } else {
        personalMovieDB.genres[i - 1] = yourGenre;
      }
    }
    personalMovieDB.genres.forEach((item, i) => {
      console.log(`Любимый жанр ${i + 1} - это ${item}`);
    });
  },
};