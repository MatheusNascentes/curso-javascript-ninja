/*
Crie uma variável qualquer, que receba um array com alguns valores aleatórios
- ao menos 5 - (fica por sua conta os valores do array).
*/
var myVar = ["Corinthians","Café","Gelo","Doce de leite","Canoa"];

/*
Crie uma função que receba um array como parâmetro, e retorne esse array.
*/
function myFunction(arr){
    return arr;
}

/*
Imprima o segundo índice do array retornado pela função criada acima.
*/
myFunction(myVar)[1] // 'Café'

/*
Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o
segundo, um número. A função deve retornar o valor de um índice do array que foi passado
no primeiro parâmetro. O índice usado para retornar o valor, deve ser o número passado no
segundo parâmetro.
*/
function myFunction2(array,number){
    return array[number]
};

/*
Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
*/
var myVar2 = [1,{prop1:1},"Lucas","Ronalda",[1,3,5,8]];

/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último
array criado.
*/
myFunction2(myVar2,1) 

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

function book(bookName) {
  var myVar = {
    "1984": {
      quantidadePaginas: 416,
      autor: "George Orwell",
      editora: "Companhia das Letras",
    },
    "Torto Arado": {
      quantidadePaginas: 216,
      autor: "Itamar Vieira Junior",
      editora: "Todavia",
    },
    "Orgulho e Preconceito": {
      quantidadePaginas: 278,
      autor: "Jane Austen",
      editora: "Livraria José Olympio Editora",
    },
  };
    
if(myVar[bookName] === undefined){
    return myVar;
}
    return myVar[bookName];
}

/*
Usando a função criada acima, imprima o objeto com todos os livros.
*/
book() // {1984: {…}, Torto Arado: {…}, Orgulho e Preconceito: {…}}

/*
Ainda com a função acima, imprima a quantidade de páginas de um livro qualquer,
usando a frase:
//  O livro 1984 tem 416 páginas!
*/
console.log("O livro 1984 tem "+book("1984").quantidadePaginas+" páginas!")

/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando
a frase:
"O autor do livro 1984 é George Orwell."
*/
console.log("O autor do livro 1984 é "+book("1984").autor+".")

/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando
a frase:
"O livro 1984 foi publicado pela editora Companhia das Letras."
*/
console.log("O livro 1984 foi publicado pela editora "+book("1984").editora+".")
