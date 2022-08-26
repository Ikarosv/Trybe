// 1 -

/* let valor = 10;
let string = '';
let result = 1;
for (let number = valor; number > 0; number -= 1) {
  result *= number
  string += number + ' '
}

console.log(`${valor}! = ${string} = ${result}`) */

// 2 -
/* 
let word = 'tryber';
let palavraFinal = '';

for (let indice = word.length - 1; indice >= 0; indice -= 1) {
  palavraFinal += word[indice]
}

console.log(palavraFinal)
 */

// 3 -

let array = ['java', 'b', 'javascript', 'python', 'html', 'css'];
let maiorPalavra = '', menorPalavra = '';

for (let index = 0; index < array.length; index++) {
  if (array[index].length > maiorPalavra.length) maiorPalavra = array[index]

  if (menorPalavra == '') {
    menorPalavra = array[index]
  }
  if (array[index].length < menorPalavra.length) menorPalavra = array[index]
}

console.log(maiorPalavra + " " + menorPalavra)