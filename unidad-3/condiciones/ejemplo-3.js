var inpNumero = document.querySelector('#numero');
var resultado = document.querySelector('#resultado');
var btnEvaluar = document.querySelector('#btnEvaluar');
var opcionSel = document.querySelector('#seleccion');
opcionSel.addEventListener('change', evaluarOpciones);
btnEvaluar.addEventListener('click', evalNumero);

function evalNumero(){
    var numero = Number(inpNumero.value);

    if(numero > 0){
        resultado.textContent = 'El numero '+ numero + ' es positivo.';
    }else if(numero < 0){
        resultado.textContent = 'El numero '+ numero + ' es negativo.';
    }else{
        resultado.textContent = 'El numero '+ numero + ' es neutro.';
    }

}

function evaluarOpciones(){
    var numero = Number(inpNumero.value);
    var opcion = opcionSel.value;

    switch (opcion) {
        case "mitad":
            resultado.textContent = 'La mitad es: '+(numero/2);
        break;
        case "cuadrado":
            resultado.textContent = 'El cuadrado es: '+(numero*numero);
        break;
        case "par":
            if(numero%2 === 0){
                resultado.textContent = 'El numero es par.';
            }else{
                resultado.textContent = 'El numero es impar.';
            } 
        break;
    default:
    }
} 