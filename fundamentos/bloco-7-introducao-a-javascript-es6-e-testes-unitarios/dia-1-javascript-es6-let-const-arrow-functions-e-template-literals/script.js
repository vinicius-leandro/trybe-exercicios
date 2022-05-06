const testingScope = escopo => {
  if (escopo === true) {
    let ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
    ifScope = `${ifScope} ótimo, fui utilizada no escopo !`;
    console.log(ifScope);
  } else {
    let elseScope = 'Não devo ser utilizada fora meu escopo (else)';
    console.log(elseScope);
  }
}

testingScope(false);

const oddsAndEvens = [13, 3, 4, 10, 7, 2];

// const arraySorted = array => `${array[5]},${array[1]},${array[2]},${array[4]},${array[3]},${array[0]}`

const arraySorted = array => array.sort((a, b) => a - b);

console.log(arraySorted(oddsAndEvens));