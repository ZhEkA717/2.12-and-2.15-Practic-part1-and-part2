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

let a=[];
let b=[];
let proverka;
for(let i=0;i<2;i++){

    a[i] = prompt('Один из последних просмотренных фильмов?', "");
    while((a[i].length>5) || (a[i].length<1)){
        a[i] = prompt('Один из последних просмотренных фильмов?', "");
        if((a[i].length<=5) && (a[i].length>1)){
            break;
        }
    }

    b[i] = prompt('На сколько оцените его?', "");
    while(b[i].length==0){
        b[i] = prompt('На сколько оцените его?', "");
        if(b[i].length!=0){
            break;
        }
    }  
    personalMovieDB.movies[a[i]]=b[i];
}
console.log(personalMovieDB.movies);