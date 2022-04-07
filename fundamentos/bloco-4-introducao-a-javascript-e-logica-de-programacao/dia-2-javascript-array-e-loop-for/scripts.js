let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let maior = null;

for(let cont of numbers) {
    if(cont > maior) {
        maior = cont;
    }
}

console.log(maior);
