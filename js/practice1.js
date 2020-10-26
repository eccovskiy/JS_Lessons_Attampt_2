"use strict";

// let numberOfFilms;

// function start(){
//     numberOfFilms = +prompt('How many films are you watched?', '');

//     while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
//         numberOfFilms = +prompt('How many films are you watched?', '');
//     }
// }

// start();

const personalMoviesDb = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: function(){
        personalMoviesDb.count = +prompt('How many films are you watched?', '');
    
        while (personalMoviesDb.count == '' || personalMoviesDb.count == null || isNaN(personalMoviesDb.count)) {
            personalMoviesDb.count = +prompt('How many films are you watched?', '');
        }
    },
    rememberMyFilm: function() {
        for (let i = 0; i < 2; i++) {
            const a = prompt('One of the first watching movies?', ''),
                  b = prompt('What your opinion?', '');
        
            if (a != null && b != null && a != '' && b != '' && a.length < 50){
                  personalMoviesDb.movies[a] = b;
                  console.log('Done');
            } else {
                console.log('Error DB');
                i--;
            }
        }
    },
    detectPersonalLevel: function() {
        if (personalMoviesDb.count < 10) {
            alert('Мало фильмов');
        } else if (personalMoviesDb.count > 10 && personalMoviesDb.count < 30) {
            alert('Вы классический зритель');
        } else if (personalMoviesDb.count > 30) {
            alert('Вы Киноман');
        } else {
            alert('Error movies');
        }
    },
    showMyDb: function(hidden) {
        if(!hidden) {
            console.log(personalMoviesDb);
        }
    },
    toggleVisibleMyDB: function() {
        if(personalMoviesDb.privat) {
            personalMoviesDb.privat = false;
        } else {
            personalMoviesDb.privat = true;
        }
    },
    writeYourGenres: function() {
        for(let i = 1; i <= 1; i++){
            // let genre = prompt(`Your favorite genres ${i}?`);
            
            // if(genre === '' || genre == null) {
            //     console.log('You enter incoorect data');
            //     i--;
            // } else {
            //     personalMoviesDb.genres[i - 1] = genre;
            // }

            let genre = prompt(`Enter your favorite genres via the comma`).toLowerCase();
            
            if(genre === '' || genre == null) {
                console.log('You enter incoorect data');
                i--;
            } else {
                personalMoviesDb.genres = genre.split(', ');
                personalMoviesDb.genres.sort();
            }

        }

            personalMoviesDb.genres.forEach((item, i) => {
                console.log(`Любимый жанр ${i + 1} - это ${item}`);
            });
    }
};

//Практика ч. 1

// const a = prompt('One of the first watching movies?', ''),
//       b = prompt('What your opinion?'),
//       c = prompt('One of the first watching movies?', ''),
//       d = prompt('What your opinion?');

// personalMoviesDb.movies[a] = b;
// personalMoviesDb.movies[c] = d;

// Практика ч. 2

// function rememberMyFilm() {
//     for (let i = 0; i < 2; i++) {
//         const a = prompt('One of the first watching movies?', ''),
//               b = prompt('What your opinion?', '');
    
//         if (a != null && b != null && a != '' && b != '' && a.length < 50){
//               personalMoviesDb.movies[a] = b;
//               console.log('Done');
//         } else {
//             console.log('Error DB');
//             i--;
//         }
//     }
// }

// rememberMyFilm();

// console.log(personalMoviesDb);

// function detectPersonalLevel() {
//     if (personalMoviesDb.count < 10) {
//         alert('Мало фильмов');
//     } else if (personalMoviesDb.count > 10 && personalMoviesDb.count < 30) {
//         alert('Вы классический зритель');
//     } else if (personalMoviesDb.count > 30) {
//         alert('Вы Киноман');
//     } else {
//         alert('Error movies');
//     }
// }

// detectPersonalLevel();

// function showMyDb() {
//     if(personalMoviesDb.privat == false) {
//         console.log(personalMoviesDb);
//     } else {
//         console.log('Some some');
//     }
// }

// function showMyDb(hidden) {
//     if(!hidden) {
//         console.log(personalMoviesDb);
//     }
// }

// showMyDb(personalMoviesDb.privat);

// function writeYourGenres() {
//     for(let i = 1; i <= 3; i++){
//         const genre = prompt(`Your favorite genres ${i}?`);
//         personalMoviesDb.genres[i - 1] = genre;
//     }
// }

// function writeYourGenres() {
//     for(let i = 1; i <= 3; i++){
//         personalMoviesDb.genres[i - 1] = prompt(`Your favorite genres ${i}?`);
//     }
// }

// writeYourGenres();

/*for (let i = 0; i < 2; i++) {
    const a = prompt('One of the first watching movies?', ''),
          b = prompt('What your opinion?');

    if (a != null && b != null && a != '' && b != '' && a.length < 50 && b.length < 50 && b <= 10) {
        personalMoviesDb.movies[a] = b;
        console.log('Correct');
    } else if (a == null) {
        alert('Try again');
    } else if (b == null) {
        alert('Wrong answer');
    } else {
        console.log('Error');
        i--;
    }
}*/

/*let i = 0;

while (i != 2) {
    console.log(i);
    i++;

    const a = prompt('One of the first watching movies?', ''),
          b = prompt('What your opinion?');

          if (a != null && b != null && a != '' && b != '' && a.length < 50 && b.length < 50) {
                     personalMoviesDb.movies[a] = b;
                     console.log('Correct');
                 } else {
                     console.log('Error');
                     i--;
                 }
}*/

/*let i = 0;

do {
    console.log(i);
    i++;

    const a = prompt('One of the first watching movies?', ''),
          b = prompt('What your opinion?');

            if (a != null && b != null && a != '' && b != '' && a.length < 50 && b.length < 50) {
                      personalMoviesDb.movies[a] = b;
                   console.log('Correct');
                } else {
                     console.log('Error');
                   i--;
            }

} while (i != 2);*/

/*if (personalMoviesDb.count < 10) {
    alert('Просмотрено довольно мало фильмов');
} else if (personalMoviesDb.count >= 10 && personalMoviesDb.count <=30){
    alert('Вы классический зритель');
} else if (personalMoviesDb.count > 30) {
    alert('Вы Киноман');
} else {
    alert('Произошла ошибка');
}

console.log(personalMoviesDb);*/