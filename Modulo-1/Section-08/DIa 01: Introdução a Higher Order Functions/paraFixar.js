const awake = () => 'Acordando!!';

const coffe = () => 'Bora tomar café!!';

const sleep = () => 'Partiu dormir!!';

function doingThings(cbk) {
  console.log(cbk());
}

doingThings(awake);
doingThings(coffe);
doingThings(sleep);