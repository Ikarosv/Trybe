let estadoDaPessoaCandidata = 'lista';

switch (estadoDaPessoaCandidata) {
  case 'aprovada':
    console.log('Parabéns, você foi aprovado(a)!')
    break;
  case 'reprovada':
    console.log('Você foi reprovado(a)')
    break;
  case 'lista':
    console.log('Você está na nossa lista de espera')
    break;
  default:
    console.log('não se aplica')
    break;
}