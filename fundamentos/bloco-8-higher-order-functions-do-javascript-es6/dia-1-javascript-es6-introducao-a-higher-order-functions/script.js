const newPerson = (completedName) => {
  const personEmail = `${completedName}@trybe.com`;
  return {
    name: completedName,
    email: personEmail,
  };
}

const newEmployees = (func1, func2, func3) => {
  const employees = {
    id1: func1, // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
    id2: func2, // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
    id3: func3, // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
  }
  return employees;
};

console.log(newEmployees(newPerson('vinicius'), newPerson('katharine'), newPerson('jorge')));
