/*
Crie uma variável qualquer, que receba um array com alguns valores aleatórios
- ao menos 5 - (fica por sua conta os valores do array).
*/
var arr=["valeria", "cursando", "JS NINJA", true];

/*
Crie uma função que receba um array como parâmetro, e retorne esse array.
*/
function myFunction(arg){
  return arg;
}

/*
Imprima o segundo índice do array retornado pela função criada acima.
*/
console.log(myFunction(arr)[1]);
'cursando'

/*
Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o
segundo, um número. A função deve retornar o valor de um índice do array que foi passado
no primeiro parâmetro. O índice usado para retornar o valor, deve ser o número passado no
segundo parâmetro.
*/
function teste(teste1, teste2){
    return teste1[teste2];
}

/*
Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
*/
var recebe = ["Valeria", 22, true, null, undefined];

/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último
array criado.
*/
//myFunction(recebe); // ['Valeria', 22, true, null, undefined]
console.log(teste(teste1,0));
console.log(teste(teste1,1));
console.log(teste(teste1,2));
console.log(teste(teste1,3));
console.log(teste(teste1,4));
/*
Crie uma função chamada `book`, que recebe um parâmetro, que será o nome do
livro. Dentro dessa função, declare uma variável que recebe um objeto com as
seguintes características:
- esse objeto irá receber 3 propriedades, que serão nomes de livros;
- cada uma dessas propriedades será um novo objeto, que terá outras 3
propriedades:
    - `quantidadePaginas` - Number (quantidade de páginas)
    - `autor` - String
    - `editora` - String
- A função deve retornar o objeto referente ao livro passado por parâmetro.
- Se o parâmetro não for passado, a função deve retornar o objeto com todos
os livros.
*/

function book(nomeLivro){
  return livros = {
   "Primo rico":{
    quantidadePaginas: 200,
    autor:" ",
    editora:" "
  },
    "Mente milionaria":{
    quantidadePaginas: 0,
    autor:" ",
    editora:" "
  },
  "Codigo limpo":{
    quantidadePaginas: 0,
    autor:" ",
    editora:" "
    return !nomeLivro? livros : livros.[nomeLivro]
}
  }
}

/*
Usando a função criada acima, imprima o objeto com todos os livros.
*/
console.log(book());
/*{Primo rico: {…}, Mente milionaria: {…}, Codigo limpo: {…}}
Codigo limpo: {quantidadePaginas: 0, autor: ' ', editora: ' '}
Mente milionaria: {quantidadePaginas: 0, autor: ' ', editora: ' '}
Primo rico: {quantidadePaginas: 0, autor: ' ', editora: ' '}[[Prototype]]: Object*/

/*
Ainda com a função acima, imprima a quantidade de páginas de um livro qualquer,
usando a frase:
"O livro [NOME_DO_LIVRO] tem [X] páginas!"
*/
var nome="";
console.log("O livro "+ nome + " tem "+ book(nomeLivro).quantidadePagina + " paginas!");
/*function retornar (nomeLivro){
  var livro= book(nomeLivro);
  if(livro){
    return "O livro "+  nomeLivro+" tem "+ livro.quantidadePaginas +" páginas!";
  } else{
    return "nome invalido"}
*/}

/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando
a frase:
"O autor do livro [NOME_DO_LIVRO] é [AUTOR]."
*/

console.log("O livro "+ nome + " e "+ book(nomeLivro).autor + ".");

/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando
a frase:
"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
*/
console.log(("O livro "+ nome + " foi publicado pela editora " book(nomeLivro).editora + " .");
