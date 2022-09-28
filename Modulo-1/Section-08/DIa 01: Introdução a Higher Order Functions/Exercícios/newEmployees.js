const pessoaContratada = (nomeṔessoa = '') => ({
  nomeCompleto: nomeṔessoa,
  email: `${nomeṔessoa.replace(' ', '_').toLowerCase()}@trybe.com`,
});

const newEmployees = (funcEmail) => {
  const employees = {
    id1: funcEmail('Pedro guerra'), // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
    id2: funcEmail('Luiza Drumond'), // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
    id3: funcEmail('Carla Paiva'), // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
  };
  return employees;
};

console.log(newEmployees(pessoaContratada));
