let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let impar = null;

for(let cont of numbers) {
    if(cont % 2 == 1) {
        impar += 1;
    } 
}

if(impar == 0){
    console.log('Nenhm valor impar encontrado');
} else {
    console.log('existem ' + impar + ' numeros ímpares');
}
