(function(){
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
  var person = {
    name:"Luan",
    lastname:"Sousa",
    age:24
  };
  console.log( 'Propriedades de "person":' );

  
  /*
  Mostre no console, em um array, todas as propriedades do objeto acima.
  Não use nenhuma estrutura de repetição, nem crie o array manualmente.
  */
  console.log(Object.keys(person));
  
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
  var book1 = { name: "Clean Code", pages: 464 };
  var book2 = { name: "The Pragmatic Programmer", pages: 320 };
  var book3 = { name: "Introduction to Algorithms", pages: 1312 };
  
  books.push(book1);
  books.push(book2);
  books.push(book3);
  
  console.log( '\nLista de livros:' );

  /*
  Mostre no console todos os livros.
  */
  console.log(books);
  
  console.log( '\nLivro que está sendo removido:' );
  /*
  Remova o último livro, e mostre-o no console.
  */
  console.log(books.pop());
  // {name: 'Introduction to Algorithms', pages: 1312}
  
  console.log( '\nAgora sobraram somente os livros:' );
  /*
  Mostre no console os livros restantes.
  */
  console.log(books);
  
  /*
  Converta os objetos que ficaram em `books` para strings.
  */

  console.log( '\nLivros em formato string:' );
  books = JSON.stringify(books);
  /*
  Mostre os livros nesse formato no console:
  */
  console.log(books);
  
  /*
  Converta os livros novamente para objeto.
  */
  books = JSON.parse(books);
  console.log( '\nAgora os livros são objetos novamente:' );
  console.log(books);
  
  /*
  Mostre no console todas as propriedades e valores de todos os livros,
  no formato abaixo:
      "[PROPRIEDADE]: [VALOR]"
  */
  for(var i = 0 ;i< books.length;i++){
    for(var prop in books[i]){
      console.log(prop+":"+books[i][prop])
    }
  };
  
  /*
  Crie um array chamado `myName`. Cada item desse array deve ser uma letra do
  seu nome. Adicione seu nome completo no array.
  */
  var myName= ['l', 'u', 'a', 'n', 'v', 'i', 'c', 't', 'o', 'r', 'p', 'a', 'i', 'x', 'a', 'o', 'd', 'a', 'm', 'o', 't', 'a', 's', 'o', 'u', 's', 'a'];
  console.log( '\nMeu nome é:'+myName );

  /*
  Juntando todos os itens do array, mostre no console seu nome.
  */
  console.log(myName.join(""));
  // luanvictorpaixaodamotasousa

  /*
  Ainda usando o objeto acima, mostre no console seu nome invertido.
  */
  console.log( '\nMeu nome invertido é:'+myName.reverse().join() );
  // Meu nome invertido é:a,s,u,o,s,a,t,o,m,a,d,o,a,x,i,a,p,r,o,t,c,i,v,n,a,u,l
  
  console.log( '\nAgora em ordem alfabética:' );
  /*
  Mostre todos os itens do array acima, odenados alfabéticamente.
  */
  console.log( '\nAgora em ordem alfabética:' + myName.sort());
  // Agora em ordem alfabética:a,a,a,a,a,a,c,d,i,i,l,m,n,o,o,o,o,p,r,s,s,t,t,u,u,v,x
}())
