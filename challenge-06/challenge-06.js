/*
Vamos falar um pouco sobre "Futebol". Escolha um campeonato estadual qualquer
para começar o desafio.
Declare uma variável chamada `championship` que receberá o nome do campeonato,
e imprima o nome desse campeonato no console.
*/
var championship = 'Campeonato Mineiro';
console.log(championship); // Campeonato Mineiro

/*
Declare uma variável chamada `teams`, que receberá um array com 5 elementos.
Os elementos serão nomes de times do campeonato escolhido, e os nomes devem
estar na ordem em que eles aparecem na tabela no momento da solução desse
desafio.
*/
var teams = ['Cruzeiro', 'Atlético Mineiro', 'América', 'URT', 'Mamoré'];
console.log( 'Times que estão participando do campeonato:', teams );

/*
Crie uma função chamada `showTeamPosition` com as seguintes características:
    - A função deve receber um número por parâmetro;
    - A função deve retornar a frase:
    "O time que está em [POSIÇÃO]º lugar é o [NOME DO TIME].";
    - Onde [POSIÇÃO] é o valor passado por parâmetro e [NOME DO TIME] é o time
    que está nessa posição no array criado acima com os nomes dos times.
    --------------
    Dica: lembre-se que arrays começam no índice zero, então a posição passada
    deve ser sempre um número a mais que o índice do array ;)
    --------------
    - A função só deve retornar a frase acima somente se o time estiver entre
    os 5 primeiros.
    - Se não houver time para a posição passada, deve retornar a mensagem:
    "Não temos a informação do time que está nessa posição."
*/
function showTeamPosition(pos) {
  if (pos < 5)
    return `O time que está na posição ${pos + 1}º lugar é ${teams[pos]}`;
  return 'Não temos a informação do time que está nessa posição'
}

/*
Escolha 4 times do campeonato selecionado e mostre a posição dele, usando a
função acima. Entre esses 4, adicione 1 que não esteja entre os 5 primeiros.
*/
console.log(showTeamPosition(0)); //O time que está na posição 1º lugar é Cruzeiro
console.log(showTeamPosition(1)); //O time que está na posição 2º lugar é Atlético Mineiro
console.log(showTeamPosition(5)); //Não temos a informação do time que está nessa posição
console.log(showTeamPosition(3)); //O time que está na posição 4º lugar é URT

/*
Mostre os números de 20 a 30 no console (inclusive o 30), usando a estrutura de
repetição "while".
*/
var cont = 20;
while(cont <= 30){
  console.log(cont)
  cont++;
}
/*
Crie uma função chamada `convertToHex`, com as seguintes características:
    - A função recebe uma cor por parâmetro, do tipo string. Exemplo: "red";
    - Escolha 5 cores que serão convertidas do nome da cor para o seu
    equivalente hexadecimal (pode ser qualquer tom);
    - Usando a estrutura switch, verifique se a cor passada por parâmetro é
    algum hexa escolhido. Se for, retorne a frase:
    "O hexadecimal para a cor [COR] é [HEXADECIMAL].";
    - Se a cor passada por parâmetro não estiver entre as selecionadas, mostre
    a frase:
    "Não temos o equivalente hexadecimal para [COR]."
*/
function convertToHex(cor){
  var frase = '';
  switch(cor){
    case 'vermelho':
    frase = `O hexadecimal para ${cor} é #FF0000.`;
    break
    case 'azul':
    frase = `O hexadecimal para ${cor} é #0000FF.`;
    break
    case 'verde':
    frase = `O hexadecimal para ${cor} é #008000.`;
    break
    case 'amarelo':
    frase = `O hexadecimal para ${cor} é #FFFF00.`;
    break
    case 'preto':
    frase = `O hexadecimal para ${cor} é #000000.`;
    break
    default:
    frase = `Não temos o equivalente hexadecimal para a cor ${cor}.`
  }
  return frase;
}
/*
Tente mostrar o hexadecimal de 8 cores diferentes usando a função criada acima.
*/
console.log(convertToHex('vermelho')) //O hexadecimal para vermelho é #FF0000.
console.log(convertToHex('azul')) //O hexadecimal para azul é #0000FF.
console.log(convertToHex('verde')) //O hexadecimal para verde é #008000.
console.log(convertToHex('amarelo')) //O hexadecimal para amarelo é #FFFF00.
console.log(convertToHex('preto')) //O hexadecimal para preto é #000000.
console.log(convertToHex('branco')) //Não temos o equivalente hexadecimal para a cor branco.
console.log(convertToHex('cinza')) //Não temos o equivalente hexadecimal para a cor branco.
console.log(convertToHex('marrom')) //Não temos o equivalente hexadecimal para a cor branco.
