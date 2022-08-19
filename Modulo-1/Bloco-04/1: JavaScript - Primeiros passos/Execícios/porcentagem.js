let porcentagem = 49, nota;

if (porcentagem >= 90) {
  nota = 'A'
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
}

console.log('A nota foi: ' + nota)