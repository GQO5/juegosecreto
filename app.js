let numeroSecreto;
let intentos;
let listaNumeroSorteados = [];
let numeroMaximo = 10;

condicionesIniciales()

function verficarIntento(){
    let numeroUsuario = parseInt(document.getElementById('valorUsuario').value);

    if (numeroUsuario === numeroSecreto){
        asignarTextoElemento(`p`, `Acertaste el número en ${intentos} ${(intentos == 1) ? 'vez' :'veces'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else{
        if (numeroUsuario > numeroSecreto){
            asignarTextoElemento('p', 'El numero es menor')
        } else {
            asignarTextoElemento('p', 'El numero es mayor')
        }
        intentos++;
        limpiarCaja();
    }
    return;
}

function limpiarCaja(){
   document.querySelector('#valorUsuario').value = "";
}

function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento); //La forma de conectar HTML a JavaScript es con document y con query Selector selecciono el tag
    elementoHTML.innerHTML = texto
    return;
}

function generarNumeroSecreto() {
    let numeroSecreto = Math.floor(Math.random()*numeroMaximo)+1;
    
    if (listaNumeroSorteados.length == numeroMaximo){
        asignarTextoElemento('p', 'Concluido')
    }else{
        if (listaNumeroSorteados.includes(numeroSecreto)) {
            return generarNumeroSecreto();
        }else{
            listaNumeroSorteados.push(numeroSecreto);
            return numeroSecreto;
        }
    }
}

function condicionesIniciales(){
    asignarTextoElemento('h1', 'Juego del número secreto!')
    asignarTextoElemento('p', `Elige un número del 1 al ${numeroMaximo}`)
    numeroSecreto = generarNumeroSecreto()
    intentos = 1;
}

function reiniciarJuego(){
    //Limpiar Caja
    limpiarCaja()
    // Indicar mensaje de inicio, intentos
    condicionesIniciales()
    //desabiliar boton
    document.querySelector('#reiniciar').setAttribute('disabled', 'true')

   
}

