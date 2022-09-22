let peca = 'DaMa'.toLowerCase();
let direcao = '';

if (peca == 'rei' || peca == 'king') {
  direcao = 'Pode mover-se em todas as direções.';
} else if (peca == 'rainha' || peca == 'dama' || peca == 'queen') {
  direcao = 'Pode mover-se em qualquer direção (vertical, horizontal e diagonal), porém quantas casas quiser.';
} else if (peca == 'torre' || peca == 'tower') {
  direcao = 'Move-se em linha reta, tanto na vertical quanto na horizontal.';
} else if (peca == 'bispo' || peca == 'bishop') {
  direcao = 'Move-se na diagonal, quantas casas quiser.';
} else if (peca == 'cavalo' || peca == 'horse') {
  direcao = 'Move-se em uma direção de L';
} else if (peca == 'peão' || peca == 'peao' || peca == 'pawn') {
  direcao = 'Move-se sempre para frente, uma casa por vez, podendo em cada primeira jogada de cada peão escolher mover uma ou duas casas.';
} else {
  direcao = 'Algo de errado não está certo';
}

console.log(direcao)