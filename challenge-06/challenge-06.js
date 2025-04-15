/*
Vamos falar um pouco sobre "Futebol". Escolha um campeonato estadual qualquer
para começar o desafio.
Declare uma variável chamada `championship` que receberá o nome do campeonato,
e imprima o nome desse campeonato no console.
*/
var championship = 'Campeonato Carioca';
console.log(championship);

/*
Declare uma variável chamada `teams`, que receberá um array com 5 elementos.
Os elementos serão nomes de times do campeonato escolhido, e os nomes devem
estar na ordem em que eles aparecem na tabela no momento da solução desse
desafio.
*/
var teams=['Flamengo','Fluminense','Vasco','Botafogo','Bangu'];

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
function showTeamPosition(a){
  /*var posicao=a;
  switch(posicao){
    case 1:{
      posicao=0;
      break;
    }
      case 2:{
      posicao=1;
      break;
    }
      case 3:{
      posicao=2;
      break;
    }
      case 4:{
      posicao=3;
      break;
    }
      case 5:{
      posicao=4;
      break;
    }
  }*/
  if(posicao<1 || posicao>5 ){
      console.log('Não temos a informação do time que está nessa posição.');
  } 
  console.log('O time que está em '+ a +'º lugar é o '+ teams[a-1] +' .');
   
}
/*
Escolha 4 times do campeonato selecionado e mostre a posição dele, usando a
função acima. Entre esses 4, adicione 1 que não esteja entre os 5 primeiros.
*/
showTeamPosition(1); // O time que está em 1º lugar é o lider tens .
showTeamPosition(2); // O time que está em 2º lugar é o theobroma .
showTeamPosition(3); // O time que está em 3º lugar é o rufus .
showTeamPosition(6); // Não temos a informação do time que está nessa posição.


/*
Mostre os números de 20 a 30 no console (inclusive o 30), usando a estrutura de
repetição "while".
*/
var cont=20;
while(cont<=30){
  console.log (cont++);
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
  switch(cor){
    case  'rosa':{ 
      var hex=' #FFC0CB';
      break;
    }
      
      case  'azul':{ 
        var hex='#0000FF';
        break;
      }
      
      case 'amarelo':{
        var hex='#FFFF00';
        break;
      }
      
      case  'roxo':{
        var hex='#800080';
        break;
      }
      
      case 'verde':{
        var hex='#008000';
        break;
      }
      
    default:{
      return ('Não temos o equivalente hexadecimal para '+ cor +'.');
    }
  }
        return ('O hexadecimal para a cor '+ cor +' é '+ hex +'.');
}

/*
Tente mostrar o hexadecimal de 8 cores diferentes usando a função criada acima.
*/
conolose.log(convertToHex('rosa')); //VM170:5 O hexadecimal para a cor rosa é  #FFC0CB.
console.log(convertToHex('preto')); //VM170:34 Não temos o equivalente hexadecimal para preto.
console.log(convertToHex('verde')); //VM170:29 O hexadecimal para a cor verde é #008000.
console.log(convertToHex('marrom')); //VM170:34 Não temos o equivalente hexadecimal para marrom.
console.log(convertToHex('dourado')); //VM170:34 Não temos o equivalente hexadecimal para dourado.
console.log(convertToHex('amarelo')); //VM170:17 O hexadecimal para a cor amarelo é #FFFF00.
console.log(convertToHex('roxo')); //VM170:23 O hexadecimal para a cor roxo é #800080.
console.log(convertToHex('azul')); //VM170:11 O hexadecimal para a cor azul é #0000FF.
