// Faça uma lista com as suas frutas favoritas
const specialFruit = ['morango', 'kiwi', 'uva'];

// Faça uma lista de complementos que você gostaria de adicionar
const additionalItens = ['maçã', 'banana', 'ameixa'];

const fruitSalad = (fruit, additional) => {
  return [...fruit, ...additional]
};

console.log(fruitSalad(specialFruit, additionalItens));