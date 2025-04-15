@@ -7,15 +7,29 @@ um único parâmetro como argumento. Essa função deve retornar `true` se o
equivalente booleano para o valor passado no argumento para `true`, ou `false`
para o contrário.
*/
?
var isTruty= função(a){
    retornar !!a;

// Invoque a função criada acima, passando todos os tipos de valores `falsy`.
?
é Verdade(nulo);
éVerdade(" ");
éVerdade(0);
é Verdade(indefinido);
éVerdade(NaN);
éVerdade(-0);
é Verdadeiro(falso);

/*
Invoque a função criada acima passando como parâmetro 10 valores `truthy`.
*/
?
éVerdade(".");
isTruty("Valéria");
éVerdade("1");
éVerdade(1);
isTruty(var minhaVar= função(){});
isTruty ( var objeto = {});
é Verdade(matriz=[1,2,3]);
éVerdadeiro(verdadeiro);

/*
Declare uma variável chamada `carro`, atribuindo a ela um objeto com as
@@ -29,35 +43,54 @@ seguintes propriedades (os valores devem ser do tipo mostrado abaixo):
- `assentos` - Número - cinco por padrão
- `quantidadePessoas` - Número - zero por padrão
*/
?
var carro = {
marca :  " chevrolet " ,
modelo :  " prisma " ,
placa :  " qnb-236 " ,
ano : 2018 ,
cor : " Prata " ,
QuantasPortas: 4,
assentos : 5 ,
quantidadePessoas : 0
}

/*
Crie um método chamado `mudarCor` que mude a cor do carro conforme a cor
passado por parâmetro.
*/
?
carro.mudarCor = function(novaCor){
carro . cor = novaCor;
}

/*
Crie um método chamado `obterCor`, que retorna a cor do carro.
*/
?
caro.obterCor= função(){
  retornar carro.cor;
}

/*
Crie um método chamado `obterModelo` que retorna o modelo do carro.
*/
?
carro . obterModelo = function (){
retornar carro.modelo;
}

/*
Crie um método chamado `obterMarca` que retorna a marca do carro.
*/
?
carro . obterMarca = function (){
retornar carro.marca;
}

/*
Crie um método chamado `obterMarcaModelo`, que retorna:
"Esse carro é um [MARCA] [MODELO]"
Para retornar os valores de marca e modelo, utilize os métodos criados.
*/
?
carro . obterMarcaModelo = function (){
return  " Esse carro é um " +  carro . marca  + "  " +  carro . modelo ;
}

/*
Crie um método para adicionar pessoas no carro. Esse método terá como
@@ -75,7 +108,34 @@ mostrar quantos assentos ainda podem ser ocupados, com a frase:
- Se couber somente mais uma pessoa, mostre a palavra "pessoa" no retorno
citado acima, no lugar de "pessoas".
*/
?

carro . adicionarPessoas =  function ( numeroPessoas ){
    var pluralOuSingular = " pessoas " ;


    if ( carro . quantidadePessoas  + numeroPessoas > carro . assentos ){
     var vagas =  carro . assentos -  carro . quantidadePessoas ;
    se(vagas===1){
     pluralOuSingular = " pessoa " ;
    }
    return "Então cabem mais "+ vagas +" "+ pluralOuSingular +" !";
    }

       carro . quantidadePessoas  += numeroPessoas;


    if ( carro . quantidadePessoas  === carro . assentos ){
     return  " O carro já está lotado! " ;
      }

     if ( carro . quantidadePessoas  === 1 ){
      pluralOuSingular = " pessoa " ;
      }


    return "Já temos " + carro.quantidadePessoas + " " + pluralOuSingular + " no carro!";

}

/*
Agora vamos verificar algumas informações do carro. Para as respostas abaixo,
@@ -85,38 +145,38 @@ retorna algum valor.
Qual a cor atual do carro?
*/
?
carro . obterCor (); // Prata

// Mude a cor do carro para vermelho.
?
carro . mudarCor = " Rosa " ; // Rosa

// E agora, qual a cor do carro?
?
carro . obterCor (); // Rosa

// Mude a cor do carro para verde musgo.
?
carro . mudarCor ( “ Verde Musgo ” );

// E agora, qual a cor do carro?
?
carro . obterCor (); // 'Verde musgo'

// Qual a marca e modelo do carro?
?
carro . obterMarcaModelo (); // 'Esse carro é umchevrolet prisma'

// Adicione 2 pessoas no carro.
?
carro . adicionarPessoas ( 2 ); // 'Já temos 2 pessoas no carro!'

// Adicione mais 4 pessoas no carro.
?
carro.adicionarPessoas(4); //'Então cabem mais 3 pessoas !'

// Faça o carro encher.
?
carro . adicionarPessoas ( 3 ); // 'O carro já está lotado!'

// Pneu 4 pessoas do carro.
?
carro . adicionarPessoas ( - 4 ); // 'Já temos 1 pessoa no carro!'

// Adicione 10 pessoas no carro.
?
carro.adicionarPessoas(10); //'Então cabem mais 4 pessoas !'

// Quantas pessoas não temos carro?
?
carro . quantidadePessoas ; // 1
` ` `
