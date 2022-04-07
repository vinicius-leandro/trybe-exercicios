let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let sum = null;
let div = null;

for(let cont of numbers) {
    sum = sum + cont;
    div += 1;
}

console.log(sum/div);
