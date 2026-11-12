// Variables para el jugador y el objetivo
let jugador = { x: 450, y: 480 };

let villanos = [];
let edificios = [];

let objetivoX = 450;
let objetivoY = 480;
const zonaArriba = 330;
const zonaAbajo = 570;

function setup() {
  createCanvas(windowWidth, windowHeight);

  let x = 0;
  while (x < width) {
    let ancho = random(50, 110);
    let alto = random(90, 230);
    edificios.push({ x: x, ancho: ancho, alto: alto });
    x += ancho + random(0, 12);
  }

  reiniciar();
}

function draw() {
  actualizarObjetivo();
  actualizarJugador();
  actualizarVillanos();

  dibujarFondo();
  dibujarEdificios();
  for (let villano of villanos) {
    dibujarVillano(villano);
  }
  dibujarJugador();
}
// reinicio del juego
function reiniciar() {
  villanos = [
    {
      centroX: 450,
      amplitud: 250,
      y: 110,
      velocidad: 0.02,
      fase: 0,
      color: [70, 130, 80],
    },
  ];
  for (let villano of villanos) {
    villano.tiempo = 0;
    villano.x = villano.centroX + villano.amplitud * sin(villano.fase);
  }
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
// Villanos
function actualizarVillanos() {
  for (let villano of villanos) {
    villano.tiempo += villano.velocidad;
    villano.x =
      villano.centroX + villano.amplitud * sin(villano.tiempo + villano.fase);
  }
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

function dibujarEdificios() {
  noStroke();
  fill(22, 24, 50);
  for (let edificio of edificios) {
    rect(edificio.x, height - edificio.alto, edificio.ancho, edificio.alto);
  }
}
// Jugador dibujado
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
// Villanos dibujados
function dibujarVillano(villano) {
  push();
  translate(villano.x, villano.y);
  noStroke();

  fill(villano.color[0], villano.color[1], villano.color[2]);
  rect(-18, -10, 36, 44);
  fill(215, 175, 150);
  circle(0, -24, 28);

  pop();
}
