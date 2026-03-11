/*
Crie uma variável qualquer, que receba um array com alguns valores aleatórios
- ao menos 5 - (fica por sua conta os valores do array).
*/
var myVar = [1, 'Matheus', '3', 'quatro', null];

/*
Crie uma função que receba um array como parâmetro, e retorne esse array.
*/
function ar(x){
  return x;
}

/*
Imprima o segundo índice do array retornado pela função criada acima.
*/
ar(myVar)[1] // Matheus

/*
Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o
segundo, um número. A função deve retornar o valor de um índice do array que foi passado
no primeiro parâmetro. O índice usado para retornar o valor, deve ser o número passado no
segundo parâmetro.
*/
function mostrarIndice(v1, v2){
  return v1[v2];
}

mostrarIndice(myVar, 3); // quatro

/*
Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
*/
var varArray = ['Um', 2, null, true, undefined]

/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último
array criado.
*/
ar(varArray); //["Um", 2, null, true, undefined]
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
function book(nomeLivro) {
  var biblioteca = {
    PoliticaBrasileira: {
      quantidadePaginas: 30,
      autor: 'Silas Malafaia',
      editora: 'TvSenado'
    },
    ChapeuzinhoVermelho: {
      quantidadePaginas: 15,
      autor: 'Lobo Mau',
      editora: 'Vovozinha'
    },
    Asterix: {
      quantidadePaginas: 20,
      autor: 'Gualês',
      editora: 'Roma Antiga'
    }
  };
  if (!nomeLivro)
    return biblioteca;
  if (!biblioteca[nomeLivro])
    return 'Livro não encontrado';
  return biblioteca[nomeLivro];
}

/*
Usando a função criada acima, imprima o objeto com todos os livros.
*/
book();

/*
Ainda com a função acima, imprima a quantidade de páginas de um livro qualquer,
usando a frase:
"O livro [NOME_DO_LIVRO] tem [X] páginas!"
*/
var objBook = book('Asterix');
`O livro Asterix tem ${objBook.quantidadePaginas} páginas!`;
     

/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando
a frase:
"O autor do livro [NOME_DO_LIVRO] é [AUTOR]."
*/
var objBook = book('Asterix');
`O autor do livro Asterix é ${objBook.autor}!`;

/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando
a frase:
"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
*/
var objBook = book('Asterix');
`O livro Asterix foi publicado pela editora ${objBook.editora}`;
