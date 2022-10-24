
/*
//CREATE , APPEND AND PREPEND
//createElement - Primeiro eu crio o elemento e insiro um texto

const mydiv = document.createElement('div');
mydiv.innerText = 'Eu sou uma div criada pelo js';

const myBody = document.querySelector('body'); //Utilizando o append (adicionar o elemento criado em algum lugar específico).
//myBody.append(mydiv); // //Incluo o elemento criado na tag selecionada,

myBody.prepend(mydiv); // //Incluo o elemento criado na tag selecionada,

//

INSERT
//createElement - Primeiro eu crio o elemento e insiro um texto
const mydiv = document.createElement('div');
mydiv.innerText = 'Eu sou uma div criada pelo js';

const myBody = document.querySelector('body'); //Utilizando o append (adicionar o elemento criado em algum lugar específico).
const myscript = document.querySelector('script');

myBody.insertBefore(mydiv, myscript);



// onmouseover="print()" - inserir no html.
//EVENTOS

//posso passar o atributo direto no html e passar uma função do js.
function print() {
    alert('Cliquei no texto Meu header');
};

 
//EVENTOS NO TECLADO
const myInput = document.querySelector('input');
myInput.onkeyup = function() {
    console.log('rodei');
};


// EVENTOS VIA JS

const myH1 = document.querySelector('h1');
myH1.addEventListener('click', print)

function print() {
    alert('Cliquei no texto Meu header');
};


// EVENTOS VIA JS
const myH1 = document.querySelector('h1');
myH1.onclick = print

function print() {
    alert('Cliquei no texto Meu header');
};


// ARGUMENTO EVENT
const myInput = document.querySelector('input');

myInput.onkeydown = function(event) {
    console.log(event.currentTarget.value) // currentTarget pega a linha de comando target)
}
// value coloca exatamente o valor digitado no input.
*/

