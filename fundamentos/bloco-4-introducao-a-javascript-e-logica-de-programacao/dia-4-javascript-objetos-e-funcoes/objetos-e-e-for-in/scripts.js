/*
let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
};

let info2 = {
    personagem: 'Tio Patinhas',
    origem: 'Christmas on Bear Mountain, Dell"s Four Color Comics #178',
    nota: 'O último MacPatinhas'
}

info['recorrente'] = 'Sim';
info2['recorrente'] = 'Sim';

for (let keys in info2) {
    if (info[keys] === info2[keys]) {
        console.log('Ambos ' + keys);
    } else {
        console.log(info[keys] + ' e ' + info2[keys]);
    }
}
*/

let leitor = {
    nome: 'Julia',
    sobrenome: 'Pessoa',
    idade: 21,
    livrosFavoritos: [
      {
        titulo: 'O Pior Dia de Todos',
        autor: 'Daniela Kopsch',
        editora: 'Tordesilhas',
      },
    ],
};

let primeiroLeitor = leitor.livrosFavoritos;

console.log('O livro favorito de ' + leitor.nome + ' ' + leitor.sobrenome + ' se chama ' + primeiroLeitor['0'].titulo);
