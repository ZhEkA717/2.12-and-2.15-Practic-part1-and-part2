let numberOfFilms = +prompt('Сколько фильмов вы посмотрели?', "");

let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    private: false
};

let a=[];
let b=[];
for(let i=0;i<2;i++){
    a[i] = prompt('Один из последних просмотренных фильмов?', "");
    b[i] = prompt('На сколько оцените его?', "");
    personalMovieDB.movies[a[i]]=b[i];
}
console.log(personalMovieDB.movies);