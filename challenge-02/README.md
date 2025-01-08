# Desafio da semana #2

Nesse exercício, você está livre para escolher os nomes para suas variáveis e funções! :smile:

```js
// Crie uma função que receba dois argumentos e retorne a soma dos mesmos.
function soma(a, b) {
    return a + b;
}
// Declare uma variável que receba a invocação da função criada acima, passando dois números quaisquer por argumento, e somando `5` ao resultado retornado da função.
let resultadoFinal = soma(7, 3) + 5;
console.log(resultadoFinal); // Exibe 15 no console

// Qual o valor atualizado dessa variável?
// Resultado: 15

// Declare uma nova variável, sem valor.
let novaVariavel

/*
Crie uma função que adicione um valor à variável criada acima, e retorne a string:
    O valor da variável agora é VALOR.
Onde VALOR é o novo valor da variável.
*/
function adicionarValor(valor) {
    novaVariavel = valor;
    return `O valor da variável agora é ${novaVariavel}.`;
}
// Invoque a função criada acima.
console.log(adicionarValor(10)); // Exibe: O valor da variável agora é 10.

// Qual o retorno da função? (Use comentários de bloco).
/* A função retorna a string: "O valor da variável agora é 10." */

/*
Crie uma função com as seguintes características:
1. A função deve receber 3 argumentos;
2. Se qualquer um dos três argumentos não estiverem preenchidos, a função deve retornar a string:
    Preencha todos os valores corretamente!
3. O retorno da função deve ser a multiplicação dos 3 argumentos, somando `2` ao resultado da multiplicação.
*/
function multiplicarSomar(a, b, c) {
    if (a === undefined || b === undefined || c === undefined) {
        return "Preencha todos os valores corretamente!";
    }
    return (a * b * c) + 2;
}
// Invoque a função criada acima, passando só dois números como argumento.
console.log(multiplicarSomar(2, 3));

// Qual o resultado da invocação acima? (Use comentários para mostrar o valor retornado).
// O retorno da função é a string: "Preencha todos os valores corretamente!"

// Agora invoque novamente a função criada acima, mas passando todos os três argumentos necessários.
console.log(multiplicarSomar(2, 3, 4)); // Exibe: 26 (2 * 3 * 4) + 2 = 26

// Qual o resultado da invocação acima? (Use comentários para mostrar o valor retornado).
// O retorno da função é o valor 26.

/*
Crie uma função com as seguintes características:
1. A função deve receber 3 argumentos.
2. Se somente um argumento for passado, retorne o valor do argumento.
3. Se dois argumentos forem passados, retorne a soma dos dois argumentos.
4. Se todos os argumentos forem passados, retorne a soma do primeiro com o segundo, e o resultado, dividido pelo terceiro.
5. Se nenhum argumento for passado, retorne o valor booleano `false`.
6. E ainda, se nenhuma das condições acima forem atendidas, retorne `null`.
*/
function processarArgumentos(a, b, c) {
    if (a !== undefined && b === undefined && c === undefined) {
        return a; // Um argumento
    }
    if (a !== undefined && b !== undefined && c === undefined) {
        return a + b; // Dois argumentos
    }
    if (a !== undefined && b !== undefined && c !== undefined) {
        return (a + b) / c; // Três argumentos
    }
    if (a === undefined && b === undefined && c === undefined) {
        return false; // Nenhum argumento passado
    }
    return null; // Caso nenhum dos critérios acima seja atendido
}
// Invoque a função acima utilizando todas as possibilidades (com nenhum argumento, com um, com dois e com três.) Coloque um comentário de linha ao lado da função com o resultado de cada invocação.
console.log(processarArgumentos()); // Exibe: false (nenhum argumento)
console.log(processarArgumentos(5)); // Exibe: 5 (um argumento)
console.log(processarArgumentos(5, 3)); // Exibe: 8 (dois argumentos)
console.log(processarArgumentos(5, 3, 2)); // Exibe: 4 (soma de 5 + 3 = 8 dividido por 2)

```
