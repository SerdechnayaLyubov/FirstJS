alert("!!!!!!!!!!!");
const numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");
const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    provat: false
};
 const a  = prompt("Один из последних просмотернных фильмов?", ""),
        b = prompt("На сколько оцените его?", ""),
        с = prompt("Один из последних просмотернных фильмов?", ""),
        d = prompt("На сколько оцените его?", "");

        personalMovieDB.movies[a] = b;
        personalMovieDB.movies[c] = d;

        console.log(personalMovieDB);