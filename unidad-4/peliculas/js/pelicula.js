export default class Pelicula {
    constructor(titulo, año, duracion) {
        this.titulo = titulo;
        this.año = año;
        this.duracion = duracion;
    }

    getDuracionEnHoras() {
        let r = this.duracion / 60;

        return r;
    }

    getAntiguedad(año) {
        return año - this.año;
    }

    imprimir() {
        console.log(this.titulo);
        console.log(this.año);
        console.log(this.duracion);
        console.log(this.getDuracionEnHoras());
    } 
}