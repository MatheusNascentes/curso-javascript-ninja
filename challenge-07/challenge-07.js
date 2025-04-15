/*
Crie um array com 5 items (tipos variados).
*/
var arr=[true, 'valeria', 22, ['valeria', 'Vaz', true], nomeCompleto()];

/*
Crie uma função chamada `addItem`, que irá adicionar itens no array criado.
A função deverá retornar o array atualizado.
*/
function addItem(a){
arr.push(a);
  return arr;
}

/*
Adicione um novo array ao array criado no início do desafio, com ao menos 3
itens de tipos diferentes, mostrando o resultado no console.
*/
addItem(['Theobroma', 16,true]);
/*0 : true
1 : "valeria"
2 : 22
3: (3) ['valeria', 'Vaz', true]
4: ƒ nomeCompleto()
5: (3) ['Theobroma', 16, true]*/

/*
Mostre no console o segundo elemento desse último array, criado acima, com a
frase:
"O segundo elemento do segundo array é [ELEMENTO]."
*/
console.log('O segundo elemento do segundo array é '+ arr[5][1] +'.');
// O segundo elemento do segundo array é 16.

/*
Mostre no console quantos itens tem o primeiro array criado, com a frase:
"O primeiro array tem [QUANTIDADE DE ITENS] itens."
*/
console.log('O primeiro array tem '+ arr.length +' itens.');
// O primeiro array tem 6 itens.



/*
Agora mostre no console quantos itens tem o segundo array criado, com a frase:
"O segundo array tem [QUANTIDADE DE ITENS] itens."
*/
console.log('O primeiro array tem '+ arr[5].length +' itens.');
// O primeiro array tem 3 itens.

/*
Utilizando a estrutura de repetição `while`, mostre no console todos os números
pares entre 10 e 20, inclusive esses 2.
*/
var start=10;
while(start <=20){
  if(start % 2 === 0){
    console.log( 'Números pares entre 10 e 20: '+ start );
  }
  start++;
}
Números ímpares entre 10 e 20: 11
 Números ímpares entre 10 e 20:13
 Números ímpares entre 10 e 20:15
 Números ímpares entre 10 e 20:17
 Números ímpares entre 10 e 20:19

// ?

/*
Na mesma ideia do exercício acima: mostre agora os números ímpares.
*/
var start=10;
while(start <=20){
  if(start % 2 === 1){
    console.log( 'Números ímpares entre 10 e 20:'+ start );
    start++;
  }
}
 /*Números ímpares entre 10 e 20: 11
 Números ímpares entre 10 e 20:13
 Números ímpares entre 10 e 20:15
 Números ímpares entre 10 e 20:17
 Números ímpares entre 10 e 20:19*/
// ?
var start=10;
while(start <20){
  start % 2 !== 0? console.log( 'Números ímpares entre 10 e 20:'+ start ):' ';
/*
Repita os mesmos exercícios feitos acima, mas agora usando o loop "for".
Só vamos mudar o range:
- No primeiro "for", mostre os números pares entre 100 e 120, inclusive eles;
- No segundo "for", mostre os números ímpares entre 111 e 125, inclusive eles.
*/
for(var i=100; i<=120; i++){
  if(i % 2 === 0){
     console.log( 'Números pares entre 100 e 120:'+ i );
  }
}

for(var i=111; i<=125; i++){
  if(i % 2 === 1){
     console.log( 'Números ímpares entre 111 e 125:'+ i );
  }
}
