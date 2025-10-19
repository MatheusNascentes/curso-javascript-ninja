/*
Crie uma variável qualquer, que receba um array com alguns valores aleatórios
- ao menos 5 - (fica por sua conta os valores do array).
*/
var arrayFoda = ['Felipe', 14, true, 2, 'Ninja'];

/*
Crie uma função que receba um array como parâmetro, e retorne esse array.
*/
function funcArray(arr){
    return arr;
};

/*
Imprima o segundo índice do array retornado pela função criada acima.
*/
console.log(funcArray(arrayFoda)[1]);

/*
Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o
segundo, um número. A função deve retornar o valor de um índice do array que foi passado
no primeiro parâmetro. O índice usado para retornar o valor, deve ser o número passado no
segundo parâmetro.
*/
function funcIndice(arr, ind) {
    return arr[ind];
};

/*
Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
*/
var outroArray = [3, true, false, 'nugget', null];

/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último
array criado.
*/
console.log(funcIndice(outroArray, 0));
console.log(funcIndice(outroArray, 1));
console.log(funcIndice(outroArray, 2));
console.log(funcIndice(outroArray, 3));
console.log(funcIndice(outroArray, 4));

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
    
    var obj = {
        'jumanji': {quantidadePaginas: 20, autor: 'Aladin', editora: 'Editora de livros 1s'},
        'comidas': {quantidadePaginas: 60, autor: 'Nugget Denovo', editora: 'Churrasqueiros com canetas'},
        'bebidas': {quantidadePaginas: 170, autor: 'Guarana', editora: 'Livros e mais livros'}
    };
    return !nomeLivro ? obj : obj[nomeLivro]

};

/*
Usando a função criada acima, imprima o objeto com todos os livros.
*/
console.log(book());
console.log(book('jumanji'));
console.log(book('comidas'));
console.log(book('bebidas'));

/*
Ainda com a função acima, imprima a quantidade de páginas de um livro qualquer,
usando a frase:
"O livro [NOME_DO_LIVRO] tem [X] páginas!"
*/
console.log('O livro jumanji tem ' + book('jumanji').quantidadePaginas + ' páginas!')

/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando
a frase:
"O autor do livro [NOME_DO_LIVRO] é [AUTOR]."
*/
console.log('O autor do livro comidas é ' + book('comidas').autor + '.')

/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando
a frase:
"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
*/
console.log('O livro bebidas foi publicado pela editora ' + book('bebidas').editora + '.')
