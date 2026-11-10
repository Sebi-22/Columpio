// Variables para el jugador y el objetivo
let jugador = { x: 450, y: 480 };

let objetivoX = 450;
let objetivoY = 480;
const zonaArriba = 330;
const zonaAbajo = 570;

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  actualizarObjetivo();
  actualizarJugador();

  dibujarFondo();
  dibujarJugador();
}
// Objetivos 
function actualizarObjetivo() {
  objetivoX = constrain(mouseX, 30, 870);
  objetivoY = constrain(mouseY, zonaArriba, zonaAbajo);
}
// Jugador
function actualizarJugador() {
  jugador.x = 0.25 * objetivoX + 0.75 * jugador.x;
  jugador.y = 0.25 * objetivoY + 0.75 * jugador.y;
}
// fondo
function dibujarFondo() {
  strokeWeight(1);
  for (let y = 0; y < height; y++) {
    let rojo = map(y, 0, height, 10, 50);
    let verde = map(y, 0, height, 12, 28);
    let azul = map(y, 0, height, 35, 72);
    stroke(rojo, verde, azul);
    line(0, y, width, y);
  }
  noStroke();
}
// Jgador dibujado
function dibujarJugador() {
  push();
  translate(jugador.x, jugador.y);
  scale(1.5);
  noStroke();
  fill(175, 35, 40);
  rect(-9, -10, 18, 28);
  rect(-17, -8, 7, 18);
  rect(10, -8, 7, 18);
  fill(28, 38, 95);
  rect(-8, 18, 7, 18);
  rect(1, 18, 7, 18);
  fill(175, 35, 40);
  circle(0, -18, 17);
  pop();
}