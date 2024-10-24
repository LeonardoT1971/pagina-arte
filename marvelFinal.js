// MAGNETO 1
function mostrarImagen(elemento) {
    document.getElementById('overlay').classList.add('mostrar');
    document.getElementById('contenedor-ampliada').classList.add('mostrar');
}

function cerrarImagen() {
    document.getElementById('overlay').classList.remove('mostrar');
    document.getElementById('contenedor-ampliada').classList.remove('mostrar');
}


// CYCLOPS 2

function mostrarImagen2(elemento) {
    document.getElementById('overlay2').classList.add('mostrar2');
    document.getElementById('contenedor-ampliada2').classList.add('mostrar2');
}


function cerrarImagen2() {
    document.getElementById('overlay2').classList.remove('mostrar2');
    document.getElementById('contenedor-ampliada2').classList.remove('mostrar2');
}

// PHOENIX 3

function mostrarImagen3(elemento) {
    document.getElementById('overlay3').classList.add('mostrar3');
    document.getElementById('contenedor-ampliada3').classList.add('mostrar3');
}


function cerrarImagen3() {
    document.getElementById('overlay3').classList.remove('mostrar3');
    document.getElementById('contenedor-ampliada3').classList.remove('mostrar3');
}

// WALVERINE 4

function mostrarImagen4(elemento) {
    document.getElementById('overlay4').classList.add('mostrar4');
    document.getElementById('contenedor-ampliada4').classList.add('mostrar4');
}


function cerrarImagen4() {
    document.getElementById('overlay4').classList.remove('mostrar4');
    document.getElementById('contenedor-ampliada4').classList.remove('mostrar4');
}

//  BEST 5

function mostrarImagen5(elemento) {
    document.getElementById('overlay5').classList.add('mostrar5');
    document.getElementById('contenedor-ampliada5').classList.add('mostrar5');
}


function cerrarImagen5() {
    document.getElementById('overlay5').classList.remove('mostrar5');
    document.getElementById('contenedor-ampliada5').classList.remove('mostrar5');
}

// STORM 6

function mostrarImagen6(elemento) {
    document.getElementById('overlay6').classList.add('mostrar6');
    document.getElementById('contenedor-ampliada6').classList.add('mostrar6');
}


function cerrarImagen6() {
    document.getElementById('overlay6').classList.remove('mostrar6');
    document.getElementById('contenedor-ampliada6').classList.remove('mostrar6');
}


// GAMBIT 7

function mostrarImagen7(elemento) {
    document.getElementById('overlay7').classList.add('mostrar7');
    document.getElementById('contenedor-ampliada7').classList.add('mostrar7');
}


function cerrarImagen7() {
    document.getElementById('overlay7').classList.remove('mostrar7');
    document.getElementById('contenedor-ampliada7').classList.remove('mostrar7');
}


// ROGUET 8

function mostrarImagen8(elemento) {
    document.getElementById('overlay8').classList.add('mostrar8');
    document.getElementById('contenedor-ampliada8').classList.add('mostrar8');
}


function cerrarImagen8() {
    document.getElementById('overlay8').classList.remove('mostrar8');
    document.getElementById('contenedor-ampliada8').classList.remove('mostrar8');
}

document.getElementById('overlay').addEventListener('click', cerrarImagen);
document.getElementById('overlay2').addEventListener('click', cerrarImagen2);
document.getElementById('overlay3').addEventListener('click', cerrarImagen3);
document.getElementById('overlay4').addEventListener('click', cerrarImagen4);
document.getElementById('overlay5').addEventListener('click', cerrarImagen5);
document.getElementById('overlay6').addEventListener('click', cerrarImagen6);
document.getElementById('overlay7').addEventListener('click', cerrarImagen7);
document.getElementById('overlay8').addEventListener('click', cerrarImagen8);
