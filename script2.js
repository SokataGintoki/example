const numberofFilms = prompt('Сколько фильмов вы уже посмотрели?','');
console.log(numberofFilms);


const personalMovieDB = {
    count: numberofFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};



const a = prompt('Один из последних просмотренных фильмов?',''),
      b = prompt('На сколько вы оцените его?',''),
      c = prompt('Один из последних просмотренных фильмов?',''),
      d = prompt('На сколько вы оцените его?','');
      
personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);