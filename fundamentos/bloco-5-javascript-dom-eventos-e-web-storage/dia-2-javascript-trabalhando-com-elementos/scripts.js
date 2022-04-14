let body = document.getElementsByTagName('body')[0];
let h1 = document.createElement('h1');
h1.innerHTML = 'Exercício 5.2 - JavaScript DOM';
body.appendChild(h1);

let main = document.createElement('main');
main.className = 'main-content'
body.appendChild(main);

let section = document.createElement('section');
section.className = 'center-content';
main.appendChild(section)

let p = document.createElement('p');
section.appendChild(p);