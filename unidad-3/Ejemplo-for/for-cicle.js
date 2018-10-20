var btnUno = document.querySelector('#btnUno');
btnUno.addEventListener('click', ejemplo1);

var btnDos = document.querySelector('#btnDos');
btnDos.addEventListener('click', ejemplo2);

var btnTres = document.querySelector('#btnTres');
btnTres.addEventListener('click', ejemplo3);

var btnCuatro = document.querySelector('#btnCuatro');
btnCuatro.addEventListener('click', ejemplo4);

var btnCinco = document.querySelector('#btnCinco');
btnCinco.addEventListener('click', ejemplo5);
var lienzo = document.querySelector('#lienzo');

var resultado = document.querySelector('#resultado');
var opciones = document.querySelector('#opciones');


function ejemplo1(){
    var n = document.querySelector('#numero').value;
    for(var i = 0; i <= n; i++){
        console.log(i);
    };
};

function ejemplo2(){
    var n = document.querySelector('#numero').value;
    for(var i = 1; i <= n; i++){
        var row = resultado.insertRow(-1);
        var cell = row.insertCell(0);

        cell.innerHTML = i;
    };
};

function ejemplo3(){
    var n = document.querySelector('#numero').value;
    for(var i = 1; i <= n; i++){
        var x = prompt('Ingresa un numero: ');
        var row = resultado.insertRow(-1);
        var cell = row.insertCell(0);

        cell.innerHTML = x;
    };
};

function ejemplo4(){
    var n = document.querySelector('#numero').value;
    var i = n;
    while(i > 0){
        var opc = document.createElement('option');
        opc.text = i;
        opciones.add(opc);
        i--;
    };
};

function ejemplo5(){
    var c = lienzo.getContext('2d');
    var valor = document.querySelector('#numero').value;

    var r = Math.trunc(Math.random()*256);
    var g = Math.trunc(Math.random()*256);
    var b = Math.trunc(Math.random()*256);

    do{
        c.beginPath();
        c.fillStyle = 'rgba('+ r +','+ g +','+ b +', 0.5)';
        c.arc(Math.random()*500+1, Math.random()*500+1, Math.random()*80+1, 0, 2*Math.PI);
        c.fill();

        valor--;
    }while(valor >= 1);
};