(function (doc) {
    /*
    Agora vamos criar a funcionalidade de "remover" um carro. Adicione uma nova
    coluna na tabela, com um botão de remover.
    
    Ao clicar nesse botão, a linha da tabela deve ser removida.
    
    Faça um pull request no seu repositório, na branch `challenge-31`, e cole
    o link do pull request no `console.log` abaixo.
    
    Faça um pull request, também com a branch `challenge-31`, mas no repositório
    do curso, para colar o link do pull request do seu repo.
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
                carros.forEach((e, index) => {
                    var linha = `<tr>
                    <td>${e.imagem}</td>
                    <td>${e.marca}</td>
                    <td>${e.ano}</td>
                    <td>${e.placa}</td>
                    <td>${e.cor}</td>
                    <td>
                    <button data-js="deletar" data-index="${index}">Deletar</button>
                    </td>
                  </tr>`
                    $tabela.innerHTML += linha;
                });
                var $botoes = doc.querySelectorAll('[data-js="deletar"]');
                $botoes.forEach((botão) => {
                    botão.addEventListener('click', this.deleteCar.bind(this));
                });

                this.clearData();
            },

            deleteCar: function deleteCar(e) {
                var index = e.target.getAttribute('data-index');
                carros.splice(index, 1);
                this.filledTable();
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

})(document);