'use strict';
//creando una nueva promesa desde cero
var divAlumno = document.querySelector("#divAlumno");
var alumno = {  //creando mi objeto json
    nombre: 'Facundo',
    apellido: 'Benitez'
};

const promesa = new Promise((resolve, reject) => { //metiendo mi promesa en una constante
    var alumno_string = JSON.stringify(alumno);//aqui convertimos el objeto alumno a informacion en json string con stringify(para que no nos aparexca [object] cuando lo llamemos)

    if(typeof alumno_string != 'string'){ //si mi objeto no se convirtio a string muestra el error
        return reject("error");
    }else{ //si mi objeto SI se convirtio a string continuemos
        return resolve(alumno_string);
    }
});

promesa //llamada a la promesa
.then(res => { //si la promesa esta resuelta mostremos el objeto JSON alumno
    divAlumno.innerHTML = alumno.nombre + " " + alumno.apellido;
})
.catch(rej =>{  //si la promesa no esta resuelta mostremos error
    divAlumno.innerHTML = "error, el objeto no se convirtio a string";
});
