'use strict';

//fetch (ajax) y promesas. Con esto le pedimos data a la base de datos

var listaUsuarios = document.querySelector('.listaUsuarios');//aqui meteremos la lista de usuarios traida de la api
var divOnlyUser = document.querySelector('#divOnlyUser'); //aqui meteremos un usuario solo traido de la api


getUsuarios() //aqui llamamos al primer fetch
    .then(data => data.json()) //recoge data del fetch y conviertelo a json
    .then(users => { //y ahora esa data metela en mi variable USERS y la ocupare en mi funcion listadoUsuarios()
       listadoUsuarios(users.data);
       return getOnlyUser(); //retorname el segundo fetch que lo meti en esta funcion GetOnlyUser()
    })
    .then(data => data.json())//trae la data del ultimo return y pasalo a json
    .then (user =>{ //ahora esa ultima data metela a mi variable USER
        listOnlyUser(user.data);
    });//aqui podria seguir encadenando .then si quiero tranquilamente


function getUsuarios(){//primer fetch que contiene la lista de usuarios completa
    return fetch('https://reqres.in/api/users?page=2');
}
function getOnlyUser(){//segundo fetch que contiene a un solo usuario
    return fetch('https://reqres.in/api/users/2');
}

function listadoUsuarios(usuarios){//FUNCION DE LISTADO DE USUARIOS
    usuarios.map((user, i) =>{ //recorre usuarios y te doy el parametro USER y un indice I
        let nombre = document.createElement('h3');

        nombre.innerHTML = `${i}- ${user.first_name} ${user.last_name}`;

        listaUsuarios.append(nombre);
    });
}

function listOnlyUser(user){//FUNCION PARA TRAER A UN SOLO USUARIO
    let nombre = document.createElement('h3');
    let avatar = document.createElement('img');

    nombre.innerHTML = `${user.first_name} ${user.last_name}`; //trayendo el nombre y apellido del usuario de la API
    avatar.src = user.avatar; //trayendo la foto del usuario de la API
    avatar.width = '100';

    divOnlyUser.append(nombre);
    divOnlyUser.append(avatar);
}


