/* 1-
const a = 10;
const b= 5;

console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
console.log(a % b);*/

/* 2-
const n1 = 5;
const n2 = 7;

if(n1 > n2) {
    console.log(n1);
}
else {
    console.log(n2);
}*/

/* 3-
const n1 = 21;
const n2 = 19;
const n3 = 11;

if(n1 > n2 && n1 > n3) {
    console.log(n1);
} else if(n2 > n1 && n2 > n3) {
    console.log(n2);
} else if(n3 > n1 && n3 > n2) {
    console.log(n3);
}*/

/* 4-
const valor = 0;

if(valor > 0) {
    console.log('Positive');
}else if(valor < 0) {
    console.log('Negative');
}else {
    console.log('zero');
}*/

/* 5-
const a1 = 0;
const a2 = 0;
const a3 = 180;

if(a1 < 0 || a2 < 0 || a3 < 0) {
    console.log('Erro, angulo inválido');
} else if(a1 + a2 + a3 == 180) {
    console.log(true);
} else {
    console.log(false);
}*/

/* 6-
let peçaxadrez = 'Torre';

switch(peçaxadrez.toLowerCase()) {
    case 'rei':
        console.log('Todas as direções, somente uma casa por vez');
        break;
    case 'rainha':
        console.log('Todas as direções, até uma casa antes de outra peça');
        break;
    case 'bispo':
        console.log('Diagonal, até uma casa antes de outra peça');
        break;
    case 'cavalo':
        console.log('Em L, duas casas na vertical e uma na horizontal ou vice-versa, pode pular peças');
        break;
    case 'torre':
        console.log('Horizontal ou vertical, até uma casa antes de outra peça');
        break;
    case 'peão':
        console.log('Apenas para frente');
        break;
    default:
        console.log('Peça inválida!');
}*/

/* 7-
let nota = 89;

if(nota >= 90 && nota <=100) {
    console.log('A');
} else if(nota >= 80 && nota <90) {
    console.log('B');
} else if(nota >= 70 && nota <80) {
    console.log('C');
} else if(nota >= 60 && nota <70) {
    console.log('D');
} else if(nota >= 50 && nota <60) {
    console.log('E');
} else if(nota < 50 && nota >= 0) {
    console.log('F');
} else {
    console.log('Nota invalida');
}*/

/* 8-
const n1 = 8;
const n2 = 10;
const n3 = 5;

if(n1 % 2 == 0 || n2 % 2 == 0 || n3 % 2 == 0) {
    console.log(true);
} else {
    console.log(false);
}*/

/* 9-
const n1 = 8;
const n2 = 10;
const n3 = 5;

if(!n1 % 2 == 0 || !n2 % 2 == 0 || !n3 % 2 == 0) {
    console.log(true);
} else {
    console.log(false);
}*/

const vp = 500;
const vv = 1000;
let vi = null;
let vtc = null;
let lucro = null;

if(vp <= 0 || vv <= 0) {
    throw new Error('Erro, valores não podem ser menores que 0');
}

vi = (vp / 100 * 20);

vtc = vp + vi;

lucro = (vv - vtc) * 1000;

console.log(lucro);