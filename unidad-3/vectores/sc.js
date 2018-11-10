var btn1 = document.querySelector('#btnUno');
var num = document.querySelector('#numero');
var res = document.querySelector('#resultado');
btn1.addEventListener('click',ejercicio1);

function ejercicio1() {
    let t = Number(num.value);

    let v = new Array;

    for(let i = 0; i < t ; i++){
        let x = prompt("Ingresa un numero: ");
        v[i] = x;
    }
    
    for(let i = 0 ; i < v.length ; i++){
        let row = res.insertRow(-1);
        let cell = row.insertCell(0);
        cell.innerHTML = v[i];
    }
}