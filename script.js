// Variables globales
let turno = "0";
const combinacionesGanadoras = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
];

// Funciones

function detectar3EnRaya(jugador) {
    for (var i = 0; i < combinacionesGanadoras.length; i++) {
        var combinacion = combinacionesGanadoras[i];
        var casilla1 = document.getElementById(combinacion[0]);
        var casilla2 = document.getElementById(combinacion[1]);
        var casilla3 = document.getElementById(combinacion[2]);

        // Obtener el contenido del span dentro de la casilla
        var contenido1 = casilla1.textContent.trim();
        var contenido2 = casilla2.textContent.trim();
        var contenido3 = casilla3.textContent.trim();

        // Comparar el contenido de las casillas con el símbolo del jugador actual
        if (contenido1 === jugador && contenido2 === jugador && contenido3 === jugador) {
            return true;
        }
    }
    return false;
}

function reiniciarJuego() {
    // Borrar las casillas
    var casillas = document.getElementsByClassName("casilla");
    for (var i = 0; i < casillas.length; i++) {
        casillas[i].textContent = "";
    }

}

function mostrarGanador(jugador) {
    alert("¡El ganador es: " + jugador + "!")
    return reiniciarJuego();
}

function alternarTurno() {
    if (turno === "0") {
        turno = "X";
    } else {
        turno = "0";
    }
}

function bloquearJuego() {
    var casillas = document.getElementsByClassName("casilla");
    for (var i = 0; i < casillas.length; i++) {
        casillas[i].disabled = true;
    }

}

function colocarFicha(idCasilla) {
    var casilla = document.getElementById(idCasilla);

    // Si la casilla ya está ocupada, no hacemos nada
    if (!estaVacia(idCasilla)) {
        return;
    }

    // Dibujar el símbolo en la casilla
    dibujarSimbolo(idCasilla, turno);

     let turnoNext = turno;
     turnoNext = turnoNext === "X" ? "0" : "X";
    
      document.getElementById("turno").textContent = "Turno: " + turnoNext;


function dibujarSimbolo(idCasilla, simbolo) {
        var casilla = document.getElementById(idCasilla);
        var simboloElement = document.createElement("span");
        simboloElement.textContent = simbolo;
        casilla.appendChild(simboloElement);
}

    // Detectar si hay un ganador
    if (detectar3EnRaya(turno)) {
        // Mostrar un mensaje de alerta con el ganador
        mostrarGanador(turno);

        // Bloquear el juego para que no se pueda seguir jugando
        bloquearJuego();

        // Salir de la función
        return;
    }

    // Alternar el turno para el siguiente movimiento
    alternarTurno();
}

function estaVacia(idCasilla) {
    var casilla = document.getElementById(idCasilla);
    return casilla.textContent.trim() === "";
}

// Asignar eventos a las casillas
var casillas = document.getElementsByClassName("casilla");
for (var i = 0; i < casillas.length; i++) {
    casillas[i].addEventListener("click", function () {
        colocarFicha(this.id);
    });
}