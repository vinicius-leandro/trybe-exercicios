window.onload = function() {
    const body = document.getElementsByTagName('body');
    const titulo = document.getElementById('titulo');
    const paragrafo = document.querySelectorAll('.paragrafo');

    if (localStorage.backgroundColor === undefined) {
        localStorage.backgroundColor = 'transparent';
    }

    if (localStorage.color === undefined) {
        localStorage.color = 'not specified';
    }

    if (localStorage.fontSize === undefined) {
        localStorage.fontSize = 'medium';
    }

    if (localStorage.lineHeight === undefined) {
        localStorage.lineHeight = 'normal';
    }

    if (localStorage.fontFamily === undefined) {
        localStorage.fontFamily= 'depends on the browser';
    }
    
    body[0].style.backgroundColor = localStorage.backgroundColor;
    
    titulo.style.fontSize = localStorage.fontSize;
    titulo.style.lineHeight = localStorage.lineHeight;
    titulo.style.fontFamily = localStorage.fontFamily;
    titulo.style.color = localStorage.color;

    for (let index of paragrafo) {
        index.style.color = localStorage.color;
    }
}

alteraBackgroundColorBody('orange');
function alteraBackgroundColorBody (backgroundColor) {
    localStorage.backgroundColor = backgroundColor;
}

alteraColorTitulo('white');
function alteraColorTitulo (color) {
    localStorage.color = color;
}

alteraFontSizeTitulo('10 px');
function alteraFontSizeTitulo (fontSize) {
    localStorage.fontSize = fontSize;
}

alteraLineHeightTitulo('20 px');
function alteraLineHeightTitulo (lineHeight) {
    localStorage.lineHeight = lineHeight;
}

alteraFontFamilyTitulo('Helvetica');
function alteraFontFamilyTitulo (fontFamily) {
    localStorage.fontFamily = fontFamily;
}
