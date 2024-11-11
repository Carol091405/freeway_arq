// vaca
let yVaca = 366;
let xVaca = 100;
let colisão = false;
let meusPontos = 0;

function mostraVaca(){
  image(imagemVaca, xVaca, yVaca, 30, 30);
}

function movimentaVaca(){
  if (keyIsDown(UP_ARROW)){
    yVaca -= 3;
  }
  if (keyIsDown(DOWN_ARROW)){
    if(podeSeMover()){
    yVaca += 3;
    }
  }
}

function verificaColisao(){
  for (let i = 0; i < imagemCarros.length; i++){
    colisao = collideRectCircle(xCarros[i],yCarros[i],compCarro,alturaCarro,xVaca,yVaca,15);
    if(colisao){
      voltaPosicaoInicial();
      somDaColisao.play();
      if(pontosMaiorQueZero()){
         meusPontos -= 1;
      }
    }
  }
}

function voltaPosicaoInicial(){
  yVaca = 366;
}

function incluiPontos(){
  fill(color(255,240,60));
  textAlign(CENTER);
  textSize(30);
  text(meusPontos, width/5, 27);
}

function marcaPonto(){
  if (yVaca < 15){
      meusPontos += 1;
      somDoPonto.play();
      voltaPosicaoInicial();
    }
}

function pontosMaiorQueZero(){
  return meusPontos > 0;
}

function podeSeMover(){
  return yVaca < 366;
}