/*
const nome = "JavaScript"
/* const, constante = não pode ser redefinida */ /*

let sobrenome = "Java"
sobrenome = "JavaScript"
*/

/* 

 --- BASICO ---

const nav = document.querySelector("nav");
const produtos = document.querySelector(".produtos a");

console.log(nav);
console.log(produtos);

console.log(produtos.href);

console.dir(nav);

nav.style.backgroundColor = "black";
nav.style.padding = "1rem"

nav.classList.add('ativo');

const text = "JavaScript";
const frase = 'Isso é o "jogo"';

console.log(text + " " + frase);

let total = 0;

const compras = 30;
const imposto = 10;

total = compras + imposto;

console.log(total);

const dobro = total * 2;
console.log(dobro);

const dividir = total / 2;
console.log(dividir);

const desconto = total - 10;
console.log(desconto);

const strings = "20" + "20";
console.log(strings);

const numbers = 20 + 20;
console.log(numbers);

const transformar = Number("20") + 20;
console.log(transformar)

*/

/*
const nome = 'O Senhor dos Anéis';
const ano = 1954;
const autor = 'J. R. R. Tolkien';

const nomeFilme = 'O Senhor dos Anéis';
const anoFilme = 2001;
const diretorFilme = 'Peter Jackson';

//iniciar um objeto
const livro = {
  nome: 'O Senhor dos Anéis',
  ano: 1954,
  autor: 'J. R. R. Tolkien'
}
const filme = {
  nome: 'O Senhor dos Anéis',
  ano: 2001,
  diretor: 'Peter Jackson'
}

console.log(livro);
console.log(2022 - livro.ano);
console.log(livro.nome + " " + filme.diretor);

const texto = document.querySelector('p');

console.log(texto.innerHTML);
console.log(texto.clientHeight);
console.log(autor.length);
console.log(autor.toUpperCase());
console.log(autor.toLowerCase());

const decimal = 122.99;
console.log(decimal.toFixed() + 3);
console.log(Number(decimal.toFixed()) + 3);
console.log(3);

const total = decimal.toFixed().length.toFixed().length;

console.log(total);

*/
/*
function logCurso(nome, horas) {
  console.log(nome, horas, "horas");
  return{
    nomeTeste: nome,
    horasTeste: horas,
  };
}

const retorno = logCurso("JavaScript", "40");
logCurso("HTML", "20");

console.log(retorno);
*/
/*
function livro(nome, ano, autor) {
  const nomeMaiusculo = nome.toUpperCase();
  const totalAnos = 2050 - ano;
  const frase = nome + " por " + autor;
  const objeto = {
    nome: nomeMaiusculo,
    totalAnos,
    frase,
  };
  return objeto;
}

const livroRetorno = livro("O Senhor dos Anéis", 1954, "J. R. R. Tolkien");

console.log(livroRetorno.frase);

forma mais enxuta:

function livro(nome, ano, autor) {
  const objeto = {
    nome: nome.toUpperCase(),
    totalAnos = 2050 - ano,
    frase = nome + " por " + autor,
  };
  return objeto;
}

const livroRetorno = livro("O Senhor dos Anéis", 1954, "J. R. R. Tolkien");

console.log(livroRetorno);

ou:

function livro(nome, ano, autor) {
  return {
    nome: nome.toUpperCase(),
    totalAnos = 2050 - ano,
    frase = nome + " por " + autor,
  };
}

const livroRetorno = livro("O Senhor dos Anéis", 1954, "J. R. R. Tolkien");

console.log(livroRetorno);
*/
/*
const curso = {
  nome: "JavaScript",
  completar() {
    console.log(this.nome);
  },
};

console.log(curso.nome);
curso.completar();
*/
/*
const ativar = document.querySelector(".ativar");

function ativarAoClick(event) {
  console.log(event.timeStamp);
}

ativar.addEventListener('click');

console.log(ativar);
*/
/*
const botao = document.querySelector(".botao");

function mostrar() {
  const texto = document.querySelector('.texyo');
  texto.classList.add("ativar")
}

botao.addEventListener("click", mostrar);
*/
/*
const larguralela = window.innerWidth;

function coordenadaMouse(event) {
  const coordenadas = {
    x: event.x,
    y: event.y,
  };
  console.log(coordenadas);
}

window.addEventListener("mousemove", coordenadaMouse);

function scroll() {
  console.log("Usou o Scroll");
}

window.addEventListener("scroll", scroll);
*/
/*
function seguirMouse(event) {
  const x = event.x;
  const y = event.y;
  const circulo = document.querySelector("#circulo");
  circulo.style.top = y + "px";
  circulo.style.left = x + "px";
}

window.addEventListener("mousemove", seguirMouse);

//resumindo o codigo acima:

const circulo = document.querySelector("#circulo");

function seguirMouse(event) {
  circulo.style.top = event.y + "px";
  circulo.style.left = event.x + "px";
}

window.addEventListener("mousemove", seguirMouse);
*/
/*
const botao = document.querySelector("button");

function somar() {
  const div = document.querySelector("div");
  const total = Number(div.innerText) + 1;
  if (total < 10) {
    div.innerText = total;
  } else {
    console.log("Não é possível adicionar mais");
  }
}

if (botao) {
  botao.addEventListener("click", somar);
}
*/
/*
const lista = ["JavaScript", "HTML", "CSS"];

const body = document.querySelector("body");

for (let index = 0; index < lista.length; index++) {
  console.log(lista[index]);
  body.innerHTML += "<li>" + lista[index] + "</li>";
}

function adicionarBody(item) {
  body.innerHTML += '<li>' + item + '</li>';
}

lista.forEach(adicionarBody);
*/
/*
const links = document.querySelectorAll("nav a");

function logHref(item) {
  const href = item.href;
  console.log(href);
}
*/

const links = document.querySelectorAll("nav a");

function ativarLink(link) {
  const href = link.href;
  const url = document.location.href;
  if (href === url) {
    link.style.backgroundColor = "black";
    link.style.color = "white";
  }
}

links.forEach(ativarLink);
