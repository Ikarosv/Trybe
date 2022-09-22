const body = document.body;

const arrayDeInputs = document.getElementById('temasEscolhidos').getElementsByTagName('input');

for (const input of arrayDeInputs) {
  input.addEventListener('change', event => {
    let idDoInput = input.id;
    if (idDoInput === 'bgColor') {
      mudaBgColor(event.target.value);
    } else if (idDoInput === 'corTexto') {
      mudaCorDoTexto(event.target.value);
    } else if (idDoInput === 'fontSize') {
      mudaFontSize(event.target.value);
    }
  });
  
}

function mudaBgColor(cor) {
  body.style.backgroundColor = cor;
  localStorage.setItem('bgColor', cor);
}

function mudaCorDoTexto(cor) {
  body.style.color = cor;
  localStorage.setItem('textColor', cor);
}

function mudaFontSize(tamanho) {
  body.style.fontSize = tamanho + 'px';
  localStorage.setItem('fontSize', tamanho + 'px');
}

window.onload = () => {
  atualizaValores();

  function atualizaValores() {
    if(typeof(Storage) != 'undefined') {
      if(localStorage.bgColor != 'undefined') {
        // Muda a cor de fundo do body quando carrega
        const inputBgColor = document.getElementById('bgColor');

        inputBgColor.value = localStorage.bgColor;

        mudaBgColor(localStorage.bgColor);
      }
      if (localStorage.textColor != 'undefined') {
        // Muda a cor do texto do body ao carregar
        const inputTextColor = document.getElementById('corTexto');

        inputTextColor.value = localStorage.textColor;

        mudaCorDoTexto(localStorage.textColor);
      }
      /* if (localStorage.fontSize != 'undefined') {
        const input
      } */
    } else {
      alert('Navegador sem suporte para webStorage');
    }
  }

};