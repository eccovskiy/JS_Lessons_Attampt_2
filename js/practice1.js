const numberOfFilms = +prompt('How many films are you watched?', '');
const personalMoviesDb = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

//Практика ч. 1

/*const a = prompt('One of the first watching movies?', ''),
      b = prompt('What your opinion?'),
      c = prompt('One of the first watching movies?', ''),
      d = prompt('What your opinion?');

personalMoviesDb.movies[a] = b;
personalMoviesDb.movies[c] = d;*/

// Практика ч. 2

// for (let i = 0; i < 2; i++) {
//     const a = prompt('One of the first watching movies?', ''),
//           b = prompt('What your opinion?');

//     if (a != null && b != null && a != '' && b != '' && a.length < 50 && b.length < 50) {
//         personalMoviesDb.movies[a] = b;
//         console.log('Correct');
//     } else {
//         console.log('Error');
//         i--;
//     }
// }

let i = 0;

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
}

// do {
//     console.log(i);
//     i++;

//     const a = prompt('One of the first watching movies?', ''),
//           b = prompt('What your opinion?');

//             if (a != null && b != null && a != '' && b != '' && a.length < 50 && b.length < 50) {
//                       personalMoviesDb.movies[a] = b;
//                    console.log('Correct');
//                 } else {
//                      console.log('Error');
//                    i--;
//             }

// } while (i != 2);

if (personalMoviesDb.count < 10) {
    alert('Просмотрено довольно мало фильмов');
} else if (personalMoviesDb.count >= 10 && personalMoviesDb.count <=30){
    alert('Вы классический зритель');
} else if (personalMoviesDb.count > 30) {
    alert('Вы Киноман');
} else {
    alert('Произошла ошибка');
}

console.log(personalMoviesDb);