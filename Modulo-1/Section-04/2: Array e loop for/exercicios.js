// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
// let valor = 0;

// let message;

// for (let i = 0; i < numbers.length; i++) {
//   if (numbers[i] % 2 !== 0) {
//     valor += 1;
//     message = valor
//   } else {
//     message = 'nenhum valor ímpar encontrado'
//   }
// }

// console.log(message)

// let array = [];

// for (let i = 1; i <= 25; i += 1 ) {
//   array.push(i / 2)
// }

// console.log(array)

// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27]
// let valorMenor;

// for (let i = 0; i < numbers.length; i++) {
//   for (let c = 0; c < numbers.length; c++) {
//     if (numbers[i] > numbers[c]){
//       valorMenor = numbers[c]
//     }
//   }
// }

// console.log(valorMenor)


const n = 100 ;

let resultado = 0;
for (let index = 100; index >= 0; index -= 5) {
  resultado++
};
console.log(resultado);
