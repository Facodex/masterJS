'use strict'
//Guardando datos en localStorage y luego mostrandolos y dando la opcion de borrarlos
//Para que me recargue correctamente la pagina tuve que borrar del url el "?#"
var formAdd = document.querySelector('#formAdd');

formAdd.addEventListener('submit', function(){
    var newFilm = document.querySelector('#newFilm').value;
    if(newFilm.length >= 1){
    localStorage.setItem(newFilm, newFilm);
    }
});

// Enlistando las peliculas
var films = document.querySelector('#films');
for (var i in localStorage) {
    if (typeof localStorage[i] == "string") {
    var li = document.createElement ('li');
    li.append(localStorage[i]);
    films.append(li);
    }
}

//Eliminando peliculas

var deleteFilms = document.querySelector('#deleteFilms');

deleteFilms.addEventListener('submit', function(){
    var newFilm = document.querySelector('#byeFilm').value;
    if(newFilm.length >= 1){
    localStorage.removeItem(newFilm);
    }
});

