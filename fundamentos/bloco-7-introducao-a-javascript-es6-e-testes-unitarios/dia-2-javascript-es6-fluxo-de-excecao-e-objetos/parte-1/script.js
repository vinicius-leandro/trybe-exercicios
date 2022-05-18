function sum() {
  const value1 = document.getElementById('value1').value;
  const value2 = document.getElementById('value2').value;
  try {
    checkEmptyValues(value1, value2);
    checkIsNan(value1, value2);
    const result = parseInt(value1) + parseInt(value2);
    document.getElementById('result').innerHTML = `Resultado: ${result}`;
  } catch(error) {
    document.getElementById('result').innerHTML = `${error}`; 
  } finally {
    document.getElementById('value1').value = '';
    document.getElementById('value2').value = '';
  }
}

window.onload = () => {
  const button = document.getElementById('button');
  button.addEventListener('click', sum);
}

const checkEmptyValues = (value1, value2) => {
  if (value1 === '' || value2 === '') {
    throw new Error ('Preencha os 2 valores');
  }
};

const checkIsNan = (value1, value2) => {
  if (isNaN(value1) == true || isNaN(value2) == true) {
    throw new Error ('Digite uma entrada numérica');
  }
};