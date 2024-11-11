function setup(){
  createCanvas(600, 400);
  somDaTrilha.loop();
}

function draw(){
  background(imagemEstrada);
  mostraVaca();
  mostraCarro();
  movimentaCarro();
  movimentaVaca();
  voltaPosicaoInicialCarro();
  verificaColisao();
  incluiPontos();
  marcaPonto();
}

  


