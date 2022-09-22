function createDaysOfTheWeek() {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'];
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  }
}

createDaysOfTheWeek();

// Escreva seu código abaixo.

// Exercicio 1

let decemberDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];


function criaLi(dia, classe) {
  const tagDay = document.createElement('li');
  tagDay.className = classe;
  tagDay.innerText = dia;
  return tagDay;
}

const tagUl = document.querySelector('#days');

for (const day of decemberDaysList) {
  if(day === 4 || day === 11 || day === 18) {
    tagUl.appendChild(criaLi(day,'day friday'));
  } else if (day === 24 || day === 31) {
    tagUl.appendChild(criaLi(day,'day holiday'));
  } else if(day === 25 ){
    tagUl.appendChild(criaLi(day, 'day friday holiday'));
  } else {
    tagUl.appendChild(criaLi(day,'day'));
  }
}

// Exercício 2

function btnFeriados(string, idName) {
  const btn = document.createElement('button');
  btn.id = idName;
  btn.innerText = string;
  return btn;
}

const divHoliday = document.querySelector('.buttons-container');
const buttonHoliday = btnFeriados('Feriados', 'btn-holiday');
divHoliday.appendChild(buttonHoliday);

// Exercício 3

const diasDeFeriado = document.getElementsByClassName('holiday');
let clicado = false
buttonHoliday.addEventListener('click', () => {
  for (const elemento of diasDeFeriado) {
    if(!clicado) {
      elemento.style.backgroundColor = 'white';
    } else {
      
    }
  }
})
