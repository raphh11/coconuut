// Variaveis da bolinha
let xBolinha = 300;
let yBolinha = 200;
let diametro = 30;
let raio = diametro/2 

// Variáveis da velocidade
let velocidadexBolinha = 6
let velocidadeyBolinha = 6

// Função da dimensão do fundo
function setup() {
  createCanvas(600, 400);
}

// Função desenhar
function draw() {
  background(1, 4, 255);
  bolinha();

}

function bolinha(){   
  circle(xBolinha, yBolinha, diametro)
  xBolinha += velocidadexBolinha;
  yBolinha += velocidadeyBolinha;
  if (xBolinha + raio  > width || xBolinha < 0)
  velocidadexBolinha *= -1;
  if (yBolinha +raio > height || yBolinha < 0)
  velocidadeyBolinha *= -1; 
   
}