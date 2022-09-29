const names = [
  'Aanemarie', 'Adervandes', 'Akifusa',
  'Abegildo', 'Adicellia', 'Aladonata',
  'Abeladerco', 'Adieidy', 'Alarucha',
];

const expectedResult = 20;

function containsA() {
  return names.reduce((vezes, nome = '') => {
    nome = nome.toLowerCase().replace(/[b-z]/g, '').length;
    return (vezes + nome)
  },0);
}

console.log(/[a-b]/);