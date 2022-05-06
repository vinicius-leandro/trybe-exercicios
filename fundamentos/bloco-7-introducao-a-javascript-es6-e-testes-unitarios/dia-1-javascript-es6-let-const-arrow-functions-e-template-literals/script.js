const testingScope = (escopo) => {
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

// const arraySorted = (array) => `${array[5]},${array[1]},${array[2]},${array[4]},${array[3]},${array[0]}`

const arraySorted = (array) => array.sort((a, b) => a - b);

console.log(arraySorted(oddsAndEvens));

// parte 2

let skills = ['HTML', 'CSS', 'JavaScript', 'Git', 'Github'];

const alteraString = (palavraEscolhida) => {
  let frase = 'Eu sou o mais x !';
  let fraseSeparada = frase.split(' ');
  let novaFrase = '';
  for (let index = 0; index < fraseSeparada.length; index += 1) {
    if (fraseSeparada[index] === 'x') {
      fraseSeparada.splice(index, 1);
      fraseSeparada.splice(index, 0, palavraEscolhida);
    }
  }
  for (palavras of fraseSeparada) {
    novaFrase += `${palavras} `;
  }
  return novaFrase;
}

console.log(alteraString('Bebeto'));

const skillsString = (string) => {
  const sortedSkills = skills.sort();
  const separatedString = string.split(' ');
  const newString = separatedString.concat(sortedSkills);
  let novaFrase = '';
  for (palavras of newString) {
    novaFrase += `${palavras} `;
  }
  console.log(novaFrase);
}

skillsString(alteraString('Bebeto'));