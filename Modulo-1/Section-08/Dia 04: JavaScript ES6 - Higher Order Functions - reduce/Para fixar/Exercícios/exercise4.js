const students = ['Pedro Henrique', 'Miguel', 'Maria Clara'];
const grades = [[9, 8, 10, 7, 5], [10, 9, 9, 10, 8], [10, 7, 10, 8, 9]];

function studentAverage() {
  return students.map((name, index) => {
    const average = grades[index].reduce((mediaAluno, nota, indice, arr) => (
      parseFloat((mediaAluno + nota / arr.length).toFixed(1))
    ),0)
    return {
      name,
      average
    }
  })
}

console.log(studentAverage())

const expected = [
  { name: 'Pedro Henrique', average: 7.8 },
  { name: 'Miguel', average: 9.2 },
  { name: 'Maria Clara', average: 8.8 },
];