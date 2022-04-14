/*
Aqui você vai modificar os elementos já existentes utilizando apenas as funções:
- document.getElementById()
- document.getElementsByClassName()
- document.getElementsByTagName()
*/

//  1. Crie uma função que mude o texto na tag <p> para uma descrição de como você se vê daqui a 2 anos. (Não gaste tempo pensando no texto e sim realizando o exercício)
function yearsInFuture (text) {
    document.getElementsByTagName('p')[0].innerHTML = text;
}
//yearsInFuture('ricasso po sem condiçoes');

//  2. Crie uma função que mude a cor do quadrado amarelo para o verde da Trybe (rgb(76,164,109)).
function changeYelloySquare(color) {
    document.getElementsByClassName('main-content')[0].style.backgroundColor = color;
}
//changeYelloySquare('rgb(76,164,109)');

//  3. Crie uma função que mude a cor do quadrado vermelho para branco.
function changeRedSquareIntoWhite() {
    document.getElementsByClassName('center-content')[0].style.backgroundColor = 'white';
}
//changeRedSquareIntoWhite();

//  4. Crie uma função que corrija o texto da tag <h1>.
function correctTheText() {
    document.getElementById('title').innerHTML = 'Exercício 5.1 - JavaScript';
}
//correctTheText();

// 5. Crie uma função que modifique todo o texto da tag <p> para maiúsculo.
function myUpperCase() {
    let maiusculo = document.getElementsByTagName('p');
    for(palavra of maiusculo){ 
    palavra.innerHTML = palavra.innerHTML.toUpperCase();
    }
}
//myUpperCase();

//  6. Crie uma função que exiba o conteúdo de todas as tags <p> no console.
function showTheTag() {
    console.log(document.getElementsByTagName('p'));
}
//showTheTag();