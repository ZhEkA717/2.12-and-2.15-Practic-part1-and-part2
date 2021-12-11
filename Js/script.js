let numberOfFilms = +prompt('Сколько фильмов вы посмотрели?', "");

let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    private: false
};

let a1 = prompt('Один из последних просмотренных фильмов?', "");
let a2 = prompt('Один из последних просмотренных фильмов?', "");
let a3 = prompt('На сколько оцените его?', "");
let a4 = prompt('На сколько оцените его?', "");

personalMovieDB.movies[a1]=a3;
personalMovieDB.movies[a2]=a4;

console.log(personalMovieDB.movies);