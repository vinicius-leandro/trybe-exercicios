let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let sum = null;
let div = null;
let media = null;

for(let cont of numbers) {
    sum = sum + cont;
    div += 1;
}

media = sum / div;

if(media > 20) {
    console.log('Valor maior que 20');
} else {
    console.log('Valor menor ou igual a 20');
}
