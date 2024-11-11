let yCarros = [40,96,149,210,270,318];
let velCarros =[2, 3, 2.5, 5, 3.3, 2.2];
let xCarros = [600,600,600,600,600,600];
let compCarro = 50;
let alturaCarro = 40;

function mostraCarro(){
  for (let i = 0; i < imagemCarros.length; i++){
    image(imagemCarros[i], xCarros[i], yCarros[i], 50, 40);
  }
}

function movimentaCarro(){
  for (let i = 0; i < imagemCarros.length; i++){
    xCarros[i] -= velCarros[i];
  }
}

function voltaPosicaoInicialCarro(){
  for (let i = 0; i < imagemCarros.length; i++){
  if(passouTodaTela(xCarros[i])){
    xCarros[i] = 600;
    }
  }
}

function passouTodaTela(xCarro){
  return xCarro < -50;
}