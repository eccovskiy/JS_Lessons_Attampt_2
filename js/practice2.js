"use strict";

let numberOfFilms;

function start(){
    numberOfFilms = +prompt('Сколько фильмов Вы посмотрели?', '');

    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('Сколько фильмов Вы посмотрели?', '');
    }
}

// start();

let personalMoviesDb = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

function rememberMyFilm() {
    for (let i = 0; i < 2; i++) {
        let a = prompt('Последний фильм', ''),
            b = +prompt('Оцените фильм', '');
    
        if (a != null && b != null && a != '' && b != '' && a.length < 50 && Number(b)) {
            personalMoviesDb.movies[a] = b;
            console.log('Done');
        } else {
            console.log('Error');
            i--;
        }
    }
}

// rememberMyFilm();

function detectPersonalLevel() {
    if (personalMoviesDb.count < 10 && Number(numberOfFilms)) {
        alert('Мало фильмов');
    } else if (personalMoviesDb.count >= 10 && personalMoviesDb.count <= 30 && Number(numberOfFilms)) {
        alert('Вы классический зритель');
    } else if (personalMoviesDb.count > 30 && Number(numberOfFilms)) {
        alert('Вы киноман');
    } else {
        alert('Произошла ошибка');
    }
}

// detectPersonalLevel();

function showMyDb(hidden) {
    if (!hidden) {
        console.log(personalMoviesDb);
    }
}

showMyDb(personalMoviesDb.privat);

function writeYourGenres() {
    for (let i = 1; i < 4; i++) {
        let genre = prompt(`Ваш любимый жанр под номером ${i}`);
        personalMoviesDb.genres[i - 1] = genre;
    }
}

writeYourGenres();

console.log(personalMoviesDb);