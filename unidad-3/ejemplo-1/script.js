var title = document.getElementById('titulo');
title.addEventListener('click',updateName);

function updateName(){
    var name = prompt('Nombre del jugador');
    title.textContent = 'Jugador 1: '+ name;
}