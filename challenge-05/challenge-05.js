/*
Crie uma variável qualquer, que receba um array com alguns valores aleatórios
- ao menos 5 - (fica por sua conta os valores do array).
*/
const myArray = [9, "Yuni", null, {a:1}, function(){} ];
/*
Crie uma função que receba um array como parâmetro, e retorne esse array.
*/
function myFuction(array) {
    return array;
}
/*
Imprima o segundo índice do array retornado pela função criada acima.
*/
console.log( myFuction( myArray) [1] );
/*
Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o
segundo, um número. A função deve retornar o valor de um índice do array que foi passado
no primeiro parâmetro. O índice usado para retornar o valor, deve ser o número passado no
segundo parâmetro.
*/
function myFuction2( array, index ) {
    return array[ index ];
}
  
/*
Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
*/
const myArray2 = ["Ninja", 18.9, true, [1, 2, "Manu" ], {b: 2 }];

/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último
array criado.
*/
console.log(myFuction2( myArray2, 0 ) );
console.log(myFuction2( myArray2, 1 ) );
console.log(myFuction2( myArray2, 2 ) );
console.log(myFuction2( myArray2, 3 ) );
console.log(myFuction2( myArray2, 4 ) );
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
function book(nomeDoLivro) {
    // Objeto com as informações dos livros
    const livros = {
        "Harry Potter e a Pedra Filosofal": {
            quantidadePaginas: 208,
            autor: "J. K. Rowling",
            editora: "Rocco"
        },
        "O Pequeno Príncipe": {
            quantidadePaginas: 96,
            autor: "Antoine de Saint-Exupéry",
            editora: "HarperCollins"
        },
        "Dom Casmurro": {
            quantidadePaginas: 256,
            autor: "Machado de Assis",
            editora: "Principis"
        }
    };

    return !nomeDoLivro ? livros : livros[nomeDoLivro];
}
/*
Usando a função criada acima, imprima o objeto com todos os livros.
*/
console.log("Todos os livros cadastrados:", book());

/*
Ainda com a função acima, imprima a quantidade de páginas de um livro qualquer,
usando a frase:
"O livro [NOME_DO_LIVRO] tem [X] páginas!"
*/
console.log(`O livro ${"O Pequeno Príncipe"} tem ${book("O Pequeno Príncipe").quantidadePaginas} páginas!`);

/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando
a frase:
"O autor do livro [NOME_DO_LIVRO] é [AUTOR]."
*/
console.log(`O autor do livro ${"O Pequeno Príncipe"} é ${book("O Pequeno Príncipe").autor}.`);

/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando
a frase:
"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
*/
console.log(`O livro ${"O Pequeno Príncipe"} foi publicado pela editora ${book("O Pequeno Príncipe").editora}.`);
