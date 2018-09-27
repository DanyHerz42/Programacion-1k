var btnCalcular = document.querySelector('#calcular');
btnCalcular.addEventListener('click', sumar);

function sumar(){
    var primerDato = document.querySelector('#numero1');
    var segundoDato = document.querySelector('#numero2');

    var resultado = parseInt(primerDato.value) + parseInt(segundoDato.value);

    var inputResultado = document.querySelector('#resultado');
    inputResultado.value = resultado;
}