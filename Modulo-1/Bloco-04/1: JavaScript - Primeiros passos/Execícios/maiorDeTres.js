const num1 = 32, num2 = 30, num3 = 22;

let resultado = num1 > num2 && num1 > num3 ? num1 : num2 > num1 && num2 > num3 ? num2 : num3;

console.log(resultado)