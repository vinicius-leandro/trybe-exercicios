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

let secondSection = document.createElement('section');
secondSection.className = 'left-content';
main.appendChild(secondSection);

let thirdSection = document.createElement('section');
thirdSection.className = 'right-content';
main.appendChild(thirdSection);

let img = document.createElement('img');
img.className = 'small-image';
img.src = 'https://picsum.photos/200';
secondSection.appendChild(img);

let liItems = ['um', 'dois', 'tres', 
'quatro', 'cinco', 'seis', 'sete', 
'oito', 'nove', 'dez'];
let ul = document.createElement('ul');
for (index = 1; index < liItems.length; index += 1) {
    let li = document.createElement('li');
    li.innerHTML = liItems[index];
    thirdSection.appendChild(li);
}
