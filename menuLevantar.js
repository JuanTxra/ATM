let btnLevantar = document.getElementById('levantar');
btnLevantar.addEventListener('click', levantar);
function levantar(){
    btnDepositar.removeEventListener('click', depositar);
    // Remover todas as opções anteriores
    btnVouchers.removeEventListener('click', vouchers);
    btnMbWay.removeEventListener('click', mbWay);
    btnConsultas.removeEventListener('click', consultar);
    btnLevantar.removeEventListener('click', levantar);
    // Criar botões novos
    criar(btn1P,'20€', '20L');
    criar(btn3P,'40€', '40L');
    criar(btn4P,'60€', '60L');
    criar(btn6P,'100€', '100L');
    criar(btn7P,'150€', '150L');
    criar(btn9P,'200€', '200L');
    criar(btn00P,'Outros Valores', 'outrosValores');
    criar(btn_P,'Outras Opções', 'voltar');
    // Buscar botões por ID
    let btn1L = document.getElementById('20L');
    let btn3L = document.getElementById('40L');
    let btn4L = document.getElementById('60L');
    let btn6L = document.getElementById('100L');
    let btn7L = document.getElementById('150L');
    let btn9L = document.getElementById('200L');
    // Selecionar os botões de voltar e outros valores
    let btnVoltar = document.getElementById('voltar');
    btnVoltar.removeEventListener('click',voltar);
    let btnValores = document.getElementById('outrosValores')
    btnVoltar.addEventListener('click',voltar);
    btnValores.addEventListener('click', levantarValores);
    // Função que renova tudo para o menu inicial e evento
    function voltar(){
            btn1P.innerHTML = 'Levantamentos';
            btn1P.parentElement.id = 'levantar';
            btn3P.innerHTML = 'MB WAY';
            btn3P.parentElement.id = 'mbWay';
            btn4P.innerHTML = 'Consultas';
            btn4P.parentElement.id = 'consultas';
            btn6P.innerHTML = 'Descontos MB';
            btn6P.parentElement.id = 'descontos';
            btn7P.innerHTML = 'Transferências';
            btn7P.parentElement.id = 'transferencias';
            btn9P.innerHTML = 'Vouchers';
            btn9P.parentElement.id = 'Vouchers';
            btn_P.innerHTML = '';
            btn_P.parentElement.id = 'hidden';
            btn00P.innerHTML = 'Depósitos';
            btn00P.parentElement.id = 'depositos';
            // Remover os botoes de deposito
            btnVoltar.removeEventListener('click',voltar);
            btnValores.removeEventListener('click', levantarValores);
            btnDepositar.removeEventListener('click', levantar);
            btn1L.removeEventListener('click', levanta20);
            btn3L.removeEventListener('click', levanta40);
            btn4L.removeEventListener('click', levanta60);
            btn6L.removeEventListener('click', levanta100);
            btn7L.removeEventListener('click', levanta150);
            btn9L.removeEventListener('click', levanta200);
            // Adicionar de volta todos os menus
            btnConsultas.addEventListener('click', consultar);
            btnMbWay.addEventListener('click', mbWay);
            btnLevantar.addEventListener('click', levantar);
            btnVouchers.addEventListener('click', vouchers);
            btnDepositar.addEventListener('click', depositar);
    }
    btn1L.addEventListener('click', levanta20);
        function levanta20(){;
            if(saldoConta >= 20){    
            saldoConta = parseInt(saldoConta) - parseInt(20);
            saldoP.innerHTML = parseInt(saldoConta);
            } else {
                alert('Não tem saldo suficiente!');
            }
            btn1L.removeEventListener('click', levanta20);
        }
    btn3L.addEventListener('click', levanta40);
        function levanta40(){
            if(saldoConta >= 40){    
                saldoConta = parseInt(saldoConta) - parseInt(40);
                saldoP.innerHTML = parseInt(saldoConta);
                } else {
                    alert('Não tem saldo suficiente!');
                }
            btn3L.removeEventListener('click', levanta40);
        }
    btn4L.addEventListener('click', levanta60);
        function levanta60(){
            if(saldoConta >= 60){    
                saldoConta = parseInt(saldoConta) - parseInt(60);
                saldoP.innerHTML = parseInt(saldoConta);
                } else {
                    alert('Não tem saldo suficiente!');
                }
            btn4L.removeEventListener('click', levanta60);
        }
    btn6L.addEventListener('click', levanta100);
        function levanta100(){
            if(saldoConta >= 100){    
                saldoConta = parseInt(saldoConta) - parseInt(100);
                saldoP.innerHTML = parseInt(saldoConta);
                } else {
                    alert('Não tem saldo suficiente!');
                }
            btn6L.removeEventListener('click', levanta100);
        }     
    btn7L.addEventListener('click', levanta150);
        function levanta150(){
            if(saldoConta >= 150){    
                saldoConta = parseInt(saldoConta) - parseInt(150);
                saldoP.innerHTML = parseInt(saldoConta);
                } else {
                    alert('Não tem saldo suficiente!');
                }
            btn7L.removeEventListener('click', levanta150);
            }
    btn9L.addEventListener('click', levanta200);
        function levanta200(){
            if(saldoConta >= 200){    
                saldoConta = parseInt(saldoConta) - parseInt(200);
                saldoP.innerHTML = parseInt(saldoConta);
                } else {
                    alert('Não tem saldo suficiente!');
                }
            btn9L.removeEventListener('click', levanta200);
        }
    function levantarValores(){
        // Estilo
        // Remover o eventListener anterior do botão voltar
        btnVoltar.removeEventListener('click',voltar);
        btnValores.removeEventListener('click',levantarValores)
        // Criar um h1 com texto personalizado
        let h1 = document.createElement('h1');
        let h1T = document.createTextNode('Indique o valor que pretende levantar');
        h1.appendChild(h1T);
        h1.id = 'textoAviso';
        // Criar um input
        let input = document.createElement('input');
        input.id = 'inputAviso';
        // Colocar o h1 e o input no DOM
        menu.insertBefore(input,menu.firstChild);
        menu.insertBefore(h1,menu.firstChild);
        // Selecionar e remover os primeiros dois elementos
        // Arranjar as bordas
        btn00.id = 'anteriorStyle'
        btn_.id = 'depositarStyle'
        // Esconder o resto
        criar(btn1P,'', 'hidden');
        criar(btn3P,'', 'hidden');
        criar(btn4P,'', 'hidden');
        criar(btn6P,'', 'hidden');
        criar(btn7P,'', 'desaparecer');
        criar(btn9P,'', 'desaparecer');
        // Criar os dois botões do fim
        criar(btn_P,'Outras Opções', 'voltarReverse');
        criar(btn00P,'Levantar', 'levantarReverse');
        // Dar focus ao input
        document.getElementById('inputAviso').focus();
        // Prático
        // Buscar o botao novo do depositar
        let botaoLevantar = document.getElementById('levantarReverse');
        botaoLevantar.addEventListener('click', levantarVoltar);
        botaoLevantar.removeEventListener('click', levantar);
        function levantarVoltar(){
            if(saldoConta >= input.value){
                if(Number.isFinite(parseInt(input.value))){
                    saldoConta = parseInt(saldoConta) - parseInt(input.value);
                    saldoP.innerHTML = parseInt(saldoConta);
                    botaoLevantar.removeEventListener('click', levantarVoltar);
                    document.getElementById('inputAviso').id = 'desaparecer';
                    document.getElementById('textoAviso').id = 'desaparecer';
                    voltar();
                } else {
                    alert('Tem de ser inserido pelo menos um numero');
                    return;
                }
            } else {
                alert('Não tem saldo suficiente');
            }
        }
        // Buscar o botão novo do voltar
        botaoVoltar = document.getElementById('voltarReverse');
        // Criar uma função que volte ao menu anterior
        function retornar(){
            // Remover o input e o texto
            input.remove();
            h1.remove();
            // Remover todas as opções anteriores
            // btnMbWay.removeEventListener('click', mbWay);
            // btnConsultas.removeEventListener('click', consultar);
            // btnLevantar.removeEventListener('click', levantar)
            // Criar botões novos
            criar(btn1P,'20€', '20L');
            criar(btn3P,'40€', '40L');
            criar(btn4P,'60€', '60L');
            criar(btn6P,'100€', '100L');
            criar(btn7P,'150€', '150L');
            criar(btn9P,'200€', '200L');
            criar(btn00P,'Outros Valores', 'outrosValores');
            criar(btn_P,'Outras Opções', 'voltar');
            // // Selecionar os botões de voltar e outros valores
            // let btnVoltar = document.getElementById('voltar');
            let btnValores = document.getElementById('outrosValores');
            let btnVoltar = document.getElementById('voltar');
            btnVoltar.addEventListener('click', voltar);
            // Remover eventListener
            botaoLevantar.removeEventListener('click', levantarVoltar);
            btnValores.addEventListener('click', levantarValores);
        }
        // Associar um eventListener e uma função
        botaoVoltar.addEventListener('click', retornar);
    }
}