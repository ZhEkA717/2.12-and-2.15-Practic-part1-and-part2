"use strict";

let numberOfFilms = +prompt('Сколько фильмов вы посмотрели?', "");

let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    private: false
};

if(personalMovieDB.count < 10){
    console.log('Просмотрено довольно мало фильмов');
}else if (personalMovieDB.count>10 && personalMovieDB.count<30){
    console.log('Вы классический зритель');
} else if (personalMovieDB.counterOfFilms>30){
    console.log('Вы киноман');
}else {
    console.log('Произошла ошибка');
}


for(let i=0;i<2;i++){

    let a = prompt('Один из последних просмотренных фильмов?', "");
    let b = prompt('На сколько оцените его?', "");

    while(!( a!=null && a!="" && b!=null && b!="" && b.length<50)){
        a = prompt('Один из последних просмотренных фильмов?', "");
        b = prompt('На сколько оцените его?', "");
        if(( a!=null && a!="" && b!=null && b!="" && b.length<50)){
            personalMovieDB.movies[a]=b;
            break;
        }
    }s
}
console.log(personalMovieDB.movies);