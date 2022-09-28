const pontuacoes = (arrCorretas, arrRespEstudante) => {
  let pontucaoFinal = 0;
  for (let index = 0; index < arrCorretas.length; index += 1) {
    if (arrRespEstudante[index] !== 'N.A' && arrRespEstudante[index] !== 'N.A'){
      if (arrCorretas[index] === arrRespEstudante[index]){
        pontucaoFinal += 1;
      } else if (arrRespEstudante[index] !== arrCorretas[index]){
        pontucaoFinal -= 0.5;
      }
    }
  }
  return pontucaoFinal;
};

function nota(arrCorretas, arrRespEstudante, funcPontua) {
  return funcPontua(arrCorretas, arrRespEstudante);
}

let RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
let STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

RIGHT_ANSWERS = ['A', 'B', 'C', 'B']
STUDENT_ANSWERS = ['A', 'B', 'A', 'N.A']

console.log(nota(RIGHT_ANSWERS, STUDENT_ANSWERS, pontuacoes));