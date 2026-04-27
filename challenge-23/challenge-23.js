(function (win, doc) {
    /*
    Vamos desenvolver mais um projeto. A ideia é fazer uma mini-calculadora.
    As regras são:
    
    - Deve ter somente 1 input, mas não deve ser possível entrar dados nesse input
    diretamente;
    - O input deve iniciar com valor zero;
    - Deve haver 10 botões para os números de 0 a 9. Cada botão deve ser um número;
    - Deve haver 4 botões para as operações principais: soma (+), subtração(-),
    multiplicação(x) e divisão(÷);
    - Deve haver um botão de "igual" (=) que irá calcular os valores e um botão "CE"
    que irá limpar o input, deixando-o com valor 0;
    
    - A cada número pressionado, o input deve atualizar concatenando cada valor
    digitado, como em uma calculadora real;
    - Ao pressionar um botão com uma das 4 operações, deve aparecer o símbolo da
    operação no input. Se o último caractere no input já for um símbolo de alguma
    operação, esse caractere deve ser substituído pelo último pressionado.
    Exemplo:
    - Se o input tem os valores: "1+2+", e for pressionado o botão de
    multiplicação (x), então no input deve aparecer "1+2x".
    - Ao pressionar o botão de igual, o resultado do cálculo deve ser mostrado no
    input;
    - Ao pressionar o botão "CE", o input deve ficar zerado.
    */
    function limparZero() {
        $display.value = '';
    }
    function validarUltimoDigito(operacao, display) {
        var regex = /[+\-*\/]$/;
        if (regex.test(display)) {
            return display.slice(0, -1) + operacao;
        }
        return display + operacao;
    }

    var $zero = doc.querySelector('[data-js="zero"]');
    var $um = doc.querySelector('[data-js="um"]');
    var $dois = doc.querySelector('[data-js="dois"]');
    var $tres = doc.querySelector('[data-js="tres"]');
    var $quatro = doc.querySelector('[data-js="quatro"]');
    var $cinco = doc.querySelector('[data-js="cinco"]');
    var $seis = doc.querySelector('[data-js="seis"]');
    var $sete = doc.querySelector('[data-js="sete"]');
    var $oito = doc.querySelector('[data-js="oito"]');
    var $nove = doc.querySelector('[data-js="nove"]');

    var $display = doc.querySelector('[data-js="display"]');
    var $mais = doc.querySelector('[data-js="mais"]');
    var $menos = doc.querySelector('[data-js="menos"]');
    var $mult = doc.querySelector('[data-js="mult"]');
    var $div = doc.querySelector('[data-js="div"]');
    var $clear = doc.querySelector('[data-js="clear"]');
    var $equals = doc.querySelector('[data-js="equals"]');


    $zero.addEventListener('click', () => {
        if ($display.value === '0')
            limparZero();
        $display.value += 0;
    });

    $um.addEventListener('click', () => {
        if ($display.value === '0')
            limparZero();
        $display.value += 1;
    });

    $dois.addEventListener('click', () => {
        if ($display.value === '0')
            limparZero();
        $display.value += 2;
    });

    $tres.addEventListener('click', () => {
        if ($display.value === '0')
            limparZero();
        $display.value += 3;
    });

    $quatro.addEventListener('click', () => {
        if ($display.value === '0')
            limparZero();
        $display.value += 4;
    });

    $cinco.addEventListener('click', () => {
        if ($display.value === '0')
            limparZero();
        $display.value += 5;
    });

    $seis.addEventListener('click', () => {
        if ($display.value === '0')
            limparZero();
        $display.value += 6;
    });

    $sete.addEventListener('click', () => {
        if ($display.value === '0')
            limparZero();
        $display.value += 7;
    });

    $oito.addEventListener('click', () => {
        if ($display.value === '0')
            limparZero();
        $display.value += 8;
    });

    $nove.addEventListener('click', () => {
        if ($display.value === '0')
            limparZero();
        $display.value += 9;
    });

    $mais.addEventListener('click', () => {
        if ($display.value === '0')
            return;
        $display.value = validarUltimoDigito('+', $display.value);
    });

    $menos.addEventListener('click', () => {
        if ($display.value === '0')
            return;
        $display.value = validarUltimoDigito('-', $display.value);
    });

    $mult.addEventListener('click', () => {
        if ($display.value === '0')
            return;
        $display.value = validarUltimoDigito('*', $display.value);
    });

    $div.addEventListener('click', () => {
        if ($display.value === '0')
            return;
        $display.value = validarUltimoDigito('/', $display.value);
    });

    $clear.addEventListener('click', () => {
        $display.value = '0';
    });

    $equals.addEventListener('click', () => {
        $display.value = Function("return " + $display.value)();
    })

})(window, document);
