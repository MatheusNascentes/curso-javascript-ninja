(function (win, doc) {
    'use strict';
    /*
    A loja de carros será nosso desafio final. Na aula anterior, você fez a parte
    do cadastro dos carros. Agora nós vamos começar a deixar ele com cara de
    projeto mesmo.
    
    Crie um novo repositório na sua conta do GitHub, com o nome do seu projeto.
    
    Na hora de criar, o GitHub te dá a opção de criar o repositório com um
    README. Use essa opção.
    
    Após criar o repositório, clone ele na sua máquina.
    
    Crie uma nova branch chamada `challenge-30`, e copie tudo o que foi feito no
    desafio da aula anterior para esse novo repositório, nessa branch
    `challenge-30`.
    
    Adicione um arquivo na raiz desse novo repositório chamado `.gitignore`.
    O conteúdeo desse arquivo deve ser somente as duas linhas abaixo:
    
    node_modules
    npm-debug.log
    
    Faça as melhorias que você achar que são necessárias no seu código, removendo
    duplicações, deixando-o o mais legível possível, e então suba essa alteração
    para o repositório do seu projeto.
    
    Envie um pull request da branch `challenge-30` para a `master` e cole aqui
    nesse arquivo, dentro do `console.log`, o link para o pull request no seu
    projeto.
    */

    function app() {
        var carros = [];
        var $form = doc.querySelector('[data-js="formulario"]');
        var $tabela = doc.querySelector('[data-js="tabela-carros"]');

        return {
            init: function init() {
                this.companyInfo();
                this.garage();
            },

            companyInfo: async function companyInfo() {
                try {
                    const response = await fetch('./company.json');
                    const dados = await response.json();

                    document.getElementById('empresa').innerText = dados.name;
                    document.getElementById('telefone').innerText = dados.phone;
                } catch (erro) {
                    console.error('Erro: ', erro);
                }
            },

            garage: function garage() {
                $form.addEventListener('submit', this.saveCar.bind(this), false);
            },

            saveCar: function saveCar(e) {
                e.preventDefault();
                carros.push({
                    imagem: $form.imagem.value,
                    marca: $form.marca.value,
                    ano: $form.ano.value,
                    placa: $form.placa.value,
                    cor: $form.cor.value
                });
                this.filledTable();
            },

            filledTable: function filledTable() {
                $tabela.innerHTML = '';
                carros.forEach((e) => {
                    var linha = `<tr>
                    <td>${e.imagem}</td>
                    <td>${e.marca}</td>
                    <td>${e.ano}</td>
                    <td>${e.placa}</td>
                    <td>${e.cor}</td>
                  </tr>`
                    $tabela.innerHTML += linha;
                });
                this.clearData();
            },
            clearData: function clearData() {
                $form.imagem.value = null;
                $form.marca.value = null;
                $form.ano.value = null;
                $form.placa.value = null;
                $form.cor.value = null;
            }
        };
    }

    app().init();

})(window, document);
