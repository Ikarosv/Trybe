const checkNum = (numApostado, numSorteado) => numApostado === numSorteado ? 'Parabéns você ganhou': 'Tente novamente';

function sorteio(numApostado, funcCheck) {
  const numSorteado = Math.ceil(Math.random() * 5);
  return funcCheck(numApostado, numSorteado);
}

console.log(sorteio(4, checkNum));
