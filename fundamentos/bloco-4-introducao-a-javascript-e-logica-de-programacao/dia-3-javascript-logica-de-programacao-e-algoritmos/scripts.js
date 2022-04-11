/* 1 -
let fat = 10;
let mult = 1;

for (let index = 1; index <= fat; index += 1) {
    mult = mult * index;
}

console.log(mult); */


/* 2 -
let word = 'tryber';


for(let i = word.length - 1; i >= 0; i -= 1){
    console.log(word[i]);
} */


/* 3 -
let array = ['java', 'javascript', 'python', 'html', 'css'];
let cont = '';
let maior = '';
let menor = '...................................................................';

for(word of array) {
    for(letter of word){
        cont += letter;
    }
    if(cont.length > maior.length) {
        maior = cont;
    }
    if(cont.length < menor.length) {
        menor = cont;
    }
    cont = '';
}

console.log(maior);
console.log(menor);*/

/* 4 -
let cont = null;
let maiorprim = null;

for(let index = 0; index <= 50; index += 1){
    for(segundoIndex = 0; segundoIndex <= index; segundoIndex += 1) {
        if(index % segundoIndex == 0) {
            cont += 1;
        }
    }
    if(cont == 2){
        maiorprim = index;
    }
    cont = null;
}

console.log(maiorprim);*/
