"use strict"
let numberOfFilms = +prompt('Сколько фильмов вы посмотрели?', "");

if(numberOfFilms < 10){
    console.log('Просмотрено довольно мало фильмов');
}else if (numberOfFilms>10 && numberOfFilms<30){
    console.log('Вы классический зритель');
} else if (numberOfFilms>30){
    console.log('Вы киноман');
}else {
    console.log('Произошла ошибка');
}

let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    private: false
};


for(let i=0;i<2;i++){

    let a = prompt('Один из последних просмотренных фильмов?', "");
    while((a.length>5) || (a.length<1)){
        a = prompt('Один из последних просмотренных фильмов?', "");
        if((a.length<=5) && (a.length>1)){
            break;
        }
    }

     let b = prompt('На сколько оцените его?', "");
    while(b.length==0){
        b = prompt('На сколько оцените его?', "");
        if(b.length!=0){
            break;
        }
    }  
    personalMovieDB.movies[a]=b;
}
console.log(personalMovieDB.movies);