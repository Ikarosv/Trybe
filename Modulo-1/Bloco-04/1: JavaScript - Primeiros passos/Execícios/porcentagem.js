let porcentagem = 101, nota;

if (porcentagem < 0 || porcentagem > 100) {
  nota = 'Porcentagem errada'
} else if (porcentagem >= 80) {
  nota = 'B'
} else if (porcentagem >= 70) {
  nota = 'C'
} else if (porcentagem >= 60) {
  nota = 'D'
} else if (porcentagem >= 50) {
  nota = 'E'
} else if (porcentagem < 50) {
  nota = 'F'
} else if (porcentagem >= 90) {
  nota = 'A'
}

console.log('A nota foi: ' + nota)