function desenhaQuadrado(x, y, tamanho, cor) {
  pincel.fillStyle = cor
  pincel.fillRect(x, y, tamanho, tamanho)
  pincel.fill()
}

function desenhaCirculo(x, y, raio, cor) {
  pincel.fillStyle = cor
  pincel.beginPath()
  pincel.arc(x, y, raio, 0, 2 * Math.PI)
  pincel.fill()
}

function desenhaPaletaDeCores() {
  desenhaQuadrado(xVermelho, yQuadrados, tamanhoQuadrados, 'red')
  desenhaQuadrado(xVerde, yQuadrados, tamanhoQuadrados, 'green')
  desenhaQuadrado(xAzul, yQuadrados, tamanhoQuadrados, 'blue')
}

function lidaComMovimentoDoMouse(evento) {
  x = evento.pageX - tela.offsetLeft
  y = evento.pageY - tela.offsetTop

  if (
    x >= xVermelho &&
    x <= 3 * tamanhoQuadrados &&
    y >= yQuadrados &&
    y < tamanhoQuadrados
  ) {
    desenha = false
  }
  //não deixa desenhar dentro dos quadrados

  if (desenha) {
    desenhaCirculo(x, y, 5, corAtual)
  }
}

function trocaDecor(evento) {
  x = evento.pageX - tela.offsetLeft
  y = evento.pageY - tela.offsetTop

  let quadradoVermelho = x >= xVermelho && x <= tamanhoQuadrados

  let quadradoVerde = x >= xVerde && x <= xVerde + tamanhoQuadrados

  let quadradoAzul = x >= xAzul && x <= xAzul + tamanhoQuadrados

  if (y >= yQuadrados && y <= tamanhoQuadrados) {
    if (quadradoVermelho) {
      corAtual = 'red'
    } else if (quadradoVerde) {
      corAtual = 'green'
    } else if (quadradoAzul) {
      corAtual = 'blue'
    }
  }
}

function habilitaDesenhar(evento) {
  trocaDecor(evento)
  desenha = true
}

function desabilitaDesenhar() {
  desenha = false
}

var tela = document.querySelector('canvas')
var pincel = tela.getContext('2d')
pincel.fillStyle = 'lightgray'
pincel.fillRect(0, 0, 600, 400)

var x
var y
var desenha = false
var corAtual = 'blue'
var xVermelho = 0
var xVerde = 50
var xAzul = 100
var yQuadrados = 0
var tamanhoQuadrados = 50

desenhaPaletaDeCores() // mostra os quadrados de seleção de cores

tela.onmousemove = lidaComMovimentoDoMouse

tela.onmousedown = habilitaDesenhar
/* tela.onmousedown = trocaDecor */

tela.onmouseup = desabilitaDesenhar
