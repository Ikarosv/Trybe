const numbAleatory = (maxNumb = 5000) => Math.floor(Math.random() * maxNumb);

const sendMarsTemperature = temperaturaAtual => {
  setTimeout(() => console.log(`A temperatura de Marte é: ${temperaturaAtual} graus celsius`), numbAleatory());
}

const getMarsTemperature = () => {
  const maxTemperature = 58;
  return numbAleatory(maxTemperature);
}

const toFahrenheit = (degreeCelsius) => (degreeCelsius * (9 / 5)) + 32;

const temperatureInFahrenheit = (temperature) =>
  console.log(`Atualmente está ${toFahrenheit(temperature)}ºF em Marte`);

const greet = (temperature) =>
  console.log(`Olá! Curiosity aqui. Nesse momento está ${temperature}ºC em Marte`);

sendMarsTemperature(getMarsTemperature());