/*
Crie um array com 5 items (tipos variados).
*/
const meuArray = [
    18,                 // Número
    "Olá, mundo!",      // String
    true,               // Booleano
    { nome: "Ewerton" },   // Objeto
    [1, 2, 3]           // Array
];

console.log(meuArray);
/*
Crie uma função chamada `addItem`, que irá adicionar itens no array criado.
A função deverá retornar o array atualizado.
*/
function addItem(item) {
    meuArray.push(item);
    return meuArray;
}

/*
Adicione um novo array ao array criado no início do desafio, com ao menos 3
itens de tipos diferentes, mostrando o resultado no console.
*/
const novoArray = [false, 13.2, { cidade: "Recife" }];

console.log(addItem(novoArray));

/*
Mostre no console o segundo elemento desse último array, criado acima, com a
frase:
"O segundo elemento do segundo array é [ELEMENTO]."
*/
const segundoElemento = meuArray[meuArray.length - 1][1];

console.log(`O segundo elemento do segundo array é ${segundoElemento}.`);

/*
Mostre no console quantos itens tem o primeiro array criado, com a frase:
"O primeiro array tem [QUANTIDADE DE ITENS] itens."
*/
console.log(`O primeiro array tem ${meuArray.length} itens.`);

/*
Agora mostre no console quantos itens tem o segundo array criado, com a frase:
"O segundo array tem [QUANTIDADE DE ITENS] itens."
*/
console.log(`O segundo array tem ${novoArray.length} itens.`);

/*
Utilizando a estrutura de repetição `while`, mostre no console todos os números
pares entre 10 e 20, inclusive esses 2.
*/
let numeroP = 10;

while (numeroP <= 20) {
  if (numeroP % 2 === 0) {
    console.log(numeroP);
  }
  numeroP++;
}

console.log( 'Números pares entre 10 e 20:' );
/*
Na mesma ideia do exercício acima: mostre agora os números ímpares.
*/
let numeroI = 10;

while (numeroI <= 20) {
  if (numeroI % 2 !== 0) {
    console.log(numeroI);
  }
  numeroI++;
}

console.log( 'Números ímpares entre 10 e 20:' );

/*
Repita os mesmos exercícios feitos acima, mas agora usando o loop "for".
Só vamos mudar o range:
- No primeiro "for", mostre os números pares entre 100 e 120, inclusive eles;
- No segundo "for", mostre os números ímpares entre 111 e 125, inclusive eles.
*/
for (let numeroPar = 100; numeroPar <= 120; numeroPar++) {
    if (numeroPar % 2 === 0) {
      console.log(numeroPar);
    }
  }
  
console.log( 'Números pares entre 100 e 120:' );

for (let numeroInp = 111; numeroInp <= 125; numeroInp++) {
    if (numeroInp % 2 !== 0) {
      console.log(numeroInp);
    }
  }

console.log( 'Números ímpares entre 111 e 125:' );
