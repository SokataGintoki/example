const numberofFilms = prompt('Сколько фильмов вы уже посмотрели?','');
console.log(numberofFilms);


const personalMovieDB = {
    count: numberofFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};



// const a = prompt('Один из последних просмотренных фильмов?',''),
//       b = prompt('На сколько вы оцените его?',''),
//       c = prompt('Один из последних просмотренных фильмов?',''),
//       d = prompt('На сколько вы оцените его?','');
      
// personalMovieDB.movies[a] = b;
// personalMovieDB.movies[c] = d;


for (let i = 0; i < 2; i++) {
    const a = prompt('Один из последних просмотренных фильмов?',''),
          b = prompt('На сколько вы оцените его?','');

    if (a != null && b != null && a != '' && b != '' && a.length < 50) {
        personalMovieDB.movies[a] = b;
        console.log('done');
    } else {
        console.log('error');
        i--;
    }

    // personalMovieDB.movies[a] = b;

}

console.log(personalMovieDB);

// 

if (personalMovieDB.count < 10) {
    console.log("Просмотрено довольно мало фильмов");
} else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
    console.log("Вы классический зритель");
} else if  (personalMovieDB.count > 30) {
    console.log("Вы киноман");
} else {
    console.log("Произошла ошибка");
}


for (let i = 1; i <= 2; i++) {
    const a = prompt('Один из последних просмотренных фильмов?',''),
          b = prompt('На сколько оцените его?','');

    if ( a!= null && b != null && a != '' && b != '' && a.length < 50) {
        personalMovieDB.movies[a]= b;
        console.log('done');
    } else {
        console.log('error');
        i--;
    }
}

for (let i = 0; i < 2; i++) {
    const a = prompt('Один из последних просмотренных фильмов?',''),
          b = prompt('На сколько оцените его?','');

    if ( a === null || b === null || a === '' || b === '' || a.length >= 50) {
        console.log('error');
        i--;
    } else {
        personalMovieDB.movies[a]= b;
        console.log('done');
    }
}
