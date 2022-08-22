// 1 - 

// let soma = 0
// for (let i = 0; i <= 50; i += 1) {
//   soma += i
// }

// console.log('A soma total de 1 a 50 é: ' + soma)

//  2 -

// let numbers = 0;
// for (let i = 2; i <= 150; i++) {
//   numbers += i % 3 == 0 ? 1 : 0
// }

// console.log(numbers >= 50 ? 'Mensagem secreta' : numbers)

// 3 -

let choises = ['pedra', 'papel', 'tesoura']

let player1 = choises[1]
let player2 = choises[1]

if (player1 == choises[0] && player2 == choises[2] || player1 == choises[1] && player2 == choises[0] || player1 == choises[3] && player2 == choises[1]) {
  console.log('PLAYER 1 GANHOU')
} else if (player2 == choises[0] && player1 == choises[2] || player2 == choises[1] && player1 == choises[0] || player2 == choises[3] && player1 == choises[1]) {
  console.log('PLAYER 2 GANHOU')
} else {
  console.log('A TIES')
}