(function (){
  /*
  Envolva todo o código desse desafio em uma IIFE.
  */
  
  /*
  Crie um array e mostre no console a representação em String desse array,
  usando o método visto na aula 13.
  */
  console.log( 'O array em formato de string é:' );
  var arr = ['a', 'b', 'c', 'd'];
  console.log(arr.toString()); //[a,b,c,d]
  /*
  Crie 2 arrays `sul` e `sudeste`, que serão as regiões do Brasil.
  Cada array deve conter os estados dessa região.
  */
  var sul = ['Paraná', 'Santa Catarina', 'Rio Grande do Sul'];
  var sudeste = ['Minas Gerais', 'São Paulo', 'Rio de Janeiro', 'Espirito Santo'];
  
  /*
  Crie uma variável chamada `brasil`, que irá receber as duas regiões
  concatenadas. Mostre o `brasil` no console.
  */
  console.log( '\nAlguns Estados do Brasil:' );
  var brasil = sul.concat(sudeste)
  console.log(brasil) //['Paraná', 'Santa Catarina', 'Rio Grande do Sul', 'Minas Gerais', 'São Paulo', 'Rio de Janeiro', 'Espirito Santo']
  /*
  Adicione 3 novos estados da região Norte no início do array e mostre no console.
  */
  console.log( '\nMais estados adicionados:' );
  brasil.unshift('Acre', 'Amapá', 'Amazonas');
  
  console.log(brasil); //['Acre', 'Amapá', 'Amazonas', 'Paraná', 'Santa Catarina', 'Rio Grande do Sul', 'Minas Gerais', 'São Paulo', 'Rio de Janeiro', 'Espirito Santo']
  
  /*
  Remova o primeiro estado do array `brasil` e mostre-o no console.
  */
  console.log( '\nEstado removido:' );
  console.log(brasil.shift()); //Acre
  
  /*
  Crie um novo array chamado `newSul`, que receba somente os estados do sul,
  pegando do array `brasil`. Não remova esses itens de `brasil`.
  */
  var newSul = brasil.slice(2,5);
  
  /*
  Mostre no console os estados que estão em `newSul`.
  */
  console.log( '\nEstados do Sul do Brasil:' );
  console.log(newSul); // ["Paraná", "Santa Catarina", "Rio Grande de Sul]
  
  /*
  Mostre no console todos os estados que estão em `brasil`.
  */
  console.log( '\nAlguns Estados do Brasil:' );
  console.log(brasil); // ['Amapá', 'Amazonas', 'Paraná', 'Santa Catarina', 'Rio Grande do Sul', 'Minas Gerais', 'São Paulo', 'Rio de Janeiro', 'Espirito Santo']
  /*
  Crie um novo array chamado `nordeste`, que tenha os estados do nordeste.
  */
  var nordeste = ['Alagoas', 'Bahia', 'Ceará', 'Maranhão', 'Paraíba', 'Pernambuco', 'Piauí', 'Rio Grande do Norte', 'Sergipe'];
  /*
  Mostre no console os estados do nordeste.
  */
  console.log( '\nEstados do Nordeste:' );
  console.log(nordeste); //['Alagoas', 'Bahia', 'Ceará', 'Maranhão', 'Paraíba', 'Pernambuco', 'Piauí', 'Rio Grande do Norte', 'Sergipe']
  /*
  Remova de `brasil` os estados do `sudeste`, colocando-os em uma variável
  chamada `newSudeste`.
  */
  var newSudeste = brasil.splice(5,4);
  
  /*
  Adicione os estados do `nordeste` ao array `brasil`. Esses estados devem
  ficar no mesmo nível que os estados já existentes, não em um array separado.
  */
  brasil = brasil.concat(nordeste);
  
  /*
  Mostre no console os estados em `newSudeste`.
  */
  console.log( '\nEstados em newSudeste:' );
  console.log(newSudeste) //['Minas Gerais', 'São Paulo', 'Rio de Janeiro', 'Espirito Santo']
  /*
  Mostre no console os estados do `brasil`.
  */
  console.log( '\nAlguns estados do Brasil:' );
  console.log(brasil) // ['Amapá', 'Amazonas', 'Paraná', 'Santa Catarina', 'Rio Grande do Sul', 'Alagoas', 'Bahia', 'Ceará', 'Maranhão', 'Paraíba', 'Pernambuco', 'Piauí', 'Rio Grande do Norte', 'Sergipe']
  
  /*
  usando forEach, percorra o array `brasil` e gere um novo array chamado
  `newBrasil`. Esse array deve ter cada item como um objeto, com as
  propriedades:
  - `id`: que será o índice do array `brasil`,
  - `estado`: que será o estado do array `brasil`.
  */
  var newBrasil = [];
  
  brasil.forEach((estado, index) => {
    newBrasil.push({
      id: index,
      estado: estado
    });
  });
  /*
  Mostre o array `newBrasil` no console
  */
  console.log( '\nnewBrasil:' );
  console.log(newBrasil);
  /*[
  {id: 0, estado: "Amapá"}
  {id: 1, estado: "Amazonas"}
  {id: 2, estado: "Paraná"}
  {id: 3, estado: "Santa Catarina"}
  {id: 4, estado: "Rio Grande do Sul"}
  {id: 5, estado: "Alagoas"}
  {id: 6, estado: "Bahia"}
  {id: 7, estado: "Ceará"}
  {id: 8, estado: "Maranhão"}
  {id: 9, estado: "Paraíba"}
  {id: 10, estado: "Pernambuco"}
  {id: 11, estado: "Piauí"}
  {id: 12, estado: "Rio Grande do Nort...}
  {id: 13, estado: "Sergipe"}
  ]
  */
  /*
  Percorra o array `brasil` e verifique se os estados tem mais de 7 letras cada,
  atribuindo o resultado à uma variável. Se tiver, mostre no console a frase:
  - "Sim, todos os estados tem mais de 7 letras!"
  Senão, mostre no console:
  - "Nem todos os estados tem mais de 7 letras!"
  */
  
  brasil.some((estado) => {
    if (estado.length > 7)
      estadosComMaisDe7Letras += estado;
  })
  
  if (brasil.length === estadosComMaisDe7Letras.length)
    console.log('Sim, todos os estados tem mais de 7 letras!');
  console.log('Nem todos os estados tem mais de 7 letras!');
  
  console.log( '\nTodos os estados de `brasil` tem mais de 7 letras?' );
  console.log(estadosComMaisDe7Letras.join(', ')); //['Amazonas', 'Santa Catarina', 'Rio Grande do Sul', 'Maranhão', 'Pernambuco', 'Rio Grande do Norte']
  /*
  Percorra o array `brasil` e verifique se o Ceará está incluído, atribuindo o
  resultado à uma variável. Se esse estado existir no array, mostrar a frase no
  console:
  - "Ceará está incluído!"
  Senão, mostrar a frase:
  - "Ceará não foi incluído :("
  */
  console.log( '\nCeará está incluído em `brasil`?' );
  var temCeara = brasil.some((c) => c === 'Ceará');
  
  console.log(temCeara ? 'Ceará está incluído!' : 'Ceará não foi incluído :('); // Ceará está incluído!
  /*
  Percorra o array `newBrasil` e crie um novo array que some 1 no ID de cada
  objeto desse array, e adicione a frase abaixo na propriedade `estado`:
  - "[ESTADO] pertence ao Brasil."
  Atribua o novo array a uma variável chamada `map`.
  */
  var map = [];
  newBrasil.map((item, index) => {
    map.push({
      index: index + 1,
      estado: item.estado + ' pertence ao brasil'
    });
  });
  
  /*
  Mostre no console o array criado acima:
  */
  console.log( '\nnewBrasil agora com mais informações:' );
  console.log(map);
  /*
  {index: 1, estado: "Amapá pertence ao Brasil},
  {index: 2, estado: "Amazonas pertence ao Brasil},
  {index: 3, estado: "Paraná pertence ao Brasil},
  {index: 4, estado: "Santa Catarina pertence ao Brasil},
  {index: 5, estado: "Rio Grande do Sul pertence ao Brasil},
  {index: 6, estado: "Alagoas pertence ao Brasil},
  {index: 7, estado: "Bahia pertence ao Brasil},
  {index: 8, estado: "Ceará pertence ao Brasil},
  {index: 9, estado: "Maranhão pertence ao Brasil},
  {index: 10, estado: "Paraíba pertence ao Brasil},
  {index: 11, estado: "Pernambuco pertence ao Brasil},
  {index: 12, estado: "Piauí pertence ao Brasil},
  {index: 13, estado: "Rio Grande do Norte pertence ao Brasil},
  {index: 14, estado: "Sergipe pertence ao Brasil}
  */
  
  /*
  Filtre o array criado acima, retornando somente os estados que tiverem
  ID par. Atribua o valor à uma variável chamada `filter`.
  */
  var filter = map.filter((item) =>  item.index % 2 === 0);
  
  /*
  Mostre o array filtrado acima no console.
  */
  console.log( '\nEstados com ID par:' );
  console.log(filter);
  /*
  {index: 2, estado: "Amazonas pertence ao Brasil},
  {index: 4, estado: "Santa Catarina pertence ao Brasil},
  {index: 6, estado: "Alagoas pertence ao Brasil},
  {index: 8, estado: "Ceará pertence ao Brasil},
  {index: 10, estado: "Paraíba pertence ao Brasil},
  {index: 12, estado: "Piauí pertence ao Brasil},
  {index: 14, estado: "Sergipe pertence ao Brasil}
  */

 })();
