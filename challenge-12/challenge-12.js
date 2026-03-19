/*
Envolva todo o conteúdo desse arquivo em uma IIFE.
*/

/*
Crie um objeto chamado `person`, com as propriedades:
    `name`: String
    `lastname`: String
    `age`: Number
Preencha cada propriedade com os seus dados pessoais, respeitando o tipo
de valor para cada propriedade.
*/

console.log( 'Propriedades de "person":' );

var person = {
  name: 'Matheus',
  lastname: 'Nascentes',
  age: 35,
};

console.log(person);
/*
Mostre no console, em um array, todas as propriedades do objeto acima.
Não use nenhuma estrutura de repetição, nem crie o array manualmente.
*/
console.log(Object.keys(person)); //["name", "lastname", "age"]

/*
Crie um array vazio chamado `books`.
*/
var books = [];

/*
Adicione nesse array 3 objetos, que serão 3 livros. Cada livro deve ter a
seguintes propriedades:
`name`: String
`pages`: Number
*/
books.push({name: 'O problema dos 3 corpos', pages: 280});
books.push({name: 'Floresta sombria', pages: 350});
books.push({name: 'O fim da morte', pages: 450});
console.log( '\nLista de livros:' );
books.forEach(b => {
  console.log(b.name)
});
/*
Mostre no console todos os livros.
*/
/*
O problema dos 3 corpos
Floresta sombria
O fim da morte
*/

console.log( '\nLivro que está sendo removido:' );
/*
Remova o último livro, e mostre-o no console.
*/
var rem = books.pop();
console.log(rem) //{name: "O fim da morte", pages: 450}

console.log( '\nAgora sobraram somente os livros:' );
/*
Mostre no console os livros restantes.
*/
books.foreach((b => {
  console.log(b.name);
});
O problema dos 3 corpos
Floresta sombria

/*
Converta os objetos que ficaram em `books` para strings.
*/
// ?
console.log( '\nLivros em formato string:' );

/*
Mostre os livros nesse formato no console:
*/
var convStr = JSON.stringify(books);
console.log(convStr)

/*
Converta os livros novamente para objeto.
*/
convObj = JSON.parse(convStr)
console.log(convObj)
console.log( '\nAgora os livros são objetos novamente:' );

/*
Mostre no console todas as propriedades e valores de todos os livros,
no formato abaixo:
    "[PROPRIEDADE]: [VALOR]"
*/
// ?

/*
Crie um array chamado `myName`. Cada item desse array deve ser uma letra do
seu nome. Adicione seu nome completo no array.
*/
var nome = ['M', 'a', 't', 'h', 'e', 'u', 's'];
console.log( '\nMeu nome é:' );

/*
Juntando todos os itens do array, mostre no console seu nome.
*/
console.log(nome.join('')); // Matheus

console.log( '\nMeu nome invertido é:' );

/*
Ainda usando o objeto acima, mostre no console seu nome invertido.
*/
console.log(nome.reverse().join('')); //suehtam

console.log( '\nAgora em ordem alfabética:' );
/*
Mostre todos os itens do array acima, odenados alfabéticamente.
*/
console.log(nome.sort()); //["a", "e", "h", "m", "s", "t", "u"]
