import Pelicula from "./pelicula.js"
document.querySelector('#agregar').addEventListener('click', execute);

function execute(){
    var titulo = document.querySelector('#titulo').value;
    var year = document.querySelector('#year').value;
    var duracion = document.querySelector('#duracion').value;

    var m1 = new Pelicula(titulo, Number(year), Number(duracion));
    m1.imprimir();
}

