'use strict'
//CREANDO OBJETOS JSON
//objeto normal
var pelicula = {
  titulo: "batman",
  year: 2018,
  pais: "Estados Unidos"
};

//objeto con otro objeto adentro
var peliculasTop = [
  {titulo: "superman",
  year: 2018,
  pais: "Estados Unidos"},
  pelicula
];
//RECORRIENDO UN OBJETO CON FOR IN
var filmsWinner = document.querySelector('#filmsWinner');
var index;
for (index in peliculasTop) {
  var p = document.createElement("p");
  p.append(peliculasTop[index].titulo);
  filmsWinner.append(p);
}
