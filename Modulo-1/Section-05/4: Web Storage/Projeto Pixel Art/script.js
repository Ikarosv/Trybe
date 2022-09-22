/* jshint esversion: 6 */
const colorPalette = document.getElementById('color-palette');

const randomColorsButton = document.getElementById('button-random-color');
const clearBoardButton = document.getElementById('clear-board');
const changeBoardSizeButton = document.getElementById('generate-board');
const inputChangeSize = document.getElementById('board-size');

const pixelBoard = document.getElementById('pixel-board');
let selectedColor;
const numberOfBlocks = 4;
let numberOfPixels = 25;

// Selecionar

function selectColors(selecionado) {
  const antigoSelecionado = document.querySelector('.selected');
  if (antigoSelecionado) antigoSelecionado.classList.remove('selected');
  selecionado.classList.add('selected');
  selectedColor = selecionado.style.backgroundColor;
}

// Cria bloco de cor dentro da paleta
// Gera um numero aleatório para usar no RGB

function aleatoryNumber(maxValue) {
  return Math.floor(Math.random() * maxValue);
}

function clearPalette(palette) {
  palette.innerHTML = '';
}

function createBlockColor(existeLocalPalette = false, localPaletteColor = '') { // Cria as cores
  const divElement = document.createElement('div');
  divElement.className = 'color';

  let cor;
  if (existeLocalPalette) {
    cor = localPaletteColor;
  } else {
    cor = `rgb(${aleatoryNumber(254)}, ${aleatoryNumber(254)}, ${aleatoryNumber(254)})`;
  }
  divElement.style.backgroundColor = cor;

  divElement.addEventListener('click', (e) => selectColors(e.target));

  return divElement;
}

function fillPalette(quantityOfBlocks, palette) {
  const cores = [];

  for (let index = 1; index <= quantityOfBlocks; index += 1) {
    let block;
    do { // Evita cores repetidas
      block = createBlockColor();
    } while (cores.includes(block.style.backgroundColor));
    if (index === 1) block.style.backgroundColor = 'black';
    cores.push(block.style.backgroundColor);
    palette.appendChild(block);
  }

  localStorage.setItem('colorPalette', JSON.stringify(cores));
}

//  Se tiver cores no localStorage

function fillLocalPalette(palette, localPalette) {
  for (let index = 0; index < localPalette.length; index += 1) {
    const block = createBlockColor(true, localPalette[index]);
    palette.appendChild(block);
  }
}

// Quadro de pixels

function createPixel() {
  const pixel = document.createElement('div');
  pixel.className = 'pixel';
  pixel.addEventListener('click', (e) => {
    // const cor = document.querySelector('.selected').style.backgroundColor;
    e.target.style.backgroundColor = selectedColor;
    const pixelOrder = e.target.style.order;
    if (typeof (localStorage.pixelBoard) !== 'undefined') {
      const objPixelBoard = JSON.parse(localStorage.pixelBoard);
      objPixelBoard[pixelOrder] = selectedColor;
      localStorage.pixelBoard = JSON.stringify(objPixelBoard);
    } else {
      const newItem = {};
      newItem[pixelOrder] = selectedColor;
      localStorage.setItem('pixelBoard', JSON.stringify(newItem));
    }
  });
  return pixel;
}

function savedColors(index, pixel) {
  const funcPixel = pixel;
  const cor = JSON.parse(localStorage.pixelBoard)[index];
  if (typeof cor !== 'undefined') {
    funcPixel.style.backgroundColor = cor;
  }

  return funcPixel;
}

function generateBoard(pixelQuantity, board = pixelBoard) {
  for (let index = 0; index < pixelQuantity; index += 1) {
    let pixel = createPixel();
    pixel.style.order = index;
    if (typeof (localStorage.pixelBoard) !== 'undefined') {
      pixel = savedColors(index, pixel);
    }
    board.appendChild(pixel);
  }
}

// Botão de gerar cores aleatórias

randomColorsButton.addEventListener('click', () => {
  clearPalette(colorPalette);
  fillPalette(numberOfBlocks, colorPalette);
});

// Botão de limpar board

const pixels = pixelBoard.children;
clearBoardButton.addEventListener('click', () => {
  for (let index = 0; index < pixels.length; index += 1) {
    pixels[index].style.backgroundColor = 'white';
    if (localStorage.pixelBoard) {
      localStorage.removeItem('pixelBoard');
    }
  }
});

// muda a quantidade de pixel

function changeColumnBoard(board, valor) {
  let columnValue = valor;
  if (columnValue < 5) {
    columnValue = 5;
  } else if (columnValue > 50) {
    columnValue = 50;
  }
  board.setAttribute('style',
    `grid-template-columns: repeat(${columnValue}, 40px)`);
}

function clearBoard() {
  pixelBoard.innerHTML = '';
}

function changeBoard(board, numOfPixels) {
  clearBoard();
  changeColumnBoard(board, inputChangeSize.value);
  generateBoard(numOfPixels, board);
  const obj = {};
  obj[inputChangeSize.value] = numberOfPixels;
  localStorage.setItem('boardSize', JSON.stringify(obj));
}

changeBoardSizeButton.addEventListener('click', () => {
  const inputValue = inputChangeSize.value;
  if (inputValue === '') {
    alert('Board inválido!');
    return;
  }
  if (inputValue < 1) return;
  numberOfPixels = inputValue * inputValue;
  if (inputValue < 5) {
    inputChangeSize.value = 5;
    numberOfPixels = inputChangeSize.value * inputChangeSize.value;
    changeBoard(pixelBoard, 25);
  } else if (inputValue > 50) {
    changeBoard(pixelBoard, 2500);
  } else {
    changeBoard(pixelBoard, numberOfPixels);
  }
});

window.onload = () => {
  if (typeof (localStorage.colorPalette) !== 'undefined') {
    const localPalette = JSON.parse(localStorage.colorPalette);
    fillLocalPalette(colorPalette, localPalette);
  } else {
    fillPalette(numberOfBlocks, colorPalette);
  }
  const blackBlock = document.querySelector('.color');
  blackBlock.classList.add('selected');
  selectedColor = blackBlock.style.backgroundColor;
  if (localStorage.boardSize) {
    numberOfPixels = JSON.parse(localStorage.boardSize);
    const valor = Object.keys(numberOfPixels)[0];
    changeColumnBoard(pixelBoard, valor);
    numberOfPixels = numberOfPixels[Object.keys(numberOfPixels)[0]];
  }
  generateBoard(numberOfPixels, pixelBoard);
};
