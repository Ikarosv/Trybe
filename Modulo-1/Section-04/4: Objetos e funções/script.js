// PRIMEIRA FORMA DE RESOLVER

function numeroQueMaisRepete(arr = [2, 3, 3, 5, 8, 2, 3]) {
  let numerosEIndices = {};
  for (let i = 0; i < arr.length; i += 1) {
    arr[i] in numerosEIndices
      ? numerosEIndices[arr[i]].push(i)
      : (numerosEIndices[arr[i]] = [i]);
  }
  let numero = 0;
  for (const key in numerosEIndices) {
    numero = numero == 0 ? key : numero;
    for (const key2 in numerosEIndices) {
      numero =
        numerosEIndices[numero].length < numerosEIndices[key2].length ? key2 : numero;
    }
  }
  return numero;
}

console.log(numeroQueMaisRepete());

// SEGUNDA FORMA DE RESOLVER

/* function numeroQueMaisRepete(arr = [2, 2, 3, 2, 5, 8, 2, 3]) {
  let numerosEVezes = {}
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] in numerosEVezes) {
      numerosEVezes[arr[i]] += 1
    } else {
      numerosEVezes[arr[i]] = 1;
    }
  }
  let numeroRepetido = 0;
  let vezes = 0
  for (const key in numerosEVezes) {
    if (numeroRepetido == 0 || numerosEVezes[key] > vezes) {
      numeroRepetido = key
      vezes = numerosEVezes[key]
    }
  }

  return numeroRepetido;
} */
