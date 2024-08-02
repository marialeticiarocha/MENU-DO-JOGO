// Variáveis
var tela = 1; // 1 = Menu, 2 = Fase do jogo, 3 = Informações, 4 = Créditos
var largura = 150; // Largura dos botões do menu
var altura = 50; // Altura dos botões do menu
var xmenu = 225; // Posição x dos botões do menu
var ymenu1 = 200; // Posição y do botão "JOGAR"
var ymenu2 = 280; // Posição y do botão "INFORMAÇÕES"
var ymenu3 = 360; // Posição y do botão "CRÉDITOS"
var xvoltar = 450; // Posição x do botão "VOLTAR"
var yvoltar = 550; // Posição y do botão "VOLTAR"
var larguravoltar = 100; // Largura do botão "VOLTAR"
var alturavoltar = 30; // Altura do botão "VOLTAR"
var xsom = 20; // Posição x do botão de som
var ysom = 20; // Posição y do botão de som
var largurasom = 100; // Largura do botão de som
var alturasom = 30; // Altura do botão de som
var somLigado = true; // Estado do som

// Imagens e sons
var imagemfundomenu, imagemcreditos, fonte, imagemjogo, som, sommouse;

function preload() {
  // Carregamento dos recursos (imagens e sons)
  imagemfundomenu = loadImage("Tela_Inicial.png");
  imagemcreditos = loadImage("Tela_Credito.png");
  fonte = loadFont("Fuzzy_Bubbles_Regular.ttf");
  imagemjogo = loadImage("Jogo_Desenvolvimento.png");
  soundFormats("mp3");
  som = loadSound("08. Tre's Camp.mp3");
  sommouse = loadSound("mouse-click-sound.mp3");
}

function setup() {
  // Cria o canvas com 600x600 pixels e inicia o som de fundo
  createCanvas(600, 600);
  som.loop();
  som.setVolume(0.5);
}

function draw() {
  background(255); // Fundo padrão branco

  if (tela == 1) {
    // Tela de menu
    background(imagemfundomenu);
    textFont(fonte);
    textSize(50);
    fill(0);
    textAlign(CENTER);
    text("JOGO DA MEMÓRIA", width / 2, 100);

    // Botões do menu
    textSize(16);
    drawButton(xmenu, ymenu1, largura, altura, "JOGAR");
    drawButton(xmenu, ymenu2, largura, altura, "INFORMAÇÕES");
    drawButton(xmenu, ymenu3, largura, altura, "CRÉDITOS");
    drawButton(xsom, ysom, largurasom, alturasom, "SOM");
    
  } else if (tela == 2) {
    // Tela de fase do jogo
    background(imagemjogo);
    drawButton(xvoltar, yvoltar, larguravoltar, alturavoltar, "VOLTAR");
    
  } else if (tela == 3) {
    // Tela de informações
    background(imagemfundomenu);
    textFont(fonte);
    textAlign(CENTER);
    textSize(40);
    fill(0);
    text("INFORMAÇÕES", width / 2, 50);
    textSize(20);
    text("Memorize as imagens e selecione as combinações.", width / 2, 150);
    textSize(20);
    text("Utilize o mouse para jogar. Bom Jogo!!!", width / 2, 170);
    drawButton(xvoltar, yvoltar, larguravoltar, alturavoltar, "VOLTAR");
    
  } else if (tela == 4) {
    // Tela de créditos
    background(imagemcreditos);
    textFont(fonte);
    textAlign(CENTER);
    textSize(40);
    fill(0);
    text("CRÉDITOS", 400, 90);
    textSize(18);
    text("Maria Leticia Rocha De Lima", 400, 200);
    text("Função: Programadora", 400, 220);
    text("Bacharelado em Ciência e Tecnologia", 400, 240);
    text("Docente: Orivaldo Santana", 400, 260);
    drawButton(xvoltar, yvoltar, larguravoltar, alturavoltar, "VOLTAR");
  }
}

// Função para desenhar os botões na tela
function drawButton(x, y, w, h, label) {
  // Realça a borda ao passar o mouse
  if (mouseX > x && mouseX < x + w && mouseY > y && mouseY < y + h) {
    stroke(0); // Borda preta ao passar o mouse
  } else {
    noStroke();
  }
  fill(224, 255, 255);
  rect(x, y, w, h, 15);
  fill(0);
  noStroke();
  textAlign(CENTER, CENTER);
  text(label, x + w / 2, y + h / 2);
}

// Função para gerenciar os cliques do mouse
function mouseClicked() {
  // Controle de som
  // Verifica se o clique do mouse ocorreu dentro das coordenadas do botão de som (na tela do menu)
  if (
    mouseX > xsom && 
    mouseX < xsom + largurasom && 
    mouseY > ysom && 
    mouseY < ysom + alturasom && 
    tela == 1 // Verifica se a tela atual é o menu principal
  ) {
    sommouse.play(); // Toca o som de clique
    somLigado = !somLigado; // Alterna o estado do som entre ligado e desligado
    if (somLigado) {
      som.loop(); // Se o som estiver ligado, começa a tocar em loop
    } else {
      som.stop(); // Se o som estiver desligado, para o som
    }
  }

  // Botão "JOGAR"
  if (
    mouseX > xmenu &&
    mouseX < xmenu + largura &&
    mouseY > ymenu1 &&
    mouseY < ymenu1 + altura &&
    tela == 1
  ) {
    sommouse.play();
    tela = 2;
  }

  // Botão "INFORMAÇÕES"
  if (
    mouseX > xmenu &&
    mouseX < xmenu + largura &&
    mouseY > ymenu2 &&
    mouseY < ymenu2 + altura &&
    tela == 1
  ) {
    sommouse.play();
    tela = 3;
  }

  // Botão "CRÉDITOS"
  if (
    mouseX > xmenu &&
    mouseX < xmenu + largura &&
    mouseY > ymenu3 &&
    mouseY < ymenu3 + altura &&
    tela == 1
  ) {
    sommouse.play();
    tela = 4;
  }

  // Botão "VOLTAR"
  if (
    mouseX > xvoltar &&
    mouseX < xvoltar + larguravoltar &&
    mouseY > yvoltar &&
    mouseY < yvoltar + alturavoltar &&
    (tela == 2 || tela == 3 || tela == 4)
  ) {
    sommouse.play();
    tela = 1;
  }
}
