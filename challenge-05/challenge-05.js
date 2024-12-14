/*
Crie uma variável qualquer, que receba um array com alguns valores aleatórios
- ao menos 5 - (fica por sua conta os valores do array).
*/
    var arrayCriada = [3, 5, 7, 11, 13];

/*
Crie uma função que receba um array como parâmetro, e retorne esse array.
*/
    function retornarArray(array){
        return array;
    }


/*
Imprima o segundo índice do array retornado pela função criada acima.
*/
    console.log(retornarArray(arrayCriada[2]));

/*
Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o
segundo, um número. A função deve retornar o valor de um índice do array que foi passado
no primeiro parâmetro. O índice usado para retornar o valor, deve ser o número passado no
segundo parâmetro.
*/
    function retornandoParametros(array1, array2){
            return array1[array2];
    }


/*Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
*/
    var arrayValores = [1, "ANGRA", null, true, 5.5];

/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último
array criado.
*/
    console.log(retornandoParametros(arrayValores, 3));

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


    function book(nomeDoLivro){
            var objeto = {
                meditaçõesDeMarcoAurelio : {
                    quantidadePaginas : 230,
                    autor : 'Marco Aurélio',
                    editora : 'Edipro'
                },
                sobreABrevidadeDaVida : {
                    quantidadePaginas : 250,
                    autor : 'Sêneca',
                    editora : 'Edipro'
                },
                manualDeEpicteto : {
                    quantidadePaginas : 270,
                    autor : 'Epicteto',
                    editora : 'Edipro'
                }
            };

        if (nomeDoLivro){
            return objeto[nomeDoLivro];
        } 

        return objeto;

    }

 

/*
Usando a função criada acima, imprima o objeto com todos os livros.
*/
    console.log(book());

/*
Ainda com a função acima, imprima a quantidade de páginas de um livro qualquer,
usando a frase:
"O livro [NOME_DO_LIVRO] tem [X] páginas!"
*/
    var livro = book('meditaçõesDeMarcoAurelio');
    var nomeDoLivro = 'meditaçõesDeMarcoAurelio' ;
    console.log("O livro " + `${nomeDoLivro}` + " tem " `${livro.quantidadePaginas}` + " páginas!");


/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando
a frase:
"O autor do livro [NOME_DO_LIVRO] é [AUTOR]."
*/
    "O autor do livro " + `${nomeDoLivro}` + " é " + `${livro.autor}` + ".";

/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando
a frase:
"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
*/
    "O livro " + `${nomeDoLivro}` + " foi publicado pela editora " + `${livro.editora}` + ".";
