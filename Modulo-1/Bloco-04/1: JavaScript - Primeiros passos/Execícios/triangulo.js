const lado1 = 100, lado2 = 40, lado3 = 40;

const soma = lado1 + lado2 + lado3;

let tOrF;

if (lado1 <= 0 || lado2 <= 0 || lado3 <= 0) {
  tOrF = 'ERRO'
} else if (soma == 180) {
  tOrF = true;
} else {
  tOrF = false;
}

console.log(tOrF)